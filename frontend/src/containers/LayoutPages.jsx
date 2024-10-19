
import { Outlet } from "react-router-dom"
import { LateralMenu } from "../components/LateralMenu"

export const LayoutPages = () => {
  return (
    <section>
        <LateralMenu/>
        <section>
            <Outlet/>
        </section>
    </section>
  )
}

