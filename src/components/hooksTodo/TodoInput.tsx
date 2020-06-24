import * as React from 'react'
import * as style from '../../view/todo/todo.css'
interface IProps {
  changeHandler: (event: React.ChangeEvent) => void,
  keyPressHandler: (event: React.KeyboardEvent) => void,
  checkAllHandler: () => void,
  isAllChecked: boolean;
  value: string
}
const TodoInput:React.SFC<IProps> = props => {
  const { changeHandler, keyPressHandler, checkAllHandler, isAllChecked, value } = props
  return (
    <div className={ style.inputBox }>
      <span onClick={checkAllHandler} className={`${ style.checkAll } ${isAllChecked ? style.checked : ''}`} />
      <input onChange={ changeHandler } onKeyPress={ keyPressHandler } value={ value } type="text"/>
    </div>
  )
}

export default TodoInput