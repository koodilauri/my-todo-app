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
      className="font-bold rounded-full w-full sm:py-4 py-1 pl-4 text-gray-700 bg-gray-100 focus:outline-none focus:shadow-inner lg:text-sm text-xs"
      placeholder="WHATS THE JOB?"
      onKeyPress={submitHandler}
    />
  );
}

export const AddTodo: React.FC = AddTodoEl;
