import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Card, List } from "semantic-ui-react";

function MeetingName(name){
  if(name) {
    return(
      <List.Item>
      <List.Header>{name}</List.Header>
      </List.Item>
    )
  }
}

function Time(time){
  if (time) {
    return(
    <List.Item>
      <List.Icon name='calendar alternate outline'/>
      <List.Content>
        <List.Header>
          When
        </List.Header>
        <List.Description>
          {time}
        </List.Description>
      </List.Content>
    </List.Item>
    )
  }
}

function Location(location){
  if (location) {
    return(
    <List.Item>
      <List.Icon name='location arrow'/>
      <List.Content>
        <List.Header>
          Where
        </List.Header>
        <List.Description>
          {location}
        </List.Description>
      </List.Content>
    </List.Item>
    )
  }
}

function LeaderPhone(telephone){
  if (telephone) {
    return(
      <List.Item href={'tel:' + telephone}>
        <List.Icon name='phone'/>
        <List.Content>{telephone}</List.Content>
      </List.Item>
    )
  }
}

function LeaderEmail(email){
  if (email) {
    return(
      <List.Item href={'mailto:' + email}>
        <List.Icon name='mail outline'/>
        <List.Content>{email}</List.Content>
      </List.Item>
    )
  }
}

function LeaderDescription(leader){
  return <List.List>
    {LeaderPhone(leader.telephone)}
    {LeaderEmail(leader.email)}
  </List.List>
}

export default function GroupMeetingPage({ data }) {
  const post = data.markdownRemark
  let meetings, facebook, facebooks, instagram, website, leaders;
  if (post.frontmatter.meetings) {
     meetings =
     <div>
      <h3>Meetings</h3>
        {post.frontmatter.meetings.map((meeting) => {
          return (<List key={meeting.name}>
            {MeetingName(meeting.name)}
            {Time(meeting.time)}
            {Location(meeting.location)}
            <Card.Description>
              {meeting.notes}
            </Card.Description>
          </List>)
        })}
        </div>
  } else {
    meetings = <div/>
  }

  if (post.frontmatter.facebook) {
    facebook =
    <List.Item href={post.frontmatter.facebook.url}>
      <List.Icon name='facebook'/>
        {post.frontmatter.facebook.name}
    </List.Item>
  } else {
    facebook = <div></div>
  }

  if (post.frontmatter.facebooks) {
    facebooks = <div>
      <List key={facebook.name}>
      {post.frontmatter.facebooks.map((facebook => {
        return(
            <List.Item href={facebook.url}>
            <List.Icon name='facebook'/>
              {facebook.name}
            </List.Item>
        )}))}
      </List>
    </div>
  } else {
    facebooks = <div></div>
  }

  if (post.frontmatter.instagram) {
    instagram =
    <List.Item href={"https://www.instagram.com/" + post.frontmatter.instagram}>
      <List.Icon name='instagram'/>
        {post.frontmatter.instagram}
    </List.Item>
  } else {
    instagram = <div></div>
  }

  if (post.frontmatter.website) {
    website =
    <List.Item href={post.frontmatter.website.url}>
      <List.Icon name='world'/>
        {post.frontmatter.website.name}
      </List.Item>
  } else {
    website = <div></div>
  }

  if (post.frontmatter.leaders) {
    leaders = <div>
      <List >
        {post.frontmatter.leaders.map((leader) => {
          return(
            <List.Item key={leader.name.split(",")[0]}>
              <List.Content>
                <List.Header>{leader.name}</List.Header>
                {LeaderDescription(leader)}
              </List.Content>
            </List.Item>
          )
        })}
      </List>
      </div>
  } else {
    leaders = <div/>
  }

  return (
    <Layout>
    <Helmet
      meta={[
        {
          name: `description`,
          content: "Meeting schedules and LLL Leader contact information for La Leche League of " + post.frontmatter.group + " for pregnancy, breastfeeding, chest-feeding, and infant feeding of human milk support.",
        },
        {
          property: `og:title`,
          content: "La Leche League of" + post.frontmatter.group
        },
        {
          property: `og:description`,
          content: "Meeting schedules and LLL Leader contact information for La Leche League of " + post.frontmatter.group + " for pregnancy, breastfeeding, chest-feeding, and infant feeding of human milk support.",
        }
      ]
      }>
      <title>
        La Leche League of {post.frontmatter.group}
      </title>
    </Helmet>
      <Card fluid color='orange'>
        <Card.Content>
          <Card.Header>
            La Leche League of {post.frontmatter.group}
          </Card.Header>

          <Card.Meta>
            {post.frontmatter.state}
          </Card.Meta>
        </Card.Content>

        <Card.Content>
          {meetings}
        </Card.Content>

        <Card.Content>
        <h3>Contact</h3>

        <List>
          {website}
          {facebooks}
          {facebook}
          {instagram}
          {leaders}
        </List>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Card.Content>
      </Card>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        group
        state
        website {name url}
        facebooks {name url}
        facebook {name url}
        instagram
        meetings {
          name
          location
          time
          notes
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