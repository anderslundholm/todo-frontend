import React from 'react'
import ITodos from '../../types/TodoTypes'
import api from '../../utils/api'


const Todos = () => {
  const [todos, setTodos] = React.useState<Array<ITodos>>([])
  
  React.useEffect(() => {
    getTodos()
  });
  
  async function getTodos() {
    await api.get('/todos/').then(res =>  {
      setTodos(res.data)
    }).catch((err) => console.log(err))
  }

  return (
    <div>
      <h1>All Todos</h1>
      <div>
        {todos.map(todo => (
          <a key={todo.id} href={"/todos/" + todo.id}>
            {todo.title}
          </a>
          )
        )}
      </div>
    </div>
  )

}

export default Todos;