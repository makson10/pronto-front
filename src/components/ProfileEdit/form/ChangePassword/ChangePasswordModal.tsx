import { useFormik } from 'formik';
import { changePasswordValidationScheme } from '@/assets/validationScheme';
import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/react';
import ChangePasswordForm from './ChangePasswordForm';
import axios from 'axios';

const ChangePasswordModal = () => {
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

	const formik = useFormik({
		initialValues: {
			oldPassword: '',
			newPassword: '',
			confirmNewPassword: '',
		},
		validationSchema: changePasswordValidationScheme,
		onSubmit: (values, { setSubmitting }) => {
			setTimeout(async () => {
				await postPasswordChanges(values.oldPassword, values.newPassword);
				setSubmitting(false);
			}, 200);
		},
	});

	const postPasswordChanges = async (
		oldPassword: string,
		newPassword: string
	) => {
		try {
			await axios.post('/api/changepassword', {
				oldPassword,
				newPassword,
			});
			formik.resetForm();
			onClose();
		} catch (error: any) {
			formik.setErrors({ oldPassword: error.response.data });
		}
	};

	return (
		<>
			<Button onPress={onOpen} className="bg-white font-bold text-base">
				Change password
			</Button>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="opaque">
				<ModalContent className="bg-gray-800 p-2">
					{(onClose) => (
						<>
							<ModalHeader>
								<p className="text-xl">Change Password</p>
							</ModalHeader>
							<ModalBody className="py-4">
								<ChangePasswordForm formik={formik} />
							</ModalBody>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

export default ChangePasswordModal;
