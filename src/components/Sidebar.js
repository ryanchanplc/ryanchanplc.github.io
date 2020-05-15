import React from 'react'
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
config.autoAddCss = false
export const Sidebar = () => {
  return (
    <Row className="h-100">
      <Col className="">
        <Card className="sticky-top">
          <CardHeader className="text-center">
            <a href="/">ryanchanplc</a>
          </CardHeader>
          <CardBody>
            <div className="text-center">
              <img
                className="rounded-circle "
                src="https://avatars1.githubusercontent.com/u/22313101?s=400&u=e760d84f6591662a3feeb89c277e846ffaa65cf8&v=4"
                alt="profile"
                width="120"
                height="120"
              />
            </div>
            <CardTitle className="mt-3">
              <b>Ryan Chan</b>
            </CardTitle>
            <CardSubtitle>Software Engineer</CardSubtitle>
            <CardText>
              This is my coding blog where I write about my coding journey.
            </CardText>

            <hr />
            <CardText>
              <a href="mailto:ryanchanplc@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
              </a>
              <a href="https://www.linkedin.com/in/ryanchanplc">
                <FontAwesomeIcon icon={faLinkedinIn} className="mr-3" />
              </a>
              <a href="https://www.github.com/ryanchanplc">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}
