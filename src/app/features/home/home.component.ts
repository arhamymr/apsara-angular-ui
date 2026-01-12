import { Component, signal, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../shared/ui/card/card.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';

interface Ad {
  id: number;
  title: string;
  description: string;
  price: string;
  location: string;
  image: string;
  category: string;
  postedDate: string;
  isFeatured: boolean;
}

interface Category {
  name: string;
  icon: string;
  count: number;
  color: string;
}

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    CardComponent,
    ButtonComponent
  ],
  template: `
    <div class="home-page">
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">Find Your Perfect Deal</h1>
          <p class="hero-subtitle">Discover thousands of classified ads from trusted sellers</p>
          
          <div class="search-container">
            <div class="search-box">
              <mat-icon class="search-icon">search</mat-icon>
              <input 
                type="text" 
                class="search-input" 
                placeholder="Search for items, services, or jobs..."
                [(ngModel)]="searchQuery"
                (keyup.enter)="search()"
                aria-label="Search ads">
              <button 
                app-button 
                variant="filled" 
                color="primary" 
                label="Search"
                (clicked)="search()">
              </button>
            </div>
            
            <div class="quick-filters">
              <button 
                class="filter-chip"
                [class.active]="selectedCategory() === 'all'"
                (click)="selectCategory('all')">
                All
              </button>
              @for (category of categories(); track category.name) {
                <button 
                  class="filter-chip"
                  [class.active]="selectedCategory() === category.name"
                  (click)="selectCategory(category.name)">
                  {{ category.name }}
                </button>
              }
            </div>
          </div>
        </div>
        
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">{{ ads().length }}</span>
            <span class="stat-label">Active Listings</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">12K+</span>
            <span class="stat-label">Happy Users</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">50+</span>
            <span class="stat-label">Categories</span>
          </div>
        </div>
      </section>

      <section class="categories-section">
        <div class="section-header">
          <h2 class="section-title">Browse Categories</h2>
          <a routerLink="/categories" class="view-all-link">
            View All <mat-icon>arrow_forward</mat-icon>
          </a>
        </div>
        
        <div class="categories-grid">
          @for (category of categories(); track category.name) {
            <div 
              class="category-card"
              [style.--category-color]="category.color"
              (click)="browseCategory(category.name)">
              <div class="category-icon-wrapper">
                <mat-icon>{{ category.icon }}</mat-icon>
              </div>
              <span class="category-name">{{ category.name }}</span>
              <span class="category-count">{{ category.count }} listings</span>
            </div>
          }
        </div>
      </section>

      <section class="featured-section">
        <div class="section-header">
          <h2 class="section-title">Featured Listings</h2>
          <div class="section-actions">
            <button 
              app-button 
              variant="text" 
              color="primary" 
              label="View All"
              iconRight="arrow_forward"
              (clicked)="viewAllFeatured()">
            </button>
          </div>
        </div>
        
        <div class="featured-grid">
          @for (ad of featuredAds(); track ad.id) {
            <app-card
              variant="elevated"
              [interactive]="true"
              [imageSrc]="ad.image"
              [imageSize]="'medium'"
              [imageAlt]="ad.title"
              [header]="ad.category"
              [subheader]="ad.location"
              [title]="ad.title"
              [subtitle]="ad.postedDate"
              [tags]="[{ label: 'Featured', variant: 'warn' }]"
              (actionClick)="handleAdAction(ad, $event)">
              <p class="ad-description">{{ ad.description }}</p>
              <div class="ad-price" slot="[card-actions]">{{ ad.price }}</div>
            </app-card>
          }
        </div>
      </section>

      <section class="recent-section">
        <div class="section-header">
          <h2 class="section-title">Recent Listings</h2>
          <div class="section-actions">
            <button 
              app-button 
              variant="text" 
              color="primary" 
              label="View All"
              iconRight="arrow_forward"
              (clicked)="viewAllRecent()">
            </button>
          </div>
        </div>
        
        <div class="recent-grid">
          @for (ad of recentAds(); track ad.id) {
            <app-card
              variant="outlined"
              [interactive]="true"
              [imageSrc]="ad.image"
              [imageSize]="'small'"
              [imageAlt]="ad.title"
              [header]="ad.category"
              [title]="ad.title"
              [subtitle]="ad.location"
              (actionClick)="handleAdAction(ad, $event)">
              <p class="ad-description">{{ ad.description }}</p>
              <div class="ad-price" slot="[card-actions]">{{ ad.price }}</div>
            </app-card>
          }
        </div>
      </section>

      <section class="cta-section">
        <div class="cta-card">
          <div class="cta-content">
            <h2 class="cta-title">Ready to Sell or Buy?</h2>
            <p class="cta-text">Join thousands of users already trading on Petaloker. It's free and easy to get started.</p>
            <div class="cta-buttons">
              <button 
                app-button 
                variant="filled" 
                color="primary" 
                label="Post an Ad"
                size="large"
                icon="add"
                (clicked)="postAd()">
              </button>
              <button 
                app-button 
                variant="outlined" 
                color="neutral" 
                label="Learn More"
                size="large"
                (clicked)="learnMore()">
              </button>
            </div>
          </div>
          <div class="cta-illustration">
            <mat-icon>local_offer</mat-icon>
          </div>
        </div>
      </section>

      <section class="how-it-works-section">
        <h2 class="section-title centered">How It Works</h2>
        <div class="steps-grid">
          <div class="step-item">
            <div class="step-icon">
              <mat-icon>create</mat-icon>
            </div>
            <h3 class="step-title">1. Post Your Ad</h3>
            <p class="step-text">Create a listing in minutes with our easy-to-use form</p>
          </div>
          <div class="step-connector">
            <mat-icon>arrow_forward</mat-icon>
          </div>
          <div class="step-item">
            <div class="step-icon">
              <mat-icon>visibility</mat-icon>
            </div>
            <h3 class="step-title">2. Get Views</h3>
            <p class="step-text">Reach thousands of potential buyers in your area</p>
          </div>
          <div class="step-connector">
            <mat-icon>arrow_forward</mat-icon>
          </div>
          <div class="step-item">
            <div class="step-icon">
              <mat-icon>verified_user</mat-icon>
            </div>
            <h3 class="step-title">3. Close the Deal</h3>
            <p class="step-text">Connect safely and complete your transaction</p>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home-page {
      min-height: 100vh;
    }

    .hero-section {
      background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
      padding: 80px 24px;
      text-align: center;
      color: white;
    }

    .hero-content {
      max-width: 800px;
      margin: 0 auto 48px;
    }

    .hero-title {
      font-size: 48px;
      font-weight: 700;
      margin: 0 0 16px;
      line-height: 1.2;
    }

    .hero-subtitle {
      font-size: 20px;
      opacity: 0.9;
      margin: 0 0 40px;
    }

    .search-container {
      max-width: 700px;
      margin: 0 auto;
    }

    .search-box {
      display: flex;
      align-items: center;
      background: white;
      border-radius: 12px;
      padding: 8px 8px 8px 20px;
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
    }

    .search-icon {
      color: #757575;
      margin-right: 12px;
    }

    .search-input {
      flex: 1;
      border: none;
      outline: none;
      font-size: 16px;
      padding: 12px 0;
      background: transparent;
    }

    .quick-filters {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-top: 20px;
      flex-wrap: wrap;
    }

    .filter-chip {
      background: rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: white;
      padding: 8px 20px;
      border-radius: 24px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.2s ease;
    }

    .filter-chip:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    .filter-chip.active {
      background: white;
      color: #1976d2;
      border-color: white;
    }

    .hero-stats {
      display: flex;
      justify-content: center;
      gap: 64px;
    }

    .stat-item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .stat-number {
      font-size: 36px;
      font-weight: 700;
    }

    .stat-label {
      font-size: 14px;
      opacity: 0.9;
    }

    section {
      padding: 64px 24px;
      max-width: 1400px;
      margin: 0 auto;
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 32px;
    }

    .section-title {
      font-size: 28px;
      font-weight: 600;
      color: #1c1b1f;
      margin: 0;

      &.centered {
        text-align: center;
        margin-bottom: 48px;
      }
    }

    .view-all-link {
      display: flex;
      align-items: center;
      gap: 4px;
      color: #1976d2;
      text-decoration: none;
      font-weight: 500;
    }

    .section-actions {
      display: flex;
      gap: 8px;
    }

    .categories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 20px;
    }

    .category-card {
      background: white;
      border-radius: 16px;
      padding: 24px;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
      border: 1px solid #e0e0e0;
    }

    .category-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
      border-color: var(--category-color);
    }

    .category-icon-wrapper {
      width: 56px;
      height: 56px;
      border-radius: 12px;
      background: var(--category-color, rgba(25, 118, 210, 0.1));
      color: var(--category-color, #1976d2);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 16px;
    }

    .category-icon-wrapper mat-icon {
      font-size: 28px;
      width: 28px;
      height: 28px;
    }

    .category-name {
      display: block;
      font-weight: 600;
      color: #1c1b1f;
      margin-bottom: 4px;
    }

    .category-count {
      font-size: 13px;
      color: #757575;
    }

    .featured-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 24px;
    }

    .recent-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
    }

    .ad-description {
      margin: 0;
      color: #49454f;
      font-size: 14px;
      line-height: 1.5;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .ad-price {
      font-size: 18px;
      font-weight: 700;
      color: #1976d2;
    }

    .cta-section {
      max-width: 1400px;
      margin: 0 auto;
      padding: 64px 24px;
    }

    .cta-card {
      background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
      border-radius: 24px;
      padding: 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 48px;
    }

    .cta-content {
      flex: 1;
    }

    .cta-title {
      font-size: 32px;
      font-weight: 700;
      color: #1c1b1f;
      margin: 0 0 16px;
    }

    .cta-text {
      font-size: 16px;
      color: #49454f;
      margin: 0 0 32px;
      line-height: 1.6;
    }

    .cta-buttons {
      display: flex;
      gap: 16px;
    }

    .cta-illustration {
      width: 120px;
      height: 120px;
      background: white;
      border-radius: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    }

    .cta-illustration mat-icon {
      font-size: 56px;
      width: 56px;
      height: 56px;
      color: #1976d2;
    }

    .how-it-works-section {
      max-width: 1200px;
      margin: 0 auto;
      padding: 64px 24px;
    }

    .steps-grid {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      gap: 24px;
    }

    .step-item {
      flex: 1;
      max-width: 280px;
      text-align: center;
    }

    .step-icon {
      width: 80px;
      height: 80px;
      border-radius: 20px;
      background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
    }

    .step-icon mat-icon {
      font-size: 36px;
      width: 36px;
      height: 36px;
    }

    .step-title {
      font-size: 18px;
      font-weight: 600;
      color: #1c1b1f;
      margin: 0 0 12px;
    }

    .step-text {
      font-size: 14px;
      color: #49454f;
      margin: 0;
      line-height: 1.6;
    }

    .step-connector {
      color: #1976d2;
      margin-top: 24px;
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 32px;
      }

      .hero-subtitle {
        font-size: 16px;
      }

      .hero-stats {
        gap: 32px;
      }

      .stat-number {
        font-size: 28px;
      }

      .cta-card {
        flex-direction: column;
        text-align: center;
      }

      .cta-buttons {
        justify-content: center;
        flex-wrap: wrap;
      }

      .steps-grid {
        flex-direction: column;
        align-items: center;
      }

      .step-connector {
        transform: rotate(90deg);
        margin: 8px 0;
      }
    }
  `]
})
export class HomeComponent {
  private readonly router = inject(Router);

