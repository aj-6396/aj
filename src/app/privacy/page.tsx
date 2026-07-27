export default function Privacy() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-16">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">
          Privacy Policy
        </h1>
        
        <div className="glass-card p-8 rounded-2xl border border-white/5 space-y-6 text-slate-300 leading-relaxed">
          <p>
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Information Collection</h2>
            <p>
              This portfolio website does not collect any personal data automatically. 
              The only information collected is what you voluntarily provide when using the contact form, 
              which includes your name, email address, and message content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Use of Information</h2>
            <p>
              Any information submitted through the contact form is used solely for the purpose of responding 
              to your inquiry. Your information is never sold, shared, or distributed to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Analytics and Cookies</h2>
            <p>
              This website may use minimal, privacy-focused analytics to understand visitor trends 
              without tracking individual users or using invasive cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Third-Party Links</h2>
            <p>
              This website contains links to external sites (such as GitHub, LinkedIn, and project demos). 
              I am not responsible for the privacy practices or content of these external sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact me through the Contact page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
