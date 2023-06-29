import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Hero: FC = () => {
	return (
		<main className='flex flex-col justify-between flex-grow'>
			<div className='flex flex-col justify-between flex-grow'>
				<div className='flex flex-col mt-32'>
					<h1 className='text-center mx-auto max-w-screen-xl leading-normal'>
						Разработка программного обеспечения, мобильных и веб-приложений
					</h1>
					<div className='buttons self-center p-12 flex flex-col sm:flex-row'>
						<button className='btn outline'>iosemenov@sysdyn.ru</button>
						<button className='btn fill'>+7 (931) 105-98-80</button>
					</div>
				</div>
				<nav className='bottom-nav border-t border-b mt-auto'>
					<div className='container'>
						<ul className='w-full flex flex-col sm:flex-row flex-wrap justify-between items-center text-xl'>
							<li>WEB Разработка</li>
							{/* TODO: Optimize the img to Image/next */}
							<li className='btn service'>
								<Link href='/'>
									<Image
										src='/icons/arrow-icon.svg'
										alt='Service Button'
										width={25}
										height={25}
										layout='responsive'
									/>
								</Link>
							</li>
							<li>Мобильная разработка</li>
							<li className='btn service'>
								<Link href='/'>
									<Image
										src='/icons/arrow-icon.svg'
										alt='Service Button'
										width={25}
										height={25}
										layout='responsive'
									/>
								</Link>
							</li>
							<li>3D разработка в WEB</li>
							<li className='btn service'>
								<Link href='/'>
									<Image
										src='/icons/arrow-icon.svg'
										alt='Service Button'
										width={25}
										height={25}
										layout='responsive'
									/>
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
