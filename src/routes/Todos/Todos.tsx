import React from 'react'
import ITodos from '../../types/TodoTypes'
import api from '../../utils/api'
import { Card, Col, Row } from 'antd';


const Todos = () => {
  const [todos, setTodos] = React.useState<Array<ITodos>>([])
  
  React.useEffect(() => {
    getTodos()
  }, []);
  
  async function getTodos() {
    await api.get('/todos/').then(res =>  {
      setTodos(res.data)
    }).catch((err) => console.log(err))
  }

  return (
  <div style={{ background: '#ECECEC', padding: '20px' }}>
    <Row type="flex" justify="start" align="stretch" gutter={16}>
      {todos.map(todo => (
        <Col xs={12} sm={12} md={8} lg={6} xl={4} style={{ paddingBottom: '20px'}}>
          <a key={todo.id} href={"/todos/" + todo.id}>
            <Card title={todo.title} bordered={true} hoverable={true}>
              {todo.entries.map(entry => (
                <li>{entry.text_entry}</li>
              ))}
            </Card>
          </a>
        </Col>
      ))}
    </Row>
  </div>
  // </div>
  )
}

export default Todos