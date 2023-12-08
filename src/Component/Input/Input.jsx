import React from 'react'
import styles from "./input.module.css"

const Input = (props) => {
  return (
    <div className={styles.inputcontainer}>
      {props.label && <label>{props.label}</label>}
      <input type='text' {...props}/>
    </div>
  )
}

export default Input