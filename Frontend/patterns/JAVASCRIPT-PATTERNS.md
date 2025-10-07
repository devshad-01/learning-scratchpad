# Universal JavaScript Patterns to Memorize

Essential JavaScript chunks that apply to 95% of web applications. Master these patterns and you can build almost anything!

---

## 🎯 **Priority 1: DOM Manipulation**

### **Pattern 1: Element Selection**
```javascript
// Single element
const element = document.querySelector('.class-name');
const elementById = document.getElementById('id-name');

// Multiple elements
const elements = document.querySelectorAll('.item');
const elementsByClass = document.getElementsByClassName('class-name');

// Organized selection (recommended)
const ui = {
    button: document.querySelector('.submit-btn'),
    input: document.querySelector('.input-field'),
    container: document.querySelector('.container'),
    items: document.querySelectorAll('.item')
};
```

### **Pattern 2: Content Manipulation**
```javascript
// Change text content
element.textContent = 'New text';

// Change HTML content
element.innerHTML = '<span>HTML content</span>';

// Change input values
input.value = 'new value';

// Change attributes
element.setAttribute('data-id', '123');
element.disabled = true;
element.checked = false;
```

### **Pattern 3: Class Manipulation**
```javascript
// Add/remove classes
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('selected');

// Check if class exists
if (element.classList.contains('active')) {
    // do something
}

// Multiple classes
element.classList.add('class1', 'class2', 'class3');
```

### **Pattern 4: Style Manipulation**
```javascript
// Individual styles
element.style.display = 'none';
element.style.backgroundColor = 'red';
element.style.transform = 'translateX(100px)';

// Multiple styles
Object.assign(element.style, {
    display: 'block',
    opacity: '1',
    transform: 'scale(1.1)'
});
```

---

## 🎯 **Priority 2: Event Handling**

### **Pattern 5: Basic Event Listeners**
```javascript
// Button clicks
button.addEventListener('click', handleClick);

// Form submission
form.addEventListener('submit', handleSubmit);

// Keyboard events
document.addEventListener('keydown', handleKeyPress);

// Input changes
input.addEventListener('input', handleInput);

// Mouse events
element.addEventListener('mouseenter', handleHover);
element.addEventListener('mouseleave', handleHover);
```

### **Pattern 6: Event Handler Functions**
```javascript
function handleClick(event) {
    event.preventDefault(); // Stop default behavior
    event.stopPropagation(); // Stop event bubbling
    
    const clickedElement = event.target;
    const clickedValue = event.target.dataset.value;
    
    // Your logic here
}

async function handleSubmit(event) {
    event.preventDefault(); // Always for forms
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    await processFormData(data);
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        handleSubmit();
    }
    
    if (event.key === 'Escape') {
        closeModal();
    }
}
```

### **Pattern 7: Event Delegation**
```javascript
// Listen on parent, handle child clicks
container.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        deleteItem(event.target.dataset.id);
    }
    
    if (event.target.classList.contains('edit-btn')) {
        editItem(event.target.dataset.id);
    }
});
```

---

## 🎯 **Priority 3: API Communication**

### **Pattern 8: GET Request**
```javascript
async function fetchData(url) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

// Usage
const data = await fetchData('https://api.example.com/users');
```

### **Pattern 9: POST Request**
```javascript
async function sendData(url, payload) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Send error:', error);
        return null;
    }
}

// Usage
const result = await sendData('https://api.example.com/users', {
    name: 'John',
    email: 'john@example.com'
});
```

### **Pattern 10: API with Loading State**
```javascript
async function fetchWithLoading(url) {
    showLoading(true);
    
    try {
        const data = await fetchData(url);
        displayData(data);
    } catch (error) {
        showError('Failed to load data');
    } finally {
        showLoading(false);
    }
}
```

---

## 🎯 **Priority 4: Array Processing**

### **Pattern 11: Array Transformation**
```javascript
// Transform each item
const doubled = numbers.map(num => num * 2);
const names = users.map(user => user.name);

// Filter items
const adults = users.filter(user => user.age >= 18);
const activeUsers = users.filter(user => user.isActive);

// Find single item
const user = users.find(user => user.id === targetId);
const admin = users.find(user => user.role === 'admin');

// Check if any/all match
const hasAdmin = users.some(user => user.role === 'admin');
const allActive = users.every(user => user.isActive);
```

### **Pattern 12: Array Manipulation**
```javascript
// Add items
array.push(item);           // Add to end
array.unshift(item);        // Add to beginning
array.splice(index, 0, item); // Add at specific position

// Remove items
array.pop();                // Remove last
array.shift();              // Remove first
array.splice(index, 1);     // Remove at position

// Loop through
array.forEach((item, index) => {
    console.log(item, index);
});

// Convert string to array and back
const letters = word.split('');
const word = letters.join('');
const words = sentence.split(' ');
```

