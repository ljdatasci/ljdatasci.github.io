import * as React from "react";
import Layout from "../../components/layout"
import {PageProps, graphql} from "gatsby";

type Frontmatter = {
  title: string
}
type Post = {
  html: string,
  frontmatter: Frontmatter
}

type MarkdownRemark = {
  markdownRemark: Post
}

type PageTemplateQuery = {
    data: MarkdownRemark
}


const BlogTemplate: React.FC<PageTemplateQuery> = ({ data }) => (
    <Layout>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
    
)

export default BlogTemplate;

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    markdownRemark( id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`