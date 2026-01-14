import Header from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import RealScreenshots from '../components/RealScreenshots';
import AppShowcase from '../components/AppShowcase';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

function Index() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <Features />
                <RealScreenshots />
                <AppShowcase />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}

export default Index;
