import { useDispatch } from "react-redux";
import { Delete } from "../../Action/Action";
import Modal from "../PopUpModal/Modal";
const SmallNotes = (props) => {
  const Dispatch = useDispatch();
  return (
    <>
      {/**main box */}
      <div
        className={`w-52 h-auto flex-col shadow-Myshadow rounded-lg m-16 bg-${props.para.store_content.color}-300`}
      >
        {/**content box */}
        <div className="w-52 h-44 mx-auto overflow-auto">
          <div className="h-auto font-semibold text-lg mb-2 p-2">
            {props.para.store_content.title}
          </div>
          <div className=" text-base m-2">
            {props.para.store_content.content}
          </div>
        </div>
        <div className="flex justify-end items-center ">
          <Modal param={props.para} />
          <div className="w-10 h-10 rounded-full hover:bg-yellow-400 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => Dispatch(Delete(props.para.id))}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
export default SmallNotes;
