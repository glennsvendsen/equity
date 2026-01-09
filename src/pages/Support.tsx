import Header from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, MessageCircle, FileText, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "How do I add time entries?",
        answer: "Tap the 'Add Time' button on the main screen to enter a custom amount, or long-press it to reveal quick add options (1h, 2h, 3h, or 8h). Your entry will be logged immediately."
    },
    {
        question: "How does the time balance work?",
        answer: "Your time balance represents the difference between hours worked and hours taken off. Positive values mean you've worked extra hours, while negative values indicate time off taken."
    },
    {
        question: "Can I export my data?",
        answer: "Yes! Go to Settings and tap 'Export Data'. You can choose to export as PDF for a formatted report or Excel for raw data. Select your preferred time range (last week, month, quarter, or year)."
    },
    {
        question: "How do I sync across devices?",
        answer: "Once you're signed in with your account, your data automatically syncs across all your devices. Make sure you're connected to the internet for syncing to occur."
    },
    {
        question: "Can I delete my account?",
        answer: "Yes. Go to Settings > Profile and tap 'Delete Account'. This will permanently remove all your data. This action cannot be undone."
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely. Your data is encrypted both in transit and at rest. We use industry-standard security practices and your data is stored securely on Supabase infrastructure."
    }
];

const Support = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-32 pb-20">
                <div className="container max-w-3xl">
                    <div className="mb-16 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                        <p className="text-sm tracking-label uppercase text-muted-foreground mb-4">
                            Help Center
                        </p>
                        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
                            Support
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            We're here to help. Find answers to common questions or get in touch.
                        </p>
                    </div>

                    {/* Contact Options */}
                    <div className="grid md:grid-cols-2 gap-6 mb-20 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                        <a
                            href="mailto:glennsvends1@gmail.com"
                            className="group p-8 rounded-2xl border border-border bg-card hover:bg-secondary/50 transition-colors"
                        >
                            <Mail className="w-6 h-6 text-accent mb-4" />
                            <h2 className="text-lg font-medium mb-2">Email Support</h2>
                            <p className="text-muted-foreground mb-4">
                                Get help via email. We typically respond within 24 hours.
                            </p>
                            <span className="text-accent text-sm group-hover:underline">
                                glennsvends1@gmail.com
                            </span>
                        </a>

                        <div className="p-8 rounded-2xl border border-border bg-card">
                            <MessageCircle className="w-6 h-6 text-accent mb-4" />
                            <h2 className="text-lg font-medium mb-2">In-App Feedback</h2>
                            <p className="text-muted-foreground mb-4">
                                Send feedback directly from the app via Settings → Send Feedback.
                            </p>
                            <span className="text-muted-foreground text-sm">
                                Quick and easy
                            </span>
                        </div>
                    </div>

                    {/* FAQs */}
                    <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                        <div className="flex items-center gap-3 mb-8">
                            <FileText className="w-5 h-5 text-muted-foreground" />
                            <h2 className="text-2xl font-medium">Frequently Asked Questions</h2>
                        </div>

                        <div className="space-y-3">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border border-border rounded-xl overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
                                    >
                                        <span className="font-medium pr-4">{faq.question}</span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                    {openFaq === index && (
                                        <div className="px-5 pb-5">
                                            <p className="text-muted-foreground leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Still need help */}
                    <div className="mt-16 p-8 rounded-2xl bg-secondary/50 text-center opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
                        <h3 className="text-xl font-medium mb-2">Still need help?</h3>
                        <p className="text-muted-foreground mb-6">
                            Can't find what you're looking for? We're happy to help.
                        </p>
                        <a
                            href="mailto:glennsvends1@gmail.com"
                            className="inline-flex items-center justify-center h-12 px-8 bg-primary text-primary-foreground text-sm tracking-label uppercase rounded-lg hover:opacity-90 transition-opacity"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Support;
