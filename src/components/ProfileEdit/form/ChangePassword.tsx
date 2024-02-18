import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/react';
import EditField from './EditField';
import { useState } from 'react';
import ChangePasswordVisibilityButton from '@/components/ChangePasswordVisibilityButton';
import PasswordRequirementsHint from '@/components/PasswordRequirementsHint';
import { changePasswordValidationScheme } from '@/assets/validationScheme';
import axios from 'axios';
import { Form, Formik } from 'formik';

export default function ChangePassword() {
	return (
		<EditField
			title="Password"
			description={
				<p>
					Here you can change ur password.{' '}
					<b>Be careful, you can change password once a week</b>
				</p>
			}>
			<ChangePasswordModal />
		</EditField>
	);
}

export const ChangePasswordModal = () => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
	const [isconfirmNewPasswordVisible, setIsconfirmNewPasswordVisible] =
		useState(false);

	const postPasswordChanges = async (
		oldPassword: string,
		newPassword: string
	) => {
		await axios.post('/api/changepassword', { oldPassword, newPassword });
	};

	return (
		<>
			<Button onPress={onOpen} className="bg-white font-bold text-base">
				Change password
			</Button>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="opaque">
				<ModalContent className="bg-gray-800 p-2">
					{() => (
						<>
							<ModalHeader>
								<p className="text-xl">Change Password</p>
							</ModalHeader>
							<ModalBody className="py-4">
								<Formik
									initialValues={{
										oldPassword: '',
										newPassword: '',
										confirmNewPassword: '',
									}}
									validationSchema={changePasswordValidationScheme}
									onSubmit={(values, { setSubmitting }) => {
										setTimeout(async () => {
											console.log(values);
											await postPasswordChanges(
												values.oldPassword,
												values.newPassword
											);
											setSubmitting(false);
										}, 200);
									}}>
									{({
										values,
										errors,
										touched,
										handleChange,
										handleBlur,
										handleSubmit,
										isSubmitting,
									}) => (
										<Form onSubmit={handleSubmit}>
											<div className="flex flex-col gap-5">
												<div className="flex flex-col gap-1">
													<div className="flex flex-row">
														<div className="flex flex-row gap-1">
															<p>Enter old password</p>
														</div>
														{errors.oldPassword && touched.oldPassword && (
															<p className="flex-[2_1_auto] flex flex-row justify-end text-[red] text-base">
																{errors.oldPassword}
															</p>
														)}
													</div>
													<Input
														classNames={inputClassNames}
														size="sm"
														type="text"
														name="oldPassword"
														onChange={handleChange}
														onBlur={handleBlur}
														value={values.oldPassword}
													/>
												</div>
												<div className="flex flex-col gap-1">
													<div className="flex flex-row">
														<div className="flex flex-row gap-1">
															<p>Enter new password</p>
															<PasswordRequirementsHint />
														</div>
														{errors.newPassword && touched.newPassword && (
															<p className="flex-[2_1_auto] flex flex-row justify-end text-[red] text-base">
																{errors.newPassword}
															</p>
														)}
													</div>
													<Input
														classNames={inputClassNames}
														endContent={
															<ChangePasswordVisibilityButton
																isPasswordVisible={isNewPasswordVisible}
																setIsPasswordVisible={setIsNewPasswordVisible}
																styleVariant={2}
															/>
														}
														size="sm"
														type={isNewPasswordVisible ? 'text' : 'password'}
														name="newPassword"
														onChange={handleChange}
														onBlur={handleBlur}
														value={values.newPassword}
													/>
												</div>
												<div className="flex flex-col gap-1">
													<div className="flex flex-row">
														<div className="flex flex-row gap-1">
															<p>Repeat new password</p>
														</div>
														{errors.confirmNewPassword &&
															touched.confirmNewPassword && (
																<p className="flex-[2_1_auto] flex flex-row justify-end text-[red] text-base">
																	{errors.confirmNewPassword}
																</p>
															)}
													</div>
													<Input
														classNames={inputClassNames}
														endContent={
															<ChangePasswordVisibilityButton
																isPasswordVisible={isconfirmNewPasswordVisible}
																setIsPasswordVisible={
																	setIsconfirmNewPasswordVisible
																}
																styleVariant={2}
															/>
														}
														type={
															isconfirmNewPasswordVisible ? 'text' : 'password'
														}
														size="sm"
														name="confirmNewPassword"
														onChange={handleChange}
														onBlur={handleBlur}
														value={values.confirmNewPassword}
													/>
												</div>
											</div>
											<div className="mt-8 w-full flex flex-row justify-end">
												<Button
													className="bg-white font-bold text-base"
													type="submit"
													disabled={isSubmitting}>
													Submit
												</Button>
											</div>
										</Form>
									)}
								</Formik>
							</ModalBody>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

const inputClassNames = {
	innerWrapper: 'h-1/2',
	inputWrapper: 'h-fit',
	input: 'text-base',
};
