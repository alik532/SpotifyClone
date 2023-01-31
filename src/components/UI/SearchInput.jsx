import React from 'react'
import classes from '../../styles/UI/SearchInput.module.css'

const SearchInput = ({value, onChange}) => {

  console.log(value)

  return (
    <input className={classes.input} value={value} onChange={(e) => onChange(e.target.value)}>
        
    </input>
  )
}

export default SearchInput