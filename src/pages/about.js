import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, List, Grid } from "semantic-ui-react"
import BecomeLeader from "../assets/becomeleader2.png"

export default function About({ data }) {
  return (
    <Layout>
      <Helmet>
        <title>About La Leche League of California, Hawaii, and Nevada</title>
        <meta name="description" content="About La Leche League of California, Hawaii, and Nevada: what LLL does, who LLL leaders are, and who can attend meetings."/>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "http://lllnorcal.org",
              "name": "La Leche League of California, Hawaii, and Nevada",
              "logo": "http://lllnorcal.org//LLL-norcalhinv.jpg",
              "sameAs": ["https://www.facebook.com/lllnorcalhinv"]
              "description": "La Leche League helps parents, families, and communities to breastfeed, chestfeed, and human milk feed their babies through parent-to-parent support.",
              "hasMap": "https://www.google.com/maps/d/u/0/edit?mid=1hyxawH8A-eXKT-c06gIH5tSyNQk&ll=29.54441943791395%2C-139.5863947&z=5",
              "location": [
                {"@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "USA",
                  "addressRegion": "California"
                }},
                {"@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "USA",
                  "addressRegion": "Hawaii"
                }},
                {"@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "USA",
                  "addressRegion": "Nevada"
                }}]
              }
          `}
        </script>
      </Helmet>
      <Container>
        <h1>About {data.site.siteMetadata.title}</h1>
        <h3>
          Who can Attend
        </h3>

        <p>
          All people interested in chestfeeding, breastfeeding, or human-milk feeding are encouraged
          to attend group meetings regardless of membership status. Babies are always welcome.
        </p>

        <Grid class="ui celled">
          <div class="row stackable">
            <div class="eight wide column"> 
              <h3>
                About the Leaders
              </h3>

              <p>
                La Leche League Leaders are experienced parents who have nursed their own babies 
                and who have been trained and accredited by La Leche League International.
                Leaders can help parents and parents-to-be with questions or concerns about nursing their infants/toddlers. 
                If you would like help, please contact a La Leche League leader in your community.
              </p>
            </div>

            <div class="eight wide column"> 
              <a href="https://lllusa.org/interested-in-becoming-a-leader/" alt="Become a La Leche League leader">
                <img src={BecomeLeader} alt="Become a La Leche League Leader" />
              </a>
            </div>
          </div>
        </Grid>
        <h3>
          About the Organization
        </h3>

        <p>
          La Leche League of California, Hawaii, and Nevada is contained within LLL USA.
        </p>

        <h4> Our Mission </h4>
        <p>
          La Leche League of California, Hawaii, and Nevada helps parents,
          families, and communities to breastfeed, chestfeed, and human milk feed their babies
          through parent-to-parent support. We encourage, inform, educate, support, and promote
          the use of human milk and the intimate relationship and development that comes from
          nursing a child for as long as mutually desired.
        </p>

        <h4> Our Commitment </h4>

        <p>
          La Leche League of California, Hawaii, and Nevada is committed
          to diversity and inclusion. We support all breastfeeding, chestfeeding, and human
          milk feeding families, inclusive of their race, ethnicity, immigration status,
          national origin, creed, age, sexual orientation, gender identity, family structure,
          primary language, ability, or socio-economic status. LLL of California, Hawaii,
          and Nevada fosters diversity among its Leaders so as to incorporate a wide
          variety of perspectives and responsible decision-making.
        </p>

        <h3>
          Contact
        </h3>

        <List.Content>
          <List.List>
            <List.Item href={"mailto: acl@lllnorcal.org"}>
              <List.Icon name='mail outline'/>
              <List.Content>Email the ACL</List.Content>
            </List.Item>
            <List.Item href={"mailto: webadmin@lllnorcal.org"}>
              <List.Icon name='mail outline'/>
              <List.Content>Email the webadmin</List.Content>
            </List.Item>
          </List.List>
        </List.Content>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
