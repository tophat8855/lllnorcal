import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function GroupMeetingPage({ data }) {
  const post = data.markdownRemark
  var facebook;
  if (post.frontmatter.facebook) {
    facebook = <div><h3>Facebook</h3>
    <a href={post.frontmatter.facebook.url}>
      {post.frontmatter.facebook.name}</a></div>
  } else {
    facebook = <div></div>
  }
  return (
    <Layout>
      <div>
        <h1>La Leche League of {post.frontmatter.group}</h1>
        <h2> Meetings </h2>
        <h3>When</h3>
        <div>{post.frontmatter.time}</div>

        <h3>Where</h3>
        <div>{post.frontmatter.location}</div>

        {facebook}

        <h3>Contact</h3>
        {post.frontmatter.leaders.map((leader) => {
          return <div key={leader.name}>{leader.name} {leader.telephone} {leader.email}</div>
        })}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        group
        time
        location
        facebook {name url}
        leaders {
          name
          telephone
        }
      }
    }
  }
`