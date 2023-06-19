import Link from 'next/link'
import { FC } from 'react'

const Header: FC = () => {
	return (
		<header>
			<div className='container'>
				<nav className='flex'>
					<ul className='w-full flex justify-between font-sans text-xl'>
						<li>
							<Link href='/'>_проекты</Link>
						</li>
						<li>
							<Link
								href='/'
								className='uppercase font-unbounded text-2xl tracking-widest'
							>
								техно_медиа
							</Link>
						</li>
						<li>
							<Link href='/'>_услуги</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
