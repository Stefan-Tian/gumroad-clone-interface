import { useMutation } from 'react-query';
import passwordResetsService from './index';

export const useSendResetPasswordEmail = () => {
  return useMutation(passwordResetsService.sendResetPasswordEmail);
};

export const useVerifyResetPasswordToken = () => {
  return useMutation(passwordResetsService.verifyResetPasswordToken);
};

export const useResetPassword = () => {
  return useMutation(passwordResetsService.resetPassword);
};
