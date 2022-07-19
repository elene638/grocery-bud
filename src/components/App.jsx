import React from 'react'
import GroceryList from './GroceryList'
import { v4 as uuid } from 'uuid';

// const getLocalStorage = () => {
//     let list = localStorage.getItem('list')
//     if(list) {
//         return (list= JSON.parse(localStorage.getItem('list')))
//     } else {
//         return []
//     }
// }

export default function App() {

    const [item, setItem] = React.useState({
        title: '',
        id: uuid()
    })
    const [list, setList] = React.useState([])
    const [text, setText] = React.useState(false)

    function handleDelete(id) {
        const newList = list.filter((itm) => itm.id !== id)
        setList(newList);
        console.log(newList);
    }

    function handleEdit(id) {
        
    }

    function handleClick() {
        setText(true)
        setTimeout (() => {
            setText(false)
        }, 3000)
        console.log(text);
    }

    function handleSubmit(event) {
        event.preventDefault()
        setList((prevValues) => {
            return [
                ...prevValues,
                item
            ]
        })
    }

    function handleChange(event) {
        setItem(event.target.value)
        console.log(item);
    }

    // React.useEffect(() => {
    //     localStorage.setItem('list', JSON.stringify(list));
    //   }, [list]);

  return (
    <div className='main'>
        {text && <p>Item Added To The List</p>}
        <div className='list'>
            <form onSubmit={handleSubmit} >
                <h1>Grocery Bud</h1>
                <input 
                    onChange={handleChange}  
                    type='text' 
                    placeholder='e.g. eggs'
                    value={item.title}
                />
                <button 
                    className='btn' 
                    type='submit'
                    onClick={handleClick}
                >Submit</button>
            </form>
        </div>
        <div>
            <GroceryList 
                groceryList={list}
                handleEdit={handleEdit}
                handleDelete={handleDelete} 
            />
        </div>
    </div>
  )
}

// {list.map((item, index) => {
//     return (
//         <p className='item' key={index}>{item}</p>
//     )
// })}