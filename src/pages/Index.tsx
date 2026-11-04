import Header from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import RealScreenshots from '../components/RealScreenshots';
import MacApp from '../components/MacApp';
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
                <MacApp />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}

export default Index;
