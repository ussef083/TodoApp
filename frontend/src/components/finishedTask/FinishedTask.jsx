import React from 'react'
import styles from './style.module.scss'
import SecondryBtn from '../SecondryBtn/SecondryBtn'
import { Domain } from '../../lib/constants'
import { toast } from 'react-hot-toast';


const FinishedTask = ({title, id}) => {

  const deleteTask = async () => {
    const res = await fetch(`${Domain}/deleteTasks/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
    })

    if(!res.ok) toast.error('Something went wrong')

    else {
      toast.success('Task deleted successfully')
      await new Promise(resolve => setTimeout(resolve,1000))
      window.location.reload();
    }
  }

  return (
    <div className={styles.task}>
        <p className={styles.task__title}>{title}</p>
        <SecondryBtn text='delete' funTask={deleteTask}/>
    </div>
  )
}

export default FinishedTask