export interface ITodo {
  id: string;
  completed: boolean;
  content: string;
}

export interface TodoState {
  allIds: any[];
  byIds: any;
}
