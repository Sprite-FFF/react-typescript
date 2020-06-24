import React, {useState, useEffect } from 'react'
 // tslint:disable-next-line: no-console
import TodoHeader from '../../components/hooksTodo/TodoHeader'
import TodoInput from '../../components/hooksTodo/TodoInput'
import TodoItem from '../../components/hooksTodo/TodoItem'
import TodoFooter from '../../components/hooksTodo/TodoFooter'
import * as style from '../todo/todo.css'
const uuid = ():string => {
  return new Date().getTime().toString() + Math.random() * 10000
}
enum Status {
  All,
  Active,
  Completed
}
interface ITodo {
  content: string,
  isComplete: boolean,
  id: string
}
type TodoMap = Map<string, ITodo>
const Todo = () => {
  // const [value, setValue] = useState('')
  const [inputVal, setInputValue] = useState<string>('')
  const [todos, setTodos] = useState<TodoMap>(new Map())
  const [visibleTodos, setVisibleTodos] = useState<ITodo[]>([])
  const [total, setTotal] = useState<number>(0)
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false)
  const [ status, setStatus ] = useState<Status>(Status.All)
  useEffect(() => {
    setTotal(todos.size)
    filterTodos(status)
  }, [todos])
  useEffect(() => {
    const flag:boolean = visibleTodos.length === 0 ? false : visibleTodos.every(todo => todo.isComplete)
    setIsAllChecked(flag)
  }, [visibleTodos])
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  const handleKeyPress = (event:React.KeyboardEvent) => {
    console.log(event.charCode)
    if(event.charCode === 13) {
      const todo = { id: uuid(), content: inputVal, isComplete: false }
      todos.set(todo.id, todo)
      setTodos(new Map([...todos]))
    }
  }
  const handleCheckAll = () => {
    setVisibleTodos(visibleTodos.map(todo => { 
      todo.isComplete = !isAllChecked
      return todo 
    }))
  }
  const completeTodoHandler = (item:ITodo) => {
    const flag: boolean = (todos.get(item.id) as ITodo).isComplete;
    (todos.get(item.id) as ITodo).isComplete = !flag
    setTodos(new Map([...todos]))
  }
  const deleteTodoHandler = (item:ITodo) => {
    todos.delete(item.id)
    setTodos(new Map([...todos]))
  }
  const filterAll = () => {
    setVisibleTodos([...todos.values()])
  }
  const filterActive = () => {
    setVisibleTodos([...todos.values()].filter(todo => !todo.isComplete))
  }
  const filterCompleted = () => {
    setVisibleTodos([...todos.values()].filter(todo => todo.isComplete))
  }
  const filterTodos = (operation: Status) => {
    switch (operation) {
      case Status.All:
        filterAll()
        break
      case Status.Active:
        filterActive()
        break
      case Status.Completed:
        filterCompleted()
        break
    }
  }
  const footerClickHandler = (operation: Status) => {
    setStatus(operation)
    filterTodos(operation)
  }
  const clear = () => {
    setTodos(new Map())
    setVisibleTodos([])
  }
  const TodoMain = (
    <div className={ style.main }>
      {
        visibleTodos.map((todo) => <TodoItem 
          key={ todo.id }
          item={todo}
          completeTodoHandler={ completeTodoHandler }
          deleteTodoHandler={ deleteTodoHandler }  />)
      }
    </div>
  )
  return (
    <div className={ style.app }>
      <TodoHeader title="TodoList" />
      <TodoInput 
        value={ inputVal }
        isAllChecked={ isAllChecked }
        changeHandler={ handleChange }
        keyPressHandler={ handleKeyPress }
        checkAllHandler={ handleCheckAll }/>
      { TodoMain }
      <TodoFooter
        status={ status }
        count={ total }
        clickHandler={ footerClickHandler }
        clearHandler={ clear } />
    </div>
  )
}

export default Todo