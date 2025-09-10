import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">Effective Date: [Insert Date]</p>

      <p className="mb-6">
        Welcome to <strong>Nova Labs</strong>. By accessing or using our website,
        services, or applications, you agree to these Terms of Service.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">1. Use of Services</h2>
      <ul className="list-disc list-inside mb-6">
        <li>You agree to use our services only for lawful purposes.</li>
        <li>You may not hack, reverse-engineer, or misuse our services.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">2. Accounts</h2>
      <ul className="list-disc list-inside mb-6">
        <li>You must provide accurate information when creating an account.</li>
        <li>You are responsible for keeping your login credentials secure.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">3. Intellectual Property</h2>
      <p className="mb-6">
        All content, trademarks, and software belong to{" "}
        <strong>Nova Labs</strong> unless stated otherwise. You may not copy,
        modify, or redistribute without written permission.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">4. Limitation of Liability</h2>
      <p className="mb-6">
        Our services are provided “as is.” We are not liable for indirect or
        incidental damages arising from use.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">5. Termination</h2>
      <p>
        We reserve the right to suspend or terminate accounts that violate these
        terms.
      </p>
    </div>
  );
};

export default TermsOfService;
