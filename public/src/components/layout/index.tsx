import { Outlet } from "react-router-dom";
import { MenuBar } from "..";
import './layout.css'
import { TopBar } from "../topBar";

export const Layout = () => {
  return (
    <>
      <div className='page'>
        <MenuBar />
        <div className="left-page">
          <TopBar />
          <div className='content'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
};