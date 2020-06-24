import React from 'react'
import style from '../../view/todo/todo.css'
interface ITodo {
  content: string,
  isComplete: boolean,
  id: string
}
interface IProps {
  item: ITodo,
  completeTodoHandler: (item: ITodo) => void,
  deleteTodoHandler: (item: ITodo) => void
}
const TodoItem:React.FC<IProps> = (props:IProps) => {
  const { content, isComplete } = props.item
    return(
      <div className={ style.item }>
        <span onClick = { () => props.completeTodoHandler(props.item) } className={`${ style.circle } ${isComplete ? style.checked : ''}`} />
        <p>{ content }</p>
        <span onClick = { () => props.deleteTodoHandler(props.item) }>x</span>
      </div>
    )
}

export default TodoItem