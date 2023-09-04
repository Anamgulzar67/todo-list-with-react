import React from "react";

const Todo2 = (props) => {
     
  return (
    <>
      <div className="flex flex-row">
      <button   className='h-8 w-8 mx-16 my-2 border text-white text-xl  hover:bg-red-500 rounded-full border-transparent  bg-red-400 '
      onClick={()=>{
       props.onSelect(props.id) ;
      } }
      >×</button>
      <li className="mx-8 text-left text-xl flex items-center text-violet-800">
        {props.text}
      </li>
      </div>
    </>
  );
};

export default Todo2;
