import React,{useState} from 'react'

import Todo2 from '../Todo2';
const Todo = () => {
    const [inputList,setInputList]=useState("");
    const [item,setItem]=useState([]);
    const itemEvent=(event)=>{
       setInputList(event.target.value);
    }
    const listOfItem=()=>{
       setItem((oldItem)=>{
        return[...oldItem,inputList]; 
       })
       setInputList(" ");
    };
    const deleteItem=(id)=>{
       setItem((oldItem)=>{
        return oldItem.filter((arrElem,index)=>{
            return index!==id;
        })
       })
     }
  return (
    <>
    <div className='w-full h-screen  bg-violet-400 flex flex-row items-center justify-center text-center'>

        <div  className='w-3/5 h-4/5 bg-pink-100 my-8 shadow-xl border rounded-lg'>
            <h1 className='my-8 text-3xl text-violet-800 bg-pink-200   shadow-xl '>Todo List with React Hooks</h1>
            
            <input type="text" className='text-center h-8 outline-none bg-transparent  border-b-2 border-violet-800
              text-xl w-2/3' placeholder='Add Items' value={inputList} onChange={itemEvent}/>

            <button  onClick={listOfItem} className='h-10 w-10 border text-white text-xl  hover:bg-violet-800 rounded-full border-transparent  bg-violet-600 '>+</button>

           <ol className='my-4'>
            {item.map((itemval,index)=>{
                return <Todo2 
                key={index}
                id={index}
                text={itemval}
                onSelect={deleteItem}
                />
                })}
            </ol>
        </div>
        
    </div>
    </>
  )
}

export default Todo
