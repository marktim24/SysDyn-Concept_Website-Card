import { IPortfolioCard } from '@/data/data'
import { FC } from 'react'

const Card: FC<IPortfolioCard> = ({ cardName, cardImg, cardTags }) => {
	return (
		<div>
			<div className='h-full w-full flex flex-col'>
				{/* TODO: Optimize the img to Image/next */}
				<img src={cardImg} alt='Portfolio Card Image' />
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
