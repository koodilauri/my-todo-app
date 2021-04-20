import { useEffect, useRef } from 'react';
import { useService } from '@xstate/react';

import { appService } from '../machines/app';

function AddTodoEl() {
  const textInputRef = useRef<HTMLInputElement>();
  const [, send] = useService(appService);

  const submitHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === `Enter`) {
      const title = textInputRef.current.value;
      send(`TODO.CREATE`, { title });
      textInputRef.current.value = ``;
    }
  };

  useEffect(() => {
    textInputRef.current.focus();
  }, []);

  return (
    <input
      type="text"
      ref={textInputRef}
      className="font-bold rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 focus:outline-none focus:shadow-inner lg:text-sm text-xs"
      placeholder="WHATS THE JOB?"
      onKeyPress={submitHandler}
    />
    // <input
    //   className="new-todo"
    //   ref={inputRef}
    //   placeholder="What needs to be done?"
    // />
  );
}

// function AddTodoEl() {
//   const { dispatch } = useContext(TodoContext);

//   const textInputRef = useRef<HTMLInputElement>(null);

//   const submitHandler = (event: FormEvent) => {
//     event.preventDefault();

//     const inputValue = textInputRef.current!.value;

//     if (inputValue.trim() === ``) {
//       return;
//     }

//     dispatch(
//       addTodo({
//         id: new Date().getTime().toString(),
//         title: textInputRef.current!.value,
//         active: true,
//       }),
//     );

//     textInputRef.current!.value = ``;
//   };

//   return (
//     <form className="w-full" onSubmit={submitHandler}>

//     </form>
//   );
// }

export const AddTodo: React.FC = AddTodoEl;
