import React from 'react'
import {FaTrash} from 'react-icons/fa'
import {FiEdit} from 'react-icons/fi'

function GroceryList(props) {

  return (
    <div className='main-list'>
        <div className='grocery-list'>     
                <div className='item'>
                    <p>{props.item}</p>
                    <div className='btn-container'>
                        <button onClick={() => props.handleEdit(props.id)}><FiEdit className='edit' /></button>
                        <button onClick={() => props.deleteItem(props.id)}><FaTrash className='bin' /></button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default GroceryList
