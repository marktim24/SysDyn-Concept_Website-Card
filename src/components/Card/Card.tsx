import { IPortfolioCard } from '@/data/data'
import { FC } from 'react'

const Card: FC<IPortfolioCard> = ({ cardName, cardImg }) => {
	return (
		<div>
			<div className='h-full w-full flex flex-col'>
				<img src={cardImg} alt='Portfolio Card Image' />
				<h1 className='text-xl self-center'>{cardName}</h1>
			</div>
		</div>
	)
}

export default Card
