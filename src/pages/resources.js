import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import { Container } from "semantic-ui-react"

export default function Resources({data}) {
  return (
    <Layout>
      <Helmet>
        <title>Resources related to La Leche League of California, Hawaii, and Nevada</title>
        <meta name="description" content="A list of sites with information about La Leche League, breastfeeding, chestfeeding, and feeding babies and children human milk."/>
      </Helmet>
      <Container>
        <h2>La Leche League Sites</h2>

        <div><a href="https://www.lllusa.org/">La Leche League USA</a></div>
        <div><a href="http://www.llli.org/">La Leche League International</a></div>

        <h2>Resources</h2>

        <div><a href="http://www.mothersmilk.org/">Mother&#8217;s Milk Bank, San Jose, CA</a></div>
        <div><a href="http://www.ncsl.org/research/health/breastfeeding-state-laws.aspx">Breastfeeding Laws by State</a></div>
        <div><a href="https://www.infantrisk.com/">Infant Risk Center</a></div>
        <div><a href="http://cosleeping.nd.edu/">Mother-baby Behavioral Sleep Laboratory</a></div>
        <div><a href="https://www.babyfriendlyusa.org/">Baby-Friendly USA</a></div>

        <h2>Advocacy</h2>

        <div><a href="http://www.usbreastfeeding.org/">United States Breastfeeding Committee </a></div>
        <div><a href="http://californiabreastfeeding.org/">California Breastfeeding Coalition</a></div>
        <div><a href="http://www.breastfeedinghawaii.org/home">Breastfeeding Hawaii</a></div>
        <div><a href="http://nevadabreastfeeds.org/">Nevada Breastfeeds</a></div>
        <div><a href="https://nnbc.wildapricot.org/">Northern Nevada Breastfeeding Coalition</a></div>
        <div><a href="http://www.breastfeedingonline.com/who.shtml">WHO International Code for Marketing Breastmilk Substitutes</a></div>
        <div><a href="http://waba.org.my/">World Alliance for Breastfeeding Action</a></div>
        <div><a href="http://worldbreastfeedingweek.org/">World Breastfeeding Week</a></div>
        <div><a href="http://blackbreastfeedingweek.org/">Black Breastfeeding Week</a></div>
      </Container>
    </Layout>
  )
}
