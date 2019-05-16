import * as React from 'react'
import * as style from '../view/todo/todo.css'

// export default class TodoHeader extends React.Component {
//   public render() {
//     return (
//       <div>
//         <header className={ style.header }>
//           TodoList
//         </header>
//       </div>
//     )
//   }
// }

const TodoHeader = () => {
  return (
    <div>
      <header className={ style.header }>
        TodoList
      </header>
    </div>
  )
}

export default TodoHeader

