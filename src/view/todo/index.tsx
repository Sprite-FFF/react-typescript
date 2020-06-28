import * as React from 'react'
import TodoFooter from 'src/components/todo-footer'
import TodoHeader from 'src/components/todo-header'
import TodoItem from 'src/components/todo-item'
import * as style from './todo.css'

interface ITodo{
  content: string,
  isComplete: boolean
}
interface IState  {
  inputVal: string,
  todoItems: ITodo[],
  cacheItems: ITodo[],
  isAllChecked: boolean
}
class Todo extends React.Component<{}, IState> {
  constructor (props: Readonly<{}>) {
    super(props)
    this.state = {
      inputVal: '',
      todoItems: [],
      cacheItems: [],
      isAllChecked: false
    }
  }
  public render() {
    const {isAllChecked} = this.state
    return (
      <div className={ style.app }>
        <TodoHeader />
        <div className={ style.inputBox }>
          <span onClick={this.handleCheckAll} className={`${ style.checkAll } ${isAllChecked ? style.checked : ''}`} />
          <input onChange={this.handleChange} onKeyPress={ this.handleInput } value={this.state.inputVal} type="text"/>
        </div>
        <div className={ style.main }>
          {
            this.state.todoItems.map((el, index) => {
              return (
                <TodoItem onCompleteTodo={ this.handleSelectItem } onDeleteTodo={this.handleDeleteTdo} index={index} item={ el } key={index} />
              )
            })
          }
        </div>
        <TodoFooter 
        onSelectActive={this.handleSelectActive} 
        onSelectAll={this.handleSelectAll} 
        onSelectComplete={this.handleSelectComplete} 
        onClear={this.handleClear} 
        count={this.state.todoItems.length} />
      </div>
    );
  }

  private handleChange = (e:any) => {
    this.setState({
      inputVal: e.target.value
    })
  }
  private handleInput = (e:any) => {
    // tslint:disable-next-line:no-console
    if (e.charCode !== 13 || !this.state.inputVal) { return }
    const todoItems = this.state.todoItems
    todoItems.push({
      content: e.target.value,
      isComplete: false
    })
    this.setState({
      inputVal: '',
      todoItems,
      cacheItems: todoItems
    })
    // tslint:disable-next-line:no-console
    console.log(todoItems)
  }
  private handleSelectItem = (index: number) => {
    // tslint:disable-next-line:no-console
    console.log(index)
    const { todoItems } = this.state
    todoItems[index].isComplete = !todoItems[index].isComplete
    const flag = todoItems.every(el => {
      return el.isComplete
    })
    this.setState({
      todoItems,
      cacheItems: todoItems,
      isAllChecked: flag
    })
  }

  private handleDeleteTdo = (index: number) => {
    const { todoItems } = this.state
    todoItems.splice(index, 1)
    this.setState({
      todoItems,
      cacheItems: todoItems
    })
  }

  private handleSelectActive = () => {
    const { cacheItems } = this.state
    this.setState({
      todoItems: cacheItems.filter(el => {
        return !el.isComplete
      })
    })
  }

  private handleSelectAll = () => {
    const { cacheItems } = this.state
    this.setState({
      todoItems: cacheItems
    })
  }

  private handleSelectComplete = () => {
    const { cacheItems } = this.state
    this.setState({
      todoItems: cacheItems.filter(el => {
        return el.isComplete
      })
    })
  }

  private handleClear = () => {
    let { cacheItems } = this.state
    cacheItems = cacheItems.filter(el => {
      return !el.isComplete
    })
    this.setState({
      todoItems: cacheItems,
      cacheItems
    })
  }

  private handleCheckAll = () => {
    const { todoItems } = this.state
    const flag = todoItems.every(el => {
      return el.isComplete
    })
    if (flag) {
      todoItems.forEach(el => {
        el.isComplete = !flag
      })
      this.setState({
        todoItems,
        isAllChecked: false
      })
    } else {
      todoItems.forEach(el => {
        el.isComplete = true
      })
      this.setState({
        todoItems,
        isAllChecked: true
      })
    }
  }
}

export default Todo