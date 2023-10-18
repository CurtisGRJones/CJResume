import { Outlet } from "react-router-dom";
import { MenuBar } from "..";
import './layout.css'

export const Layout = () => {
  return (
    <>
      <div className='page'>
        <MenuBar />
        <div className='content'>
          <Outlet />
        </div>
      </div>  
    </>
  )
};