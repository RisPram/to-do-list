import react from "react";

function ShowItem(props){

   

    
    return(
    <div className="show">
        <p>{props.element} </p>

        <button onClick={()=>{props.edit(props.id)}}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
        <button 

        //onclick={props.deletefunc(props.id)}  ..aise argument pass ni kr skte therefore arrow func ka use kia jara and func.. AddItem.js me defined h
        onClick={()=>{    
            props.deletefunc(props.id);//function calling
        }}>
          <i className="fa fa-times" aria-hidden="true" ></i>
        </button>
    </div>
   
   )
      
}

export default ShowItem;