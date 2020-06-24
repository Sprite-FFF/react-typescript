import React from 'react'
import style from '../../view/todo/todo.css'
interface IProps {
  count: number,
  status: Status,
  clickHandler: (status: Status) => void,
  clearHandler: () => void
}

enum Status {
  All,
  Active,
  Completed
}
const TodoFooter:React.FC<IProps> = (props) => {
  const { count, status, clearHandler, clickHandler } = props
  return (
    <div className={ style.footer }>
      <div className={ style.left }>
       { count } items selected
      </div>
      <div className={ style.right }>
        <span onClick={ () => clickHandler(Status.All) } className={status === Status.All ? style.active : '' }>All</span>
        <span onClick={ () => clickHandler(Status.Active) } className={status === Status.Active ? style.active : '' }>Active</span>
        <span onClick={ () => clickHandler(Status.Completed) } className={status === Status.Completed ? style.active : '' }>Completed</span>
      </div>
      <div onClick={ clearHandler } className={ style.clear }>Clear Completed</div>
    </div>
  )
}

export default TodoFooter