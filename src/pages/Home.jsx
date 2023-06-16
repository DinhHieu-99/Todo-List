import React from 'react'
import Theme from '../components/Theme'
import TaskList from '../components/TaskList'
import Watch from '../components/Watch'

const Home = () => {
  return (
    <div>
        <Theme/>
        <Watch/>
        <TaskList/>
    </div>
  )
}

export default Home