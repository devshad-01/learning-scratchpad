// ========================================
// STEP 1: SELECT DOM ELEMENTS
// ========================================
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.btn');

console.log('✅ DOM Elements Selected:', { display, buttons: buttons.length });

// ========================================
// STEP 2: INITIALIZE STATE
// ========================================
let currentInput = '';      // What user is currently typing
let previousInput = '';     // Number before operator
let operator = '';          // Current operator (+, -, *, /)
let shouldResetDisplay = false; // Flag to clear display after equals

console.log('✅ Initial State:', { currentInput, previousInput, operator });

// ========================================
// STEP 3: SETUP EVENT LISTENERS
// ========================================
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;
    console.log('🔘 Button clicked:', value);
    
    handleInput(value);
  });
});

console.log('✅ Event listeners attached to', buttons.length, 'buttons');

// ========================================
// STEP 4: HANDLE INPUT (MAIN LOGIC)
// ========================================
function handleInput(value) {
  console.log('📥 Handling input:', value, '| Current state:', { currentInput, previousInput, operator });
  
  // CLEAR button
  if (value === 'C') {
    clear();
    return;
  }
  
  // DELETE button
  if (value === 'DEL') {
    deleteLastChar();
    return;
  }
  
  // EQUALS button
  if (value === '=') {
    calculate();
    return;
  }
  
  // OPERATOR buttons (+, -, *, /, %)
  if (['+', '-', '*', '/', '%'].includes(value)) {
    handleOperator(value);
    return;
  }
  
  // NUMBER and DECIMAL buttons
  handleNumber(value);
}

// ========================================
// STEP 5: HANDLE NUMBERS & DECIMALS
// ========================================
function handleNumber(num) {
  console.log('🔢 Adding number:', num);
  
  // If we just calculated, start fresh
  if (shouldResetDisplay) {
    currentInput = '';
    shouldResetDisplay = false;
  }
  
  // VALIDATION: Prevent multiple decimals
  if (num === '.' && currentInput.includes('.')) {
    console.warn('⚠️ Already has decimal point');
    return;
  }
  
  // VALIDATION: Prevent starting with multiple zeros
  if (currentInput === '0' && num !== '.') {
    currentInput = num;
  } else {
    currentInput += num;
  }
  
  console.log('✅ Current input updated:', currentInput);
  updateDisplay(currentInput);
}

// ========================================
// STEP 6: HANDLE OPERATORS
// ========================================
function handleOperator(op) {
  console.log('➕ Operator clicked:', op);
  
  // VALIDATION: Can't start with operator
  if (currentInput === '' && previousInput === '') {
    console.warn('⚠️ No number entered yet');
    return;
  }
  
  // If we have a pending calculation, do it first
  if (operator && currentInput !== '') {
    console.log('⚡ Calculating pending operation first');
    calculate();
  }
  
  // Store the current state
  if (currentInput !== '') {
    previousInput = currentInput;
    currentInput = '';
  }
  
  operator = op;
  shouldResetDisplay = false;
  
  console.log('✅ Operator stored:', { previousInput, operator });
}

// ========================================
// STEP 7: CALCULATE RESULT
// ========================================
function calculate() {
  console.log('🧮 Calculating:', previousInput, operator, currentInput);
  
  // VALIDATION: Need both numbers and operator
  if (previousInput === '' || currentInput === '' || operator === '') {
    console.warn('⚠️ Missing data for calculation');
    return;
  }
  
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  let result;
  
  console.log('📊 Parsed values:', { prev, current, operator });
  
  // Perform calculation based on operator
  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        console.error('❌ Division by zero!');
        updateDisplay('Error');
        clear();
        return;
      }
      result = prev / current;
      break;
    case '%':
      result = prev % current;
      break;
    default:
      console.error('❌ Unknown operator:', operator);
      return;
  }
  
  // Round to avoid floating point errors (e.g., 0.1 + 0.2 = 0.30000000000000004)
  result = Math.round(result * 100000000) / 100000000;
  
  console.log('✅ Result:', result);
  
  // Update state
  currentInput = result.toString();
  previousInput = '';
  operator = '';
  shouldResetDisplay = true;
  
  updateDisplay(currentInput);
}

// ========================================
// STEP 8: CLEAR CALCULATOR
// ========================================
function clear() {
  console.log('🗑️ Clearing calculator');
  
  currentInput = '';
  previousInput = '';
  operator = '';
  shouldResetDisplay = false;
  
  updateDisplay('0');
  console.log('✅ Calculator cleared');
}

// ========================================
// STEP 9: DELETE LAST CHARACTER
// ========================================
function deleteLastChar() {
  console.log('⌫ Deleting last character');
  
  if (currentInput.length > 0) {
    currentInput = currentInput.slice(0, -1);
    console.log('✅ New input:', currentInput);
    updateDisplay(currentInput || '0');
  }
}

// ========================================
// STEP 10: UPDATE DISPLAY (FEEDBACK)
// ========================================
function updateDisplay(value) {
  display.value = value;
  console.log('🖥️ Display updated:', value);
}

// ========================================
// STEP 11: INITIALIZE
// ========================================
updateDisplay('0');
console.log('🚀 Calculator initialized and ready!');