import React from 'react'

const Item = (props) =>{
    const styles={
            color :"blue",
            background : "yellow",
            fontStyle : "italic"}
    
    return (
                <div className="list">
                <input
                    type="checkbox"  
                    checked={props.data.completed} 
                    onChange={() => props.handleChange(props.data.id)}         
                />
                <p style ={props.data.completed?styles:null}>{props.data.text}</p>
                <br />
                <hr />

                </div>
    )
}
export default Item;