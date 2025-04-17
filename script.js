document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const showLoginBtn = document.getElementById('show-login');
    const showSignupBtn = document.getElementById('show-signup');
    const loginPage = document.querySelector('.login-page');
    const signupPage = document.querySelector('.signup-page');


    
    // Switch to Login Page
    showLoginBtn.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            // Switch active tab
            showLoginBtn.classList.add('active');
            showSignupBtn.classList.remove('active');
            
            // Animate page transition
            signupPage.classList.remove('active');
            setTimeout(() => {
                loginPage.classList.add('active');
            }, 300);
        }
    });




    
    // Switch to Signup Page
    showSignupBtn.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            // Switch active tab
            showSignupBtn.classList.add('active');
            showLoginBtn.classList.remove('active');
            
            // Animate page transition
            loginPage.classList.remove('active');
            setTimeout(() => {
                signupPage.classList.add('active');
            }, 300);
        }
    });
    
    // Form submissions
    const loginForm = document.querySelector('.login-page .auth-form');
    const signupForm = document.querySelector('.signup-page .auth-form');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your login logic here
        alert('Login functionality would be implemented here!');
    });
    
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your signup logic here
        alert('Signup functionality would be implemented here!');
    });
    

    // 
    // Create bubbles for background
    function createBubbles() {
        const bgAnimation = document.querySelector('.bg-animation');
        for (let i = 0; i < 10; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            
            // Random size
            const size = Math.random() * 200 + 50;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            
            // Random position
            bubble.style.left = `${Math.random() * 100}%`;
            bubble.style.top = `${Math.random() * 100}%`;
            
            // Random animation
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 5;
            bubble.style.animation = `float ${duration}s ${delay}s infinite linear`;
            
            bgAnimation.appendChild(bubble);
        }
    }
    
    createBubbles();
});