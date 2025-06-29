import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection' // แก้ไข path ให้ถูกต้อง
import DownloadSection from '../components/DownloadSection'
import FooterSection from '../components/FooterSection'

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <ServicesSection />

      {/* Download Section */}
      <DownloadSection />

      {/* Footer Section */}
      <FooterSection />
    </main>
  )
}