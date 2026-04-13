export interface RegisterResult {
  readonly id: string;
  readonly onboardingStatus: 'pending' | 'approved';
  readonly message: string;
}
