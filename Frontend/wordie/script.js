/* -------------------------- Dom Element Selection ------------------------- */
const elements = {
    submitButton: document.querySelector('.submit-btn'),
    messageArea: document.querySelector('.message-area'),
    resetButton: document.querySelector('.reset-btn'),
    loadingIndicator: document.querySelector('.loading')
}

console.log('✅ DOM Elements Selected:', elements);

/* ----------------------------- Game State ----------------------------- */
let gameState = {
    secretWord: '',
    guesses: [],
    currentRow: 0,
    maxGuesses: 6,
    gameOver: false
}

console.log('✅ Initial Game State:', gameState);

/* ----------------------------- API Functions ----------------------------- */
async function fetchSecretWord() {
    try {
        showLoading(true);
        // Using random=1 for different words each game
        const response = await fetch('https://words.dev-apis.com/word-of-the-day?random=1');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        gameState.secretWord = data.word.toUpperCase();
        
        console.log('✅ Secret word fetched successfully');
        console.log('📊 Puzzle number:', data.puzzleNumber);
        // Don't log the actual word to keep it secret!
        
        return gameState.secretWord;
    } catch (error) {
        console.error('❌ Error fetching word:', error);
        showMessage('Failed to load word. Please refresh the page.', 'error');
        throw error;
    } finally {
        showLoading(false);
    }
}

async function validateWord(word) {
    try {
        const response = await fetch('https://words.dev-apis.com/validate-word', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ word: word.toLowerCase() })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('✅ Word validation result:', data.validWord);
        return data.validWord;
    } catch (error) {
        console.error('❌ Error validating word:', error);
        showMessage('Error checking word. Please try again.', 'error');
        return false;
    }
}

/* ----------------------------- Input Validation ----------------------------- */
function isValidInput(guess) {
    // Check if exactly 5 letters
    if (guess.length !== 5) {
        showMessage('Please enter exactly 5 letters', 'error');
        return false;
    }
    
    // Check if only letters (no numbers or special characters)
    if (!/^[A-Za-z]+$/.test(guess)) {
        showMessage('Please use only letters', 'error');
        return false;
    }
    
    return true;
}

/* ----------------------------- Game Logic ----------------------------- */
function processGuess(guess) {
    const result = [];
    const secretArray = gameState.secretWord.split('');
    const guessArray = guess.toUpperCase().split('');
    
    console.log('🔍 Processing guess:', guessArray.join(''));
    console.log('🎯 Against word:', secretArray.join(''));
    
    // Create a copy to track used letters for yellow highlighting
    const secretLetterCount = {};
    secretArray.forEach(letter => {
        secretLetterCount[letter] = (secretLetterCount[letter] || 0) + 1;
    });
    
    // First pass: Mark correct positions (green)
    for (let i = 0; i < 5; i++) {
        if (guessArray[i] === secretArray[i]) {
            result[i] = 'correct'; // Green
            secretLetterCount[guessArray[i]]--;
        }
    }
    
    // Second pass: Mark wrong positions (yellow) and wrong letters (gray)
    for (let i = 0; i < 5; i++) {
        if (result[i] === 'correct') continue; // Already marked as correct
        
        if (secretLetterCount[guessArray[i]] > 0) {
            result[i] = 'present'; // Yellow - letter exists but wrong position
            secretLetterCount[guessArray[i]]--;
        } else {
            result[i] = 'absent'; // Gray - letter not in word
        }
    }
    
    console.log('📊 Result pattern:', result);
    return result;
}

function checkWinCondition(guess) {
    const isWin = guess.toUpperCase() === gameState.secretWord;
    console.log('🏆 Check win:', isWin);
    return isWin;
}

/* ----------------------------- UI Updates ----------------------------- */
function updateGameBoard(guess, result) {
    const currentRow = document.querySelector(`[data-row="${gameState.currentRow}"]`);
    
    if (!currentRow) {
        console.error('❌ Current row not found');
        return;
    }
    
    const letterBoxes = currentRow.querySelectorAll('.letter-box');
    
    guess.toUpperCase().split('').forEach((letter, index) => {
        if (letterBoxes[index]) {
            letterBoxes[index].value = letter;
            letterBoxes[index].classList.add(result[index]);
            
            // Add flip animation
            letterBoxes[index].classList.add('flip');
            
            // Remove animation class after animation completes
            setTimeout(() => {
                letterBoxes[index].classList.remove('flip');
            }, 600);
        }
    });
    
    console.log('✅ Game board updated for row', gameState.currentRow);
}

function showMessage(message, type = 'info') {
    if (elements.messageArea) {
        elements.messageArea.textContent = message;
        elements.messageArea.className = `message-area ${type}`;
        
        // Clear message after 3 seconds for non-critical messages
        if (type === 'info') {
            setTimeout(() => {
                elements.messageArea.textContent = '';
                elements.messageArea.className = 'message-area';
            }, 3000);
        }
    }
    console.log(`📢 ${type.toUpperCase()}: ${message}`);
}

function showLoading(show) {
    if (elements.loadingIndicator) {
        if (show) {
            elements.loadingIndicator.classList.add('show');
        } else {
            elements.loadingIndicator.classList.remove('show');
        }
    }
}

function endGame(won) {
    gameState.gameOver = true;
    
    // Disable all inputs
    document.querySelectorAll('.letter-box').forEach(input => {
        input.disabled = true;
    });
    
    if (won) {
        showMessage(`🎉 Congratulations! You found the word: ${gameState.secretWord}`, 'success');
    } else {
        showMessage(`😔 Game over! The word was: ${gameState.secretWord}`, 'error');
    }
    
    console.log('🏁 Game ended. Won:', won);
}

