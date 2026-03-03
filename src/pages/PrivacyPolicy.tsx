import SEOHead from "@/components/SEOHead";

const PrivacyPolicy = () => {
  return (
    <main className="section-padding bg-background pt-32">
      <SEOHead
        title="Privacy Policy"
        description="Read the Privacy Policy of Badshah Property Advisor, Ujjain. Learn how we collect, use, and protect your personal information."
      />

      <div className="max-w-4xl mx-auto">
        <h1 className="heading-lg mb-10">Privacy Policy</h1>

        <p className="mb-6 text-sm text-muted-foreground">
          Effective Date: January 2026
        </p>

        <p className="mb-6">
          Badshah Property Advisor (“we”, “our”, “us”) values your privacy.
          This Privacy Policy explains how we collect, use, and protect your
          information when you visit our website or contact us regarding
          property services in Ujjain.
        </p>

        <h2 className="heading-md mt-12 mb-4">1. Information We Collect</h2>
        <p className="mb-6">
          We may collect personal information such as your name, phone number,
          email address, and property preferences when you:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Fill out a contact form</li>
          <li>Contact us via WhatsApp</li>
          <li>Call us directly</li>
          <li>Request property consultation</li>
        </ul>

        <h2 className="heading-md mt-12 mb-4">2. How We Use Your Information</h2>
        <p className="mb-6">
          We use your information to:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Respond to your property inquiries</li>
          <li>Provide real estate consultation</li>
          <li>Share property options and updates</li>
          <li>Improve our services</li>
        </ul>

        <h2 className="heading-md mt-12 mb-4">3. Data Protection</h2>
        <p className="mb-6">
          We implement appropriate security measures to protect your personal
          information. We do not sell, rent, or share your personal data with
          third parties for marketing purposes.
        </p>

        <h2 className="heading-md mt-12 mb-4">4. Third-Party Services</h2>
        <p className="mb-6">
          Our website may use third-party services such as Google Analytics or
          WhatsApp for communication purposes. These platforms may collect
          certain technical information according to their privacy policies.
        </p>

        <h2 className="heading-md mt-12 mb-4">5. Cookies</h2>
        <p className="mb-6">
          We may use cookies to enhance user experience and analyze website
          performance. You can disable cookies through your browser settings.
        </p>

        <h2 className="heading-md mt-12 mb-4">6. Contact Information</h2>
        <p className="mb-6">
          If you have any questions regarding this Privacy Policy, you may contact:
        </p>
        <p className="mb-2">Badshah Property Advisor</p>
        <p className="mb-2">Freeganj, Ujjain, Madhya Pradesh</p>
        <p className="mb-2">Phone: +91 98260 44152</p>
        <p>Email: info@badshahproperty.in</p>

        <p className="mt-12 text-sm text-muted-foreground">
          We reserve the right to update this Privacy Policy at any time.
        </p>
      </div>
    </main>
  );
};

export default PrivacyPolicy;