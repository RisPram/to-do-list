
import { useState } from "react";
import ShowItem from "./ShowItem";
 function AddItem(){
    //...........
    let [mode,setmode]=useState(false);
    let [a_item,setadditem]= useState("");
    let [id,setid]= useState(-1);
    let [s_item,setStoreitem]= useState([]);

    function change(event)
    {  
        setadditem( event.target.value);
    }

    //............
     
    function plus(){
              if(mode===false)
                   { setStoreitem( [...s_item,a_item]);
                     }
              else{ 
                //edit part
                    s_item.splice(id,1,a_item);// splice returns the deleted item..and changes the original array
                    setStoreitem(s_item );
                    setmode(false);
              }    
              setadditem("");   

            
    }  
        
    
    //............filter func is used for deletion
    //array se delete krna h ...showitem se  delete ho jyga
    function deletee(selectedindex){
        setStoreitem(
                      s_item.filter((ele,index)=>{ return (index!==selectedindex)})
            
                     )
         
     }

    //............to disable the + button when nothing is typed use this attribute
    // disabled={a_item.length===0} 
    

   function edit(id)
   {
    setmode(true);
    setadditem(s_item[id]);
    setid(id);
   }
   
   function remove()
   { setStoreitem([]);}
   
    return(
        <>
        <div className="additem">
        <input  type="text" placeholder="Add item here..." onChange={change} value={a_item}  title="click me to add item"  autoFocus="on"/>
 
        <button  disabled={a_item.length===0} onClick={plus}  title="click me to add item">
            {mode?(<i className="fa fa-pencil-square-o" aria-hidden="true"></i>):(<i className="fa fa-plus" aria-hidden="true"></i>)}
            
            </button>
        </div>
        <div className="showdiv" >
        {s_item.map((ele,index)=>{ return(
          <ShowItem element={ele} key={index} id={index} deletefunc={deletee} edit={edit} 
            />);})}
        </div>

        {s_item.length===0?null:(<button className="remove" onClick={remove}>Remove all</button>)}
        </>
    );
 }

 export default AddItem;
 