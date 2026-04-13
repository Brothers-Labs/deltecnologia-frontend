export interface PasswordResetChallenge {
  readonly requestId: string;
  readonly destinationMasked: string;
  readonly channel: 'email';
  readonly expiresAt: string;
}
