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
         <div className={styles.container}>
         <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
          <main>
            {children}
          </main>
          </div>
          <footer>
            <div>
              <h4>
                © {new Date().getFullYear()}, Built with Gatsby
              </h4>
              <div className={styles.footerClass}>
                <a href="https://github.com/ljdatasci">Github</a>
                <a href="https://linkedin.com/in/laurie-jefferson">LinkedIn</a>
              </div>
            </div>
          </footer>
        </React.Fragment>
      )}
    />
  )

export default Layout;