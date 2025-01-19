import { Button, Input } from '@nextui-org/react';
import PasswordRequirementsHint from '@/components/common/PasswordRequirementsHint';
import { useState } from 'react';
import ChangePasswordVisibilityButton from '@/components/common/ChangePasswordVisibilityButton';

interface Props {
	formik: any;
}

const inputClassNames = {
	innerWrapper: 'h-1/2',
	inputWrapper: 'h-fit',
	input: 'text-base',
};

const ChangePasswordForm = ({ formik }: Props) => {
	const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
	const [isConfirmNewPasswordVisible, setIsConfirmNewPasswordVisible] =
		useState(false);

	const {
		values,
		touched,
		errors,
		isSubmitting,
		handleChange,
		handleBlur,
		handleSubmit,
	} = formik;

	return (
		<form onSubmit={handleSubmit}>
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
						{errors.confirmNewPassword && touched.confirmNewPassword && (
							<p className="flex-[2_1_auto] flex flex-row justify-end text-[red] text-base">
								{errors.confirmNewPassword}
							</p>
						)}
					</div>
					<Input
						classNames={inputClassNames}
						endContent={
							<ChangePasswordVisibilityButton
								isPasswordVisible={isConfirmNewPasswordVisible}
								setIsPasswordVisible={setIsConfirmNewPasswordVisible}
								styleVariant={2}
							/>
						}
						type={isConfirmNewPasswordVisible ? 'text' : 'password'}
						size="sm"
						name="confirmNewPassword"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.confirmNewPassword}
					/>
				</div>
			</div>
			<div className="mt-8 w-full flex flex-row justify-end">
				<Button className="button" type="submit" disabled={isSubmitting}>
					Submit
				</Button>
			</div>
		</form>
	);
};

export default ChangePasswordForm;
