import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
    question: string;
    answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-border/30 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between py-6 text-left transition-colors"
            >
                <span className="text-lg font-semibold text-foreground pr-8">
                    {question}
                </span>
                <span className="flex items-center justify-center h-8 w-8 shrink-0 rounded-full bg-primary/5 text-primary transition-transform">
                    {isOpen ? (
                        <Minus className="h-4 w-4 stroke-[2.5]" />
                    ) : (
                        <Plus className="h-4 w-4 stroke-[2.5]" />
                    )}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? "max-h-[400px] opacity-100 mb-6" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="text-foreground/60 leading-relaxed pr-12">
                    {answer}
                </div>
            </div>
        </div>
    );
}

export function FAQ() {
    const faqs = [
        {
            question: "How does Equity track my time?",
            answer: "You add entries for extra hours and time off, or import them from your calendar. Equity calculates your running balance against your weekly target and turns it into a score from 0 to 100."
        },
        {
            question: "Is my data private?",
            answer: "Yes. Your data is encrypted in transit and at rest, stored securely in the cloud so it syncs between your devices, and never used for tracking."
        },
        {
            question: "Can I export my data?",
            answer: "Yes. Export a PDF or Excel report for any period. One export is free; unlimited exports are part of Equity Pro."
        },
        {
            question: "Does it work offline?",
            answer: "Equity keeps working without a connection and syncs your entries when you're back online."
        },
        {
            question: "Is there a Mac app?",
            answer: "Yes. Equity for Mac is a menu bar companion for macOS 14 or later. It requires Equity Pro and uses the same account as the iOS app. Download the DMG from this page, open it and drag Equity to your Applications folder."
        },
        {
            question: "How do I delete my account?",
            answer: "Go to Settings > Profile in the app and tap Delete Account. This permanently removes your data."
        }
    ];

    return (
        <section id="support" className="py-24 bg-background">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight mb-4">Support</h2>
                    <p className="text-foreground/60">Common questions about Equity</p>
                </div>

                <div className="bg-card rounded-3xl border border-border/50 p-8 sm:p-12">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
}
