
import { Outlet } from "react-router-dom"
import { LateralMenu } from "../components/LateralMenu"
import '../styles/LayoutPages.scss'
import { HeaderMobile } from "../components/HeaderMobile"
export const LayoutPages = () => {
  return (
    <>
        <HeaderMobile/>
        <LateralMenu/>
        <section className="ContentPage">
            <Outlet/>
        </section>
    </>
  )
}

