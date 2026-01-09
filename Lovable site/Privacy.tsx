import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: December 25, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <section className="space-y-4">
              <h2 className="text-2xl font-medium">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Equity ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you use Equity, we may collect the following types of information:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Account Information:</strong> Email address and profile details when you create an account.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Time Entries:</strong> The hours you log, dates, and any notes you add.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Usage Data:</strong> How you interact with the app to improve our services.</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span>Provide, maintain, and improve the Equity app</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span>Sync your data across your devices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span>Respond to your requests and provide customer support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span>Send you important updates about the app</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium">Data Storage & Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your data is stored securely using Supabase, a trusted open-source backend platform. Supabase provides:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span>End-to-end encryption for data in transit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span>Encryption at rest for stored data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span>Regular security audits and compliance with industry standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span>Row Level Security (RLS) to ensure you can only access your own data</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                For more information about Supabase's security practices, visit{" "}
                <a href="https://supabase.com/security" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  supabase.com/security
                </a>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium">Data Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span>With your consent</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span>To comply with legal obligations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span>To protect our rights and prevent fraud</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span>Access and export your data at any time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span>Request correction of inaccurate data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span>Request deletion of your account and data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span>Opt out of non-essential communications</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Equity is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:{" "}
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

export default Privacy;
