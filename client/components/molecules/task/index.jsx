import React from 'react'



const Task = ({taskList, detailedList}) => {
  console.log(taskList)
  const regularTask = () => {
  return <li>Task</li>
}

const detailedTask = () => {
  return <li>Detailed task</li>
}
  return (
    detailedList ? detailedTask() : regularTask()
  )
}

export default Task