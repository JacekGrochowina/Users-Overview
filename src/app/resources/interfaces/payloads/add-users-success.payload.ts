import { User } from '../user.interface';

export interface AddUsersSuccessPayload {
  results: User[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}
