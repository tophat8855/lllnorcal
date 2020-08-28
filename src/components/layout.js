import React from "react"
import  MenuHeader from "../components/header"
import { useStaticQuery, graphql } from "gatsby"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div >
      <MenuHeader title={data.site.siteMetadata.title} />
      {children}
    </div>
  )
}