import * as React from "react";
import Layout from "../components/layout"
import { graphql, Link} from "gatsby";

type IndexPageProps = {
    nodes: {
        frontmatter: {
            title: string
        }
    }
}
interface IndexPageQuery {
    data: Array<IndexPageProps>
}

const IndexPage: React.FC<IndexPageQuery> = ({data}) => (
    <Layout>
        <h2>Hi people</h2>
        <p>Welcome to my blog.</p>
        <ul>
            {data.nodes.map(post) => (
                <li key={post.parent.name}>
                    <Link to={`/blog/${post.parent.name}`}>
                        {post.frontmatter.title}
                    </Link>
                </li>
            )}
        </ul>
    </Layout>
)

export default IndexPage;

export const query = graphql`
  {
    blog: allMarkdownRemark {
      nodes {
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
`