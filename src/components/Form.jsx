import { useRef } from "react";
import plus from "../images/plus.svg";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
function Form() {
  const title = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodos = {
      id: uuidv4(),
      title: title.current.value,
      completed: true,
    };
    dispatch(addTodo(newTodos));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 justify-center w-full"
    >
      <input
        className="w-full max-w-[638px] p-4 bg-[#262626] rounded-md outline-none text-[#808080] outline-dotted outline-[3px] focus:outline-sky-600"
        ref={title}
        type="text"
        placeholder="Add a new task"
        required
      />
      <div className="flex gap-2 bg-[#1E6F9F] py-4 pl-3 pr-5 items-center text-white outline-sky-600 outline-[3px] active:outline-dotted  rounded-md">
        <button className="text-[14px] font-bold text-white">Create</button>
        <img src={plus} alt="plus" />
      </div>
    </form>
  );
}

export default Form;
