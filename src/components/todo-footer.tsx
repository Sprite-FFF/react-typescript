import * as React from 'react'
import * as style from '../view/todo/todo.css'

interface IProps {
  count: number,
  onSelectAll: () => void,
  onSelectActive: () => void,
  onSelectComplete: () => void,
  onClear: () => void
}

enum Status {
  All,
  Active,
  Completed
}

interface IState {
  status: Status
}

export default class TodoFooter extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props)
    this.state = {
      status: Status.All
    }
  }
 
  public render() {
    const { count } = this.props
    const { status } = this.state
    return (
      <div className={ style.footer }>
        <div className={ style.left }>
         { count } items selected
        </div>
        <div className={ style.right }>
          <span onClick={this.handleSelectAll} className={status === Status.All ? style.active : '' }>All</span>
          <span onClick={this.handleSelectActive} className={status === Status.Active ? style.active : '' }>Active</span>
          <span onClick={this.handleSelectCompleted} className={status === Status.Completed ? style.active : '' }>Completed</span>
        </div>
        <div onClick={this.handleClear} className={ style.clear }>Clear Completed</div>
      </div>
    )
  }
  private handleSelectAll = () => {
    this.setState({
      status: Status.All
    })
    this.props.onSelectAll()
  }
  private handleSelectActive = () => {
    this.setState({
      status: Status.Active
    })
    this.props.onSelectActive()
  }
  private handleSelectCompleted = () => {
    this.setState({
      status: Status.Completed
    })
    this.props.onSelectComplete()
  }

  private handleClear = () =>  {
    this.props.onClear()
  }
}