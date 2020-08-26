import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function GroupMeetingPage({ data }) {
  const post = data.markdownRemark
  var facebook;
  if (post.frontmatter.facebook) {
    facebook = <div><h4>Facebook</h4>
    <a href={post.frontmatter.facebook.url}>
      {post.frontmatter.facebook.name}</a></div>
  } else {
    facebook = <div></div>
  }
  var website;
  if (post.frontmatter.website) {
    website = <div><a href={post.frontmatter.website}>{post.frontmatter.group}'s website</a></div>
  } else {
    website = <div></div>
  }

  return (
    <Layout>
      <div>
        <h1>La Leche League of {post.frontmatter.group}</h1>
        <h2> Meetings </h2>
        {post.frontmatter.meetings.map((meeting) => {
          return <div>
            <h3>{meeting.name}</h3>
            <h4>When</h4>
            <div>{meeting.time}</div>

            <h4>Where</h4>
            <div>{meeting.location}</div>
            </div>
        })}
        <h3>Website</h3>
        {website}
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
        website
        facebook {name url}
        meetings {
          name
          location
          time
        }
        leaders {
          name
          email
          telephone
        }
      }
    }
  }
`