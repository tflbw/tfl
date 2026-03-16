export const metadata = {
  title: 'Privacy Notice | Tau Freight & Logistics',
};

export default function PrivacyPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 text-sm text-gray-700">
      <h1 className="text-2xl font-semibold text-gray-900 mb-2">Privacy Notice</h1>
      <p className="text-gray-400 mb-10">Last updated: March 2026</p>

      <section className="mb-8">
        <h2 className="text-base font-semibold text-gray-900 mb-2">Who we are</h2>
        <p>
          Tau Freight &amp; Logistics operates this website. For any privacy-related queries,
          contact us at{' '}
          <a href="mailto:info@tfl.co.bw" className="underline text-gray-600">
            info@tfl.co.bw
          </a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-base font-semibold text-gray-900 mb-2">What we collect</h2>
        <p>
          When you use our contact form, we collect your full name and email address.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-base font-semibold text-gray-900 mb-2">Why we collect it</h2>
        <p>
          Solely to respond to your enquiry. Your information is not used for marketing
          or any other purpose.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-base font-semibold text-gray-900 mb-2">How long we keep it</h2>
        <p>
          We retain contact form submissions for up to 12 months, after which they are deleted.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-base font-semibold text-gray-900 mb-2">Who we share it with</h2>
        <p>
          We do not sell, share, or disclose your information to third parties, except where
          required by law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-base font-semibold text-gray-900 mb-2">Your rights</h2>
        <p>
          Under the Botswana Data Protection Act (2024) and, where applicable, the EU General
          Data Protection Regulation (GDPR), you have the right to access, correct, or request
          deletion of your personal data. To exercise any of these rights, email us at{' '}
          <a href="mailto:info@tfl.co.bw" className="underline text-gray-600">
            info@tfl.co.bw
          </a>.
        </p>
      </section>
    </main>
  );
}