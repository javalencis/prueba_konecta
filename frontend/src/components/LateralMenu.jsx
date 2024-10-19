import { NavLink } from 'react-router-dom'
import '../styles/LateralMenu.scss'
export const LateralMenu = () => {
  return (
    <section className="LateralMenu">
        <h1>Coffee Shop</h1>
        <nav>
            <ul>
                <li><NavLink to="/">Productos</NavLink></li>
                <li><NavLink to="/ventas">Ventas</NavLink></li>
            </ul>
        </nav>
    </section>
  )
}
