import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
            <div className="container flex items-center justify-between h-16">
                <Link to="/" className="flex items-center gap-2">
                    <span className="text-lg tracking-display font-medium uppercase">Equity</span>
                </Link>

                <nav className="flex items-center gap-8">
                    <Link
                        to="/privacy"
                        className="text-sm tracking-label uppercase text-muted-foreground hover:text-foreground transition-colors link-underline"
                    >
                        Privacy
                    </Link>
                    <Link
                        to="/support"
                        className="text-sm tracking-label uppercase text-muted-foreground hover:text-foreground transition-colors link-underline"
                    >
                        Support
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
