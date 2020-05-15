import { graphql, Link } from 'gatsby'
import React from 'react'
import { Layout } from '../components/Layout'
import { Badge, Card, CardText, CardBody, CardTitle } from 'reactstrap'

export default ({ data }) => {
  return (
    <React.Fragment>
      <Layout>
        {data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
          <Card key={id} className="mt-2 post">
            <CardBody>
              <CardTitle>
                <Link to={fields.slug}>{frontmatter.title}</Link>
              </CardTitle>
              <CardText>{frontmatter.description}</CardText>
              <div className="clearfix">
                <small className="float-left text-muted">
                  {frontmatter.date}
                </small>
                <div className="float-right">
                  <Badge color={frontmatter.color}>
                    {frontmatter.category}
                  </Badge>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </Layout>
    </React.Fragment>
  )
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "Do MMMM YYYY")
          description
          category
          color
        }
        fields {
          slug
        }
      }
    }
  }
`
