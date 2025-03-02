document.write(`
    <footer class="site-footer">
      <div class="footer-container">
        <div class="footer-section">
          <h3>Developer Tools</h3>
          <ul>
            <li><a href="https://sachininmindfire.github.io/text-diff/">Text Diff Tool</a></li>
            <li><a href="https://sachininmindfire.github.io/sql-poco-app/">SQL POCO Generator</a></li>
            <li><a href="https://sachininmindfire.github.io/sql-diagrams/">SQL Diagrams</a></li>
            <li><a href="https://sachininmindfire.github.io/free-api/">Free JSON API</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="https://sachininmindfire.github.io">Blog Home</a></li>
            <li><a href="https://sachininmindfire.github.io/articles">Articles</a></li>
            <li><a href="https://sachininmindfire.github.io/terms">Terms</a></li>
            <li<a href="https://sachininmindfire.github.io/tips">Tips</a></li>
            <li><a href="https://sachininmindfire.github.io/about/">About</a></li>
            <li><a href="https://sachininmindfire.github.io/contact/">Contact</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Connect</h3>
          <div class="social-links">
            <a href="https://github.com/sachininmindfire" target="_blank" rel="noopener">GitHub</a>
            <a href="http://in.linkedin.com/pub/sachin-kumar/22/176/928" target="_blank" rel="noopener">Twitter</a>
            <a href="http://in.linkedin.com/pub/sachin-kumar/22/176/928" target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Sachin's Developer Tools. All rights reserved.</p>
        <p>
          <a href="https://sachininmindfire.github.io/privacy-policy/">Privacy Policy</a> | 
          <a href="https://sachininmindfire.github.io/terms/">Terms of Use</a>
        </p>
      </div>
    </footer>
    
    <style>
      .site-footer {
        background-color: #f5f5f5;
        padding: 2rem 1rem;
        margin-top: 3rem;
        border-top: 1px solid #e5e5e5;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      }
      
      .footer-container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      
      .footer-section {
        flex: 1;
        min-width: 200px;
        margin-bottom: 1.5rem;
        padding-right: 2rem;
      }
      
      .footer-section h3 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
        color: #333;
      }
      
      .footer-section ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      .footer-section ul li {
        margin-bottom: 0.5rem;
      }
      
      .footer-section a, .social-links a {
        color: #0366d6;
        text-decoration: none;
        transition: color 0.2s ease;
      }
      
      .footer-section a:hover, .social-links a:hover {
        color: #044289;
        text-decoration: underline;
      }
      
      .social-links {
        display: flex;
        gap: 1rem;
      }
      
      .footer-bottom {
        text-align: center;
        margin-top: 2rem;
        padding-top: 1.5rem;
        border-top: 1px solid #e5e5e5;
        color: #666;
        font-size: 0.9rem;
      }
      
      .footer-bottom a {
        color: #0366d6;
        text-decoration: none;
      }
      
      .footer-bottom a:hover {
        text-decoration: underline;
      }
      
      @media (max-width: 768px) {
        .footer-container {
          flex-direction: column;
        }
        
        .footer-section {
          padding-right: 0;
        }
      }
    </style>
  `);