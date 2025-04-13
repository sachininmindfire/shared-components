document.write(`
    <header class="site-header">
      <div class="header-container">
        <div class="logo-container">
          <a href="/" class="site-logo">
            <span class="logo-text">Toolbuttons.in</span>
          </a>
        </div>
        
        <nav class="main-nav">
          <button class="mobile-menu-button" aria-label="Toggle menu">
            <span class="menu-icon"></span>
          </button>
          
          <ul class="nav-links">
            <li class="nav-item dropdown">
              <a href="#" class="dropdown-toggle">Tools</a>
              <ul class="dropdown-menu">
                <li><a href="/text-diff/">Text Diff Tool</a></li>
                <li><a href="/sql-poco-app/">SQL POCO Generator</a></li>
                <li><a href="/sql-diagrams/">SQL Diagrams</a></li>
                <li><a href="/free-api/">Free JSON API</a></li>
                <li><a href="/md-pdf-convertor/">Md To PDF Convertor</a></li>
                <li><a href="/json-formatter/">Json Formatter</a></li>                
              </ul>
            </li>
            <li class="nav-item"><a href="">Blog Home</a></li>
            <li class="nav-item"><a href="/articles">Articles</a></li>
            <li class="nav-item"><a href="/terms">Terms</a></li>
            <li class="nav-item"><a href="/tips">Tips</a></li>
            <li class="nav-item"><a href="/about/">About</a></li>
            <li class="nav-item"><a href="/contact/">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  
    <style>
      /* Reset some basic elements */
      .site-header * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      /* Header styling */
      .site-header {
        background-color: #2a6aaa;
        color: #ffffff;
        padding: 1rem 0;
        position: relative;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      }
      
      .header-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      /* Logo styling */
      .logo-container {
        display: flex;
        align-items: center;
      }
      
      .site-logo {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #ffffff;
      }
      
      .logo-text {
        font-size: 1.5rem;
        font-weight: bold;
        margin-left: 0.5rem;
      }
      
      /* Navigation styling */
      .main-nav {
        display: flex;
        align-items: center;
      }
      
      .nav-links {
        display: flex;
        list-style: none;
      }
      
      .nav-item {
        margin-left: 1.5rem;
        position: relative;
      }
      
      .nav-item a {
        color: #ffffff;
        text-decoration: none;
        font-size: 1rem;
        transition: color 0.3s ease;
      }
      
      .nav-item a:hover {
        color: #58a6ff;
      }
      
      /* Dropdown menu */
      .dropdown {
        position: relative;
      }
      
      .dropdown-toggle {
        display: flex;
        align-items: center;
      }
      
      .dropdown-toggle::after {
        content: '';
        display: inline-block;
        margin-left: 0.5rem;
        vertical-align: middle;
        border-top: 0.3rem solid;
        border-right: 0.3rem solid transparent;
        border-left: 0.3rem solid transparent;
      }
      
      .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 1000;
        display: none;
        min-width: 10rem;
        padding: 0.5rem 0;
        margin: 0.125rem 0 0;
        background-color: #ffffff;
        border-radius: 0.25rem;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        list-style: none;
      }
      
      .dropdown-menu li {
        padding: 0;
      }
      
      .dropdown-menu a {
        display: block;
        padding: 0.5rem 1rem;
        color: #24292e;
        white-space: nowrap;
      }
      
      .dropdown-menu a:hover {
        background-color: #f6f8fa;
        color: #0366d6;
      }
      
      .dropdown:hover .dropdown-menu {
        display: block;
      }
      
      /* Mobile menu button */
      .mobile-menu-button {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
      }
      
      .menu-icon,
      .menu-icon::before,
      .menu-icon::after {
        display: block;
        width: 1.5rem;
        height: 2px;
        background-color: #ffffff;
        position: relative;
        transition: all 0.3s ease;
      }
      
      .menu-icon::before,
      .menu-icon::after {
        content: '';
        position: absolute;
        left: 0;
      }
      
      .menu-icon::before {
        top: -6px;
      }
      
      .menu-icon::after {
        top: 6px;
      }
      
      /* Responsive styling */
      @media (max-width: 768px) {
        .mobile-menu-button {
          display: block;
          padding: 0.5rem;
        }
        
        .nav-links {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color:rgb(3, 62, 120);
          flex-direction: column;
          padding: 1rem;
          display: none;
          z-index: 100;
        }
        
        .nav-links.active {
          display: flex;
        }
        
        .nav-item {
          margin: 0.5rem 0;
        }
        
        .dropdown-menu {
          position: static;
          box-shadow: none;
          background-color: transparent;
          padding-left: 1rem;
        }
        
        .dropdown-menu a {
          color: #ffffff;
        }
        
        .dropdown-menu a:hover {
          background-color: transparent;
          color: #58a6ff;
        }
      }
    </style>
  
    <script>
      // Add mobile menu functionality
      document.addEventListener('DOMContentLoaded', function() {
        const menuButton = document.querySelector('.mobile-menu-button');
        const navLinks = document.querySelector('.nav-links');
        
        if (menuButton && navLinks) {
          menuButton.addEventListener('click', function() {
            navLinks.classList.toggle('active');
          });
        }
      });
    </script>
  `);