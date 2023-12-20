import React from 'react'
import styles from './style.module.scss'
import Group1 from '../../assets/Group1.svg'
import Group2 from '../../assets/Vector1.svg'
import NewTask from '../NewTask/NewTask'


const First = () => {
    return (
        <main className={styles.main}>
                <nav className={styles.logo}>
                        Todo list
                </nav>
                <section className={styles.hero}>
                        <img src={Group1} alt="Group 1" className={styles.firstImg}/>
                        <h1 className={styles.h1tag}>
                            Get ready to boost your productivity and stay organized
                        </h1>
                        <img src={Group2} alt="Group 1" className={styles.SecondImg}/>
                        <NewTask/>
                </section>
        </main>
    )
}

export default First