# Universal HTML Patterns to Memorize

Essential HTML patterns that form the foundation of 95% of web pages. Master these semantic structures and you can build any website with proper accessibility and SEO!

---

## 🎯 **Priority 1: Document Structure**

### **Pattern 1: Complete HTML Document**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Brief description of your page for SEO">
    <title>Page Title - Site Name</title>
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    
    <!-- CSS -->
    <link rel="stylesheet" href="styles.css">
    
    <!-- Preload critical resources -->
    <link rel="preload" href="critical.css" as="style">
    <link rel="preconnect" href="https://fonts.googleapis.com">
</head>

<body>
    <!-- Page content goes here -->
    
    <!-- JavaScript at the end for better performance -->
    <script src="script.js"></script>
</body>
</html>
```

### **Pattern 2: Semantic Page Layout**
```html
<body>
    <!-- Skip to main content for accessibility -->
    <a href="#main-content" class="skip-to-main">Skip to main content</a>
    
    <!-- Main navigation -->
    <header class="site-header" role="banner">
        <nav class="main-navigation" role="navigation">
            <!-- Navigation content -->
        </nav>
    </header>
    
    <!-- Main content area -->
    <main id="main-content" class="main-content" role="main">
        <!-- Page content -->
    </main>
    
    <!-- Additional content -->
    <aside class="sidebar" role="complementary">
        <!-- Sidebar content -->
    </aside>
    
    <!-- Site footer -->
    <footer class="site-footer" role="contentinfo">
        <!-- Footer content -->
    </footer>
</body>
```

### **Pattern 3: Meta Tags (SEO & Social)**
```html
<head>
    <!-- Essential meta tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Page description (150-160 characters)">
    <meta name="keywords" content="keyword1, keyword2, keyword3">
    <meta name="author" content="Your Name">
    
    <!-- Open Graph (Facebook, LinkedIn) -->
    <meta property="og:title" content="Page Title">
    <meta property="og:description" content="Page description">
    <meta property="og:image" content="https://example.com/image.jpg">
    <meta property="og:url" content="https://example.com/page">
    <meta property="og:type" content="website">
    
    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Page Title">
    <meta name="twitter:description" content="Page description">
    <meta name="twitter:image" content="https://example.com/image.jpg">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
</head>
```

---

## 🎯 **Priority 2: Navigation Patterns**

### **Pattern 4: Main Navigation**
```html
<header class="site-header">
    <div class="container">
        <!-- Logo/Brand -->
        <div class="brand">
            <a href="/" aria-label="Go to homepage">
                <img src="logo.svg" alt="Company Name" class="logo">
            </a>
        </div>
        
        <!-- Main navigation -->
        <nav class="main-nav" role="navigation" aria-label="Main navigation">
            <ul class="nav-list">
                <li class="nav-item">
                    <a href="/" class="nav-link" aria-current="page">Home</a>
                </li>
                <li class="nav-item">
                    <a href="/about" class="nav-link">About</a>
                </li>
                <li class="nav-item">
                    <a href="/services" class="nav-link">Services</a>
                </li>
                <li class="nav-item">
                    <a href="/contact" class="nav-link">Contact</a>
                </li>
            </ul>
        </nav>
        
        <!-- Mobile menu toggle -->
        <button class="mobile-menu-toggle" aria-label="Toggle mobile menu" aria-expanded="false">
            <span class="hamburger"></span>
        </button>
    </div>
</header>
```

### **Pattern 5: Dropdown Navigation**
```html
<nav class="main-nav">
    <ul class="nav-list">
        <li class="nav-item dropdown">
            <a href="/services" class="nav-link dropdown-toggle" 
               aria-expanded="false" aria-haspopup="true">
                Services
                <svg class="dropdown-icon" aria-hidden="true">
                    <use href="#chevron-down"></use>
                </svg>
            </a>
            
            <ul class="dropdown-menu" aria-label="Services submenu">
                <li><a href="/web-design" class="dropdown-link">Web Design</a></li>
                <li><a href="/development" class="dropdown-link">Development</a></li>
                <li><a href="/seo" class="dropdown-link">SEO</a></li>
            </ul>
        </li>
    </ul>
