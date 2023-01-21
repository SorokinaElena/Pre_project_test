import React from 'react'
import Footer from '../Footer'
import Nav from '../Nav'
import { Outlet } from 'react-router-dom'
import s from './index.module.css'

export default function Layout() {
  return (
    <div className={s.layout}>
      <Nav /> 
      <main className={s.main}>
          <Outlet />
      </main>
      <Footer />
    </div>
  )
}
