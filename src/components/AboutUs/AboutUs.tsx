'use client'

import { FC } from 'react'
import SwiperCore, { Autoplay, Mousewheel, Pagination } from 'swiper'
import ClientsLogosGallery from '../Galleries/ClientsLogosGallery/ClientsLogosGallery'

SwiperCore.use([Autoplay, Pagination, Mousewheel])

const AboutUs: FC = () => {
	return (
		<section className='h-screen flex flex-col justify-center'>
			<div className='container'>
				<div className='flex items-center justify-center'>
					<div className='p-10 border rounded-3xl border-white text-white bg-transparent'>
						<h1 className='text-6xl'>ТЕХНОМЕДИА —</h1>
						<ul className='pt-5 text-xl uppercase'>
							<li>45 сотрудников</li>
							<li>23 крупных проекта</li>
							<li>НА РЫНКЕ С 2012 ГОДА</li>
						</ul>
					</div>

					<div className='flex flex-col'>
						<div className='rounded-3xl text-xl bg-white p-5 outline-1 outline-transparent text-black'>
							<h1 className='text-6xl'>ТЕХНОЛОГИИ</h1>
						</div>
						<div className='p-10 border rounded-3xl border-white text-white bg-transparent'>
							<p>
								работали с Java, С#, Angular, React, Ext.Net, Vue, Kotlin, Three
								js и ...
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col mt-24'>
				<ClientsLogosGallery />
			</div>
		</section>
	)
}

export default AboutUs
