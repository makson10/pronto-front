import { LegacyRef, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface HintProps {
	shouldMakeShowAnimation: boolean;
}

const PasswordRequirementsHintPortal = (props: HintProps) => {
	return createPortal(
		<PasswordRequirementsHint {...props} />,
		document.querySelector('#password-requirements-hint-button')!
	);
};

const PasswordRequirementsHintButton = () => {
	const buttonRef = useRef<HTMLButtonElement>();
	const [shouldShowHint, setShouldShowHint] = useState<boolean>(false);
	const [shouldMakeShowAnimation, setShouldMakeShowAnimation] = useState(false);

	const handleClick = (event: any) => event.preventDefault();

	const handleFocusOn = () => {
		setShouldShowHint(true);
		setTimeout(() => setShouldMakeShowAnimation(true), 100);
	};

	const handleFocusOut = () => {
		setShouldMakeShowAnimation(false);
		setTimeout(() => setShouldShowHint(false), 200);
	};

	return (
		<>
			{shouldShowHint && (
				<PasswordRequirementsHintPortal
					shouldMakeShowAnimation={shouldMakeShowAnimation}
				/>
			)}
			<button
				id="password-requirements-hint-button"
				tabIndex={-1}
				className="relative"
				ref={buttonRef as LegacyRef<HTMLButtonElement>}
				onClick={handleClick}>
				<img
					width="18"
					height="18"
					src="https://img.icons8.com/material-outlined/24/ffffff/info--v1.png"
					alt="#"
					onMouseEnter={handleFocusOn}
					onMouseLeave={handleFocusOut}
				/>
			</button>
		</>
	);
};

const PasswordRequirementsHint = ({ shouldMakeShowAnimation }: HintProps) => {
	return (
		<div
			className={
				'absolute transition-[200ms] bottom-[25px] bg-[#787878] rounded-md flex flex-row gap-4 items-center w-max p-2 text-[0.9rem] ' +
				(shouldMakeShowAnimation ? 'opacity-100' : 'opacity-0')
			}>
			<p>Password must contain</p>
			<div className="text-left">
				<p>at least 8 character</p>
				<p>at least 1 special symbol</p>
			</div>
		</div>
	);
};

export default PasswordRequirementsHintButton;
