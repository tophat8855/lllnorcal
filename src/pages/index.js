import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import { Container } from "semantic-ui-react"
import BecomeLeader from "../assets/becomeleader2.png"

export default function Home({ data }) {
  return (
    <Layout>
      <Helmet>
        <title>Homepage of La Leche League of California, Hawaii, and Nevada</title>
        <meta name="description" content="A calendar of the virtual meetings coming up."/>
      </Helmet>
      <Container>
        <h2>
          Welcome
        </h2>

        <h3>Support</h3>

        <p>
          LLL meetings are always free, but we appreciate any donations to support us as we help families in California, Hawaii, and Nevada.
        </p>

        <div>LLL of California, Hawaii, and Nevada is a 501(c)3 non-profit. Donations are tax-deductible. EIN 94-2409750.</div>
        <form action="https://www.paypal.com/donate" method="post" target="_top">
          <input type="hidden" name="hosted_button_id" value="2ZLTMQLPT2JVA" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>

        <div class="row">
          <a href="https://lllusa.org/interested-in-becoming-a-leader/" alt="Become a La Leche League leader">
            <img src={BecomeLeader} style={{maxWidth: "400px"}} alt="Become a La Leche League Leader"/>
          </a>
        </div>
      </Container>
    </Layout>
  )
}
