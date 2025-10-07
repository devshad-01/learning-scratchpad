# Universal CSS Patterns to Memorize

Essential CSS patterns that solve 95% of styling challenges. Master these and you can style any website professionally!

---

## 🎯 **Priority 1: Layout Systems**

### **Pattern 1: Flexbox Container**
```css
/* Flex container - USE THIS EVERYWHERE */
.flex-container {
    display: flex;
    
    /* Direction */
    flex-direction: row;        /* row | column | row-reverse | column-reverse */
    
    /* Main axis alignment */
    justify-content: center;    /* flex-start | center | flex-end | space-between | space-around */
    
    /* Cross axis alignment */
    align-items: center;        /* flex-start | center | flex-end | stretch | baseline */
    
    /* Wrap */
    flex-wrap: wrap;           /* nowrap | wrap | wrap-reverse */
    
    /* Gap between items */
    gap: 1rem;                 /* Modern way to add spacing */
}

/* Flex item */
.flex-item {
    flex: 1;                   /* flex-grow | flex-shrink | flex-basis */
    flex: 0 0 auto;           /* Don't grow/shrink, use natural size */
    flex: 1 1 300px;          /* Grow/shrink, minimum 300px */
}
```

### **Pattern 2: CSS Grid Container**
```css
/* Grid container - BEST for 2D layouts */
.grid-container {
    display: grid;
    
    /* Define columns */
    grid-template-columns: 1fr 2fr 1fr;           /* Fractions */
    grid-template-columns: repeat(3, 1fr);        /* Repeat pattern */
    grid-template-columns: 200px 1fr 100px;       /* Mixed units */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive */
    
    /* Define rows */
    grid-template-rows: auto 1fr auto;            /* Header, content, footer */
    
    /* Gap between items */
    gap: 1rem;                                    /* Same as grid-gap */
    grid-gap: 1rem 2rem;                         /* Row gap, column gap */
}

/* Grid item */
.grid-item {
    grid-column: 1 / 3;       /* Span columns 1 to 3 */
    grid-row: 2 / 4;          /* Span rows 2 to 4 */
    grid-area: header;        /* Use named area */
}
```

### **Pattern 3: Responsive Layout**
```css
/* Mobile-first responsive design */
.responsive-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
}

/* Breakpoints */
@media (min-width: 576px) {
    /* Small devices (landscape phones) */
    .responsive-container {
        padding: 1.5rem;
    }
}

@media (min-width: 768px) {
    /* Medium devices (tablets) */
    .responsive-container {
        padding: 2rem;
    }
}

@media (min-width: 992px) {
    /* Large devices (desktops) */
    .responsive-container {
        padding: 2.5rem;
    }
}

@media (min-width: 1200px) {
    /* Extra large devices */
    .responsive-container {
        padding: 3rem;
    }
}
```

---

## 🎯 **Priority 2: CSS Reset & Base**

### **Pattern 4: Modern CSS Reset**
```css
/* Universal reset */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* Base styles */
html {
    font-size: 62.5%; /* 1rem = 10px for easy calculation */
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    font-size: 1.6rem; /* 16px */
    line-height: 1.6;
    color: #333;
    background-color: #fff;
}

/* Remove default list styles */
ul, ol {
    list-style: none;
}

/* Remove default link styles */
a {
    text-decoration: none;
    color: inherit;
}

/* Better button defaults */
button {
    border: none;
    background: none;
    cursor: pointer;
    font: inherit;
}

/* Better image defaults */
img {
    max-width: 100%;
    height: auto;
    display: block;
}
```

### **Pattern 5: CSS Variables (Custom Properties)**
```css
:root {
    /* Color System */
    --color-primary: #3b82f6;
    --color-secondary: #64748b;
    --color-success: #10b981;
    --color-warning: #f59e0b;
    --color-error: #ef4444;
    
    --color-text-primary: #1f2937;
    --color-text-secondary: #6b7280;
    --color-background: #ffffff;
    --color-surface: #f9fafb;
    
    /* Typography */
    --font-family-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --font-family-mono: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    
    --font-size-xs: 1.2rem;
    --font-size-sm: 1.4rem;
    --font-size-base: 1.6rem;
    --font-size-lg: 1.8rem;
    --font-size-xl: 2.4rem;
    --font-size-2xl: 3.2rem;
    
    /* Spacing System */
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.25rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-10: 2.5rem;
    --space-12: 3rem;
    --space-16: 4rem;
    
    /* Layout */
    --max-width: 1200px;
    --border-radius: 0.5rem;
    --box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --transition: all 0.2s ease-in-out;
}

/* Usage */
.button {
    background-color: var(--color-primary);
    color: white;
    padding: var(--space-3) var(--space-6);
    border-radius: var(--border-radius);
    transition: var(--transition);
}
```

---

## 🎯 **Priority 3: Component Patterns**

