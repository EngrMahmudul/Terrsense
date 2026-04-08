// Initialize Lucide icons
lucide.createIcons();

// Mobile Menu Toggle Logic
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        if (window.innerWidth < 768) {
             document.getElementById('mobile-menu').classList.add('hidden');
        }
    });
});

// Mock AI Disease Detection Logic
const uploadInput = document.getElementById('plant-image-upload');
const detectionArea = document.getElementById('detection-area');
const detectButton = document.getElementById('detect-button');
const resultDiv = document.getElementById('detection-result');
let fileUploaded = false;

// Click handler for the dashed area
detectionArea.addEventListener('click', () => {
    uploadInput.click();
});

// Handle file selection
uploadInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        fileUploaded = true;
        detectButton.disabled = false;
        resultDiv.classList.add('hidden'); // Hide old result
        detectionArea.innerHTML = `<i data-lucide="leaf" class="w-12 h-12 text-green-600 mx-auto mb-3"></i><p class="text-green-800 font-medium">Image Loaded: ${e.target.files[0].name}</p>`;
        lucide.createIcons();
    } else {
        fileUploaded = false;
        detectButton.disabled = true;
    }
});

// Handle detection button click (Mock analysis)
detectButton.addEventListener('click', () => {
    if (fileUploaded) {
        detectButton.innerHTML = 'Analyzing...';
        detectButton.disabled = true;
        resultDiv.classList.add('hidden');

        // Simulate processing delay
        setTimeout(() => {
            detectButton.innerHTML = 'Analysis Complete!';
            resultDiv.classList.remove('hidden');
            detectButton.disabled = false;
            
            // Reset button text after a moment
            setTimeout(() => {
                detectButton.innerHTML = 'Analyze Image';
                lucide.createIcons();
            }, 2000);

        }, 2500);
    }
});

// Form Submission Logic (Mock)
document.querySelector('#contact form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const form = event.target;
    const statusMessage = document.getElementById('status-message');
    
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.innerHTML = 'Sending...';

    // Simulate an API call delay
    setTimeout(() => {
        // Mock success
        statusMessage.textContent = 'Success! We have received your inquiry and will contact you shortly.';
        statusMessage.classList.remove('hidden', 'bg-red-500/20', 'text-red-300');
        statusMessage.classList.add('bg-green-500/20', 'text-green-600');
        
        form.reset();
        
        // Reset button state
        submitButton.disabled = false;
        submitButton.innerHTML = 'Send Inquiry <i data-lucide="mail" class="w-5 h-5 inline-block ml-2"></i>';
        lucide.createIcons(); 

        // Hide message after 5 seconds
        setTimeout(() => {
            statusMessage.classList.add('hidden');
        }, 5000);

    }, 1500);
});
