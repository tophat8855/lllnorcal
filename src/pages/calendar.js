import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import { Container } from "semantic-ui-react"

export default function Map({ data }) {
  return (
    <Layout>
      <Helmet>
        <title>Calendar of La Leche League of Northern California, Hawaii, and Northern Nevada Groups</title>
        <meta name="description" content="A calendar of when groups meet of LLL Northern California, Hawaii, and Northern Nevada are geographically."/>
      </Helmet>
      <Container>
        <div class="responsive-iframe-container big-container">
        <iframe src="https://calendar.google.com/calendar/embed?src=as9e5soor784aj4aoiqeimtckc%40group.calendar.google.com&ctz=America%2FLos_Angeles" width="800" height="600" title="Calendar of LLL Meetings" frameborder="0" scrolling="no"></iframe>
        </div>
        <div class="responsive-iframe-container small-container">
        <iframe src="https://calendar.google.com/calendar/embed?src=as9e5soor784aj4aoiqeimtckc%40group.calendar.google.com&ctz=America%2FLos_Angeles&amp;mode=AGENDA" width="800" height="600" title="Calendar of LLL Meetings" frameborder="0" scrolling="no"></iframe>
        </div>
        <p>
          You are free to attend any meeting, even if it is not your local group.
        </p>
      </Container>
    </Layout>
  )
}