</nav>
```

### **Pattern 6: Breadcrumb Navigation**
```html
<nav class="breadcrumb" aria-label="Breadcrumb navigation">
    <ol class="breadcrumb-list">
        <li class="breadcrumb-item">
            <a href="/" class="breadcrumb-link">Home</a>
        </li>
        <li class="breadcrumb-item">
            <a href="/products" class="breadcrumb-link">Products</a>
        </li>
        <li class="breadcrumb-item" aria-current="page">
            <span class="breadcrumb-current">Current Page</span>
        </li>
    </ol>
</nav>
```

---

## 🎯 **Priority 3: Content Sections**

### **Pattern 7: Article/Blog Post**
```html
<article class="blog-post" itemscope itemtype="https://schema.org/BlogPosting">
    <header class="post-header">
        <h1 class="post-title" itemprop="headline">Article Title</h1>
        
        <div class="post-meta">
            <time class="post-date" datetime="2024-01-15" itemprop="datePublished">
                January 15, 2024
            </time>
            
            <address class="post-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                By <span itemprop="name">Author Name</span>
            </address>
            
            <div class="post-tags">
                <span class="tag-label">Tags:</span>
                <a href="/tag/web-design" class="tag">Web Design</a>
                <a href="/tag/html" class="tag">HTML</a>
            </div>
        </div>
    </header>
    
    <div class="post-content" itemprop="articleBody">
        <p>Article content goes here...</p>
        
        <h2>Section Heading</h2>
        <p>More content...</p>
        
        <figure class="post-image">
            <img src="image.jpg" alt="Descriptive alt text" loading="lazy">
            <figcaption>Image caption</figcaption>
        </figure>
    </div>
    
    <footer class="post-footer">
        <div class="post-sharing">
            <span>Share this article:</span>
            <a href="#" class="share-link" aria-label="Share on Twitter">Twitter</a>
            <a href="#" class="share-link" aria-label="Share on Facebook">Facebook</a>
        </div>
    </footer>
</article>
```

### **Pattern 8: Hero Section**
```html
<section class="hero" role="banner">
    <div class="hero-content">
        <h1 class="hero-title">Welcome to Our Website</h1>
        <p class="hero-subtitle">
            We create amazing web experiences that help your business grow
        </p>
        
        <div class="hero-actions">
            <a href="/get-started" class="btn btn-primary">Get Started</a>
            <a href="/learn-more" class="btn btn-secondary">Learn More</a>
        </div>
    </div>
    
    <div class="hero-image">
        <img src="hero-image.jpg" alt="Team working together" loading="eager">
    </div>
</section>
```

### **Pattern 9: Card Grid**
```html
<section class="features" aria-labelledby="features-heading">
    <div class="container">
        <h2 id="features-heading" class="section-title">Our Features</h2>
        
        <div class="cards-grid">
            <article class="card">
                <div class="card-icon" aria-hidden="true">
                    <svg class="icon"><use href="#design-icon"></use></svg>
                </div>
                
                <h3 class="card-title">Modern Design</h3>
                
                <p class="card-description">
                    Beautiful, responsive designs that look great on all devices
                </p>
                
                <a href="/design" class="card-link">Learn more</a>
            </article>
            
            <article class="card">
                <div class="card-icon" aria-hidden="true">
                    <svg class="icon"><use href="#speed-icon"></use></svg>
                </div>
                
                <h3 class="card-title">Fast Performance</h3>
                
                <p class="card-description">
                    Optimized for speed and excellent user experience
                </p>
                
                <a href="/performance" class="card-link">Learn more</a>
            </article>
            
            <article class="card">
                <div class="card-icon" aria-hidden="true">
                    <svg class="icon"><use href="#security-icon"></use></svg>
                </div>
                
                <h3 class="card-title">Secure & Reliable</h3>
                
                <p class="card-description">
                    Built with security and reliability as top priorities
                </p>
                
                <a href="/security" class="card-link">Learn more</a>
            </article>
        </div>
    </div>
