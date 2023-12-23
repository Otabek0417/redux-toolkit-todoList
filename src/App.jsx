import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "./app/store";
import Header from "./components/Header";
import Form from "./components/Form";
import trash from "./images/trash.svg";
import { removeTodo, toggleComplete, statistic } from "./features/todoSlice";
import NoUser from "./components/Nouser";
function App() {
  const completedValue = useRef();
  const dispatch = useDispatch();
  const { todos, completed, uncompleted } = useSelector((store) => store.todo);
  console.log(todos);
  useEffect(() => {
    dispatch(statistic());
  }, [todos, dispatch]);

  return (
    <div className="mx-auto site-container flex flex-col items-center">
      <Header />
      <Form />
      <div className="flex justify-between site-container w-full mt-16 px-0">
        <div className="flex gap-2">
          <span className="text-[#4EA8DE] font-bold ">Tasks created</span>
          <span className="bg-[#333] py-[2px] px-[8px] rounded-full text-center text-[15px] font-bold text-white">
            {todos.length}
          </span>
        </div>
        <div className="flex gap-2">
          <span className="font-bold text-[#8284FA]">Completed</span>
          <span className="bg-[#333] py-[2px] px-[8px] rounded-full text-center text-[15px] font-bold text-white">
            {completed} of {uncompleted}
          </span>
        </div>
      </div>
      <div className="site-container px-0">
        <ul className="flex flex-col gap-3 h-[350px] overflow-auto mt-6 w-full">
          {todos.length ? (
            todos.map((todo) => {
              const { id, title, completed } = todo;
              return (
                <li
                  key={id}
                  className="flex justify-between items-center p-4 gap-3 rounded-lg bg-[#262626]"
                >
                  <div className="flex gap-3.5">
                    <input 
                      type="checkbox"
                      className="checkbox checkbox-accent"
                      ref={completedValue}
                    />
                    <p
                      style={
                        completed
                          ? { textDecoration: " line-through", opacity: 0.3 }
                          : { textDecoration: "none" }
                      }
                    >
                      {title}
                    </p>
                  </div>
                  <button onClick={() => dispatch(removeTodo(id))}>
                    <img src={trash} alt="delete" width={17} height={17} />
                  </button>
                </li>
              );
            })
          ) : (
            <NoUser />
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
