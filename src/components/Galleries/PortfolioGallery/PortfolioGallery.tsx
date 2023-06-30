'use client'

import Card from '@/components/Card/Card'
import { portfolioCards } from '@/data/data'
import { FC } from 'react'
import { A11y, Mousewheel, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const PortfolioGallery: FC = () => {
	return (
		<section>
			<div className='container flex justify-center items-center h-screen'>
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, Mousewheel, A11y]}
					spaceBetween={0}
					slidesPerView={3}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}}
					loop={true}
					loopedSlides={3}
					pagination={{
						dynamicBullets: true,
					}}
					scrollbar={{ draggable: true }}
					direction={'horizontal'}
					mousewheel={true}
					breakpoints={{
						320: {
							slidesPerView: 1,
							spaceBetween: 10,
						},
						480: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						640: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					}}
					className='flex'
				>
					{portfolioCards.map(card => (
						<SwiperSlide key={card.id}>
							<Card
								cardName={card.cardName}
								cardImg={card.cardImg}
								cardTags={card.cardTags}
							/>
						</SwiperSlide>
					))}
					{/* TODO: Optimize the img to Image/next */}

					{/* Class selectors for Swiper buttons located in _swiper.scss */}
					<div className='swiper-button-next'>
						<Image
							src='/icons/arrow-icon.svg'
							alt='Swiper next button'
							width={25}
							height={25}
							className=' bg-black rounded-full p-10 fill-white text-white'
							style={{ fill: 'white' }}
						/>
					</div>
					<div className='swiper-button-prev'>
						<Image
							src='/icons/arrow-icon.svg'
							alt='Swiper next button'
							width={25}
							height={25}
							className=' bg-black rounded-full p-10 fill-white text-white'
							style={{ fill: 'white' }}
						/>
					</div>
				</Swiper>
			</div>
		</section>
	)
}

export default PortfolioGallery
