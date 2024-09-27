import { Users } from './users.model';

export interface Task {
  id: number;
  name: string;
  date: Date;
  // people: Users[];
  completed: boolean;
}
