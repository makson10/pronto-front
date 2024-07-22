'use client';
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from '@nextui-org/react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { ShowMessageBox } from '@/components/MessageBox';
import { CopyPostLinkItemIcon, DeletePostItemIcon } from './ButtonIcons';

interface Props {
	postId: number;
}

const PostManagementButton = ({ postId }: Props) => {
	const router = useRouter();
	const path = usePathname();
	const dropdownTriggerRef = useRef<HTMLButtonElement>(null);
	const [needToShowErrorMessage, setNeedToShowErrorMessage] =
		useState<boolean>(false);

	const copyPostLink = () => {
		const url = process.env.NEXT_PUBLIC_FRONT_BASE_URL + path + '#' + postId;
		navigator.clipboard.writeText(url);

		dropdownTriggerRef.current?.click();
		setNeedToShowErrorMessage(true);
	};

	const deletePost = async () => {
		await axios.post('/api/deletepost', postId);
		router.refresh();
		dropdownTriggerRef.current?.click();
	};

	useEffect(() => {
		if (!needToShowErrorMessage) return;

		setTimeout(() => {
			setNeedToShowErrorMessage(false);
		}, 4000);
	}, [needToShowErrorMessage]);

	return (
		<>
			{needToShowErrorMessage && (
				<ShowMessageBox message={'Post link was copied'} />
			)}
			<Dropdown className="bg-gray-800">
				<DropdownTrigger>
					<div className="flex flex-col justify-center">
						<button
							className="p-2 rounded-lg font-bold bg-gray-800"
							ref={dropdownTriggerRef}>
							<img
								width="18"
								height="18"
								src="https://img.icons8.com/ios-glyphs/100/ffffff/ellipsis.png"
								alt="#"
							/>
						</button>
					</div>
				</DropdownTrigger>
				<DropdownMenu aria-label="post management dropdown menu">
					<DropdownItem
						key="copyPostLink"
						startContent={<CopyPostLinkItemIcon />}
						onAction={copyPostLink}>
						Copy post link
					</DropdownItem>
					<DropdownItem
						key="delete"
						className="text-red-600"
						color="danger"
						startContent={<DeletePostItemIcon />}
						onAction={deletePost}>
						Delete post
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</>
	);
};

export default PostManagementButton;