</section>
```

---

## 🎯 **Priority 4: Form Patterns**

### **Pattern 10: Contact Form**
```html
<section class="contact-section" aria-labelledby="contact-heading">
    <h2 id="contact-heading" class="section-title">Contact Us</h2>
    
    <form class="contact-form" method="POST" action="/submit-contact" novalidate>
        <div class="form-group">
            <label for="name" class="form-label">
                Full Name <span class="required" aria-label="required">*</span>
            </label>
            <input 
                type="text" 
                id="name" 
                name="name" 
                class="form-input" 
                required 
                aria-describedby="name-error"
                autocomplete="name"
            >
            <div id="name-error" class="error-message" role="alert" aria-live="polite"></div>
        </div>
        
        <div class="form-group">
            <label for="email" class="form-label">
                Email Address <span class="required" aria-label="required">*</span>
            </label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                class="form-input" 
                required 
                aria-describedby="email-error email-help"
                autocomplete="email"
            >
            <div id="email-help" class="form-help">We'll never share your email</div>
            <div id="email-error" class="error-message" role="alert" aria-live="polite"></div>
        </div>
        
        <div class="form-group">
            <label for="subject" class="form-label">Subject</label>
            <select id="subject" name="subject" class="form-select" aria-describedby="subject-help">
                <option value="">Please select...</option>
                <option value="general">General Inquiry</option>
                <option value="support">Support Request</option>
                <option value="sales">Sales Question</option>
            </select>
            <div id="subject-help" class="form-help">Choose the category that best fits your inquiry</div>
        </div>
        
        <div class="form-group">
            <label for="message" class="form-label">
                Message <span class="required" aria-label="required">*</span>
            </label>
            <textarea 
                id="message" 
                name="message" 
                class="form-textarea" 
                rows="5" 
                required 
                aria-describedby="message-error message-help"
                placeholder="Tell us how we can help you..."
            ></textarea>
            <div id="message-help" class="form-help">Please provide as much detail as possible</div>
            <div id="message-error" class="error-message" role="alert" aria-live="polite"></div>
        </div>
        
        <div class="form-group">
            <div class="checkbox-group">
                <input type="checkbox" id="newsletter" name="newsletter" class="form-checkbox">
                <label for="newsletter" class="checkbox-label">
                    Subscribe to our newsletter for updates and tips
                </label>
            </div>
        </div>
        
        <div class="form-actions">
            <button type="submit" class="btn btn-primary">
                <span class="btn-text">Send Message</span>
                <span class="btn-loading" aria-hidden="true">Sending...</span>
            </button>
            
            <button type="reset" class="btn btn-secondary">Clear Form</button>
        </div>
        
        <!-- Success/Error messages -->
        <div class="form-message" role="alert" aria-live="polite"></div>
    </form>
</section>
```

### **Pattern 11: Search Form**
```html
<form class="search-form" role="search" method="GET" action="/search">
    <div class="search-group">
        <label for="search-input" class="search-label">
            Search our website
        </label>
        
        <div class="search-input-group">
            <input 
                type="search" 
                id="search-input" 
                name="q" 
                class="search-input" 
                placeholder="Enter your search terms..."
                aria-describedby="search-help"
                autocomplete="off"
                spellcheck="false"
            >
            
            <button type="submit" class="search-button" aria-label="Submit search">
                <svg class="search-icon" aria-hidden="true">
                    <use href="#search-icon"></use>
                </svg>
            </button>
        </div>
        
        <div id="search-help" class="search-help">
            Search for articles, products, or services
        </div>
    </div>
    
    <!-- Search suggestions/results -->
    <div class="search-suggestions" role="listbox" aria-label="Search suggestions"></div>
</form>
```

---

## 🎯 **Priority 5: Interactive Elements**

### **Pattern 12: Modal Dialog**
```html
<!-- Modal trigger -->
<button class="btn btn-primary" data-modal-trigger="contact-modal">
    Open Contact Form
</button>

<!-- Modal -->
<div class="modal" id="contact-modal" role="dialog" aria-labelledby="modal-title" aria-hidden="true">
    <div class="modal-backdrop" data-modal-close></div>
    
    <div class="modal-content">
        <header class="modal-header">
            <h2 id="modal-title" class="modal-title">Contact Us</h2>
            
            <button class="modal-close" data-modal-close aria-label="Close modal">
                <svg aria-hidden="true"><use href="#close-icon"></use></svg>
            </button>
        </header>
        
        <div class="modal-body">
            <!-- Modal content goes here -->
            <p>Modal content...</p>
        </div>
        
        <footer class="modal-footer">
            <button class="btn btn-primary">Submit</button>
            <button class="btn btn-secondary" data-modal-close>Cancel</button>
        </footer>
    </div>
