import AddNewPostButton from './AddNewPostButton';
import Separator from '../../ProfileEdit/form/Separator';
import Posts from './Posts';

interface Props {
	openEditor: () => void;
}

const PostList = ({ openEditor }: Props) => {
	return (
		<>
			<AddNewPostButton openEditor={openEditor} />
			<Separator />
			<Posts />
		</>
	);
};

export default PostList;
