import {useEffect, useState} from 'react'
import {Domain} from './constants'


const useTasks = () => {

    const [FinishedTasks, setFinishedTasks] = useState([])
    const [InProgressTasks, setInProgressTasks] = useState([])
    const [isPending, setPending] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch(`${Domain}/tasks`)
            const data = await res.json()
            const dataArray = Object.values(data)
    
            console.log(dataArray)
    
            setInProgressTasks(
              dataArray
                .filter(task => task.completed === false)
                .sort((a, b) => {
                  const dateA = new Date(a.FinishDate)
                  const dateB = new Date(b.FinishDate)
                  return dateA - dateB
                })
            )
            setFinishedTasks(dataArray.filter(tasks => tasks.completed))
          } catch (error) {
            console.error('Error fetching data:', error)
          } finally {
            setPending(false)
          }
        }
    
        fetchData()
      }, [])

      return {FinishedTasks, InProgressTasks, isPending}
}

export default useTasks