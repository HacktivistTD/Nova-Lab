import React from "react";

const CookiePolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      <p className="mb-4">Effective Date: [Insert Date]</p>

      <p className="mb-6">
        This Cookie Policy explains how <strong>Nova Labs</strong> uses cookies
        and similar technologies to improve your browsing experience.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">1. What Are Cookies?</h2>
      <p className="mb-6">
        Cookies are small text files stored on your device to enhance website
        functionality and user experience.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">2. Types of Cookies We Use</h2>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Essential Cookies</strong>: Required for website functionality.</li>
        <li><strong>Analytics Cookies</strong>: Help us understand user behavior.</li>
        <li><strong>Preference Cookies</strong>: Store your settings and choices.</li>
        <li><strong>Marketing Cookies</strong>: May be used for tailored ads.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">3. Managing Cookies</h2>
      <p>
        You can disable cookies in your browser settings. However, some features
        may not work properly without them.
      </p>
    </div>
  );
};

export default CookiePolicy;
