import FormHeader from '@/components/FormHeader';
import Footer from '@/components/Footer';
import SignUpForm from './SignUpForm';

function SignUpFormContainer() {
	return (
		<div className="flex-[2_1_auto] min-w-full min-h-full flex justify-center items-center">
			<SignUpForm />
		</div>
	);
}

export default function SignUp() {
	return (
		<div className="flex flex-col min-h-screen">
			<FormHeader />
			<SignUpFormContainer />
			<Footer />
		</div>
	);
}
