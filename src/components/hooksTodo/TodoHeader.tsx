import * as React from 'react'
import * as style from '../../view/todo/todo.css'

interface IProps {
  title?: string
}
const TodoHeader:React.SFC<IProps> = (props:IProps) => {
  const { title } = props
  return <header className={ style.header }>{ title }</header>
}

export default TodoHeader