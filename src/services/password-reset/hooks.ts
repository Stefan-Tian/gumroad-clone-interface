import { useMutation } from 'react-query';
import passwordResetService from './index';

export const useSendResetPasswordEmail = () => {
  return useMutation(passwordResetService.sendResetPasswordEmail);
};

export const useVerifyResetPasswordToken = () => {
  return useMutation(passwordResetService.verifyResetPasswordToken);
};

export const useResetPassword = () => {
  return useMutation(passwordResetService.resetPassword);
};
