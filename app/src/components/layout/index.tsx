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
    window.addEventListener('scroll', () => {
      console.log(`.${styles['top-bar']}`);
      (document.querySelector(`.${styles['top-bar']}`) as HTMLElement).style.top = `-${document.documentElement.scrollTop}px`;
      console.log('scroll: ', `${document.documentElement.scrollTop} px`);
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
          {!permNav && ( showNav ?
            <div className={[styles['show-nav'], styles['left']].join(' ')} onClick={handleShowPress}> 
              <p className={styles['arrows']}> {'<<'} </p>
            </div>
            :
            <div className={[styles['show-nav'], styles['right']].join(' ')} onClick={handleShowPress}> 
              <p className={styles['arrows']}> {'>>'} </p>
            </div>
          )}
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