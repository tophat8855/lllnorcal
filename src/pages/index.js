import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import { Container, Grid } from "semantic-ui-react"
import English from "../assets/english.png"
import Russian from "../assets/russian.png"
import Spanish from "../assets/spanish.png"
import Vietnamese from "../assets/vietnamese.png"

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

        <Grid class="ui celled">
          <div class="row">
            <div class="eight wide column">
              <img src={English}></img>
            </div>
            <div class="eight wide column">
              <img src={Spanish}></img>
            </div>
          </div>

          <div class="row">
            <div class="eight wide column">
              <img src={Russian}></img>
            </div>
            <div class="eight wide column">
              <img src={Vietnamese}></img>
            </div>
          </div>
        </Grid>

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
      </Container>
    </Layout>
  )
}