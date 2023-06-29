'use client'

import Card from '@/components/Card/Card'
import { portfolioCards } from '@/data/data'
import { FC } from 'react'
import { A11y, Mousewheel, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Gallery: FC = () => {
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
					loopedSlides={3} // add this line
					pagination={{
						dynamicBullets: true,
					}}
					scrollbar={{ draggable: true }}
					direction={'horizontal'}
					mousewheel={true}
				>
					{portfolioCards.map(card => (
						<SwiperSlide key={card.id}>
							<Card cardName={card.cardName} cardImg={card.cardImg} />
						</SwiperSlide>
					))}
					<div className='swiper-button-next rounded-full p-10 bg-white'>
						<img src='/icons/arrow-icon.svg' alt='Next' />
					</div>
					<div className='swiper-button-prev rounded-full p-10 bg-white'>
						<img src='/icons/arrow-icon.svg' alt='Previous' />
					</div>
				</Swiper>
			</div>
		</section>
	)
}

export default Gallery