---

## 🎯 **Priority 5: State Management**

### **Pattern 13: Simple State**
```javascript
// Application state
let appState = {
    currentUser: null,
    isLoggedIn: false,
    data: [],
    loading: false,
    currentPage: 1
};

// Update state
function updateState(changes) {
    appState = { ...appState, ...changes };
    renderUI(); // Re-render based on new state
}

// Usage
updateState({ loading: true });
updateState({ data: newData, loading: false });
```

### **Pattern 14: Component State**
```javascript
function createComponent(initialState) {
    let state = initialState;
    
    return {
        getState: () => state,
        setState: (newState) => {
            state = { ...state, ...newState };
            this.render();
        },
        render: () => {
            // Update DOM based on state
        }
    };
}
```

---

## 🎯 **Priority 6: Validation & Error Handling**

### **Pattern 15: Input Validation**
```javascript
function validateInput(value, type) {
    switch(type) {
        case 'required':
            return value.trim() !== '';
            
        case 'email':
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            
        case 'phone':
            return /^\d{10}$/.test(value);
            
        case 'minLength':
            return value.length >= 6;
            
        case 'number':
            return !isNaN(value) && value !== '';
            
        default:
            return true;
    }
}

// Form validation
function validateForm(formData) {
    const errors = {};
    
    if (!validateInput(formData.email, 'email')) {
        errors.email = 'Invalid email address';
    }
    
    if (!validateInput(formData.password, 'minLength')) {
        errors.password = 'Password must be at least 6 characters';
    }
    
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
}
```

### **Pattern 16: Error Handling**
```javascript
// Try/catch pattern
async function safeOperation() {
    try {
        const result = await riskyOperation();
        handleSuccess(result);
        return result;
    } catch (error) {
        console.error('Operation failed:', error);
        handleError(error.message);
        return null;
    } finally {
        cleanup(); // Always runs
    }
}

// Error display
function showError(message) {
    const errorDiv = document.querySelector('.error-message');
    errorDiv.textContent = message;
    errorDiv.classList.add('show');
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        errorDiv.classList.remove('show');
    }, 3000);
}
```

---

## 🎯 **Priority 7: Utility Patterns**

### **Pattern 17: Local Storage**
```javascript
// Save data
function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (error) {
        console.error('Failed to save to storage:', error);
        return false;
    }
}

// Load data
function loadFromStorage(key, defaultValue = null) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    } catch (error) {
        console.error('Failed to load from storage:', error);
        return defaultValue;
    }
}

// Clear data
function clearStorage(key) {
    localStorage.removeItem(key);
}
```

### **Pattern 18: Debouncing**
```javascript
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Usage: Search as user types, but wait for pause
const debouncedSearch = debounce(performSearch, 300);
searchInput.addEventListener('input', debouncedSearch);
```

### **Pattern 19: Loading States**
```javascript
function showLoading(show) {
    const loader = document.querySelector('.loading');
    const content = document.querySelector('.content');
    
    if (show) {
        loader.classList.add('show');
        content.classList.add('hidden');
    } else {
        loader.classList.remove('show');
        content.classList.remove('hidden');
    }
}

// Usage
showLoading(true);
const data = await fetchData();
showLoading(false);
```

---

## 🎯 **Priority 8: Application Structure**

### **Pattern 20: App Initialization**
```javascript
// Complete app initialization pattern
async function initializeApp() {
    try {
        console.log('Initializing application...');
        
        // 1. Load initial data
        await loadInitialData();
        
        // 2. Setup event listeners
        setupEventListeners();
        
        // 3. Render initial UI
        renderInitialUI();
        
        // 4. Start app-specific logic
        startAppLogic();
        
        console.log('Application ready!');
    } catch (error) {
        console.error('Failed to initialize app:', error);
        showError('Failed to start application');
    }
}

// Start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
```

### **Pattern 21: Module Organization**
```javascript
// App module pattern
const App = {
    // Configuration
    config: {
        apiUrl: 'https://api.example.com',
        timeout: 5000
    },
    
    // State
    state: {
        user: null,
        data: []
    },
    
    // UI elements
    ui: {
        container: null,
        buttons: null
    },
    
    // Methods
    init() {
        this.ui.container = document.querySelector('.app');
        this.setupEventListeners();
        this.loadData();
    },
    
    setupEventListeners() {
        // Event listener setup
    },
    
    async loadData() {
        // Data loading logic
    }
};

// Initialize
App.init();
```

