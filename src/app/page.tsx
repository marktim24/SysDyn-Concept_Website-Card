import Gallery from '@/components/Gallery/Gallery'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'

export default function Home() {
	return (
		<div className='scroll-container'>
			<div className="scroll-page flex flex-col min-h-screen bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-no-repeat bg-center">
				<Header />
				<Hero />
			</div>
			<div className='scroll-page flex flex-col min-h-screen'>
				<Gallery />
			</div>
		</div>
	)
}
