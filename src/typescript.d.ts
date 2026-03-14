interface ITodo {
  id: string;
  task: string;
  isDone: boolean;
}

type AddFn = (task: string) => Promise<void>;
type ToggleFn = (todo: ITodo) => Promise<void>;
type DeleteFn = (id: string | number) => Promise<void>;