  searchQuery = signal('');
  selectedCategory = signal<string>('all');

  categories = signal<Category[]>([
    { name: 'Electronics', icon: 'devices', count: 234, color: '#2196f3' },
    { name: 'Vehicles', icon: 'directions_car', count: 156, color: '#4caf50' },
    { name: 'Real Estate', icon: 'home', count: 89, color: '#ff9800' },
    { name: 'Jobs', icon: 'work', count: 312, color: '#9c27b0' },
    { name: 'Services', icon: 'miscellaneous_services', count: 178, color: '#e91e63' },
    { name: 'Fashion', icon: 'checkroom', count: 445, color: '#00bcd4' },
    { name: 'Home & Garden', icon: 'yard', count: 201, color: '#8bc34a' },
    { name: 'Sports', icon: 'sports_soccer', count: 134, color: '#ff5722' }
  ]);

  ads = signal<Ad[]>([
    {
      id: 1,
      title: 'iPhone 15 Pro Max - Like New',
      description: 'Barely used iPhone 15 Pro Max with original box and accessories. 256GB storage, natural titanium finish.',
      price: '$950',
      location: 'New York, NY',
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400',
      category: 'Electronics',
      postedDate: '2 hours ago',
      isFeatured: true
    },
    {
      id: 2,
      title: '2022 Toyota Camry SE',
      description: 'Low mileage, well maintained sedan. Full service history, non-smoker owner. Perfect family car.',
      price: '$24,500',
      location: 'Los Angeles, CA',
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400',
      category: 'Vehicles',
      postedDate: '1 day ago',
      isFeatured: true
    },
    {
      id: 3,
      title: 'Downtown Studio Apartment',
      description: 'Modern studio in prime location. Walking distance to metro, restaurants, and shopping. Utilities included.',
      price: '$1,800/mo',
      location: 'Chicago, IL',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400',
      category: 'Real Estate',
      postedDate: '3 hours ago',
      isFeatured: true
    },
    {
      id: 4,
      title: 'Full Stack Developer Position',
      description: 'Remote position for experienced developer. Angular/React, Node.js, PostgreSQL. Competitive salary.',
      price: '$120K - $150K',
      location: 'Remote',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400',
      category: 'Jobs',
      postedDate: '5 hours ago',
      isFeatured: true
    },
    {
      id: 5,
      title: 'Professional House Cleaning',
      description: 'Eco-friendly cleaning service for homes and offices. Licensed, insured, and trusted since 2015.',
      price: '$80/service',
      location: 'Miami, FL',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400',
      category: 'Services',
      postedDate: '30 minutes ago',
      isFeatured: false
    },
    {
      id: 6,
      title: 'Vintage Denim Jacket',
      description: 'Authentic 90s vintage denim jacket. Size M. Rare find for collectors. Excellent condition.',
      price: '$65',
      location: 'Austin, TX',
      image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400',
      category: 'Fashion',
      postedDate: '4 hours ago',
      isFeatured: false
    },
    {
      id: 7,
      title: 'Garden Furniture Set',
      description: '4-piece wicker patio set with cushions. Perfect for outdoor entertaining. UV resistant.',
      price: '$350',
      location: 'Seattle, WA',
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400',
      category: 'Home & Garden',
      postedDate: '1 week ago',
      isFeatured: false
    },
    {
      id: 8,
      title: 'Mountain Bike - Trek Marlin',
      description: '2023 model, barely used. Size L. Perfect for trails and city riding. Includes helmet.',
      price: '$600',
      location: 'Denver, CO',
      image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=400',
      category: 'Sports',
      postedDate: '2 days ago',
      isFeatured: false
    },
    {
      id: 9,
      title: 'MacBook Pro 14" M3 Pro',
      description: '18GB RAM, 512GB SSD. Space Black. AppleCare+ until 2026. Perfect condition.',
      price: '$1,650',
      location: 'San Francisco, CA',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?w=400',
      category: 'Electronics',
      postedDate: '6 hours ago',
      isFeatured: false
    },
    {
      id: 10,
      title: 'Professional Photography Services',
      description: 'Event, portrait, and commercial photography. 10+ years experience. Quick turnaround.',
      price: '$200/session',
      location: 'Boston, MA',
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400',
      category: 'Services',
      postedDate: '1 day ago',
      isFeatured: false
    }
  ]);

  featuredAds = computed(() => {
    return this.ads().filter(ad => ad.isFeatured).slice(0, 4);
  });

  recentAds = computed(() => {
    return this.ads().filter(ad => !ad.isFeatured).slice(0, 6);
  });

  search(): void {
    const query = this.searchQuery().trim();
    if (query) {
      this.router.navigate(['/search'], { queryParams: { q: query } });
    }
  }

  selectCategory(category: string): void {
    this.selectedCategory.set(category);
    this.router.navigate(['/search'], { queryParams: { category } });
  }

  browseCategory(category: string): void {
    this.router.navigate(['/search'], { queryParams: { category } });
  }

  viewAllFeatured(): void {
    this.router.navigate(['/search'], { queryParams: { featured: true } });
  }

  viewAllRecent(): void {
    this.router.navigate(['/search']);
  }

  postAd(): void {
    this.router.navigate(['/ads/create']);
  }

  learnMore(): void {
    this.router.navigate(['/about']);
  }

  handleAdAction(ad: Ad, action: unknown): void {
    this.router.navigate(['/ads', ad.id]);
  }
}
