import Header from "../components/Navbar";
import Footer from "../components/Footer";

const Terms = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-32 pb-20">
                <div className="container max-w-3xl">
                    <div className="mb-12 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                        <p className="text-sm tracking-label uppercase text-muted-foreground mb-4">
                            Legal
                        </p>
                        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
                            Terms of Use
                        </h1>
                        <p className="text-muted-foreground">
                            Last updated: January 14, 2026
                        </p>
                    </div>

                    <div className="prose prose-lg max-w-none space-y-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                        <section className="space-y-4">
                            <h2 className="text-2xl font-medium">Agreement to Terms</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                By downloading, installing, or using Equity ("the App"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the App.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-medium">Description of Service</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Equity is a time tracking application that helps you manage your work-life balance by tracking overtime and time off. The App allows you to:
                            </p>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                                    <span>Log time entries (overtime or time off)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                                    <span>View your time balance and history</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                                    <span>Export reports and analytics (Pro feature)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                                    <span>Sync data across devices (Pro feature)</span>
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-medium">Subscriptions & In-App Purchases</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Equity offers the following subscription options:
                            </p>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                                    <span><strong className="text-foreground">Equity Pro Yearly:</strong> Annual subscription that auto-renews each year until cancelled.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                                    <span><strong className="text-foreground">Equity Pro Lifetime:</strong> One-time purchase granting permanent access to Pro features.</span>
                                </li>
                            </ul>

                            <h3 className="text-xl font-medium mt-6">Auto-Renewal Terms</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                For the Equity Pro Yearly subscription:
                            </p>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                                    <span>Payment will be charged to your Apple ID account at confirmation of purchase.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                                    <span>Subscription automatically renews unless auto-renew is turned off at least 24 hours before the end of the current period.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                                    <span>Account will be charged for renewal within 24 hours prior to the end of the current period.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                                    <span>You can manage and cancel your subscriptions by going to your Account Settings on the App Store after purchase.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                                    <span>Any unused portion of a free trial period will be forfeited when you purchase a subscription.</span>
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-medium">User Accounts</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                To access certain features, you may need to create an account. You are responsible for:
                            </p>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                                    <span>Maintaining the confidentiality of your account credentials</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                                    <span>All activities that occur under your account</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                                    <span>Notifying us immediately of any unauthorized use</span>
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-medium">Acceptable Use</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                You agree not to:
                            </p>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                                    <span>Use the App for any unlawful purpose</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                                    <span>Attempt to gain unauthorized access to our systems</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                                    <span>Interfere with or disrupt the App's functionality</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                                    <span>Reverse engineer or decompile the App</span>
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-medium">Intellectual Property</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                The App, including its design, features, and content, is owned by us and protected by intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the App for personal purposes.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-medium">Disclaimer of Warranties</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                The App is provided "as is" without warranties of any kind, either express or implied. We do not guarantee that the App will be error-free, uninterrupted, or meet your specific requirements.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-medium">Limitation of Liability</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-medium">Changes to Terms</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We may update these Terms of Use from time to time. We will notify you of any material changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the App after changes constitutes acceptance of the new Terms.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-medium">Contact Us</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions about these Terms of Use, please contact us at:{" "}
                                <a href="mailto:glennsvends1@gmail.com" className="text-accent hover:underline">
                                    glennsvends1@gmail.com
                                </a>
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Terms;
