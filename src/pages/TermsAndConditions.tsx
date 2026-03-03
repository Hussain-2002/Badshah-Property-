import SEOHead from "@/components/SEOHead";

const TermsAndConditions = () => {
  return (
    <main className="section-padding bg-background pt-32">
      <SEOHead
        title="Terms and Conditions"
        description="Read the Terms and Conditions of Badshah Property Advisor, Ujjain. Understand the terms governing use of our website and real estate services."
      />

      <div className="max-w-4xl mx-auto">
        <h1 className="heading-lg mb-10">Terms and Conditions</h1>

        <p className="mb-6 text-sm text-muted-foreground">
          Effective Date: January 2026
        </p>

        <p className="mb-6">
          By accessing and using this website, you agree to comply with the
          following Terms and Conditions set by Badshah Property Advisor.
        </p>

        <h2 className="heading-md mt-12 mb-4">1. Website Use</h2>
        <p className="mb-6">
          The content provided on this website is for informational purposes
          only. We reserve the right to modify or remove content without prior notice.
        </p>

        <h2 className="heading-md mt-12 mb-4">2. Property Information</h2>
        <p className="mb-6">
          All property details, pricing, and availability are subject to change.
          We strive to ensure accuracy but do not guarantee completeness or correctness.
        </p>

        <h2 className="heading-md mt-12 mb-4">3. Advisory Services</h2>
        <p className="mb-6">
          Badshah Property Advisor provides consultation and brokerage services.
          Final decisions regarding property purchase, sale, or investment are the
          responsibility of the client.
        </p>

        <h2 className="heading-md mt-12 mb-4">4. Limitation of Liability</h2>
        <p className="mb-6">
          We shall not be held liable for any direct or indirect loss arising
          from the use of this website or reliance on its information.
        </p>

        <h2 className="heading-md mt-12 mb-4">5. Intellectual Property</h2>
        <p className="mb-6">
          All content, branding, logos, and materials on this website are the
          property of Badshah Property Advisor and may not be reproduced
          without permission.
        </p>

        <h2 className="heading-md mt-12 mb-4">6. Governing Law</h2>
        <p className="mb-6">
          These terms are governed by the laws of India. Any disputes shall
          fall under the jurisdiction of courts in Ujjain, Madhya Pradesh.
        </p>

        <h2 className="heading-md mt-12 mb-4">7. Contact</h2>
        <p className="mb-6">
          For any queries regarding these Terms, contact:
        </p>
        <p className="mb-2">Badshah Property Advisor</p>
        <p className="mb-2">Freeganj, Ujjain, Madhya Pradesh</p>
        <p className="mb-2">Phone: +91 98260 44152</p>
        <p>Email: info@badshahproperty.in</p>

        <p className="mt-12 text-sm text-muted-foreground">
          We reserve the right to update these Terms and Conditions at any time.
        </p>
      </div>
    </main>
  );
};

export default TermsAndConditions;