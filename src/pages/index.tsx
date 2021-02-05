import * as React from "react";
import Layout from "../components/layout"
import { graphql, Link} from "gatsby";

type Frontmatter = {
  date: string;
  title: string;
}

type File = {
  name: string
}

type Post = {
  id: number;
  frontmatter: Frontmatter;
  parent: {File: File}
}
type AllMarkdownRemark = {
  edges: {node: Post[]}; 
}
type IndexPageProps = {
  allMarkdownRemark: AllMarkdownRemark
}

const IndexPage: React.FC<IndexPageProps> = (data) => (
    <Layout>
        <h2>Hi people</h2>
        <p>Welcome to my blog.</p>
        <ul>
          {data.allMarkdownRemark.edges.node.map((post) => 
            <li key={post.id}>
               <Link to={`/blog/${post.parent.File.name}`}></Link>
               {post.frontmatter.title}
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