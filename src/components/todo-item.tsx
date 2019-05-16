import * as React from 'react'
import * as style from '../view/todo/todo.css'
interface ITodo{
  content: string,
  isComplete: boolean
}
interface IProps {
  item: ITodo,
  index: number,
  onCompleteTodo: (index: number) => void,
  onDeleteTodo: (index: number) => void
}
// export default class TodoItem extends React.Component<IProps, object> {
//   public render () {
//     const {content, isComplete} = this.props.item
//     return(
//       <div className={ style.item }>
//         <span onClick = {this.handleComplete} className={`${ style.circle } ${isComplete ? style.checked : ''}`} />
//         <p>{ content }</p>
//         <span onClick = {this.handleDelete}>x</span>
//       </div>
//     )
//   }
  
//   private handleComplete = () => {
//     this.props.onCompleteTodo(this.props.index)
//   }

//   private handleDelete = () => {
//     this.props.onDeleteTodo(this.props.index)
//   }
// }

const TodoItem = (props: IProps) => {
  const {content, isComplete} = props.item
    return(
      <div className={ style.item }>
        <span onClick = { () => props.onCompleteTodo(props.index) } className={`${ style.circle } ${isComplete ? style.checked : ''}`} />
        <p>{ content }</p>
        <span onClick = { () => props.onDeleteTodo(props.index) }>x</span>
      </div>
    )
}

export default TodoItem