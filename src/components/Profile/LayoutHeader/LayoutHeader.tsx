'use client';
import SecondaryHeader from '@/components/common/SecondaryHeader';
import MainHeader from '@/components/MainHeader/MainHeader';
import { useAppSelector } from '@/store/hooks';
import { useParams } from 'next/navigation';

type Params = {
	profileId: string;
};

const LayoutHeader = () => {
	const userId = useAppSelector((state) => state.user.data?.id);
	const params = useParams<Params>();
	const profileId = parseInt(params.profileId);

	if (!userId) return <MainHeader />;
	return userId === profileId ? <SecondaryHeader /> : <MainHeader />;
};

export default LayoutHeader;
