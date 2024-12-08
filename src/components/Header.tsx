import { Info, Login } from "@mui/icons-material"
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
        <div className="header-title"><h1>Sparks of Fabrication</h1></div>
        <div className="link-container">
          <Info fontSize="large" />
          <Login fontSize="large" />
        </div>
    </div>
  )
}

export default Header
