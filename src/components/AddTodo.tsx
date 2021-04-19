import React, { FormEvent, useRef, useContext } from 'react';
import { Context as TodoContext } from '../context/TodoContext';
import { addTodo } from '../actions/TodoActions';

function AddTodoEl() {
  const { dispatch } = useContext(TodoContext);

  const textInputRef = useRef<HTMLInputElement>();

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const inputValue = textInputRef.current!.value;

    if (inputValue.trim() === ``) {
      return;
    }

    dispatch(
      addTodo({
        id: new Date().getTime().toString(),
        title: textInputRef.current!.value,
        active: true,
      }),
    );

    textInputRef.current!.value = ``;
  };

  return (
    <form className="w-full" onSubmit={submitHandler}>
      <input
        type="text"
        ref={textInputRef}
        className="font-bold rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 focus:outline-none focus:shadow-inner lg:text-sm text-xs"
        placeholder="WHATS THE JOB?"
      />
    </form>
  );
}

export const AddTodo: React.FC = AddTodoEl;
