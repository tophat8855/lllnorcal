import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Header } from 'semantic-ui-react'

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <Header as='h1'> Groups </Header>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <Header >
                {node.frontmatter.group}{" "}
              </Header>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            group
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`