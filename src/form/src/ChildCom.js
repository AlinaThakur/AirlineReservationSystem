import React from 'react'

function ChildCom(props) {
  
  return (<>
    <div>{props.header}</div>
        {props.children}
      
    </>
  )
}

export default ChildCom