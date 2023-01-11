import React from 'react'
import { useAppContext } from '../hooks/useAppContext';

const Dashboard = () => {
    const { user } = useAppContext();
  return (
    <div>
        <h1>Dashboard</h1>
        <span>welcome: {user}</span>
    </div>
  )
}


export default Dashboard