import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
	picture: React.ReactNode;
	closeFullscreenPreview: () => void;
}

const FullscreenPreview = ({ picture, closeFullscreenPreview }: Props) => {
	const pictureRef = useRef<any>(null);

	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflowY = 'auto';
		};
	}, []);

	useEffect(() => {
		const escapeHandler = (event: KeyboardEvent) => {
			if (event.key === 'Escape') closeFullscreenPreview();
		};

		document.addEventListener('keydown', escapeHandler);

		return () => {
			document.removeEventListener('keydown', escapeHandler);
		};
	}, []);

	useEffect(() => {
		const handleClickOutsidePicture = (event: MouseEvent) => {
			if (pictureRef.current && !pictureRef.current.contains(event.target)) {
				closeFullscreenPreview();
			}
		};

		document.addEventListener('click', handleClickOutsidePicture);

		return () => {
			document.removeEventListener('click', handleClickOutsidePicture);
		};
	}, []);

	return (
		<div className="z-50 fixed top-[0] left-[0] w-screen h-screen overflow-x-hidden overflow-y-hidden bg-gray-900 bg-opacity-70">
			<button
				className="absolute right-[45px] top-[0.7rem] text-[2.5rem] h-fit transition-all ease-linear duration-100 hover:scale-[1.2] hover:text-gray-500"
				onClick={closeFullscreenPreview}>
				&times;
			</button>
			<div className="h-full flex justify-center items-center overflow-hidden">
				<Swiper effect="coverflow" ref={pictureRef}>
					<SwiperSlide>{picture}</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default FullscreenPreview;
