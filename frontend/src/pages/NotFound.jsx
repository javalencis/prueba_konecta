import { Link } from "react-router-dom"
import '../styles/NotFound.scss'
export const NotFound = () => {
  return (
    <div className="NotFound">
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="/">Volver a la página principal</Link>
    </div>
  )
}
