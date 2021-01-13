import * as React from "react";
import Layout from "../../components/layout"
import {PageProps, graphql} from "gatsby";


interface PageTemplateQuery {
    data: {
        markdownRemark: {
            html: string,
            excerpt: string,
            frontmatter: {
                title: string
            }
        }
    }
}

const BlogTemplate: React.FC<PageTemplateQuery> = ({ data }) => (
    <Layout>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
    </Layout>
    
)

export default BlogTemplate;

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    markdownRemark( id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`