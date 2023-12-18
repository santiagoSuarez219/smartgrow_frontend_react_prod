import {createPortal} from "react-dom";

function Modal({ children }) {
  return createPortal(
    <div className="w-full bg-black bg-opacity-80 flex flex-col justify-center items-center fixed top-0 bottom-0 left-0 right-0">{children}</div>,
    document.getElementById("modal")
  );
}

export { Modal };