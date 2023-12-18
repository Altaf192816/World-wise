import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import Sidebarfooter from "./Sidebarfooter";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      {/*//todo--> Outlet is used to place nested routes.It work same in routes as children props in componet
       */}
      <Outlet />

      <Sidebarfooter />
    </div>
  );
}

export default Sidebar;