### **Pattern 6: Button Styles**
```css
/* Base button */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-3) var(--space-6);
    border: none;
    border-radius: var(--border-radius);
    font-size: var(--font-size-base);
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    
    /* Prevent text selection */
    user-select: none;
}

/* Button variants */
.btn-primary {
    background-color: var(--color-primary);
    color: white;
}

.btn-primary:hover {
    background-color: #2563eb;
    transform: translateY(-1px);
}

.btn-secondary {
    background-color: transparent;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
}

.btn-secondary:hover {
    background-color: var(--color-primary);
    color: white;
}

/* Button sizes */
.btn-sm {
    padding: var(--space-2) var(--space-4);
    font-size: var(--font-size-sm);
}

.btn-lg {
    padding: var(--space-4) var(--space-8);
    font-size: var(--font-size-lg);
}

/* Button states */
.btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
}

.btn:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
}
```

### **Pattern 7: Card Component**
```css
.card {
    background-color: var(--color-surface);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    padding: var(--space-6);
    transition: var(--transition);
}

.card:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
}

.card-header {
    margin-bottom: var(--space-4);
    padding-bottom: var(--space-4);
    border-bottom: 1px solid #e5e7eb;
}

.card-title {
    font-size: var(--font-size-xl);
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: var(--space-2);
}

.card-content {
    color: var(--color-text-secondary);
    line-height: 1.7;
}

.card-footer {
    margin-top: var(--space-6);
    padding-top: var(--space-4);
    border-top: 1px solid #e5e7eb;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

### **Pattern 8: Form Styles**
```css
/* Form container */
.form {
    max-width: 500px;
    margin: 0 auto;
}

/* Form group */
.form-group {
    margin-bottom: var(--space-6);
}

/* Labels */
.label {
    display: block;
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: var(--space-2);
}

/* Input fields */
.input {
    width: 100%;
    padding: var(--space-3);
    border: 2px solid #d1d5db;
    border-radius: var(--border-radius);
    font-size: var(--font-size-base);
    transition: var(--transition);
}

.input:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.input:invalid {
    border-color: var(--color-error);
}

/* Textarea */
.textarea {
    resize: vertical;
    min-height: 120px;
}

/* Select */
.select {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    padding-right: 2.5rem;
}

/* Error states */
.input-error {
    border-color: var(--color-error);
}

.error-message {
    color: var(--color-error);
    font-size: var(--font-size-sm);
    margin-top: var(--space-1);
}
```

---

## 🎯 **Priority 4: Positioning & Spacing**

### **Pattern 9: Positioning**
```css
/* Relative positioning (most common) */
.relative {
    position: relative;
}

/* Absolute positioning */
.absolute {
    position: absolute;
    top: 0;
    left: 0;
}

/* Fixed positioning (modals, headers) */
.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}

/* Sticky positioning (navigation) */
.sticky {
    position: sticky;
    top: 0;
    z-index: 100;
}

