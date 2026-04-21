export interface NavigationItem {
  readonly label: string;
  readonly route: string;
  readonly fragment?: string;
  readonly icon?: string;
  readonly exact?: boolean;
}
