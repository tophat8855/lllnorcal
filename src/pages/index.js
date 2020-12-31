import React from "react"
import Layout from "../components/layout"
import { Container } from "semantic-ui-react"

export default function Home({ data }) {
  return (
    <Layout>
      <Container>
        <p>
          There are no in-person meetings at this time. Many groups are holding virtual meetings with apps like Zoom.
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