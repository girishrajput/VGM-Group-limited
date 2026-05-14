import HeroSlider from '@/components/home/HeroSlider'
import WeOffer from '@/components/home/WeOffer'
import DrivingResults from '@/components/home/DrivingResults'    
import Industries from '@/components/home/Industries'   
import SmartbizHrms from '@/components/home/SmartbizHrms'
import TrustedBy from '@/components/home/TrustedBy'

// 1. Metadata for SEO (Crucial for search engines)
export const metadata = {
  title: 'Home | Innovative Solution for your Business Competitiveness',
  description: 'Driving business results with Smartbiz HRMS and custom technology solutions.',
}

// 2. Renamed to PascalCase (Standard React practice)
function HomePage() {
  return (
    // 3. Wrapped in <main> for better accessibility and structure
    <main>
      <HeroSlider />
      <WeOffer />
      <SmartbizHrms />
      <DrivingResults />
      <Industries />
      <TrustedBy />
    </main>
  )
}

export default HomePage