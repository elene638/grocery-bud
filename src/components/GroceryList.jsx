import React from 'react'
import {FaTrash} from 'react-icons/fa'
import {FiEdit} from 'react-icons/fi'

function GroceryList(props) {

  return (
    <div className='main-list'>
        <div className='grocery-list'>     
            {props.groceryList.map((item, index) => {
                return (
                    <div className='item' key={index}>
                        <p>{item}</p>
                        <div className='btn-container'>
                            <button onClick={() => props.handleEdit(item.id)}><FiEdit className='edit' /></button>
                            <button onClick={() => props.handleDelete(item.id)}><FaTrash className='bin' /></button>
                        </div>
                    </div>
            )
            })}
        </div>
    </div>
  )
}

export default GroceryList