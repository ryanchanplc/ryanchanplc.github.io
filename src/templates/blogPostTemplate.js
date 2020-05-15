import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Layout } from '../components/Layout'
import { Container, Breadcrumb, BreadcrumbItem, Badge } from 'reactstrap'

export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx
  const { previous, next } = pageContext
  return (
    <Layout>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>{frontmatter.title}</BreadcrumbItem>
      </Breadcrumb>
      <hr />
      <Container className="pt-3 pb-3">
        <h1>{frontmatter.title}</h1>
        <p>
          <em> Published on : {frontmatter.date}</em>
          <Badge color={frontmatter.color} className="ml-3">
            {frontmatter.category}
          </Badge>
        </p>
        <MDXRenderer>{body}</MDXRenderer>
        <hr />
        <div className="mt-5 mb-5">
          {previous === false ? null : (
            <>
              {previous && (
                <span className="">
                  Previous :{' '}
                  <Link to={previous.fields.slug}>
                    {previous.frontmatter.title}
                  </Link>
                </span>
              )}
            </>
          )}
          {next === false ? null : (
            <>
              {next && (
                <span className="link-right mb-5">
                  Next :{' '}
                  <Link to={next.fields.slug}>{next.frontmatter.title}</Link>
                </span>
              )}
            </>
          )}
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "Do MMMM YYYY")
        category
        color
      }
    }
  }
`