/* ----------------------------- Event Handlers ----------------------------- */
async function handleSubmit(event) {
    if (event) event.preventDefault();
    
    if (gameState.gameOver) {
        showMessage('Game is over. Click "New Game" to play again.', 'info');
        return;
    }
    
    // Collect guess from current row inputs
    const currentRow = document.querySelector(`[data-row="${gameState.currentRow}"]`);
    if (!currentRow) {
        console.error('❌ Current row not found');
        return;
    }
    
    const inputs = currentRow.querySelectorAll('.letter-box');
    const guessArray = Array.from(inputs).map(input => input.value.trim().toUpperCase());
    
    // Check if all boxes are filled
    if (guessArray.some(letter => letter === '')) {
        showMessage('Please fill all letter boxes', 'error');
        currentRow.classList.add('shake');
        setTimeout(() => currentRow.classList.remove('shake'), 500);
        return;
    }
    
    const guess = guessArray.join('');
    
    console.log('🔤 Processing guess:', guess);
    
    // Validate input format
    if (!isValidInput(guess)) {
        // Add shake animation to current row
        currentRow.classList.add('shake');
        setTimeout(() => currentRow.classList.remove('shake'), 500);
        return;
    }
    
    // Disable submit button during validation
    if (elements.submitButton) {
        elements.submitButton.disabled = true;
    }
    
    try {
        // Validate if it's a real word
        const isValid = await validateWord(guess);
        if (!isValid) {
            showMessage('Not a valid English word', 'error');
            currentRow.classList.add('shake');
            setTimeout(() => currentRow.classList.remove('shake'), 500);
            return;
        }
        
        // Process the guess
        const result = processGuess(guess);
        updateGameBoard(guess, result);
        
        // Add to guesses array
        gameState.guesses.push({
            word: guess,
            result: result
        });
        
        // Check win condition
        if (checkWinCondition(guess)) {
            endGame(true);
            return;
        }
        
        // Move to next row
        gameState.currentRow++;
        
        // Check if out of guesses
        if (gameState.currentRow >= gameState.maxGuesses) {
            endGame(false);
            return;
        }
        
        // Enable next row and focus first input
        enableCurrentRow();
        showMessage(`Guess ${gameState.currentRow + 1} of ${gameState.maxGuesses}`, 'info');
        
    } catch (error) {
        console.error('❌ Error during submit:', error);
        showMessage('An error occurred. Please try again.', 'error');
    } finally {
        // Re-enable submit button
        if (elements.submitButton) {
            elements.submitButton.disabled = false;
        }
    }
}

/* ----------------------------- Row Management ----------------------------- */
function enableCurrentRow() {
    // Disable all inputs first
    document.querySelectorAll('.letter-box').forEach(input => {
        input.disabled = true;
        input.value = '';
    });
    
    // Enable current row
    const currentRow = document.querySelector(`[data-row="${gameState.currentRow}"]`);
    if (currentRow) {
        const inputs = currentRow.querySelectorAll('.letter-box');
        inputs.forEach((input, index) => {
            input.disabled = false;
            
            // Focus first input
            if (index === 0) {
                setTimeout(() => input.focus(), 100);
            }
            
            // Auto-advance to next input
            input.addEventListener('input', (e) => {
                // Only allow letters
                e.target.value = e.target.value.replace(/[^a-zA-Z]/g, '').toUpperCase();
                
                if (e.target.value && index < 4) {
                    inputs[index + 1].focus();
                }
            });
            
            // Handle backspace to go to previous input
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && !e.target.value && index > 0) {
                    inputs[index - 1].focus();
                }
            });
        });
        
        console.log('✅ Row', gameState.currentRow, 'enabled');
    }
}

/* ----------------------------- Event Listeners Setup ----------------------------- */
function setupEventListeners() {
    // Submit button
    if (elements.submitButton) {
        elements.submitButton.addEventListener('click', handleSubmit);
    }
    
    // Reset button
    if (elements.resetButton) {
        elements.resetButton.addEventListener('click', resetGame);
    }
    
    // Handle Enter key for submission
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !gameState.gameOver) {
            handleSubmit(e);
        }
    });
    
    console.log('✅ Event listeners attached');
}

/* ----------------------------- Game Reset ----------------------------- */
async function resetGame() {
    console.log('🔄 Resetting game...');
    
    // Reset game state
    gameState = {
        secretWord: '',
        guesses: [],
        currentRow: 0,
        maxGuesses: 6,
        gameOver: false
    };
    
    // Clear the board
    document.querySelectorAll('.letter-box').forEach(letterBox => {
        letterBox.value = '';
        letterBox.className = 'letter-box';
        letterBox.disabled = true;
    });
    
    // Clear messages
    if (elements.messageArea) {
        elements.messageArea.textContent = '';
        elements.messageArea.className = 'message-area';
    }
    
    // Restart the game
    await init();
}

/* -------------------------- Initialization Function ------------------------- */
async function init() {
    try {
        console.log('🚀 Initializing Wordie...');
        
        // Fetch the secret word
        await fetchSecretWord();
        
        // Setup event listeners
        setupEventListeners();
        
        // Enable first row
        enableCurrentRow();
        
        // Show initial message
        showMessage(`Welcome to Wordie! Guess ${gameState.currentRow + 1} of ${gameState.maxGuesses}`, 'info');
        
        console.log('✅ Wordie initialized successfully');
        
    } catch (error) {
        console.error('❌ Failed to initialize game:', error);
        showMessage('Failed to initialize game. Please refresh the page.', 'error');
    }
}

/* -------------------------- Start the Game ------------------------- */
// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

console.log('🎮 Wordie script loaded');