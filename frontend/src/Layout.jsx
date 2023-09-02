import Header from "./components/Header.jsx"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <main>
        <Header />
        <Outlet />
    </main>
  )
}
export default Layout