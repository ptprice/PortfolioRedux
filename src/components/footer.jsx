// import './pages/App.css'; // Import your styles

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 My Portfolio App</p>
      <p>Connect with me:</p>
      <div className="social-links">
        <a href="https://github.com/ptprice" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://linkedin.com/in/paul-p-aa00a512" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://stackoverflow.com/users/23654574/paul-price?tab=profile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-stack-overflow"></i> Stack Overflow
        </a>
      </div>
    </footer>
  );
};

export default Footer;
