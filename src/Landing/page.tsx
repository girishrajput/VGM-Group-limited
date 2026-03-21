import HeroSlider from '@/components/home/HeroSlider'
import WeOffer from '@/components/home/WeOffer'
import DrivingResults from '@/components/home/DrivingResults'    
import Industries from '@/components/home/Industries'   
import SmartbizHrms from '@/components/home/SmartbizHrms'
import React from 'react'

function page() {
  return (
  <>
    <HeroSlider />
    <WeOffer />
    <SmartbizHrms />
    <DrivingResults />
    <Industries />
  </>
  )
}

export default page