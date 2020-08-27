import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
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
        La Leche League International is an international, nonprofit, nonsectarian organization dedicated to providing support, encouragement, information, and education to families who want to breastfeed. All people interested in breastfeeding and chestfeeding are encouraged to attend group meetings or to call a leader for help. We also provide health care professionals with continuing education opportunities.
      </p>
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