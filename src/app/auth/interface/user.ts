import { Moment } from 'moment';

export interface IUser {
  id: string;
  name: string;
  email: string;
  lastUpdated: Moment;
}