/* Centering patterns */
.center-absolute {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.center-flex {
    display: flex;
    justify-content: center;
    align-items: center;
}

.center-grid {
    display: grid;
    place-items: center;
}
```

### **Pattern 10: Spacing System**
```css
/* Margin classes */
.m-0 { margin: 0; }
.m-1 { margin: var(--space-1); }
.m-2 { margin: var(--space-2); }
.m-4 { margin: var(--space-4); }

/* Specific margin directions */
.mt-4 { margin-top: var(--space-4); }
.mr-4 { margin-right: var(--space-4); }
.mb-4 { margin-bottom: var(--space-4); }
.ml-4 { margin-left: var(--space-4); }

/* Horizontal and vertical margins */
.mx-4 { margin-left: var(--space-4); margin-right: var(--space-4); }
.my-4 { margin-top: var(--space-4); margin-bottom: var(--space-4); }

/* Padding classes */
.p-0 { padding: 0; }
.p-1 { padding: var(--space-1); }
.p-2 { padding: var(--space-2); }
.p-4 { padding: var(--space-4); }

/* Specific padding directions */
.pt-4 { padding-top: var(--space-4); }
.pr-4 { padding-right: var(--space-4); }
.pb-4 { padding-bottom: var(--space-4); }
.pl-4 { padding-left: var(--space-4); }

/* Auto margins for centering */
.mx-auto { margin-left: auto; margin-right: auto; }
```

---

## 🎯 **Priority 5: Visual Effects**

### **Pattern 11: Transitions & Animations**
```css
/* Basic transitions */
.transition {
    transition: all 0.2s ease-in-out;
}

.transition-colors {
    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
}

.transition-transform {
    transition: transform 0.2s ease-in-out;
}

/* Hover effects */
.hover-scale:hover {
    transform: scale(1.05);
}

.hover-lift:hover {
    transform: translateY(-2px);
}

.hover-glow:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Keyframe animations */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideInFromLeft {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

/* Animation classes */
.animate-fade-in {
    animation: fadeIn 0.5s ease-in-out;
}

.animate-slide-in {
    animation: slideInFromLeft 0.5s ease-out;
}

.animate-spin {
    animation: spin 1s linear infinite;
}
```

### **Pattern 12: Shadows & Borders**
```css
/* Shadow system */
.shadow-sm {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.shadow {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.shadow-lg {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.shadow-xl {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

/* Border system */
.border {
    border: 1px solid #e5e7eb;
}

.border-2 {
    border: 2px solid #e5e7eb;
}

.border-primary {
    border-color: var(--color-primary);
}

.border-t {
    border-top: 1px solid #e5e7eb;
}

.border-r {
    border-right: 1px solid #e5e7eb;
}

.border-b {
    border-bottom: 1px solid #e5e7eb;
}

.border-l {
    border-left: 1px solid #e5e7eb;
}

/* Border radius */
.rounded-none { border-radius: 0; }
.rounded-sm { border-radius: 0.125rem; }
.rounded { border-radius: var(--border-radius); }
.rounded-lg { border-radius: 0.75rem; }
.rounded-full { border-radius: 9999px; }
```

---

## 🎯 **Priority 6: Utility Classes**

### **Pattern 13: Display & Visibility**
```css
/* Display */
.block { display: block; }
.inline { display: inline; }
.inline-block { display: inline-block; }
.flex { display: flex; }
.inline-flex { display: inline-flex; }
.grid { display: grid; }
.hidden { display: none; }

/* Visibility */
.visible { visibility: visible; }
.invisible { visibility: hidden; }

/* Opacity */
.opacity-0 { opacity: 0; }
.opacity-25 { opacity: 0.25; }
.opacity-50 { opacity: 0.5; }
.opacity-75 { opacity: 0.75; }
.opacity-100 { opacity: 1; }

/* Overflow */
.overflow-hidden { overflow: hidden; }
.overflow-scroll { overflow: scroll; }
.overflow-auto { overflow: auto; }
```

### **Pattern 14: Typography**
```css
/* Font sizes */
.text-xs { font-size: var(--font-size-xs); }
.text-sm { font-size: var(--font-size-sm); }
.text-base { font-size: var(--font-size-base); }
.text-lg { font-size: var(--font-size-lg); }
.text-xl { font-size: var(--font-size-xl); }
.text-2xl { font-size: var(--font-size-2xl); }

/* Font weights */
.font-thin { font-weight: 100; }
.font-light { font-weight: 300; }
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }
.font-black { font-weight: 900; }

/* Text alignment */
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-justify { text-align: justify; }

/* Text colors */
.text-primary { color: var(--color-primary); }
.text-secondary { color: var(--color-text-secondary); }
.text-success { color: var(--color-success); }
.text-warning { color: var(--color-warning); }
.text-error { color: var(--color-error); }

/* Text decoration */
.underline { text-decoration: underline; }
.no-underline { text-decoration: none; }
.line-through { text-decoration: line-through; }

/* Text transform */
.uppercase { text-transform: uppercase; }
.lowercase { text-transform: lowercase; }
.capitalize { text-transform: capitalize; }
```

---

## 🎯 **Priority 7: Responsive Design**

### **Pattern 15: Responsive Utilities**
```css
/* Mobile-first breakpoints */
@media (min-width: 640px) {
    .sm\:block { display: block; }
    .sm\:flex { display: flex; }
    .sm\:hidden { display: none; }
    .sm\:w-1\/2 { width: 50%; }
    .sm\:text-lg { font-size: var(--font-size-lg); }
}

@media (min-width: 768px) {
    .md\:block { display: block; }
    .md\:flex { display: flex; }
    .md\:grid { display: grid; }
    .md\:w-1\/3 { width: 33.333333%; }
    .md\:text-xl { font-size: var(--font-size-xl); }
}

@media (min-width: 1024px) {
    .lg\:block { display: block; }
    .lg\:flex { display: flex; }
    .lg\:w-1\/4 { width: 25%; }
    .lg\:text-2xl { font-size: var(--font-size-2xl); }
}

@media (min-width: 1280px) {
    .xl\:block { display: block; }
    .xl\:flex { display: flex; }
    .xl\:w-1\/5 { width: 20%; }
}
```

### **Pattern 16: Container Queries (Modern)**
```css
/* Container queries for component-based responsive design */
.card-container {
    container-type: inline-size;
}

@container (min-width: 300px) {
    .card {
        padding: var(--space-6);
    }
    
    .card-title {
        font-size: var(--font-size-xl);
    }
}

@container (min-width: 500px) {
    .card {
        padding: var(--space-8);
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: var(--space-6);
    }
}
```

---

## 🎯 **Priority 8: Dark Mode & Themes**

### **Pattern 17: Dark Mode Support**
```css
/* Light theme (default) */
:root {
    --bg-primary: #ffffff;
    --bg-secondary: #f8fafc;
    --text-primary: #1f2937;
    --text-secondary: #6b7280;
    --border-color: #e5e7eb;
}

/* Dark theme */
@media (prefers-color-scheme: dark) {
    :root {
        --bg-primary: #1f2937;
        --bg-secondary: #111827;
        --text-primary: #f9fafb;
        --text-secondary: #d1d5db;
        --border-color: #374151;
    }
}

/* Manual dark mode toggle */
[data-theme="dark"] {
    --bg-primary: #1f2937;
    --bg-secondary: #111827;
    --text-primary: #f9fafb;
    --text-secondary: #d1d5db;
    --border-color: #374151;
}

/* Usage */
body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    transition: background-color 0.2s, color 0.2s;
}
```

