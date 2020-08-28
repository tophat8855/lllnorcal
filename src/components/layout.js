import React from "react"
import  MenuHeader from "../components/header"
import { Image, Grid } from 'semantic-ui-react'
import { useStaticQuery, graphql } from "gatsby"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: {fields: [frontmatter___group], order: ASC}) {
          group(field: frontmatter___state) {
            edges {
              node {
                id
                frontmatter {
                  group
                  state
                }
                fields {
                  slug
                }
              }
            }
          }
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div>
      <MenuHeader
        title={data.site.siteMetadata.title}
        california={data.allMarkdownRemark.group[0].edges}
        hawaii={data.allMarkdownRemark.group[1].edges}
        nevada={data.allMarkdownRemark.group[2].edges}
        />
        <Grid centered columns={3}>
          <Grid.Column>
            <Image src={`/LLL-norcalhinv.jpg`} size='medium' />
          </Grid.Column>
          <Grid.Column>
            {children}
          </Grid.Column>
        </Grid>
    </div>
  )
}