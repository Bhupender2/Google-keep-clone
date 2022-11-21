import { useState } from "react";
import { Add } from "../../Action/Action";
import { useSelector, useDispatch } from "react-redux";
import SmallNotes from "./SmallNotes";
import Dropdown from "../Content/Dropdown";
const Main = () => {
  const Dispatch = useDispatch();
  const Note_list = useSelector((state) => state.AddReducer.NoteList);

  const [input, Setinput] = useState({
    title: "",
    content: "",
    color: "purple",
  });

  function UpdateInput(event) {
    const { name, value } = event.target;

    Setinput((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function UpdateColor(param) {
    Setinput((prevData) => {
      return {
        ...prevData,
        [param.name]: param.value,
      };
    });
  }

  function Box() {
    const outer = document.querySelector("#outer");
    const textNote = document.querySelector("#textNote");
    if (outer.classList.contains("h-30")) {
      outer.classList.remove("h-30");
      outer.classList.add("h-52");
      textNote.classList.remove("hidden");
    }
  }
  return (
    <>
      <div className="flex-col bg-gray-200 w-full min-h-screen">
        {/**Write Area */}
        <div
          className="h-30 w-6/12 mid-max:w-9/12 sm-max:w-10/12 bg-gray-100 mx-auto my-10 shadow-Myshadow"
          id="outer"
          onClick={Box}
        >
          <div className="flex justify-between items-center">
            <input
              className="w-full h-10 bg-gray-100 outline-none my-2 ml-6 p-2"
              placeholder="Title"
              name="title"
              value={input.title}
              onChange={UpdateInput}
            ></input>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-7 m-5 hover:text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </div>
          {/** */}
          <div className="hidden " id="textNote">
            <div className="w-full  flex justify-center">
              <input
                className="w-11/12 p-5 outline-none my-2 mx-auto"
                placeholder="Take a note.."
                name="content"
                value={input.content}
                onChange={UpdateInput}
              ></input>
            </div>
            <div className="flex justify-between items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 ml-5 text-yellow-500 hover:text-yellow-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => {
                  Dispatch(Add(input));
                  Setinput({
                    title: "",
                    content: "",
                  });
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <Dropdown color="yellow" updateFunc={UpdateColor} />
              <button
                className="mr-8 font-semibold text-yellow-500 outline-none focus:outline-none hover:text-yellow-700 text-lg"
                onClick={(event) => {
                  event.stopPropagation();
                  const outer = document.querySelector("#outer");
                  const textNote = document.querySelector("#textNote");
                  outer.classList.remove("h-52");
                  outer.classList.add("h-30");
                  textNote.classList.add("hidden");
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
        {/* <SmallNotes /> */}
        <div className="flex items-center flex-wrap">
          {Note_list.map((elem) => (
            <SmallNotes para={elem} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Main;
