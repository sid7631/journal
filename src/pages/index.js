import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <div className="container mx-auto pt-2">

        <div className="grid grid-cols-2 gap-4">
          <div className="flex prose  dark:prose-invert prose-xl prose-headings:text-gray-600 ">
            <div className="">
              <h4 className="text-4xl tracking-wide dark:text-gray-500">
                Hello, I'm <span className="tracking-widest text-blue-500">Siddharth</span> 👋🏻
              </h4>
              <p className="tracking-wide prose dark:prose-invert">
                Welcome to my digital space.
              </p>
              <p className="tracking-wide prose dark:prose-invert">
                I'm a frontend developer and python programmer based in Bangalore.
              </p>
              <p className="tracking-wide prose dark:prose-invert">
                Check out my projects and articles I've written on subjects like maths, frontend development, python programming.
              </p>
            </div>
          </div>
          <div>

            <StaticImage
              src={'../images/undraw_site_content_re_4ctl.svg'}
              alt={'introduction image'}
            />
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home" />
