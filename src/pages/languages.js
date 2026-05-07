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

          <h2>German Deutsch</h2>
          <div>Kathrin - <a href="mailto: kathrin.benoit@lalecheliga.de">email</a></div>

          <h2>Hawaiian Ōlelo Hawaiʻi</h2>
          <div>Rachel - <a href="mailto: kaloko4@aol.com">email</a></div>

          <h2>Italian Italiano</h2>
          <div>Brittan - <a href="tel:+7757776931">Text only</a></div>

          <h2>Japanese 日本語</h2>
          <div>Aki - <a href="mailto: LLLakisugaya@gmail.com">email</a></div>

          <h2>Spanish Español</h2>
          <div>Glory - <a href="mailto: glorimar.canedo@gmail.com"> email</a>, <a href="tel:+8082321912">text</a></div>
          <div>Carolina - <a href="mailto: lllcarolinajones@gmail.com">email</a></div>
          <div>Nicole - <a href="mailto: npogrund@yahoo.com">email</a>, <a href="tel:+7073805177"> text </a></div>

          <h2>Urdu/Hindi اُردُو हिन्दी</h2>
          <div> Gul - <a href="azaansmama@icloud.com"></a><a href="tel:+7753917703">text</a></div>

          <h2>Vietnamese Tiếng Việt</h2>
          <div>Uyen - <a href="mailto:LLLLeaderHMB@gmail.com">email</a></div>

      </Container>
    </Layout>
  );
}
