// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}));

// Navbar background styling toggle on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Animate elements on scroll using IntersectionObserver
const observerOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(25px)';
    section.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(section);
});

// Typing effect for hero section (targets name specifically to keep gradient HTML tags intact)
const nameSpan = document.querySelector('.hero-content h1 .name');
if (nameSpan) {
    const originalText = "Kavin R";
    nameSpan.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < originalText.length) {
            nameSpan.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 120);
        }
    }
    
    // Start typing effect after page load
    setTimeout(typeWriter, 1000);
}

// AI Agent Functionality
let agentOpen = false;

function toggleAgent() {
    const agentChat = document.getElementById('agent-chat');
    if (agentChat) {
        agentOpen = !agentOpen;
        agentChat.style.display = agentOpen ? 'flex' : 'none';
    }
}

function sendMessage() {
    const input = document.getElementById('user-input');
    if (!input) return;
    const message = input.value.trim();
    if (!message) return;
    
    addMessage(message, 'user');
    input.value = '';
    
    setTimeout(() => {
        const response = getAgentResponse(message);
        addMessage(response, 'agent');
    }, 800);
}

function addMessage(text, sender) {
    const messagesContainer = document.getElementById('agent-messages');
    if (!messagesContainer) return;
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'agent-message user-message' : 'agent-message';
    messageDiv.innerHTML = `<p>${text}</p>`;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getAgentResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('tech') || lowerMessage.includes('language') || lowerMessage.includes('framework')) {
        return "Kavin is proficient in Programming Languages like C, C++, Javascript, Java, HTML, CSS, and Python. In Frameworks & Libs, he works with ReactJS, NodeJS, Express, Spring-Boot, Pandas, and Numpy. For databases, he uses SQL, MongoDB, and SQLite.";
    }
    if (lowerMessage.includes('project') || lowerMessage.includes('telemetry') || lowerMessage.includes('emotion') || lowerMessage.includes('voice') || lowerMessage.includes('student') || lowerMessage.includes('analysis') || lowerMessage.includes('analytics')) {
        return "Kavin has two major projects listed on his resume: \n1) **Student Performance Analysis Application** (FastAPI, SQLite, Recharts, Plotly) - A student telemetry and intelligence platform with a Text-to-SQL query console and data visualizations.\n2) **Voice Based Emotion Tracker** (Flask, Python, SQLite, Chart.js) - Analyzes speech signals to classify user emotions like happy, sad, angry, neutral, or stressed.";
    }
    if (lowerMessage.includes('education') || lowerMessage.includes('gpa') || lowerMessage.includes('cgpa') || lowerMessage.includes('school') || lowerMessage.includes('college') || lowerMessage.includes('grade')) {
        return "Kavin is pursuing B.Tech in Computer Science at Sri Eshwar College of Engineering, currently holding a cumulative GPA of **7.6 (III-sem)**. He completed schooling at The Modern Academy Higher Secondary School with **89% in 12th Grade** and **92.4% in 10th Grade**.";
    }
    if (lowerMessage.includes('intern') || lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('mern')) {
        return "In December 2025, Kavin completed a **MERN Full Stack Internship** where he built and deployed a grocery E-commerce project using React, Node.js, Express, MongoDB, and MySQL. He also has a verified certificate for it!";
    }
    if (lowerMessage.includes('leetcode') || lowerMessage.includes('coding') || lowerMessage.includes('rating') || lowerMessage.includes('rank') || lowerMessage.includes('problems') || lowerMessage.includes('dsa') || lowerMessage.includes('algorithm')) {
        return "Kavin is highly active on LeetCode with the profile username `Kavin_Ravikumar`. He has a max rating of **1601**, a global rank of **694,257**, and has solved **200+** algorithmic problems.";
    }
    if (lowerMessage.includes('achievement') || lowerMessage.includes('award') || lowerMessage.includes('kurukshetra') || lowerMessage.includes('expo') || lowerMessage.includes('ceg')) {
        return "Kavin is a **Finalist @ Kurukshetra(CEG) Project Expo 2026**, which is one of India's premier university tech expos.";
    }
    if (lowerMessage.includes('cert') || lowerMessage.includes('course') || lowerMessage.includes('udemy') || lowerMessage.includes('oracle')) {
        return "Kavin holds multiple professional credentials: Learn Python Programming (Udemy), Mastering DSA in C & C++ (Udemy), Java from Zero to First Job (Udemy), Java Foundation Course (Oracle), and MERN Stack Full-Stack Bootcamp (2025).";
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone') || lowerMessage.includes('call') || lowerMessage.includes('reach') || lowerMessage.includes('linkedin') || lowerMessage.includes('github') || lowerMessage.includes('address')) {
        return "You can connect with Kavin at kavinravicse@gmail.com or via call at +91 9342541785. Check out his LinkedIn (linkedin.com/in/kavinravikumar567) or GitHub (github.com/KavinRavikumar-567)!";
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        return "Hello! I'm Kavin's AI Portfolio Assistant. Feel free to ask me about his B.Tech education, MERN internship experience, projects (like the Voice Emotion Tracker), skills, or aspirations as an aspiring Data Engineer!";
    }
    
    return "I can tell you all about Kavin's skills, B.Tech education, MERN internship, certifications, achievements, and projects! Ask me something specific.";
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Hover effects for project and certification cards
document.querySelectorAll('.project-card, .cert-card, .achievement-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Initialize agent on page load
document.addEventListener('DOMContentLoaded', () => {
    // Pulse animation for agent chatbot entry helper
    setTimeout(() => {
        const agentToggle = document.querySelector('.agent-toggle');
        if (agentToggle) {
            agentToggle.style.animation = 'pulse 1.2s ease-in-out 3';
        }
    }, 3000);
});