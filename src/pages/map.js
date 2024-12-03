import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import { Container } from "semantic-ui-react"

export default function Map({ data }) {
  return (
    <Layout>
      <Helmet>
        <title>Map of La Leche League of California, Hawaii, and Nevada Groups</title>
        <meta name="description" content="A map indicating where local groups of LLL California, Hawaii, and Nevada are geographically."/>
      </Helmet>
      <Container>
        <p>
          You are free to attend any meeting, even if it is not your local group.
        </p>
        <div class="responsive-iframe-container big-container">
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1hyxawH8A-eXKT-c06gIH5tSyNQk" width="640" height="480" title="Map of LLL Groups"></iframe>
        </div>
        <div class="responsive-iframe-container small-container">
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1hyxawH8A-eXKT-c06gIH5tSyNQk" width="640" height="480" title="Map of LLL Groups"></iframe>
        </div>
      </Container>
    </Layout>
  )
}
