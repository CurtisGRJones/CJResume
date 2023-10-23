import { Outlet } from "react-router-dom";
import { NavigationBar } from "..";
import { TopBar } from "../topBar";

import styles from './layout.module.css'


export const Layout = () => {
  return (
    <>
      <div className={[styles['page'], 'preload'].join(' ')}>
        <div className={styles['navigation-bar']}>
          <NavigationBar />
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