</div>
```

### **Pattern 13: Tabs Interface**
```html
<div class="tabs" role="tablist" aria-label="Product information">
    <!-- Tab buttons -->
    <div class="tab-list">
        <button 
            class="tab-button active" 
            role="tab" 
            aria-selected="true" 
            aria-controls="tab-panel-1" 
            id="tab-1"
        >
            Description
        </button>
        
        <button 
            class="tab-button" 
            role="tab" 
            aria-selected="false" 
            aria-controls="tab-panel-2" 
            id="tab-2"
        >
            Specifications
        </button>
        
        <button 
            class="tab-button" 
            role="tab" 
            aria-selected="false" 
            aria-controls="tab-panel-3" 
            id="tab-3"
        >
            Reviews
        </button>
    </div>
    
    <!-- Tab panels -->
    <div class="tab-panels">
        <div 
            class="tab-panel active" 
            role="tabpanel" 
            aria-labelledby="tab-1" 
            id="tab-panel-1"
        >
            <h3>Product Description</h3>
            <p>Detailed product description...</p>
        </div>
        
        <div 
            class="tab-panel" 
            role="tabpanel" 
            aria-labelledby="tab-2" 
            id="tab-panel-2" 
            hidden
        >
            <h3>Specifications</h3>
            <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
            </ul>
        </div>
        
        <div 
            class="tab-panel" 
            role="tabpanel" 
            aria-labelledby="tab-3" 
            id="tab-panel-3" 
            hidden
        >
            <h3>Customer Reviews</h3>
            <p>Customer reviews content...</p>
        </div>
    </div>
</div>
```

### **Pattern 14: Accordion**
```html
<div class="accordion" role="list">
    <div class="accordion-item" role="listitem">
        <h3 class="accordion-header">
            <button 
                class="accordion-trigger" 
                aria-expanded="false" 
                aria-controls="accordion-panel-1"
                id="accordion-trigger-1"
            >
                <span class="accordion-title">What is your return policy?</span>
                <svg class="accordion-icon" aria-hidden="true">
                    <use href="#chevron-down"></use>
                </svg>
            </button>
        </h3>
        
        <div 
            class="accordion-panel" 
            role="region" 
            aria-labelledby="accordion-trigger-1" 
            id="accordion-panel-1"
            hidden
        >
            <div class="accordion-content">
                <p>We offer a 30-day return policy on all items...</p>
            </div>
        </div>
    </div>
    
    <div class="accordion-item" role="listitem">
        <h3 class="accordion-header">
            <button 
                class="accordion-trigger" 
                aria-expanded="false" 
                aria-controls="accordion-panel-2"
                id="accordion-trigger-2"
            >
                <span class="accordion-title">How do I track my order?</span>
                <svg class="accordion-icon" aria-hidden="true">
                    <use href="#chevron-down"></use>
                </svg>
            </button>
        </h3>
        
        <div 
            class="accordion-panel" 
            role="region" 
            aria-labelledby="accordion-trigger-2" 
            id="accordion-panel-2"
            hidden
        >
            <div class="accordion-content">
                <p>You can track your order using the tracking number...</p>
            </div>
        </div>
    </div>
</div>
```

---

## 🎯 **Priority 6: Media & Images**

### **Pattern 15: Responsive Images**
```html
<!-- Basic responsive image -->
<img src="image.jpg" alt="Descriptive alt text" class="responsive-image" loading="lazy">

<!-- Advanced responsive image with multiple sources -->
<picture class="responsive-picture">
    <!-- WebP format for modern browsers -->
    <source srcset="
        image-400.webp 400w,
        image-800.webp 800w,
        image-1200.webp 1200w
    " type="image/webp">
    
    <!-- Fallback JPEG -->
    <source srcset="
        image-400.jpg 400w,
        image-800.jpg 800w,
        image-1200.jpg 1200w
    " type="image/jpeg">
    
    <!-- Fallback image -->
    <img 
        src="image-800.jpg" 
        alt="Descriptive alt text"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    >
