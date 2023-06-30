import { clientsLogos } from '@/data/data'
import { FC } from 'react'
import { Grid, Mousewheel, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const ClientsLogosGallery: FC = () => {
	return (
		<div>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, Mousewheel, Grid]}
				spaceBetween={0}
				slidesPerView={5}
				grid={{
					rows: 2,
				}}
				loop={true}
				loopedSlides={5}
				scrollbar={{ draggable: true }}
				direction={'horizontal'}
				mousewheel={true}
			>
				{clientsLogos.map((imageLogo, index) => (
					<SwiperSlide key={index} className='flex justify-center items-center'>
						{/* TODO: Optimize the img to Image/next */}
						<img src={imageLogo} alt='Our Clients Logo' />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default ClientsLogosGallery
