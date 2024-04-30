import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className='bg-gray-900'>
    <div className="container mx-auto p-4 w-[80%] text-gray-100 bg-gray-900">
      <h1 className="text-4xl font-bold mb-1 text-center mt-3">Privacy Policy</h1>
      <h1 className="text-1xl font-light mb-4 text-center">Last updated: March 16, 2024</h1>
      <p className="mb-4">
        At Tipic Consultech, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
      </p>
      <h2 className="text-2xl  mb-2">Information We Collect</h2>
      <p className="mb-4">
      Your privacy is important to us and we believe it is important for you to know what personal data we,
       Tipic Consultech ( or “we”), collect from you , why we collect it, how we use it and what rights you might be entitled to as a data subject or consumer.
      </p>
      <h2 className="text-2xl  mb-2">How We Use Your Information</h2>
      <p className="mb-4">
        We may use the information we collect from you to:
        <ul className="list-disc list-inside">
          <li>Improve our website</li>
          <li>Send periodic emails</li>
          <li>Respond to your inquiries</li>
          <li>Provide customer service</li>
          {/* <li>Process transactions</li> */}
        </ul>
      </p>
      <h2 className="text-2xl  mb-2">Disclosure of Your Information</h2>
      <p className="mb-4">
        We may disclose your personal information to third parties who assist us in operating our website, conducting our business, or servicing you.
      </p>
      <h2 className="text-2xl  mb-2">Security of Your Information</h2>
      <p className="mb-4">
        We implement security measures designed to protect your information from unauthorized access and disclosure.
      </p>
      <h2 className="text-2xl  mb-2">Contact Us</h2>
      <p>
        If you have any questions or concerns about our Privacy Policy, please contact us at customer.care@tipic.in

      </p>
    </div>
    </div>
  );
};

export default PrivacyPolicy;

