export interface GetUserProfileByUserIdRequest {
  userId: string;
}

export interface GetUserProfileByUserIdResponse {
  id: string;
  firstName: string;
  lastName: string;
  bio: string;
  avatarUrl: string;
}

export interface CreateUserProfileRequest {
  userId: string;
  firstName: string;
  lastName: string;
  bio?: string;
  avatar?: File;
}

export interface CreateUserProfileResponse
  extends GetUserProfileByUserIdResponse {}

export interface UpdateUserProfileRequest
  extends Partial<Omit<CreateUserProfileRequest, 'userId'>> {
  id: string;
}

export interface UpdateUserProfileResponse
  extends GetUserProfileByUserIdResponse {}
