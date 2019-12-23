import React from 'react';
import api from '../../utils/api'
import ITodos from '../../types/TodoTypes'
import { RouteComponentProps, withRouter } from 'react-router';


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

  React.useEffect(() => {
    getTodo()
  });
  
  function getTodo() {
    api.get('/todos/' + match.params.id).then(res =>  {
      setTodo(res.data)
    }).catch((err) => console.log(err))
  }

  // return <div>Book ID: {match.params.id}</div>;
  return (
    <div>
      <h1>{todo.title}</h1>
      <div>
        {todo.entries.map(entry => (
          <li key={entry.id}>
            {entry.text_entry}
          </li>
          )
        )}
      </div>
    </div>
  )
}

export default SingleTodo
