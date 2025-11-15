import { useEffect } from 'react';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-8 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Effective Date: November 15, 2025</p>

          <div className="space-y-8 text-gray-700">
            {/* Introduction */}
            <section>
              <p className="text-lg leading-relaxed">
                Welcome to <strong>TechDine</strong>! These Terms of Service ("Terms") govern your access to and use of TechDine's restaurant management platform, website, and all related services. By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.
              </p>
              <p className="mt-4 font-semibold text-gray-900">
                IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE OUR SERVICES.
              </p>
            </section>

            {/* Section 1 - Definitions */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Definitions</h2>
              <ul className="space-y-2 list-none">
                <li><strong>"TechDine", "we", "us", "our"</strong> refers to the TechDine platform and its operators</li>
                <li><strong>"Customer", "you", "your"</strong> refers to the individual or business entity using our Services</li>
                <li><strong>"Services"</strong> means all products, features, and functionality provided by TechDine</li>
                <li><strong>"Platform"</strong> refers to TechDine's web-based restaurant management software</li>
                <li><strong>"User Data"</strong> means any data, content, or information you upload or input into our Services</li>
              </ul>
            </section>

            {/* Section 2 - Acceptance */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Acceptance of Terms</h2>
              <p>
                By creating an account, accessing our website at techdine.vercel.app, or utilizing any of our Services, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>You have read, understood, and agree to be bound by these Terms</li>
                <li>You have read and agree to our Privacy Policy</li>
                <li>You are at least 18 years of age</li>
                <li>You have the legal capacity to enter into binding contracts</li>
                <li>All information you provide is accurate, current, and complete</li>
              </ul>
            </section>

            {/* Section 3 - Services */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Description of Services</h2>
              <p className="mb-3">
                TechDine provides a cloud-based restaurant management platform for restaurants, cafes, cloud kitchens, and food service businesses across India.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">Currently Available Features:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>QR Code Ordering:</strong> Generate QR codes for contactless menu browsing and ordering</li>
                <li><strong>Digital Menu Management:</strong> Create and manage your menu in real-time</li>
                <li><strong>WhatsApp Integration:</strong> Automate customer communications</li>
                <li><strong>Demo Booking:</strong> Schedule product demonstrations</li>
                <li><strong>Customer Support:</strong> Email, phone, and WhatsApp support</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">Coming Soon:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Billing & Invoice Management with GST compliance</li>
                <li>Inventory Tracking & Alerts</li>
                <li>Analytics Dashboard</li>
                <li>Payment Integration (Razorpay)</li>
                <li>Table & Staff Management</li>
                <li>Multi-location Support</li>
              </ul>
            </section>

            {/* Section 4 - Account */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Account Registration & Security</h2>
              <p className="mb-2">When you create an account, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>
            </section>

            {/* Section 5 - Pricing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Pricing & Payment Terms</h2>
              
              <div className="bg-blue-50 rounded-lg p-6 mt-4 border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Standard Plans:</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-lg">Starter - ₹999/month</h4>
                    <p className="text-sm text-gray-700">QR ordering, digital menu, basic features</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Professional - ₹2,499/month</h4>
                    <p className="text-sm text-gray-700">All Starter features + analytics, inventory, priority support</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Enterprise - Custom Pricing</h4>
                    <p className="text-sm text-gray-700">Multi-location, dedicated manager, custom integrations</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mt-4 border-2 border-green-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🎉 Early Partner Program</h3>
                <p className="text-2xl font-bold text-green-700">₹299 setup + ₹199/month for 3 months</p>
                <p className="text-sm text-gray-700 mt-2">Limited to first 50 Jaipur restaurants. Includes QR setup, priority support, and early access to features.</p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Payment Terms:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>All prices in INR, excluding GST</li>
                <li>Monthly subscriptions auto-renew</li>
                <li>30 days notice for price changes</li>
                <li>Payment via UPI, bank transfer (card payments coming soon)</li>
              </ul>
            </section>

            {/* Section 6 - Trials */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Free Trials & Promotions</h2>
              <p>Free trials and promotional offers are subject to specific terms disclosed at enrollment. Limited to one per customer.</p>
            </section>

            {/* Section 7 - Refunds */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Refund & Cancellation Policy</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="font-semibold">⚠️ Refund Policy Under Development</p>
                <p className="text-sm mt-2">Final refund terms will be communicated before automated payment processing begins.</p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">Preliminary Guidelines:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Setup fees generally non-refundable (except service failure)</li>
                <li>Monthly subscriptions: case-by-case within 7 days</li>
                <li>Annual subscriptions: pro-rated refunds within 30 days</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">Cancellation:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cancel anytime via email to techdine360@gmail.com</li>
                <li>Access retained until end of billing period</li>
                <li>Data retained for 30 days before deletion</li>
              </ul>
            </section>

            {/* Section 8 - Uptime */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Service Uptime & Performance</h2>
              <p className="mb-3">
                TechDine targets <strong>99.9% uptime</strong> (approx. 43 minutes downtime/month). This is a goal, not a guarantee.
              </p>
              <p className="text-sm text-gray-600">
                Planned maintenance during 2-6 AM IST with 48 hours notice. Emergency maintenance may occur without notice.
              </p>
            </section>

            {/* Section 9 - Acceptable Use */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Acceptable Use Policy</h2>
              <p className="mb-3">You must NOT:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use Services for illegal purposes</li>
                <li>Attempt unauthorized access to our systems</li>
                <li>Upload malicious code or viruses</li>
                <li>Harass other users or staff</li>
                <li>Infringe intellectual property rights</li>
              </ul>
              <p className="mt-3">Violations may result in account termination and legal action.</p>
            </section>

            {/* Section 10 - IP Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Intellectual Property</h2>
              <p className="mb-3">
                All TechDine content, software, and materials are our exclusive property. <strong>You retain ownership of your uploaded content</strong> (menus, images, etc.) but grant us license to display it for service delivery.
              </p>
            </section>

            {/* Section 11 - Data */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Data Ownership & Privacy</h2>
              <p className="mb-3">
                <strong className="text-lg">You own all your business data.</strong> We use industry-standard security (encryption, backups, access controls). See our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a> for details.
              </p>
            </section>

            {/* Section 12 - Liability */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Limitation of Liability</h2>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <p className="font-bold">IMPORTANT LEGAL NOTICE</p>
                <p className="text-sm mt-2">This section limits TechDine's liability. Please read carefully.</p>
              </div>

              <p className="mb-3 font-bold uppercase">
                Services provided "AS IS" without warranties. TechDine is NOT liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Indirect, consequential, or punitive damages</li>
                <li>Loss of profits, revenue, data, or business</li>
                <li>Damages exceeding amount paid in past 12 months (minimum ₹1,000)</li>
              </ul>
            </section>

            {/* Section 13 - Indemnification */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Indemnification</h2>
              <p>
                You agree to indemnify TechDine from claims arising from your use of Services, violation of Terms, or your uploaded content.
              </p>
            </section>

            {/* Section 14 - Termination */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Termination</h2>
              <p className="mb-3">
                Either party may terminate. We may terminate immediately for Terms violations. Your data retained for 30 days post-termination.
              </p>
            </section>

            {/* Section 15 - Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Governing Law</h2>
              <p>
                These Terms governed by Indian law. Exclusive jurisdiction: <strong>Courts of Jaipur, Rajasthan</strong>. Claims must be filed within 1 year.
              </p>
            </section>

            {/* Section 16 - Changes */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Changes to Terms</h2>
              <p>
                We may modify these Terms with 30 days notice for material changes. Continued use = acceptance.
              </p>
            </section>

            {/* Section 17 - Miscellaneous */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Miscellaneous</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Entire Agreement:</strong> These Terms + Privacy Policy constitute full agreement</li>
                <li><strong>Severability:</strong> Invalid provisions severed, rest remain in effect</li>
                <li><strong>Notices:</strong> Send to techdine360@gmail.com</li>
              </ul>
            </section>

            {/* Section 18 - Contact */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Contact Information</h2>
              
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <p className="font-bold text-xl mb-4">TechDine Support</p>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">📧 Email:</p>
                    <a href="mailto:techdine360@gmail.com" className="text-blue-600 hover:underline text-lg">
                      techdine360@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold">📞 Phone:</p>
                    <a href="tel:+916203653946" className="text-blue-600 hover:underline text-lg">
                      +91-6203653946
                    </a>
                    <p className="text-sm text-gray-600">Mon-Sat, 9 AM - 7 PM IST</p>
                  </div>
                  <div>
                    <p className="font-semibold">💬 WhatsApp:</p>
                    <a href="https://wa.me/916203653946" className="text-blue-600 hover:underline text-lg">
                      +91-6203653946
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold">📍 Location:</p>
                    <p>Kukas, Rajasthan, India</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Legal Notice */}
            <section className="mt-8 p-6 bg-gray-100 rounded-lg border-2 border-gray-300">
              <h3 className="font-bold text-lg mb-3">⚖️ Legal Notice</h3>
              <p className="text-sm text-gray-700">
                <strong>TechDine is currently an unregistered startup.</strong> These Terms will be updated upon company registration with legal entity name, registration numbers, and GST details. All users will be notified of updates.
              </p>
            </section>

            {/* Acknowledgment */}
            <section className="mt-8 p-6 bg-blue-50 rounded-lg border-2 border-blue-300">
              <h3 className="font-bold text-lg mb-3">✅ Acknowledgment</h3>
              <p className="mb-2"><strong>BY USING TECHDINE, YOU ACKNOWLEDGE:</strong></p>
              <ul className="space-y-1 text-sm">
                <li>✓ You've read and understood these Terms</li>
                <li>✓ You agree to our Privacy Policy</li>
                <li>✓ You meet all eligibility requirements</li>
                <li>✓ You understand liability limitations</li>
              </ul>
            </section>

            {/* Document Info */}
            <section className="mt-8 p-4 bg-white rounded-lg border">
              <p className="text-xs text-gray-500">
                <strong>Document Info:</strong> Version 1.0 | Effective: November 15, 2025 | Jurisdiction: India | Courts: Jaipur, Rajasthan
              </p>
            </section>
          </div>

          {/* Footer Navigation */}
          <div className="mt-12 pt-8 border-t-2 border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <a href="/" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Home
            </a>
            <a href="/privacy-policy" className="text-blue-600 hover:text-blue-700 font-medium">
              View Privacy Policy →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}