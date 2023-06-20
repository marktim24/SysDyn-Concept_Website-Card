import { CompanyPhotos } from '@/data/data'
import { FC } from 'react'

const PhotoGallery: FC = () => {
	return (
		<div className='flex flex-row'>
			{CompanyPhotos.map((photo, index) => (
				<div key={index}>
					{/* TODO: Optimize the img to Image/next */}
					<img src={photo.imgURL} alt='Our Company Photo' />
				</div>
			))}
		</div>
	)
}

export default PhotoGallery
