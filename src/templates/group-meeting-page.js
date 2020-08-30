import React from "react"
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
  let meetings, facebook, website, leaders;
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
      {post.frontmatter.leaders.map((leader) => {
        return(
          <List key={leader.name.split(",")[0]}>
            <List.Item>
              <List.Content>
                <List.Header>{leader.name}</List.Header>
                {LeaderDescription(leader)}
              </List.Content>
            </List.Item>
          </List>
        )})}
      </div>
  } else {
    leaders = <div/>
  }

  return (
    <Layout>
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
          {facebook}
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
        facebook {name url}
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