</picture>

<!-- Image with caption -->
<figure class="image-figure">
    <img src="image.jpg" alt="Descriptive alt text" loading="lazy">
    <figcaption class="image-caption">
        Image caption describing the content
    </figcaption>
</figure>
```

### **Pattern 16: Video Embed**
```html
<!-- Responsive video embed -->
<div class="video-container">
    <iframe 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        title="Video Title"
        frameborder="0" 
        allowfullscreen
        loading="lazy"
    ></iframe>
</div>

<!-- HTML5 video with controls -->
<video class="video-player" controls preload="metadata" poster="poster-image.jpg">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    
    <!-- Fallback for browsers that don't support video -->
    <p>
        Your browser doesn't support HTML5 video. 
        <a href="video.mp4">Download the video</a> instead.
    </p>
</video>
```

---

## 🎯 **Priority 7: Data Display**

### **Pattern 17: Data Table**
```html
<div class="table-container">
    <table class="data-table" role="table">
        <caption class="table-caption">
            Monthly Sales Report - Q1 2024
        </caption>
        
        <thead>
            <tr>
                <th scope="col" class="sortable" aria-sort="ascending">
                    <button class="sort-button">
                        Month
                        <svg class="sort-icon" aria-hidden="true">
                            <use href="#sort-asc"></use>
                        </svg>
                    </button>
                </th>
                <th scope="col" class="sortable">
                    <button class="sort-button">
                        Sales ($)
                        <svg class="sort-icon" aria-hidden="true">
                            <use href="#sort-none"></use>
                        </svg>
                    </button>
                </th>
                <th scope="col">Growth (%)</th>
            </tr>
        </thead>
        
        <tbody>
            <tr>
                <th scope="row">January</th>
                <td>$50,000</td>
                <td class="positive">+15%</td>
            </tr>
            <tr>
                <th scope="row">February</th>
                <td>$62,000</td>
                <td class="positive">+24%</td>
            </tr>
            <tr>
                <th scope="row">March</th>
                <td>$48,000</td>
                <td class="negative">-23%</td>
            </tr>
        </tbody>
    </table>
</div>
```

### **Pattern 18: Definition List**
```html
<dl class="definition-list">
    <dt class="definition-term">HTML</dt>
    <dd class="definition-description">
        HyperText Markup Language - the standard markup language for web pages
    </dd>
    
    <dt class="definition-term">CSS</dt>
    <dd class="definition-description">
        Cascading Style Sheets - used for styling HTML elements
    </dd>
    
    <dt class="definition-term">JavaScript</dt>
    <dd class="definition-description">
        A programming language that enables interactive web pages
    </dd>
</dl>
```

---

## 🎯 **Priority 8: Accessibility & ARIA**

### **Pattern 19: Skip Links & Landmarks**
```html
<body>
    <!-- Skip links for keyboard users -->
    <div class="skip-links">
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <a href="#main-navigation" class="skip-link">Skip to navigation</a>
        <a href="#search" class="skip-link">Skip to search</a>
    </div>
    
    <!-- Main landmarks -->
    <header role="banner">
        <nav id="main-navigation" role="navigation" aria-label="Main navigation">
            <!-- Navigation -->
        </nav>
    </header>
    
    <main id="main-content" role="main">
        <!-- Main content -->
    </main>
    
    <aside role="complementary" aria-label="Related articles">
        <!-- Sidebar content -->
    </aside>
    
    <footer role="contentinfo">
        <!-- Footer content -->
    </footer>
</body>
```

### **Pattern 20: ARIA Live Regions**
```html
<!-- Status messages -->
<div class="status-message" role="status" aria-live="polite" aria-atomic="true">
    <!-- Status updates appear here -->
</div>

<!-- Alert messages -->
<div class="alert-message" role="alert" aria-live="assertive">
    <!-- Critical alerts appear here -->
</div>

<!-- Loading indicator -->
<div class="loading-indicator" role="status" aria-live="polite">
    <span class="sr-only">Loading content, please wait...</span>
    <div class="spinner" aria-hidden="true"></div>
</div>

<!-- Screen reader only text -->
<span class="sr-only">
    This text is only visible to screen readers
</span>
```

