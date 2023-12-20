import React from 'react'
import styles from './style.module.scss'
import PrimaryBtn from '../primaryBtn/PrimaryBtn'
import calendar from '../../assets/calender.svg'
import { Domain } from '../../lib/constants'
import { toast } from 'react-hot-toast';
import { getNumberOfDays } from '../../lib/getNumberOfDays'
const Task = ({title, date, id}) => {

  const markAsFinished = async () => {
    const res = await fetch(`${Domain}/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
    })

    if(!res.ok) toast.error('Something went wrong')

    else {
      toast.success('Task marked as finished successfully')
      await new Promise(resolve => setTimeout(resolve, 1000))
      window.location.reload();
    }
  }

  const days = getNumberOfDays(date)
  return (
    <div className={styles.task}>
        <p className={styles.task__title}>{title}</p>
        <div className={styles.wrapper}>
            <div className={styles.task__date}>
                <img src={calendar} alt="calendar" className={styles.calendar}/>
                {days}
            </div>
            <PrimaryBtn text='Mark as finished' small={true} funTask={markAsFinished}/>
        </div>
    </div>
  )
}

export default Task