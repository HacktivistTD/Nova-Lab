import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Effective Date: [Insert Date]</p>

      <p className="mb-6">
        At <strong>Nova Labs</strong>, we respect your privacy and are committed
        to protecting your personal data. This Privacy Policy explains how we
        collect, use, and safeguard your information when you interact with our
        website, applications, and services.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Personal Information: Name, email, phone number, billing details.</li>
        <li>Technical Data: IP address, browser type, device information.</li>
        <li>Cookies and Tracking: To improve website performance and UX.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-6">
        <li>To provide and improve our services.</li>
        <li>To communicate with you regarding updates and promotions.</li>
        <li>To analyze usage trends and improve functionality.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">3. Sharing of Information</h2>
      <p className="mb-6">
        We do not sell your personal data. We may share information with service
        providers assisting with hosting, analytics, or payments, and with
        authorities when legally required.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">4. Data Security</h2>
      <p className="mb-6">
        We use encryption, access controls, and regular audits to safeguard your
        data.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">5. Your Rights</h2>
      <p>
        You have the right to access, update, or delete your personal data.
        Contact us at <strong>[insert contact email]</strong>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
