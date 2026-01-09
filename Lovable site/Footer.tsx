import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-sm tracking-display font-medium uppercase">Equity</span>
          </div>
          
          <nav className="flex items-center gap-6">
            <Link 
              to="/privacy" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/support" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Support
            </Link>
          </nav>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear} Equity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
