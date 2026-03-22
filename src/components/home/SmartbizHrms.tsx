import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SmartbizHrms() {

    return (
        <section className="bg-slate-300 py-20 px-6 font-sans">
            <div className="max-w-6xl mx-auto text-center">
                <div className="max-w-4xl mx-auto text-center">
                    <div className='flex justify-center items-center'>
                        <Image
                            src="/images/smartbizhrms-logo-dark1.png"
                            alt="IRCOIT Logo"
                            width={350}
                            height={70}
                            priority
                            className="object-contain cursor-pointer"
                        />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6 mt-10">
                        SMARTBIZ HUMAN
                        RESOURCE MANAGEMENT
                        SOFTWARE
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-12">
                        Turning ideas into meaningful achievements through our core values.
                    </p>
                    <div className='flex flex-wrap justify-center items-center'>
                        <Link rel="alternate" href="/pdf/SmartbizHRMSoftwareBrochure.pdf" type="application/atom+xml" title="Atom" target='_blank'>
                            <span className="bg-red-600 px-5 py-2 text-white rounded-lg hover:bg-red-700 transition whitespace-nowrap text-xl">
                                Download Brochure
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}