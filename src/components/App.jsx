import React from 'react'
import GroceryList from './GroceryList'
import Alert from './Alert'


export default function App() {

    const [item, setItem] = React.useState('')
    const [list, setList] = React.useState(JSON.parse(localStorage.getItem('list')) || [])
    const [alert, setAlert] = React.useState({
        is: false, msg: '', body: ''
    })
    const [edit, setEdit] = React.useState(false)

    React.useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    function handleDelete(id) {
        setList((prevValues) => {
            return prevValues.filter(
                (itm, index) => {
                    return index !== id
                }
            )
        })
        setAlert({is: true, msg: 'blue', body: 'item removed'})
    }

    function handleEdit(id) {
        setItem(() => {
            return list.find(
                (itm, index) => {
                    return index === id
                }
            )}
        )
        setEdit(true)
}
        

    function handleSubmit(event) {
        event.preventDefault()
        if(item) {
            setList(
                (prevValues) => {
                    return [
                        ...prevValues,
                        item
                    ]
                }
            )
    
            setItem('')
            setAlert({is: true, msg: 'green', body: 'Item Added To The List'})
            console.log(list);
            setEdit(false)
        } else {
            setItem('')
            setAlert({is: true, msg: 'red', body: 'Please add item'})
        }

    }

    function handleChange(event) {
        setItem(event.target.value)
        console.log(item);
    }

    function deleteList() {
        setList([])
        setAlert({is: true, msg: 'red', body: 'Empty List'})
    }

    function removeAlert() {
        setAlert({is: false, msg: '', body: ''})
    }

  return (
    <div className='main'>
        {alert && <Alert {...alert} removeAlert={removeAlert} />}
        <div className='list'>
            <form onSubmit={handleSubmit} >
                <h1>Grocery Bud</h1>
                <input 
                    onChange={handleChange}  
                    type='text' 
                    placeholder='  e.g. eggs'
                    value={item}
                />
                <button 
                    className='btn' 
                    type='submit'
                >{!edit ? "Submit" : "Edit"}</button>
            </form>
        </div>
        <div>
        {list.length > 0 && 
            <div>
                {list.map((itm, index) => {
                    return (
                        <GroceryList 
                            key={index}
                            id={index}
                            handleEdit={handleEdit}
                            deleteItem={handleDelete}
                            item={itm} 
                        />
                    )
                })}
                <button className='delete-all' onClick={deleteList}>Clear Items</button>
            </div>
        }
        </div>
    </div>
  )
}
