import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      I am Dashboard page
      <br/>
      <NavLink to='courses'>Courses</NavLink>
      <br/>
      <NavLink to='mocktest'>Mock-Tests</NavLink>
      <Outlet/>
    </div>
  )
}

export default Dashboard
