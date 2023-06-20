import AboutUs from '@/components/AboutUs/AboutUs'
import Footer from '@/components/Footer/Footer'
import PortfolioGallery from '@/components/Galleries/PortfolioGallery/PortfolioGallery'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'

export default function Home() {
	return (
		<div className='scroll-container'>
			<div className="scroll-page flex flex-col min-h-screen bg-[url('/images/HeroSection/hero-bg.jpg')] bg-cover bg-no-repeat bg-center">
				<Header />
				<Hero />
			</div>
			<div className='scroll-page flex flex-col min-h-screen'>
				<PortfolioGallery />
			</div>
			<div className='scroll-page flex flex-col min-h-screen'>
				<AboutUs />
			</div>
			<div className='scroll-page flex flex-col min-h-screen'>
				<Footer />
			</div>
		</div>
	)
}
