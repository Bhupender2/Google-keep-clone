const Navbar = () => {
  return (
    <>
      {/**Main Nav Block */}
      <div className="w-full h-auto bg-gray-100 flex justify-between mid-max:p-3">
        {/**left Nav Block */}
        <div className="flex items-center 2xl-max:my-2 w-3/12 justify-evenly 2xl-max:mr-5 mid-max:mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600 hover:text-yellow-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => {
              const sideBar = document.querySelector("#sideBar");
              if (sideBar.classList.contains("hidden")) {
                sideBar.classList.remove("hidden");
              } else {
                sideBar.classList.add("hidden");
              }
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div className="flex items-center">
            <img
              src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
              alt="logo"
              className="sm-max:h-5 sm-max:w-5"
            />
            <p className="font-mono text-xl text-gray-600 sm-max:text-base">
              Keep
            </p>
          </div>
        </div>
        {/**Middle */}
        <div className="flex items-center my-2 w-5/12 md-max:w-7/12 justify-center">
          <input
            type="text"
            placeholder="Search Your Notes.."
            className="w-9/12 lg-max:w-full h-8 sm-max:h-5 rounded-full p-3 -m-7 outline-none focus:shadow-lg"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 sm-max:h-5 sm-max:w-5 text-gray-600 hover:text-yellow-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {/**Right Nav Block */}
        <div className="flex items-center my-2 w-2/12 md-max:w-1/12 justify-evenly">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 sm-max:hidden text-gray-600 hover:text-yellow-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <div className="sm-max:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 hover:text-yellow-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <img
            src="https://lh3.googleusercontent.com/ogw/ADGmqu-8zudup-ve7EVbtJcSUNnV04aMFpVLwQMURYHX=s32-c-mo"
            alt="Login"
            className="rounded-full text-center sm-max:h-5 sm-max:w-5"
          />
        </div>
      </div>
    </>
  );
};
export default Navbar;
