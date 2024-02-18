import type { Meta, StoryObj } from '@storybook/react';
import { ChangePasswordModal } from '../components/ProfileEdit/form/ChangePassword';

const meta: Meta<typeof ChangePasswordModal> = {
	title: 'Example/Page',
	component: ChangePasswordModal,
};

export default meta;
type Story = StoryObj<typeof ChangePasswordModal>;

export const FirstStory: Story = {
	args: {},
};
