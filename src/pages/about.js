import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container } from "semantic-ui-react"

export default function About({ data }) {
  return (
    <Layout>
      <Helmet>
        <title>About La Leche League of Northern California, Hawaii, and Northern Nevada</title>
        <meta name="description" content="About La Leche League of Northern California, Hawaii, and Northern Nevada: what LLL does, who LLL leaders are, and who can attend meetings."/>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "http://lllnorcal.org",
              "name": "La Leche League of Northern California, Hawaii, and Northern Nevada",
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

        <h3>
          About the Leaders
        </h3>

        <p>
          La Leche League Leaders are experienced parents who have nursed their own babies 
          and who have been trained and accredited by La Leche League International.
          Leaders can help parents and parents-to-be with questions or concerns about nursing their infants/toddlers. 
          If you would like help, please contact a La Leche League leader in your community.
        </p>

        <h3>
          About the Organization
        </h3>

        <p>
          La Leche League of Northern California, Nevada, and Hawaii is contained within LLL USA.
        </p>

        <p>
          La Leche League International is an international, nonprofit, nonsectarian organization dedicated to providing support, encouragement, information, and education to families who want to breastfeed or chestfeed. All people interested in breastfeeding and chestfeeding are encouraged to attend group meetings or to call a leader for help. We also provide health care professionals with continuing education opportunities.
        </p>
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