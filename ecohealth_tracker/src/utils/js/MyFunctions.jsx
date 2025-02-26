import { useState, useRef } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import 'glightbox/dist/css/glightbox.css';
import GLightbox from 'glightbox';
/**
 * Custom hook to manage the chatbot functionality
 * @returns {Object} Functions and state for chatbot management
 */
export const useChatbotFunctions = () => {
  const chatWindowRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  
  /**
   * Toggles the visibility of the chatbot
   */
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  /**
   * Initializes the chatbot UI and event listeners
   */
  const initializeChatbot = () => {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotContainer = document.getElementById('chatbot-container');
    
    if (chatbotToggle && chatbotContainer) {
      // Apply initial state
      chatbotContainer.className = isOpen ? 'active' : 'd-none';
      
      // Add click event to toggle button
      chatbotToggle.addEventListener('click', () => {
        toggleChatbot();
        chatbotContainer.className = isOpen ? 'd-none' : 'active';
      });
    }
    
    // Add window resize event handler
    window.addEventListener('resize', adjustChatbotPosition);
    
    return () => {
      // Cleanup event listeners
      if (chatbotToggle) {
        chatbotToggle.removeEventListener('click', toggleChatbot);
      }
      window.removeEventListener('resize', adjustChatbotPosition);
    };
  };

  /**
   * Adjusts the chatbot position based on screen size
   */
  const adjustChatbotPosition = () => {
    const chatbotContainer = document.getElementById('chatbot-container');
    if (chatbotContainer) {
      if (window.innerWidth < 768) {
        // Mobile positioning
        chatbotContainer.style.bottom = '70px';
        chatbotContainer.style.right = '10px';
      } else {
        // Desktop positioning
        chatbotContainer.style.bottom = '100px';
        chatbotContainer.style.right = '30px';
      }
    }
  };

  /**
   * Scrolls the chat window to the bottom
   */
  const scrollToBottom = () => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  };

  /**
   * Processes and formats messages for display
   * @param {string} message - Raw message text
   * @returns {string} Formatted message
   */
  const formatMessage = (message) => {
    // Convert URLs to clickable links
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return message.replace(urlRegex, (url) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`);
  };

  return {
    isOpen,
    chatWindowRef,
    toggleChatbot,
    initializeChatbot,
    adjustChatbotPosition,
    scrollToBottom,
    formatMessage
  };
};

/**
 * Main function to initialize chatbot functionality
 * @returns {Function} Cleanup function
 */
const MyFunction = () => {
 
  const chatbotToggle = document.getElementById('chatbot-toggle');
  const chatbotContainer = document.getElementById('chatbot-container');
  
    /**
     * Apply .scrolled class to the body as the page is scrolled down
     */
    const toggleScrolled = () => {
        const selectBody = document.querySelector('body');
        const selectHeader = document.querySelector('#header');
        if (!selectHeader || (!selectHeader.classList.contains('scroll-up-sticky') &&
            !selectHeader.classList.contains('sticky-top') && 
            !selectHeader.classList.contains('fixed-top'))) return;
  
        window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
      };
  
      // Add event listeners
      document.addEventListener('scroll', toggleScrolled);
      window.addEventListener('load', toggleScrolled);
  
      // Mobile nav toggle
      const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
      const mobileNavToggle = () => {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        mobileNavToggleBtn.classList.toggle('bi-list');
        mobileNavToggleBtn.classList.toggle('bi-x');
      };
      
      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.addEventListener('click', mobileNavToggle);
      }
  
      // Hide mobile nav on same-page/hash links
      document.querySelectorAll('#navmenu a').forEach(navmenu => {
        navmenu.addEventListener('click', () => {
          if (document.querySelector('.mobile-nav-active')) {
            mobileNavToggle();
          }
        });
      });
  
      // Toggle mobile nav dropdowns
      document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
        navmenu.addEventListener('click', function(e) {
          e.preventDefault();
          this.parentNode.classList.toggle('active');
          this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
          e.stopImmediatePropagation();
        });
      });
  
      // Preloader
      const preloader = document.querySelector('#preloader');
      if (preloader) {
        window.addEventListener('load', () => {
          preloader.remove();
        });
      }
  
      // Scroll top button
      const scrollTop = document.querySelector('.scroll-top');
      const toggleScrollTop = () => {
        if (scrollTop) {
          window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
      };
  
      if (scrollTop) {
        scrollTop.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
      }
  
      window.addEventListener('load', toggleScrollTop);
      document.addEventListener('scroll', toggleScrollTop);
  
      // Animation on scroll function and init
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
  
      // Initiate glightbox
      GLightbox({
        selector: '.glightbox'
      });
  
      // Frequently Asked Questions Toggle
      document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
        faqItem.addEventListener('click', () => {
          faqItem.parentNode.classList.toggle('faq-active');
        });
      });
  
      // Cleanup function to remove event listeners
      return () => {
        document.removeEventListener('scroll', toggleScrolled);
        window.removeEventListener('load', toggleScrolled);
        if (mobileNavToggleBtn) {
          mobileNavToggleBtn.removeEventListener('click', mobileNavToggle);
        }
        window.removeEventListener('load', toggleScrollTop);
        document.removeEventListener('scroll', toggleScrollTop);
      };
  
  
  const handleToggle = () => {
    if (chatbotContainer) {
      chatbotContainer.classList.toggle('d-none');
      chatbotContainer.classList.toggle('active');
    }
  };
  
  if (chatbotToggle) {
    chatbotToggle.addEventListener('click', handleToggle);
  }
  
  // Position the chatbot based on screen size
  const adjustPosition = () => {
    if (chatbotContainer) {
      if (window.innerWidth < 768) {
        chatbotContainer.style.width = '300px';
        chatbotContainer.style.height = '400px';
      } else {
        chatbotContainer.style.width = '350px';
        chatbotContainer.style.height = '500px';
      }
    }
  };
  
  window.addEventListener('resize', adjustPosition);
  
  // Initialize positioning
  adjustPosition();
  
  // Cleanup function to remove event listeners
  return () => {
    if (chatbotToggle) {
      chatbotToggle.removeEventListener('click', handleToggle);
    }
    window.removeEventListener('resize', adjustPosition);
  };
};

export default MyFunction;