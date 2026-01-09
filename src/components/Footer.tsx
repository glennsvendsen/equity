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
                        <a
                            href="mailto:contact@arcticlabs.io"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Contact
                        </a>
                    </nav>

                    <p className="text-sm text-muted-foreground">
                        © {currentYear} Arctic Labs
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
