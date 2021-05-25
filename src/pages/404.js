/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Não encontrado" />
    <Styled.h1>Não Encontrado</Styled.h1>
    <Styled.p>
      Essa página não existe.
    </Styled.p>
    <Styled.a as={Link} to="/">
      Voltar à página inicial
    </Styled.a>
  </Layout>
)

export default NotFoundPage
