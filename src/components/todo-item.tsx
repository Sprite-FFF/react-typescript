import * as React from 'react'
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
export default class TodoItem extends React.Component<IProps, object> {
  public render () {
    const {content, isComplete} = this.props.item
    return(
      <div className="item">
        <span onClick = {this.handleComplete} className={`circle ${isComplete ? 'checked' : ''}`} />
        <p>{ content }</p>
        <span onClick = {this.handleDelete} className="del">x</span>
      </div>
    )
  }

  private handleComplete = () => {
    this.props.onCompleteTodo(this.props.index)
  }

  private handleDelete = () => {
    this.props.onDeleteTodo(this.props.index)
  }
}