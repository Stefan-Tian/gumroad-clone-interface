import axiosInstance from '@/services/base';
import { BASE_API_URL } from '@/services/constants';
import {
  GetUserResponse,
  LoginUserRequest,
  LoginUserResponse,
  RegisterUserRequest,
  RegisterUserResponse,
  SendVerificationEmailResponse,
  VerifyEmailResponse,
} from '@/services/users/types';

const baseAPI = `${BASE_API_URL}/users`;

const usersService = {
  login: async (data: LoginUserRequest): Promise<LoginUserResponse> => {
    const response = await axiosInstance.post(`${baseAPI}/login`, data);
    return response.data;
  },
  register: async (
    data: RegisterUserRequest
  ): Promise<RegisterUserResponse> => {
    const response = await axiosInstance.post(`${baseAPI}/register`, data);
    return response.data;
  },
  sendVerificationEmail: async (): Promise<SendVerificationEmailResponse> => {
    const response = await axiosInstance.post(
      `${baseAPI}/resend_email_verification`
    );
    return response.data;
  },
  getUser: async (): Promise<GetUserResponse> => {
    const response = await axiosInstance.get(`${baseAPI}/current_user_info`);
    return response.data;
  },
  verifyEmail: async (token: string): Promise<VerifyEmailResponse> => {
    const response = await axiosInstance.get(
      `${baseAPI}/verify_email/${token}`
    );
    return response.data;
  },
};

export const userQueryKeys = {
  getUser: 'current_user_info',
};

export default usersService;
