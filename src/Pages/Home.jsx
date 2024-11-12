import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const samplearray=["one","two","three"];
const sampleNote=["number1","number2","number3"];





function Notepad({title,note,onDelete }){
    
    return(
        

        <div className="shadow-lg h-fit m-5 p-10 w-80 rounded relative flex flex-col"> 
            <h1 className="text-xl font-bold">{title}</h1>
            <p>{note}</p>
            <button onClick={onDelete} className="absolute bottom-7 right-7 text-white rounded-md h-10 w-10"> <DeleteIcon className="text-black" /> </button> {/* Ensure the parent is flex */}
        </div>


    )
}

function Home()
{
    const [titles,handletitles]=useState([]);
    const [notes,handlenotes]=useState([]);
    const [title, changeTitle] = useState("");
    const [note, changeNote] = useState("");

    function deleteItem(index){
        handletitles(titles=> titles.filter((_,i)=>i!=index));
        handlenotes(notes=> notes.filter((_,i)=>i!=index));
    }
    function handleChange(event) {
        const value = event.target.value;
        changeTitle(title=>value);
    }
    
    
    function handleChange2(event){
        const value=event.target.value;
        changeNote(note=>value);
       

    }
    
    function addItems(){
        if(title && note){
            handletitles(titles=>[...titles,title]);
            handlenotes(notes=>[...notes,note]);
            changeTitle("");
            changeNote("");
        }
    }
    return(

       <div>
        <Navbar />
        <div className="flex justify-center mt-10">
        <div className="h-fit w-80 md:w-1/2  lg:w-1/4 justify-center shadow-xl flex flex-col">
            <input className="pt-2 pl-5 w-96 focus:outline-none" value={title} onChange={handleChange} name="title" placeholder="Title" />
            <div className="relative w-96">
                <textarea onChange={handleChange2} value={note} className="pt-2 pl-5 w-full focus:outline-none resize-none" name="" placeholder="Take a note" rows="4"></textarea>
                <button onClick={addItems} type="button" className="absolute -bottom-5 md:-right-10 right-20 lg:right-5 text-sm rounded-full h-10 text-gray-500 w-10 bg-yellow-300"><AddIcon/></button>
            </div>
        </div>
        </div>

        <div>
            <ul className="">
            <div className="flex flex-col items-center md:flex md:flex-row md:justify-start md:flex-wrap md:mt-10">
                    {titles.map((x, index) => (
                         <Notepad
                         key={index}
                         title={x}
                         note={notes[index]}
                         onDelete={() => deleteItem(index)}
                     />
                    ))}
           </div> 

            </ul>
            
        </div>
       </div>
    ) 

}
export default Home;