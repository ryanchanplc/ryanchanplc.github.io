import React from 'react'

import { useMetaData } from '../hooks/useMetaData'
import { Container, Row, Col } from 'reactstrap'
import { Helmet } from 'react-helmet'
import { Sidebar } from './Sidebar'
import { BackToTop } from './BackToTop'
export const Layout = ({ children }) => {
  const { title } = useMetaData()
  return (
    <Container>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Row>
        <Col md="3" className="sidebar">
          <Sidebar></Sidebar>
        </Col>
        <Col md="9" className="content">
          <div className=" h-100 mt-3">{children}</div>
        </Col>
      </Row>
      <BackToTop />
    </Container>
  )
}
