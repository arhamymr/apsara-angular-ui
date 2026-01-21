#!/bin/bash

# Variables
# Allow overrides via environment or arguments: deploy-nginx.sh [host] [user] [port]
VPS_HOST=${1:-${VPS_HOST:-43.157.230.80}}
VPS_USER=${2:-${VPS_USER:-ubuntu}}
VPS_PORT=${3:-${VPS_PORT:-22}}
SITE_NAME=${SITE_NAME:-aether-ui}

echo "🚀 Deploying nginx configuration to VPS..."

# Upload nginx config
echo "📤 Uploading nginx-vps.conf..."
scp -P "$VPS_PORT" nginx/nginx-vps.conf "$VPS_USER@$VPS_HOST:/tmp/nginx-vps.conf"

# SSH to VPS and apply configuration
echo "🔧 Applying configuration on VPS..."
ssh -p "$VPS_PORT" "$VPS_USER@$VPS_HOST" << 'EOF'
    # Backup existing config if exists
    if [ -f /etc/nginx/sites-available/aether-ui ]; then
        sudo mv /etc/nginx/sites-available/aether-ui /etc/nginx/sites-available/aether-ui.backup
        echo "✅ Backed up existing configuration"
    fi

    # Move new config
    sudo mv /tmp/nginx-vps.conf /etc/nginx/sites-available/aether-ui
    echo "✅ Installed new configuration"

    # Ensure symlink in sites-enabled
    if [ ! -L /etc/nginx/sites-enabled/aether-ui ]; then
        sudo ln -sf /etc/nginx/sites-available/aether-ui /etc/nginx/sites-enabled/aether-ui
        echo "✅ Linked sites-enabled/aether-ui"
    fi

    # Test nginx config
    if sudo nginx -t; then
        echo "✅ Configuration test passed"
        # Prefer systemctl if available, else reload via nginx
        if command -v systemctl >/dev/null 2>&1; then
          sudo systemctl reload nginx
        else
          sudo nginx -s reload
        fi
        echo "✅ Nginx reloaded successfully"
    else
        echo "❌ Configuration test failed"
        exit 1
    fi

    # Warn if port 80 is owned by a docker-proxy (potential conflict)
    if sudo ss -ltnp 2>/dev/null | grep -q ":80 "; then
      echo "ℹ️  Port 80 is in use. Ensure no container binds host :80 if Nginx should own it."
    fi
EOF

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📝 Access URLs:"
echo "   - http://aether.yourdomain.com"
echo "   - http://devkit.yourdomain.com"
echo ""
echo "💡 Tip: Run with overrides: ./nginx/deploy-nginx.sh <host> <user> <port>"
