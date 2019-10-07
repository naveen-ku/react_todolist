import React from 'react';
import Item from './Item'
import itemData from './itemData'

import './style.css'


const App = () => {

    const listComponent = itemData.map((listdata) => {
        return(<Item  key={listdata.id} data={listdata}/>)
    })
    return(
        <div>
            {listComponent}
        </div>
    )
}

export default App;