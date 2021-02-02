import * as React from "react"
import Header from "./header"
import styles from "../assets/scss/_layout.module.scss"


import { StaticQuery, graphql } from "gatsby"


const Layout: React.FC = ({ children }) => (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
               menuLinks {
                 name
                 link
               }
            }
          }
        }
      `}
      render={data => (
        <React.Fragment>
         <div className={styles.cointaner}>
         <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
          <div >
            {children}
          </div>
          <footer>
              <p>
                © {new Date().getFullYear()}, Built with Gatsby
              </p>
          </footer>
          </div>
        </React.Fragment>
      )}
    />
  )

export default Layout;