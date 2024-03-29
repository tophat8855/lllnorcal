import React from "react"
import  MenuHeader from "../components/header"
import { Image, Grid } from 'semantic-ui-react'
import { useStaticQuery, graphql, Link } from "gatsby"

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
        northernCalifornia={data.allMarkdownRemark.group[2].edges}
        southernCalifornia={data.allMarkdownRemark.group[3].edges}
        hawaii={data.allMarkdownRemark.group[0].edges}
        nevada={data.allMarkdownRemark.group[1].edges}
        />
      <Grid centered>
        <Grid.Column mobile={16} tablet={4} computer={4}>
          <Image centered
          as={Link}
          to={`/`}
          src={`/LLL-norcalhinv.jpg`}
          size='medium'
          />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8} style={{margin: "10px"}}>
          {children}
        </Grid.Column>
      </Grid>
    </div>
  )
}