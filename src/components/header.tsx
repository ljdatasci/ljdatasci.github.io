import * as React from "react"
import { Link } from "gatsby"
import styles from "../assets/scss/_layout.module.scss"

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
  <header>
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <Link to="/">
            {siteTitle}
          </Link>
        </h1>
        <div>
          <nav>
            <ul>
              {menuLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.link}>
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