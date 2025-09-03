"use-strict";

// FAQ functionality
        function faqFunc() {
            const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                const answer = item.querySelector('.faq-answer');
                const icon = item.querySelector('.faq-icon i');
                
                question.addEventListener('click', () => {
                    // Toggle active class
                    item.classList.toggle('active');
                    
                    // Toggle answer visibility
                    if (item.classList.contains('active')) {
                        answer.style.maxHeight = answer.scrollHeight + 'px';
                        icon.classList.remove('fa-chevron-down');
                        icon.classList.add('fa-chevron-up');
                    } else {
                        answer.style.maxHeight = '0';
                        icon.classList.remove('fa-chevron-up');
                        icon.classList.add('fa-chevron-down');
                    }
                    
                    // Close other FAQ items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                            otherItem.querySelector('.faq-answer').style.maxHeight = '0';
                            otherItem.querySelector('.faq-icon i').classList.remove('fa-chevron-up');
                            otherItem.querySelector('.faq-icon i').classList.add('fa-chevron-down');
                        }
                    });
                });
            });
};
        
faqFunc();

// Menu icon click event to toggle sidebar for mobile
// document.addEventListener('DOMContentLoaded', () => {
//     const menuIcon = document.querySelector('.menu-icon');
//     const body = document.body;

//     // Create sidebar
//     const sidebar = document.createElement('div');
//     sidebar.className = 'sidebar-options';

//     // Clone the options spans
//     const signInBtn = document.querySelector('.sign-in-btn').cloneNode(true);
//     const talkBtn = document.querySelector('.Talk-btn').cloneNode(true);

//     sidebar.appendChild(signInBtn);
//     sidebar.appendChild(talkBtn);

//     // Add close button
//     const closeBtn = document.createElement('button');
//     closeBtn.innerHTML = '&times;';
//     closeBtn.style.position = 'absolute';
//     closeBtn.style.top = '10px';
//     closeBtn.style.right = '10px';
//     closeBtn.style.background = 'none';
//     closeBtn.style.border = 'none';
//     closeBtn.style.fontSize = '24px';
//     closeBtn.style.cursor = 'pointer';
//     closeBtn.style.color = '#0B1A43';
//     sidebar.appendChild(closeBtn);

//     body.appendChild(sidebar);

//     if (menuIcon) {
//         menuIcon.addEventListener('click', () => {
//             sidebar.classList.toggle('active');
//         });

//         closeBtn.addEventListener('click', () => {
//             sidebar.classList.remove('active');
//         });

//         // Close sidebar when clicking outside
//         document.addEventListener('click', (e) => {
//             if (!sidebar.contains(e.target) && !menuIcon.contains(e.target)) {
//                 sidebar.classList.remove('active');
//             }
//         });
//     }
// });
