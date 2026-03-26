import React from 'react';
import {
  Briefcase,
  Users,
  Rocket,
  Globe,
  HeartHandshake,
  Laptop
} from 'lucide-react';
import Image from "next/image";
import InnerHeader from '@/components/InnerHeader';

const Disclaimer = () => {
  return (
    <>
      {/* Hero Section */}
      <InnerHeader
        title="Disclaimer"
        subtitle=""
      />


      <section className="bg-white py-12 px-6 md:px-12 lg:px-24 text-gray-800">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          

          <div className="space-y-8 leading-relaxed text-base">
            {/* General Info Section */}
            <section>
              <p>
                The information contained in <a href="https://quickbiz.co.tz" className="text-blue-600 hover:underline">https://quickbiz.co.tz</a> is for general information purposes only. The information is provided by <a href="https://quickbiz.co.tz" className="text-blue-600 hover:underline">https://quickbiz.co.tz</a> and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to <a href="https://quickbiz.co.tz" className="text-blue-600 hover:underline">https://quickbiz.co.tz</a> or the information, products, services, or related graphics contained on <a href="https://quickbiz.co.tz" className="text-blue-600 hover:underline">https://quickbiz.co.tz</a> for any purpose.
              </p>
              <p className="mt-4 font-semibold text-gray-900 border-l-4 border-red-500 pl-4">
                Any reliance you place on such information is therefore strictly at your own risk.
              </p>
            </section>

            {/* Liability Section */}
            <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Limitation of Liability</h3>
              <p>
                In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of <a href="https://quickbiz.co.tz" className="text-blue-600 hover:underline">https://quickbiz.co.tz</a>.
              </p>
            </section>

            {/* External Links Section */}
            <section>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 text-sm uppercase tracking-wider border-b w-fit pr-4 pb-1">
                External Links
              </h3>
              <p>
                Through <a href="https://quickbiz.co.tz" className="text-blue-600 hover:underline">https://quickbiz.co.tz</a> you are able to link to other websites which are not under the control of <a href="https://quickbiz.co.tz" className="text-blue-600 hover:underline">https://quickbiz.co.tz</a>. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
              </p>
            </section>

            {/* Technical Availability Section */}
            <section className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Website Availability</h3>
              <p>
                Every effort is made to keep <a href="https://quickbiz.co.tz" className="text-blue-700 hover:underline italic font-medium">https://quickbiz.co.tz</a> up and running smoothly. However, <a href="https://quickbiz.co.tz" className="text-blue-700 underline decoration-dotted">https://quickbiz.co.tz</a> takes no responsibility for, and will not be liable for, the site being temporarily unavailable due to technical issues beyond our control.
              </p>
            </section>
          </div>
        </div>
      </section>


    </>
  );
};

export default Disclaimer;