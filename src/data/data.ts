export interface IPortfolioCard {
	id?: number
	cardName: string
	cardImg: string
	cardTags?: string[]
}

export const portfolioCards: IPortfolioCard[] = [
	{
		id: 0,
		cardName: 'мобильное приложение Тик тайм',
		cardImg: '/images/portfolio/Tick-Time_Card.png',
		cardTags: ['мобильная разработка', 'сайт'],
	},
	{
		id: 1,
		cardName: 'мобильное приложение Тик тайм',
		cardImg: '/images/portfolio/Tick-Time_Card.png',
		cardTags: ['мобильная разработка', 'сайт'],
	},
	{
		id: 2,
		cardName: 'мобильное приложение Тик тайм',
		cardImg: '/images/portfolio/Tick-Time_Card.png',
		cardTags: ['мобильная разработка', 'сайт'],
	},
	{
		id: 3,
		cardName: 'мобильное приложение Тик тайм',
		cardImg: '/images/portfolio/Tick-Time_Card.png',
		cardTags: ['мобильная разработка', 'сайт'],
	},
	{
		id: 4,
		cardName: 'мобильное приложение Тик тайм',
		cardImg: '/images/Portfolio/Tick-Time_Card.png',
		cardTags: ['мобильная разработка', 'сайт'],
	},
	{
		id: 5,
		cardName: 'мобильное приложение Тик тайм',
		cardImg: '/images/portfolio/Tick-Time_Card.png',
		cardTags: ['мобильная разработка', 'сайт'],
	},
]

// Logos from clientsLogos folder in ClientsLogosGallery component

export type TypeClientsLogos = {
	imgURL: string
}

const LogosImages = require.context(
	'public/images/clientsLogos',
	false,
	/\.(svg|png|jpg|jpeg)$/
)

const logosImagesSet = new Set()

LogosImages.keys().forEach(key => {
	logosImagesSet.add(LogosImages(key).default)
})

export const ClientsLogos: TypeClientsLogos[] = Array.from(logosImagesSet).map(
	imgURL => ({ imgURL })
)
//

// Photos from CompanyPhotos folder in PhotoGallery component

const CompanyPhotosImages = require.context(
	'public/images/CompanyPhotos',
	false,
	/\.(svg|png|jpg|jpeg)$/
)

const companyPhotosSet = new Set()

CompanyPhotosImages.keys().forEach(key => {
	companyPhotosSet.add(CompanyPhotosImages(key).default)
})

export const CompanyPhotos: TypeClientsLogos[] = Array.from(
	companyPhotosSet
).map(imgURL => ({ imgURL }))
//
