import { FC } from 'react'
import PhotoGallery from '../Galleries/PhotoGallery/PhotoGallery'

const Footer: FC = () => {
	return (
		<footer className='h-screen flex flex-col justify-center'>
			<div className='flex items-center justify-center'>
				<PhotoGallery />
			</div>
			<div className='container flex flex-col justify-between mt-24'>
				<div className='flex flex-row justify-between items-center'>
					<div>
						<h1>Давайте обсудим!</h1>
						<div className='buttons self-center p-12 flex flex-col sm:flex-row'>
							<button className='btn outline'>iosemenov@sysdyn.ru</button>
							<button className='btn fill'>+7 (931) 105-98-80</button>
						</div>
					</div>
					<div>
						<ul className='font-unbounded text-lg'>
							<li className='mt-5'>
								ООО “Техномедиа” <br />
								(ИНН 1001254842)
							</li>
							<li className='mt-5'>
								Aдрес: г. Петрозаводск, Карелия, <br />
								ул. Чапаева 45, офисы – 301-315
							</li>
							<li className='mt-5'>© Техномедиа 2012-2023</li>
						</ul>
					</div>
				</div>
				<nav className='flex mt-auto justify-center'>
					<ul className='w-full flex flex-col sm:flex-row flex-wrap justify-between items-center text-xl'>
						<li>Веб-приложений</li>
						<li>Мобильные приложения</li>
						<li>Руководство проектов</li>
						<li>3D в web</li>
						<li>Геймификация бизнеса</li>
					</ul>
				</nav>
			</div>
		</footer>
	)
}

export default Footer
