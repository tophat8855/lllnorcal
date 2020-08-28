import React from "react"
import Layout from "../components/layout"
import { Container } from "semantic-ui-react"

export default function Home({ data }) {
  return (
    <Layout>
      <Container>
        <p>
          There are no in-person meetings at this time. Many groups are holding virtual meetings with apps like Zoom.
        </p>
        <p>
          A calendar of virtual meetings will be coming soon.
          In the meantime, the virtual meetings will be posted on our <a href="https://www.facebook.com/lllnorcalhinv/events/">Facebook page.</a>
        </p>
      </Container>
    </Layout>
  )
}