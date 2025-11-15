export default function PrivacyPolicy() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: November 10, 2025</p>

          <div className="prose prose-blue max-w-none space-y-6 text-gray-700">
            <section>
              <p className="text-lg leading-relaxed">
                At TechDine, we are committed to protecting your privacy and handling your personal information 
                with care and transparency. This Privacy Policy explains how we collect, use, store, and protect 
                your information when you use our restaurant management platform and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
              <p className="mb-3">
                When you interact with TechDine, we may collect the following types of information:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">Information You Provide Directly:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number</li>
                <li><strong>Business Information:</strong> Business name, business type (restaurant, cafe, cloud kitchen, etc.)</li>
                <li><strong>Communication Data:</strong> Messages, feedback, and inquiries you send us</li>
                <li><strong>Demo Booking Data:</strong> Preferred date, time, and specific requirements for product demonstrations</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">Information Collected Automatically:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Usage Data:</strong> How you interact with our platform, features used, and time spent</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, operating system</li>
                <li><strong>Cookie Data:</strong> Information collected through cookies and similar technologies</li>
              </ul>

              <p className="mt-4 italic text-gray-600">
                Note: We may collect additional information in the future as we expand our services. 
                Any new data collection will be clearly communicated and covered under updated privacy terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Delivery:</strong> To provide, maintain, and improve our restaurant management platform</li>
                <li><strong>Communication:</strong> To respond to your inquiries, process demo bookings, and send service-related notifications</li>
                <li><strong>Personalization:</strong> To customize your experience and provide relevant features</li>
                <li><strong>Analytics:</strong> To understand how our services are used and improve user experience</li>
                <li><strong>Security:</strong> To detect, prevent, and address technical issues and fraudulent activity</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
                <li><strong>Business Operations:</strong> To analyze trends, improve our offerings, and make informed business decisions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Data Storage & Retention</h2>
              <p>
                Your data is stored securely using industry-standard encryption and security measures. We retain 
                your information for as long as necessary to fulfill the purposes outlined in this policy, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>While you maintain an active account with TechDine</li>
                <li>To comply with legal, tax, or regulatory requirements</li>
                <li>To resolve disputes and enforce our agreements</li>
                <li>For legitimate business purposes such as fraud prevention and security</li>
              </ul>
              <p className="mt-4">
                You may request deletion of your data at any time by contacting us. Upon request, we will delete 
                your personal information within 30 days, except where retention is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Sharing & Third Parties</h2>
              <p>
                <strong>TechDine owns and controls all data collected through our platform.</strong> We take your 
                privacy seriously and do not sell your personal information. However, we may share your data in 
                the following circumstances:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">Service Providers:</h3>
              <p>We use trusted third-party services to operate our platform:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Supabase:</strong> Database hosting and storage (data stored securely with encryption)</li>
                <li><strong>Web3Forms:</strong> Contact form processing and email delivery</li>
                <li><strong>Vercel:</strong> Website hosting and deployment</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">Future Payment Processing:</h3>
              <p>
                When we integrate payment systems (such as Razorpay or similar), transaction data will be processed 
                by these payment providers in compliance with PCI-DSS standards. We will update this policy accordingly.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">Business Purposes:</h3>
              <p>
                While we maintain the strictest privacy standards, we reserve the right to use aggregated, 
                anonymized data for business analytics and service improvements. In rare cases, if there is a 
                legitimate business need or regulatory requirement, we may share data with trusted partners. 
                However, your sensitive personal information will always be protected to the maximum extent possible.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">Legal Requirements:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>When required by law, court order, or government regulation</li>
                <li>To protect our rights, property, or safety, or that of our users</li>
                <li>To enforce our Terms of Service or other agreements</li>
                <li>In connection with a merger, acquisition, or sale of assets (with prior notice)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Your Rights & Choices</h2>
              <p>You have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal data we hold</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal obligations)</li>
                <li><strong>Data Portability:</strong> Request your data in a structured, machine-readable format</li>
                <li><strong>Object to Processing:</strong> Object to certain uses of your data</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at <a href="mailto:techdine360@gmail.com" className="text-blue-600 hover:underline">techdine360@gmail.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and monitoring</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Secure backup and disaster recovery procedures</li>
              </ul>
              <p className="mt-4">
                However, no method of transmission over the internet is 100% secure. While we strive to protect 
                your data, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Cookies & Tracking Technologies</h2>
              <p>
                We use cookies and similar technologies to enhance your experience, analyze usage patterns, and 
                improve our services. You can control cookies through your browser settings, though some features 
                may not function properly if cookies are disabled.
              </p>
              <p className="mt-3">
                <strong>Types of cookies we use:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our site</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Children's Privacy</h2>
              <p>
                Our services are intended for businesses and individuals aged 18 and above. We do not knowingly 
                collect personal information from children under 18. If we become aware that we have collected 
                data from a child, we will take steps to delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. International Data Transfers</h2>
              <p>
                Your data is primarily stored and processed in India. If we transfer data internationally, we 
                will ensure appropriate safeguards are in place to protect your information in accordance with 
                applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, 
                technologies, legal requirements, or other factors. We will notify you of significant changes by:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Posting the updated policy on our website with a new "Last updated" date</li>
                <li>Sending an email notification to registered users (for material changes)</li>
                <li>Displaying a prominent notice on our platform</li>
              </ul>
              <p className="mt-4">
                Your continued use of our services after changes take effect constitutes acceptance of the 
                updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data 
                practices, please contact us:
              </p>
              <div className="bg-blue-50 rounded-lg p-6 mt-4">
                <p className="font-semibold text-gray-900 mb-3">TechDine</p>
                <ul className="space-y-2">
                  <li>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:techdine360@gmail.com" className="text-blue-600 hover:underline">
                      techdine360@gmail.com
                    </a>
                  </li>
                  <li>
                    <strong>Phone:</strong>{' '}
                    <a href="tel:+916203653946" className="text-blue-600 hover:underline">
                      +91-6203653946
                    </a>
                  </li>
                  <li>
                    <strong>Address:</strong> Kukas, Rajasthan, India
                  </li>
                </ul>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                We aim to respond to all inquiries within 48 hours during business days.
              </p>
            </section>

            <section className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> TechDine is currently operating as an unregistered startup entity. 
                As we formalize our business structure and obtain official registration, this Privacy Policy 
                will be updated to reflect our registered legal entity name and details. Users will be notified 
                of any such updates.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <a 
              href="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}