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

        <h3>2022 Virtual Breastmilk Drive for Mother's Milk Bank San Jose</h3>

        <p>
          Breast milk donation fulfills an important role in keeping babies healthy and thriving.
          YOU can save a life by donating your breast milk to the Mothers’ Milk Bank!
        </p>

        <p>
          Sign up by filling out the screening questionnaire on their website: 
        </p>

        <p>
          <a href="https://mothersmilk.org/donate-milk">https://mothersmilk.org/donate-milk</a>
        </p>

        <p>
          All costs of donation are covered by the Mothers’ Milk Bank.  Be sure to mention La Leche League when you donate!
        </p>

        <h3>Support</h3>

        <p>
          LLL meetings are always free, but we appreciate any donations to support us as we help families in California, Hawaii, and Nevada.
        </p>

        <div>LLL of Northern California, Hawaii, and Nevada is a 501(c)3 non-profit. Donations are tax-deductible. EIN 94-2409750.</div>
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