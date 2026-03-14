interface ITodo {
  id: string | number; 
  task: string;        
  description?: string;
  priority?: number;
  isDone: boolean;
  createdAt?: string;
  updatedAt?: string;
}

type AddFn = (task: string) => Promise<void>;
type ToggleFn = (todo: ITodo) => Promise<void>;
type DeleteFn = (id: string | number) => Promise<void>;