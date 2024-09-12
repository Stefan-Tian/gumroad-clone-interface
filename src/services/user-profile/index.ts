import axiosInstance from '@/services/base';
import { BASE_API_URL } from '@/services/constants';
import {
  CreateUserProfileRequest,
  CreateUserProfileResponse,
  GetUserProfileByUserIdRequest,
  GetUserProfileByUserIdResponse,
  UpdateUserProfileRequest,
  UpdateUserProfileResponse,
} from './types';

const baseAPI = `${BASE_API_URL}/user_profiles`;

const userProfileService = {
  getUserProfileByUserId: async (
    payload: GetUserProfileByUserIdRequest
  ): Promise<GetUserProfileByUserIdResponse> => {
    const response = await axiosInstance.get(`${baseAPI}/get_by_user_id`, {
      params: {
        user_id: payload.userId,
      },
    });
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
  getUserProfileByUserId: 'user_profile_by_user_id',
};

export default userProfileService;
