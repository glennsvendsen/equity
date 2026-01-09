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
                className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? "max-h-[300px] opacity-100 mb-6" : "max-h-0 opacity-0"
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
            answer: "You manually add entries for work hours and time off. Equity calculates your running balance by comparing your actual hours against your expected schedule."
        },
        {
            question: "Is my data private?",
            answer: "Absolutely. All data is stored locally on your device and synced via your personal iCloud account. We have zero access to your information."
        },
        {
            question: "Can I export my data?",
            answer: "Yes, you can export your complete history as a CSV file at any time for your records or reporting purposes."
        },
        {
            question: "Does it work offline?",
            answer: "Yes, Equity works completely offline. Your data syncs automatically when you're connected to the internet."
        },
        {
            question: "How do I delete my account?",
            answer: "Simply delete the app from your device. Since all data is stored locally and in your iCloud, removing the app removes all associated data."
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
