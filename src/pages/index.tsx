import * as React from "react";
import Layout from "../components/layout";
import { graphql, Link, PageProps} from "gatsby";
import styles from "../assets/scss/_layout.module.scss"

type Frontmatter = {
  date: string;
  title: string
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
        <h2>Hi people</h2>
        <p>Welcome to my blog.</p>
        <ul>
          {data.data.allMarkdownRemark.edges.map((post) => 
            <li key={post.node.parent.name}>
              <Link to={`/blog/${post.node.parent.name}`}>
                {post.node.frontmatter.title}
              </Link>
            </li>

          )}
        </ul>
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