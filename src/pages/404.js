import React from 'react'
import { Layout } from '../components/Layout'
const NotFound = () => {
  return (
    <Layout>
      <div class="row align-items-center h-100 text-center">
        <div class="col">
          <b>Page Not Found</b>
          <br />
          <span>Oops, the page you are looking for does not exist</span>
        </div>
      </div>
    </Layout>
  )
}
export default NotFound
