import React from "react";
const ToastUndo = ({course, undo, closeToast}) => {
    function handleClick(){
        undo(course);
        closeToast();
    }

    return(
        <div>
        <h3>
          Course Deleted <button onClick={() => handleClick()}>UNDO</button>
        </h3>
      </div>
    );

}

export default ToastUndo;