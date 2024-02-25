import Link from 'next/link';
import style from '@/styles/registerButton.module.scss';

export default function RegisterButton() {
	return (
		<div className="flex flex-row gap-2">
			<Link href={'/signup'} className={style['button']}>
				Sign up
			</Link>
			<p className="flex flex-col justify-center text-2xl">|</p>
			<Link href={'/login'} className={style['button']}>
				Log in
			</Link>
		</div>
	);
}
