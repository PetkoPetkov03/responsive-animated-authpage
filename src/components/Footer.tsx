import { Facebook, Instagram } from "@mui/icons-material"
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="year">2024</div>
        <div className="socials">
          <Instagram fontSize="medium" />
          <Facebook fontSize="medium" />
        </div>
      </div>
  )
}

export default Footer
