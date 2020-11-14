import React from 'react'
import './MyButton.css'

function MyButton(props){

    return (
        <button onClick={()=>props.Click()} type="button" id={props.id}>{props.colorName}</button>
    )
}
export default MyButton

// export default props => 

//     <>  
//         <button onClick={mudaCor()} type="button" id={props.id}>{props.colorName}</button>
//     </>
