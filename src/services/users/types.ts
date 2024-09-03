import { BaseMessageResponse } from '../types';

export interface LoginUserRequest {
  email: string;
  password: string;
}

export interface User {
  username: string;
  email: string;
  emailVerified: boolean;
  id: string;
}

export interface LoginUserResponse {
  user: User;
  jwt: string;
}

export interface RegisterUserRequest extends LoginUserRequest {
  username: string;
}

export interface RegisterUserResponse extends BaseMessageResponse {
  jwt: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ForgotPasswordResponse extends BaseMessageResponse {}

export interface SendVerificationEmailResponse extends BaseMessageResponse {}

export interface GetUserResponse extends User {}

export interface VerifyEmailResponse extends BaseMessageResponse {}
