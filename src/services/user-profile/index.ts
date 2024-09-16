import axiosInstance from '@/services/base';
import { BASE_API_URL } from '@/services/constants';
import {
  CreateUserProfileRequest,
  CreateUserProfileResponse,
  GetUserProfileByUserIdResponse,
  UpdateUserProfileRequest,
  UpdateUserProfileResponse,
} from './types';

const baseAPI = `${BASE_API_URL}/user_profiles`;

const userProfileService = {
  getUserProfile: async (): Promise<GetUserProfileByUserIdResponse> => {
    const response = await axiosInstance.get(
      `${baseAPI}/get_current_user_profile`
    );
    return response.data;
  },
  createUserProfile: async (
    payload: CreateUserProfileRequest
  ): Promise<CreateUserProfileResponse> => {
    const formData = new FormData();
    formData.append('user_profile[user_id]', payload.userId);
    formData.append('user_profile[first_name]', payload.firstName);
    formData.append('user_profile[last_name]', payload.lastName);
    if (payload.bio) formData.append('user_profile[bio]', payload.bio);
    if (payload.avatar) formData.append('user_profile[avatar]', payload.avatar);

    const response = await axiosInstance.post(`${baseAPI}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
  updateUserProfile: async (
    payload: UpdateUserProfileRequest
  ): Promise<UpdateUserProfileResponse> => {
    const formData = new FormData();
    if (payload.firstName)
      formData.append('user_profile[first_name]', payload.firstName);
    if (payload.lastName)
      formData.append('user_profile[last_name]', payload.lastName);
    if (payload.bio) formData.append('user_profile[bio]', payload.bio);
    if (payload.avatar) formData.append('user_profile[avatar]', payload.avatar);

    const response = await axiosInstance.patch(
      `${baseAPI}/${payload.id}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  },
};

export const userProfileQueryKeys = {
  getUserProfile: 'user_profile',
};

export default userProfileService;
