import * as React from "react"
import Header from "./header"


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
         <div className="bg-indigo-200">
         <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
          <div className="container mx-auto h-screen"
          >
            {children}
           
          </div>
          <footer className="bg-yellow-300 container mx-auto p-2 text-center"
          >
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