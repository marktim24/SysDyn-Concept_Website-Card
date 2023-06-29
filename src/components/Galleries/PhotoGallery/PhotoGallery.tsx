import { companyPhotos } from '@/data/data'
import { FC } from 'react'

const PhotoGallery: FC = () => {
	return (
		<div className='flex flex-row'>
			{companyPhotos.map((photo, index) => (
				<div key={index} className='flex items-center'>
					{/* TODO: Optimize the img to Image/next */}
					<img src={photo} alt='Our Company Photo' />
				</div>
			))}
		</div>
	)
}

export default PhotoGallery
