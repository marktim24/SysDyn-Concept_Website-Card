import { IPortfolioCard } from '@/data/data'
import Image from 'next/image'
import { FC } from 'react'

const Card: FC<IPortfolioCard> = ({ cardName, cardImg, cardTags }) => {
	return (
		<div>
			<div className='h-full w-full flex flex-col'>
				{/* TODO: Optimize the img to Image/next */}
				<div className='image_container'>
					<Image
						src={cardImg}
						width={500}
						height={500}
						alt='Portfolio Card Image'
					/>
				</div>

				<h1 className='text-xl self-center'>{cardName}</h1>
			</div>

			<div className='flex'>
				{cardTags &&
					cardTags.length > 0 &&
					cardTags.map((tag, index) => (
						<button className='btn outline text-lg' key={index}>
							{tag}
						</button>
					))}
			</div>
		</div>
	)
}

export default Card
