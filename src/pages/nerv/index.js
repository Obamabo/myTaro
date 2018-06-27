import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less';

class TodoList extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  constructor () {
    super(...arguments)
    this.state = {
      todos: [],
      inputTodoValue: ''
    }
  }

  addTodoKey = e => {
    if (e && e.keyCode === 13) {
      this.addTodo({
        createTime: new Date().getTime(),
        title: e.target.value
      })
    }
  }

  addTodoClick = () => {
    this.addTodo({
      createTime: new Date().getTime(),
      title: this.state.inputTodoValue
    })
  }

  addTodo (todoItem) {
    const todos = this.state.todos.concat()
    todos.push(todoItem)
    this.setState({
      todos,
      inputTodoValue: ''
    })
  }

  setTodoValue = e => {
    this.changeTimer && clearTimeout(this.changeTimer)
    this.changeTimer = setTimeout(() => {
      this.setState({
        inputTodoValue: e.target.value
      })
    }, 100)
  }

  deleteTodo (index, e) {
    e.preventDefault()
    const todos = this.state.todos.concat()
    todos.splice(index, 1)
    this.setState({
      todos
    })
  }

  render () {
    return (
      <View className='todo'>
        <div className='todo_add'>
          <input type='text' onKeyDown={this.addTodoKey} onChange={this.setTodoValue} />
          <button onClick={this.addTodoClick}>add</button>
        </div>
        <ul className='list'>
          {this.state.todos.map((item, index) => (
            <li className='list_item'>
              <span>{item.title}</span>
              <a href=' ' onClick={this.deleteTodo.bind(this, index)}>x</a >
            </li>
          ))}
        </ul>
      </View>
    )
  }
}

export default TodoList