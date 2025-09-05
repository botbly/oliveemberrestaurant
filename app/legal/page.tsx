import { Shield, FileText, Eye } from 'lucide-react';

export default function Legal() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <section className="py-16 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Legal Information
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Privacy policy, terms of use, and important notices
          </p>
        </div>
      </section>

      {/* Legal Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Privacy Policy */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-sage/20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-olive text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <Shield className="h-6 w-6" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-charcoal">
                  Privacy Policy
                </h2>
              </div>

              <div className="space-y-6 text-charcoal/80">
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Information We Collect</h3>
                  <p className="text-sm">
                    This website is a static site that does not collect personal information through forms or tracking. 
                    When you contact us by phone or email, we collect only the information you voluntarily provide 
                    for reservation and communication purposes.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-charcoal mb-2">How We Use Information</h3>
                  <p className="text-sm">
                    Information provided via phone or email is used solely for:
                  </p>
                  <ul className="text-sm mt-2 space-y-1 ml-4">
                    <li>• Processing restaurant reservations</li>
                    <li>• Responding to inquiries about private events</li>
                    <li>• Communicating about your dining experience</li>
                    <li>• Accommodating dietary restrictions and special requests</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Data Sharing</h3>
                  <p className="text-sm">
                    We do not share, sell, or distribute your personal information to third parties. 
                    Your contact information remains confidential and is used only for restaurant operations.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Website Analytics</h3>
                  <p className="text-sm">
                    This website does not use tracking cookies, analytics services, or data collection tools. 
                    We respect your privacy and do not monitor your browsing behavior.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Contact</h3>
                  <p className="text-sm">
                    For questions about this privacy policy, contact us at hello@oliveandember.example 
                    or (555) 014-7264.
                  </p>
                </div>
              </div>
            </div>

            {/* Terms of Use */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-sage/20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-terracotta text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <FileText className="h-6 w-6" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-charcoal">
                  Terms of Use
                </h2>
              </div>

              <div className="space-y-6 text-charcoal/80">
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Website Use</h3>
                  <p className="text-sm">
                    This website is provided for informational purposes about Olive & Ember restaurant. 
                    By using this site, you agree to use it only for lawful purposes and in accordance with these terms.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Intellectual Property</h3>
                  <p className="text-sm">
                    All content on this website, including text, images, logos, and design elements, 
                    is the property of Olive & Ember and is protected by copyright and trademark laws. 
                    Unauthorized use is prohibited.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Reservation Terms</h3>
                  <p className="text-sm">
                    Reservations are subject to availability and restaurant policies. We reserve the right 
                    to modify or cancel reservations due to unforeseen circumstances, with advance notice when possible.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Menu and Pricing</h3>
                  <p className="text-sm">
                    Menu items and prices are subject to change based on seasonal availability and market conditions. 
                    Current pricing will be confirmed at the time of your visit.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Limitation of Liability</h3>
                  <p className="text-sm">
                    Olive & Ember is not liable for any damages arising from the use of this website 
                    or reliance on the information provided herein.
                  </p>
                </div>
              </div>
            </div>

            {/* Accessibility Statement */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-sage/20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-sage text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <Eye className="h-6 w-6" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-charcoal">
                  Accessibility Statement
                </h2>
              </div>

              <div className="space-y-6 text-charcoal/80">
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Our Commitment</h3>
                  <p className="text-sm">
                    Olive & Ember is committed to ensuring digital accessibility for people with disabilities. 
                    We continually improve the user experience for everyone and apply relevant accessibility standards.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Website Accessibility</h3>
                  <p className="text-sm">
                    This website has been designed with accessibility in mind, including:
                  </p>
                  <ul className="text-sm mt-2 space-y-1 ml-4">
                    <li>• Semantic HTML structure for screen readers</li>
                    <li>• Sufficient color contrast for text readability</li>
                    <li>• Keyboard navigation support</li>
                    <li>• Descriptive alt text for images</li>
                    <li>• Clear focus indicators for interactive elements</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Restaurant Accessibility</h3>
                  <p className="text-sm">
                    Our physical location offers:
                  </p>
                  <ul className="text-sm mt-2 space-y-1 ml-4">
                    <li>• Wheelchair accessible entrance and seating</li>
                    <li>• Accessible restroom facilities</li>
                    <li>• Large print menus available upon request</li>
                    <li>• Staff trained to assist guests with various needs</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Feedback</h3>
                  <p className="text-sm">
                    If you encounter any accessibility barriers on our website or at our restaurant, 
                    please contact us at hello@oliveandember.example or (555) 014-7264. 
                    We welcome your feedback and will work to address any issues promptly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact for Legal Questions */}
          <div className="mt-12 text-center">
            <p className="text-sm text-charcoal/60 mb-4">
              For questions about these policies or legal matters, please contact:
            </p>
            <a 
              href="mailto:legal@oliveandember.example"
              className="text-olive hover:text-olive/80 transition-colors font-medium"
            >
              legal@oliveandember.example
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}