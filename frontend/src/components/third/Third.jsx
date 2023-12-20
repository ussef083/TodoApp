import React from 'react'
import styles from './style.module.scss'
import vector2 from '../../assets/vector2.svg'
import FinishedTask from '../finishedTask/FinishedTask'

const Third = ({finishedTasks}) => {
  return (
    <section className={styles.container}>
        <img src={vector2} alt="vector2" className={styles.vector2} />
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Finished tasks</h2>
            <div className={styles.tasks}>
              {
                finishedTasks.map((task,i) => <FinishedTask key={i} title={`Task ${i+1} : ` +  task.title} id={task._id}/>)
              }
            </div>
        </div>
    </section>
  )
}

export default Third