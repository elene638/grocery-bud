import React from 'react'

function Alert(props) {
    React.useEffect(() => {
        const timeOut = setTimeout(() => {
            props.removeAlert();
        }, 2000)
        return () => clearTimeout(timeOut)
    })
  return (
    <div>
        <p className={props.msg}>{props.body}</p>
    </div>
  )
}

export default Alert