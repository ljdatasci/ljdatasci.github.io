import * as React from "react"
import { Link } from "gatsby"

type MenuLinksProps = {
  name: string,
  link: string
}

type TitleProps = {
  siteTitle: string,

}

type MenuProps = {
  menuLinks: Array<MenuLinksProps>

}

const Header: React.FC<TitleProps & MenuProps> = ({ siteTitle, menuLinks }) => (
  <header >
    <div 
      // style={{
      // backgroundColor: "white",
      // marginBottom: "1.45rem"}}
      >
      <div className="container mx-auto flex justify-between items-center py-6 text-pink-700"
      >
        <h1 
          style={{
          margin: 0,
          flex: 1
        }}
        >
          <Link to="/" style={{
            // color: "black",
            textDecoration: "none"
          }}>
            {siteTitle}
          </Link>
        </h1>
        <div>
          <nav>
            <ul style={{ display: "flex", flex: 1 }}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link style={{  textDecoration: "none" }} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>

)

export default Header;