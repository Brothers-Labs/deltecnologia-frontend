import { AuthRole } from '../enums/auth-role.enum';
import { PortalPermission } from '../enums/portal-permission.enum';

export interface AuthSession {
  readonly token: string;
  readonly expiresAt: string;
  readonly user: {
    readonly name: string;
    readonly email: string;
    readonly role: AuthRole;
    readonly roleLabel: string;
    readonly company: string;
    readonly permissions: readonly PortalPermission[];
  };
}
