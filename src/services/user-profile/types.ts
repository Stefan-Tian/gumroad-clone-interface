export interface GetUserProfileByIdRequest {
  id: string;
}

export interface GetUserProfileByIdResponse {
  id: string;
  firstName: string;
  lastName: string;
  bio: string;
  avatarUrl: string;
}

export interface CreateUserProfileRequest
  extends Omit<GetUserProfileByIdResponse, 'id'> {
  userId: string;
}

export interface CreateUserProfileResponse extends GetUserProfileByIdResponse {}

export interface UpdateUserProfileRequest
  extends Partial<Omit<GetUserProfileByIdResponse, 'id'>> {
  id: string;
}

export interface UpdateUserProfileResponse extends GetUserProfileByIdResponse {}
