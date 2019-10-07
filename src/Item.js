import React from 'react'

const Item = (props) =>{
    return (
                <div className="list">
                <input type="checkbox"  checked={props.data.completed}/> {props.data.text}
                <br />
                <hr />

                </div>
    )
}

export default Item;