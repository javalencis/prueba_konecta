
import { Outlet } from "react-router-dom"
import { LateralMenu } from "../components/LateralMenu"
import '../styles/LayoutPages.scss'
export const LayoutPages = () => {
  return (
    <section>
        <LateralMenu/>
        <section className="ContentPage">
            <Outlet/>
        </section>
    </section>
  )
}

