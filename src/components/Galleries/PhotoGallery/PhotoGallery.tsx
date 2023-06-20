import { CompanyPhotos } from '@/data/data'
import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const PhotoGallery: FC = () => {
	return (
		<div className='flex flex-row'>
			{CompanyPhotos.map((photo, index) => (
				<div key={index}>
					{/* TODO: Optimize the img to Image/next */}
					<img src={photo.imgURL.src} alt='Our Company Photo' />
				</div>
			))}
		</div>
	)
}

export default PhotoGallery
