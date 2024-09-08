import { BaseMessageResponse } from '../types';

export interface SendResetPasswordEmailRequest {
  email: string;
}

export interface SendResetPasswordEmailResponse extends BaseMessageResponse {}

export interface VerifyResetPasswordTokenRequest {
  token: string;
}

export interface VerifyResetPasswordTokenResponse extends BaseMessageResponse {}

export interface ResetPasswordRequest {
  password: string;
  token: string;
}

export interface ResetPasswordResponse extends BaseMessageResponse {}
