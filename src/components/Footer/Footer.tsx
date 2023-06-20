import { FC } from 'react'
import PhotoGallery from '../Galleries/PhotoGallery/PhotoGallery'

const Footer: FC = () => {
	return (
		<footer className='h-screen'>
			<PhotoGallery />
			<div className='container flex justify-center items-center'>
				<div>
					<div>
						<h1>Давайте обсудим!</h1>
						<div className='buttons self-center p-12 flex flex-col sm:flex-row'>
							<button className='btn outline'>iosemenov@sysdyn.ru</button>
							<button className='btn fill'>+7 (931) 105-98-80</button>
						</div>
					</div>
					<div>
						<ul>
							<li>ООО “Техномедиа” (ИНН 1001254842)</li>
							<li>
								Aдрес: г. Петрозаводск, Карелия, ул. Чапаева 45, офисы – 301-315
							</li>
							<li>© Техномедиа 2012-2023</li>
						</ul>
					</div>
				</div>
				<nav>
					<ul>
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
