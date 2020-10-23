import React from 'react'
import { graphql } from 'gatsby'

import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Accordion from '../components/Accordion'
import Gallery from '../components/Gallery'
import Popup from '../components/Popup'


// Export Template for use in CMS preview
export const AboutMePageTemplate = ({
    section1,
    accordion,
    body,
    gallery
}) => (
        <main>
            <section className="section">
                <div className="container" >
                    {/* <h2>Our gallery component</h2> */}
                    <Gallery images={gallery} />
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <Content source={section1} />
                </div>
            </section>

            {/* <section className="section">
                <div className="container">
                    <Accordion items={accordion} />
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <Popup>
                        <Content source={section1} />
                    </Popup>
                </div>
            </section> */}
        </main>
    )

const AboutMePage = ({ data: { page } }) => (
    <Layout
        meta={page.frontmatter.meta || false}
        title={page.frontmatter.title || false}
    >
        <AboutMePageTemplate {...page} {...page.frontmatter} body={page.html} />
    </Layout>
)

export default AboutMePage

export const pageQuery = graphql`
  query AboutMePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        template
        section1
        accordion {
          title
          description
        }
      }
    }
  }
`
