import React,{useState} from "react";
import './Shape.css';
export default function Shape(){
    const[shapeArr, setShapeArray]=useState([]);
    const[shape, setShape]=useState("");
    const handleChangeDropDown=(e)=>{
        setShape(e.target.value);
    }
    const handleChange=()=>{
        switch(shape){
            case "Square": setShapeArray([...shapeArr,0]); break;
            case "Circle": setShapeArray([...shapeArr,1]); break;
            default: return;
        }
    }
    return(
        <div>
            <select id="shape" onChange={e=>handleChangeDropDown(e)}>
                <option value="Square">Square</option>
                <option value="Circle">Circle</option>
            </select>
            <button id="shapes-holder" onClick={handleChange}>Add Shape</button>
            {
                shapeArr.map((shape, index)=>(
                    <div className={shape==0 ? 'square':'circle'} key={index}>
                        {index}
                    </div> 
                ))
            }
        </div>
    )
}