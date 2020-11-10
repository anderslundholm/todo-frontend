import React from 'react';
import api from '../../utils/api'
import ITodos from '../../types/TodoTypes'
import { RouteComponentProps } from 'react-router';
import { Checkbox } from 'antd'
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

type SingleTodoParams = {
  id: string
}

type SingleTodoProps = RouteComponentProps<SingleTodoParams>


const SingleTodo: React.FC<SingleTodoProps> = ({ match }) => {
  const [todo, setTodo] = React.useState<ITodos>({
    id: 0,
    title: "",
    description: "",
    entries: []
  })
  const [checkTodo, setCheckTodo] = React.useState<Boolean>(false)

  React.useEffect(() => {
    getTodo()
  }, []);

  function getTodo() {
    api.get('/todos/' + match.params.id).then(res => {
      setTodo(res.data)
    }).catch((err) => console.log(err))
  }

  return (
    <div>
      <h1>{todo.title}</h1>
      <div>
        <ul style={{ listStyle: 'none' }}>
          {todo.entries.map(entry => (
            <li key={entry.id}>
            <Checkbox>
              {entry.text_entry}
            </Checkbox>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SingleTodo
