export type RegisterProfileType = 'user' | 'client';

export interface RegisterRequest {
  readonly profileType: RegisterProfileType;
  readonly fullName: string;
  readonly email: string;
  readonly phone: string;
  readonly company: string;
  readonly jobTitle: string;
  readonly segment: string;
  readonly employeesRange: string;
  readonly password: string;
  readonly confirmPassword: string;
  readonly acceptTerms: boolean;
  readonly acceptUpdates: boolean;
}
