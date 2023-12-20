import React, {useState} from 'react'
import styles from './style.module.scss'
import PrimaryBtn from '../primaryBtn/PrimaryBtn'
import { Domain } from '../../lib/constants'
import { toast } from 'react-hot-toast';


const NewTask = () => {

  const [task, setTask] = useState({
    title: '',
    FinishDate: ''
  })

  const addTask = async () => {

    if(!task.title || !task.FinishDate) return toast.error('Please fill all fields')

    const date = new Date(task.FinishDate)
    const now = new Date()

    const bool = date < now

    if(bool){
      return toast.error("Invalid date selected. Please choose a future date for your task.");
    }

    else{

          const res = await fetch(`${Domain}/tasks`, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
          })

          if(!res.ok) toast.error('Something went wrong')

          else {
            toast.success('Task added successfully')
            setTask({
              title: '',
              FinishDate: ''
            })
            await new Promise(res => setTimeout(res, 1000))
            window.location.reload();
          }
        }

  }

  return (
    <form className={styles.wrapper}>
        <div className={styles.newTask}>
        <div className={styles.group}>
            <label>Title</label>
            <input type="text" className={styles.input} value={task.title} onChange={(e) => setTask({...task, title: e.target.value })}/>
        </div>

        <div className={styles.group}>
            <label>Pick a date the task must be finished</label>
            <input type="date" className={styles.input} value={task.FinishDate} onChange={(e) => setTask({...task, FinishDate: e.target.value })}/>
        </div>
        <PrimaryBtn text={'Add task'} funTask={addTask}/>
    </div>
      <p className={styles.NewTaskTitle}>New Task</p>
    </form>

  )
}

export default NewTask