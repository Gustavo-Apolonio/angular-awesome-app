export interface Task {
  id: number;
  name: string;
  status: {
    name: string;
    done: boolean;
  };
}
