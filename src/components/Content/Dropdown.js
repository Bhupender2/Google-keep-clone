import React from "react";
import { createPopper } from "@popperjs/core";

const Dropdown = (props) => {
  let color = props.color;

  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-blueGray-700")
    : (bgColor = "bg-" + color + "-400");
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className="text-2xl rounded shadow  outline-none focus:outline-none mr-1 mb-1"
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              {color === "white" ? "White Dropdown" : "🎨"}
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap Nav-item " +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                }
                id="p123"
                onClick={() => {
                  return props.updateFunc({ name: "color", value: "purple" });
                }}
              >
                purple
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap Nav-item " +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                }
                onClick={() => {
                  props.updateFunc({ name: "color", value: "green" });
                }}
              >
                green
              </a>

              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap Nav-item " +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                }
                onClick={() => {
                  props.updateFunc({ name: "color", value: "red" });
                }}
              >
                red
              </a>

              <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dropdown;
