import Link from 'next/link';

const HERO_DATA = {
  title: "VGM GROUP LIMITED",
  desc: "Innovative Solution for your Business Competitiveness",
  video: "/images/banner.mp4",
};

export default function HeroSlider() {
  return (
    <section className="relative w-full h-[calc(50vh-80px)] md:h-[calc(100vh-80px)] overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={HERO_DATA.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto w-full px-8 md:px-12 text-white text-center">
          <div>
            <h1 className="text-4xl md:text-7xl font-bold mb-4 tracking-tight">
              {HERO_DATA.title}
            </h1>
          </div>

          <p className="text-lg md:text-2xl mb-8 max-w-2xl text-gray-200 mx-auto">
            {HERO_DATA.desc}
          </p>

          <div>
            <Link href="/contact">
              <span className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg cursor-pointer">
                Book a Free Consultation
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}