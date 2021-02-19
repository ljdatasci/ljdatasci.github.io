import * as React from "react";
import Layout from "../components/layout";
import { graphql, Link, PageProps} from "gatsby";
import styles from "../assets/scss/_layout.module.scss"

const TagsPage: React.FC = () => (
    <Layout>
        <h1>This is the tags page</h1>
    </Layout>
)

export default TagsPage;