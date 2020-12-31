import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import { Container } from "semantic-ui-react"

export default function Home({ data }) {
  return (
    <Layout>
      <Helmet>
        <title>Homepage of La Leche League of Northern California, Hawaii, and Northern Nevada</title>
        <meta name="description" content="A calendar of the virtual meetings coming up."/>
      </Helmet>
      <Container>
        <p>
          There are no in-person meetings at this time. Many groups are holding virtual meetings with apps like Zoom.
        </p>
        <p>
          You are free to attend a virtual meeting, even if it is not your local group.
        </p>
        <div class="responsive-iframe-container big-container">
        <iframe src="https://calendar.google.com/calendar/embed?src=as9e5soor784aj4aoiqeimtckc%40group.calendar.google.com&ctz=America%2FLos_Angeles" width="800" height="600" title="Calendar of LLL Meetings" frameborder="0" scrolling="no"></iframe>
        </div>
        <div class="responsive-iframe-container small-container">
        <iframe src="https://calendar.google.com/calendar/embed?src=as9e5soor784aj4aoiqeimtckc%40group.calendar.google.com&ctz=America%2FLos_Angeles&amp;mode=AGENDA" width="800" height="600" title="Calendar of LLL Meetings" frameborder="0" scrolling="no"></iframe>
        </div>
      </Container>
    </Layout>
  )
}