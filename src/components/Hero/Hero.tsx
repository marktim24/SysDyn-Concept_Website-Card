import Link from 'next/link'
import { FC } from 'react'

const Hero: FC = () => {
	return (
		<main className='flex flex-col justify-between flex-grow'>
			<div className='flex flex-col justify-between flex-grow'>
				<div className='flex flex-col mt-32'>
					<h1 className='text-6xl font-unbounded text-center leading-relaxed'>
						Разработка программного обеспечения, мобильных и веб-приложений
					</h1>
					<div className='buttons self-center p-12'>
						<button className='btn outline'>iosemenov@sysdyn.ru</button>
						<button className='btn fill'>+7 (931) 105-98-80</button>
					</div>
				</div>
				<nav className='bottom-nav border-t border-b mt-auto'>
					<div className='container'>
						<ul className='w-full flex flex-row justify-between items-center text-xl'>
							<li>WEB Разработка</li>
							<li className='btn service'>
								<Link href='/'>
									<img src='/icons/arrow-icon.svg' alt='Service Button' />
								</Link>
							</li>
							<li>Мобильная разработка</li>
							<li className='btn service'>
								<Link href='/'>
									<img src='/icons/arrow-icon.svg' alt='Service Button' />
								</Link>
							</li>
							<li>3D разработка в WEB</li>
							<li className='btn service'>
								<Link href='/'>
									<img src='/icons/arrow-icon.svg' alt='Service Button' />
								</Link>
							</li>
							<li>Геймификация бизнеса</li>
						</ul>
					</div>
				</nav>
			</div>
		</main>
	)
}

export default Hero
