import * as React from "react";
import Layout from "../components/layout";
import { graphql, Link, PageProps} from "gatsby";
import styles from "../assets/scss/_layout.module.scss"

type Frontmatter = {
  date: string;
  title: string;
  description: string;
}

type Post = {
  node : {
    id: number;
    frontmatter: Frontmatter
    parent: { name: string}
  }
  
}
type AllMarkdownRemark = {
  edges: Post[]; 
}
type IndexPageProps = {
  allMarkdownRemark: AllMarkdownRemark
}

const IndexPage: React.FC<PageProps<IndexPageProps>> = (data) => (
    <Layout>
      <article>
        <div>
          <h1>Blog</h1>    
          <ul>
            {data.data.allMarkdownRemark.edges.map((post) => 
              <li key={post.node.parent.name}>
                <h2>
                  <Link to={`/blog/${post.node.parent.name}`}>
                    {post.node.frontmatter.title}
                  </Link>
                </h2>
                <p>{post.node.frontmatter.description}</p>
              </li>
            )}
          </ul>
        </div>
      </article>
      <div>
        <Link to="/tags" className={styles.tags}>Go to tags page</Link>
      </div>
        
    </Layout>
)

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
      node {
        id
        frontmatter {
          title
          description
        }
        parent {
          ... on File {
            name
          }
        }
      }
    }
   }  
  }
`