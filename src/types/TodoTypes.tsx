interface ITodos {
  id: number
  title: string
  description: string
  entries: Array<Todo>
}
type Todo = {
  id: number;
  text_entry: string;
  completed: boolean;
}

export default ITodos