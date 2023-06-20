import { ClientsLogos } from '@/data/data'
import { FC } from 'react'
import { Grid } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const ClientsLogosGallery: FC = () => {
	return (
		<div>
			<Swiper
				autoplay={{ delay: 3000 }}
				slidesPerView={3}
				spaceBetween={25}
				// TODO: Grid fixes
				grid={{
					rows: 2,
				}}
				// TODO: Fix the infinite loop
				loop={true}
				loopedSlides={3}
				mousewheel={true}
				breakpoints={{
					640: {
						width: 640,
						slidesPerView: 2,
					},
					768: {
						width: 768,
						slidesPerView: 3,
					},
					1024: {
						width: 1024,
						slidesPerView: 4,
					},
				}}
				modules={[Grid]}
				direction={'horizontal'}
				className='mySwiper'
			>
				{ClientsLogos.map((imageLogo, index) => (
					<SwiperSlide key={index}>
						{/* TODO: Optimize the img to Image/next */}
						<img
							src={imageLogo.imgURL}
							className='flex'
							alt='Our Clients Logo'
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default ClientsLogosGallery
