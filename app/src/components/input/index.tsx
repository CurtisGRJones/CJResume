import { InputHTMLAttributes } from 'react';
import styles from './input.module.css'
import { InputProps, Input as MuiInput } from '@mui/material';

export const Input = (props: InputProps/*InputHTMLAttributes<HTMLInputElement>*/) => {
  return (
    <div className={styles[`${props.type || 'text'}-input`]}> 
      <MuiInput  {...props} />
    </div>
  )
};