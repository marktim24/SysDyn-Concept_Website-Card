import { FC } from 'react'
import PhotoGallery from '../Galleries/PhotoGallery/PhotoGallery'

const Footer: FC = () => {
	return (
		<footer className='h-screen flex flex-col justify-center'>
			<div className='h-screen container flex flex-col justify-around'>
				<div className='flex items-center justify-center'>
					<PhotoGallery />
				</div>
				<div className='flex flex-col justify-center items-center'>
					<div className='grid grid-cols-2 gap-10 mx-auto justify-between items-center'>
						<div className='flex flex-col'>
							<h1>Давайте обсудим!</h1>
							<div className='buttons self-center p-12 flex flex-col sm:flex-row'>
								<button className='btn outline'>iosemenov@sysdyn.ru</button>
								<button className='btn fill'>+7 (931) 105-98-80</button>
							</div>
						</div>
						<ul className='flex flex-col font-unbounded text-lg mx-auto'>
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
					<nav className='w-auto flex mb-auto'>
						<ul className=' flex flex-row sm:flex-row flex-wrap justify-evenly items-center text-xl'>
							<li className='mx-10'>Веб-приложений</li>
							<li className='mx-10'>Мобильные приложения</li>
							<li className='mx-10'>Руководство проектов</li>
							<li className='mx-10'>3D в web</li>
							<li className='mx-10'>Геймификация бизнеса</li>
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	)
}

export default Footer
