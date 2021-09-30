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
        <h2>
          Welcome
        </h2>
        <p>
          There are no in-person meetings at this time. Many groups are holding virtual meetings with apps like Zoom.
        </p>
        <p>
          You are free to attend a virtual meeting, even if it is not your local group.
        </p>
        <p>
          LLL meetings are always free, but we appreciate any donations to support us as we help families in California, Hawaii, and Nevada.
        </p>
        <form action="https://www.paypal.com/donate" method="post" target="_top">
          <input type="hidden" name="hosted_button_id" value="2ZLTMQLPT2JVA" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
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