import { NavLink, Outlet } from "react-router-dom";
import './index.css'

export const Root = () => <>
    <NavLink to='/' className="nav-link">Счетчик</NavLink>
    <NavLink to='users' className="nav-link">Пользователи</NavLink>
    <NavLink to='posts' className="nav-link">Посты</NavLink>
    <Outlet/>
</>