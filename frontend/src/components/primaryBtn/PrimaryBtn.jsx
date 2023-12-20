import React, {useState} from 'react'
import styles from './style.module.scss'
import { Ring } from '@uiball/loaders'


const PrimaryBtn = ({text, small,funTask}) => {

  const [isPending, SetPending] = useState(false)
  
  const run = async() => {

    SetPending(true)
    try {
      await funTask()
    } catch (error) {
      console.log(error)
    }finally{
      SetPending(false)
    }
  }


  return (
    <div className={!!small ? styles.btn1 : styles.btn} onClick={run} >
        {isPending ? (<Ring 
            size={20}
            lineWeight={5}
            speed={2} 
            color="#C5EEFF" 
            />) : text}
    </div>
  )
}

export default PrimaryBtn