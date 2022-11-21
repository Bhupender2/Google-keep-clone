import React, { useState } from "react";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { useDispatch } from "react-redux";
import { EditNote } from "../../Action/Action";
export default function Modal(props) {
  const Dispatch = useDispatch();

  const [showModal, setShowModal] = React.useState(false);
  const [edit, setedit] = useState({
    title: props.param.store_content.title,
    content: props.param.store_content.content,
    id: props.param.id,
    color: props.param.store_content.color,
  });
  function EditIt(event) {
    const { name, value } = event.target;

    setedit((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  // const SaveEvent=()=>{
  //     return(
  //       setShowModal(false)
  //       Dispatch(EditNote(edit))
  //     );
  // }
  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button> */}
      <BorderColorIcon
        onClick={() => setShowModal(true)}
        className="h-4 w-5 hover:text-gray-700 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      />
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div
                className={`border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-${props.param.store_content.color}-300`}
              >
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <textarea
                    className="text-3xl font-semibold bg-gray-200 focus:outline-none border-r-4 hover:border-red-400"
                    name="title"
                    value={edit.title}
                    onChange={EditIt}
                  ></textarea>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <textarea
                  className="relative  py-6 flex-auto bg-gray-200 m-3 focus:outline-none border-r-4 hover:border-red-400 "
                  name="content"
                  value={edit.content}
                  onChange={EditIt}
                >
                  {edit.content}
                </textarea>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    // onClick={setShowModal(false)}
                    // onClick={ Dispatch(EditNote(edit))}
                    onClick={() => {
                      setShowModal(false);
                      Dispatch(EditNote(edit));
                    }}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
