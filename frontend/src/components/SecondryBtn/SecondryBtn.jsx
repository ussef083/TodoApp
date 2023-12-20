import React, {useState} from 'react'
import styles from './style.module.scss'
import { Ring } from '@uiball/loaders'


const SecondryBtn = ({text, funTask}) => {
  const [isPending , setPending] = useState(false)

  const run = async () => {
    setPending(true)
    try {
      await funTask()
      } catch (error) {
        console.log(error)
      } finally{
        setPending(false)
      }

  }

  return (
    <button className={styles.btn} onClick={run}>
        {isPending ? (<Ring 
            size={20}
            lineWeight={5}
            speed={2} 
            color="#FFE0E2" 
            />) : text}
    </button>
  )
}

export default SecondryBtn