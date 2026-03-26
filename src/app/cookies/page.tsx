import React from 'react';
import InnerHeader from '@/components/InnerHeader';

const CookiesPolicy = () => {
  return (<>

    <InnerHeader
      title="Cookies Policy"
      subtitle=""
    />


    <section className="bg-white py-12 px-6 md:px-12 lg:px-24 text-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-4xl font-extrabold mb-8 text-gray-900 border-b pb-4">
          Cookies Policy
        </h1>

        <div className="space-y-8 leading-relaxed text-base">
          {/* Introduction */}
          <section>
            <p>
              My Company Quickbiz Consultants (“us”, “we”, or “our”) uses cookies on My Website <a href="https://quickbiz.co.tz" className="text-blue-600 hover:underline font-medium">https://quickbiz.co.tz</a> (the “Service”). By using the Service, you consent to the use of cookies.
            </p>
            <p className="mt-4 italic text-gray-600">
              Our Cookies Policy explains what cookies are, how we use cookies, how third-parties we may partner with may use cookies on the Service, your choices regarding cookies and further information about cookies.
            </p>
          </section>

          {/* Section: What are Cookies */}
          <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-bold mb-3 text-gray-900 uppercase tracking-wide">What are cookies</h2>
            <p>
              Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you. Cookies can be <strong>“persistent”</strong> or <strong>“session”</strong> cookies.
            </p>
          </section>

          {/* Section: How we use Cookies */}
          <section>
            <h2 className="text-xl font-bold mb-3 text-gray-900">How https://quickbiz.co.tz uses cookies</h2>
            <p className="mb-4">
              When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes: to enable certain functions of the Service, to provide analytics, to store your preferences, and to enable advertisements delivery, including behavioral advertising.
            </p>
          </section>

          {/* Grid: Cookie Categories */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Strictly Necessary */}
            <div className="border p-5 rounded-xl bg-white shadow-sm border-l-4 border-l-blue-600">
              <h3 className="font-bold text-blue-900 mb-2">Strictly Necessary</h3>
              <p className="text-sm text-gray-600 mb-3">Essential for moving around the site and using features like secure areas.</p>
              <ul className="text-xs space-y-1 list-disc pl-4 text-gray-500">
                <li>Identify you as logged in</li>
                <li>Authenticate your session</li>
                <li>Security purposes</li>
              </ul>
            </div>

            {/* Performance */}
            <div className="border p-5 rounded-xl bg-white shadow-sm border-l-4 border-l-green-600">
              <h3 className="font-bold text-green-900 mb-2">Performance</h3>
              <p className="text-sm text-gray-600 mb-3">Collect info on how you use the site (pages visited, errors experienced).</p>
              <ul className="text-xs space-y-1 list-disc pl-4 text-gray-500">
                <li>Web analytics & statistics</li>
                <li>Affiliate tracking</li>
                <li>Error measurement</li>
                <li>Testing different designs</li>
              </ul>
            </div>

            {/* Functionality */}
            <div className="border p-5 rounded-xl bg-white shadow-sm border-l-4 border-l-purple-600">
              <h3 className="font-bold text-purple-900 mb-2">Functionality</h3>
              <p className="text-sm text-gray-600 mb-3">Used to provide services or remember settings to improve your visit.</p>
              <ul className="text-xs space-y-1 list-disc pl-4 text-gray-500">
                <li>Remember layout/text size</li>
                <li>Prevent repeat surveys</li>
                <li>Show embedded video content</li>
              </ul>
            </div>

            {/* Targeting */}
            <div className="border p-5 rounded-xl bg-white shadow-sm border-l-4 border-l-amber-600">
              <h3 className="font-bold text-amber-900 mb-2">Targeting</h3>
              <p className="text-sm text-gray-600 mb-3">Used to track visits to display targeted ads based on your interests.</p>
              <ul className="text-xs space-y-1 list-disc pl-4 text-gray-500">
                <li>Personalized ads & content</li>
                <li>Measuring ad campaign success</li>
                <li>Tracking across apps/services</li>
              </ul>
            </div>
          </div>

          {/* Section: Third Party */}
          <section className="pt-4">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Third-party cookies</h3>
            <p>
              In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and perform market research.
            </p>
          </section>

          {/* Section: Choices */}
          <section className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-xl font-bold mb-3 text-blue-900 underline decoration-2 underline-offset-4">
              What are your choices regarding cookies?
            </h3>
            <p className="mb-4">
              If you’d like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
            </p>
            <div className="bg-white p-4 rounded border border-blue-200 text-sm text-blue-800">
              <strong>Please note:</strong> If you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
            </div>
          </section>
        </div>
      </div>
    </section>
  </>
  );
};

export default CookiesPolicy;