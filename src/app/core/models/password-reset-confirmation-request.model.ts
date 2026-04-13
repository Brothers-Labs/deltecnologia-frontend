export interface PasswordResetConfirmationRequest {
  readonly requestId: string;
  readonly verificationCode: string;
  readonly password: string;
  readonly confirmPassword: string;
}
