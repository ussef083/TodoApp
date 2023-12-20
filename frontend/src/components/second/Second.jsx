import React from 'react'
import styles from './style.module.scss'
import vector2 from '../../assets/vector2.svg'
import Task from '../task/Task'
import Third from '../third/Third'
import { Ring } from '@uiball/loaders'
import useTasks from '../../lib/useTasks'


const Second = () => {

  const { FinishedTasks, InProgressTasks, isPending } = useTasks()

  return (
    <>
      {(!!FinishedTasks.length || !!InProgressTasks.length) && (isPending ? (
        <Ring size={20} lineWeight={5} speed={2} color="#C5EEFF" />
      ) : (
        <section className={styles.container}>

          {
            !!InProgressTasks.length && 
            (
              <>
                  <img src={vector2} alt="vector2" className={styles.vector2} />
                  <div className={styles.wrapper}>
                      <h2 className={styles.title}>Tasks in progress</h2>
                      <div className={styles.tasks}>
                        {InProgressTasks.map((task, i) => {
                          return (
                            <Task key={i} title={`Task ${i+1} : ` + task?.title} date={task?.FinishDate} id={task?._id} />
                          )
                        })}
                      </div>
                  </div>
              </>)
          }
          {
            !!FinishedTasks.length && <Third finishedTasks={FinishedTasks} />
          }
        </section>
      ))}
    </>
  )
}

export default Second