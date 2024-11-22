import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import { Container } from "semantic-ui-react";

export default function Languages({data}) {
  return (
    <Layout>
      <Helmet>
        <title>Languages our Leaders can provide assistance in</title>
        <meta name="description" content="A list of languages and the LLL leaders who can assist in them."/>
      </Helmet>
      <Container>
          <h1>Leaders who Speak Additional Languages</h1>

          <h2>Armenian հայերեն</h2>
          <div>Roza - <a href="mailto: rozabaghdassarianlll@gmail.com">email</a></div>
          <div>Evelyn - <a href="tel:+8185237940">text</a></div>

          <h2>Italian Italiano</h2>
          <div>Brittany - <a href="mailto: BrittanyEOC@me.com">email</a>, <a href="tel:+4159401381"> text </a></div>

          <h2>Portuguese Português</h2>
          <div>Rose - <a href="mailto: rose_ibclc@yahoo.com">email</a>, <a href="tel:+2096132332"> text </a></div>

          <h2>Russian русский</h2>
          <div>Ksenia - <a href="mailto: galaninaksenia@gmail.com">email</a></div>

          <h2>Spanish Español</h2>
          <div>Brienne - <a href="tel:+8317762832">text</a></div>
          <div>Mary Jane - <a href="tel:+8082837139">text</a></div>
          <div>Rachel - <a href="tel:+5305919191">text</a></div>
          <div>Glory - <a href="mailto: glorimar.canedo@gmail.com"> email</a>, <a href="tel:+8082321912">text</a></div>
          <div>Aimee - <a href="mailto: adebacker8@gmail.com">email</a>, <a href="tel:+8054445803">text</a></div>
          <div>Carolina - <a href="mailto: lllcarolinajones@gmail.com">email</a></div>
          <div>Rose - <a href="mailto: rose_ibclc@yahoo.com">email</a>, <a href="tel:+2096132332"> text </a></div>
          <div>Nicole - <a href="mailto: npogrund@yahoo.com">email</a>, <a href="tel:+7073805177"> text </a></div>

          <h2>Urdu/Hindi اُردُو हिन्दी</h2>
          <div> Gul - <a href="azaansmama@icloud.com"></a><a href="tel:+7753917703">text</a></div>

          <h2>Vietnamese Tiếng Việt</h2>
          <div>Uyen - <a href="mailto:LLLLeaderHMB@gmail.com">email</a></div>

      </Container>
    </Layout>
  );
}
