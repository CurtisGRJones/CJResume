import { Outlet } from "react-router-dom";
import { NavigationBar } from "..";
import { TopBar } from "../topBar";
import { useEffect, useState } from "react";

import styles from './layout.module.css'

export const Layout = () => {
  const [showNav, setShowNav] = useState(false)
  const [permNav, setPermNav] = useState(false)

  useEffect(() => {
    setPermNav(window.innerWidth >= 750)
    window.addEventListener('resize', () => {
      setPermNav(window.innerWidth >= 750)
    })
  }, [])

  const handleShowPress = () => {
    setShowNav(!showNav)
  }

  return (
    <>
      <div className={[styles['page'], 'preload'].join(' ')}>
        <div className={[styles['navigation-bar'], ( showNav || permNav ) ? styles['show'] : styles['hide']].join(' ')}>
          <NavigationBar />
          {!permNav && <div className={styles['show-nav']} onClick={handleShowPress}> 
            <p className={styles['arrows']}>{ showNav ? '<<' : '>>' }</p>
          </div>}
        </div>
        <div className={styles['scroll-page']}> 
          <div className={styles['top-bar']}>
            <TopBar />
          </div>
          <div className={styles['content']}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
};