import React from 'react'
import styled from 'styled-components'
import Content from './Content'
import Header from './Header'

const Layout = styled.div`
  display: grid;
  grid-template-areas: 'header' 'content';
`

export default function LayoutComponent() {
  return (
    <Layout>
      <Header />
      <Content />
    </Layout>
  )
}
