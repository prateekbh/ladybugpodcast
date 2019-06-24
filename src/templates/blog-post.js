import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Player from "../components/player"
import { rhythm, scale } from "../utils/typography"
import { FaTwitter } from "react-icons/fa"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const seoTitle = `${post.frontmatter.title} | Ladybug Podcast 🐞`
    const shareTitle = `Listen to ${
      post.frontmatter.title
    }, a @LadybugPodcast episode by @kvlly, @emmawedekind, @aspittel, and @littlekope!`
    const shareUrl = `https://ladybug.dev/episodes/${post.frontmatter.slug}`
    const twitterShare = `//twitter.com/share?text=${shareTitle}&amp;url=${shareUrl}`

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={seoTitle}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1>
          {post.frontmatter.title} {post.slug}
        </h1>
        <p
          className="post-meta"
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          <span>{post.frontmatter.date}</span>
          <a
            className="twitter-share"
            target="_blank"
            onClick="ga('send', 'social', 'Twitter', 'Share', {post.frontmatter.title});"
            href={twitterShare}
          >
            <FaTwitter size="1em" title="Share on Twitter" />
            <span class="visually-hidden">
              Share {post.frontmatter.title} on Twitter
            </span>
          </a>
        </p>
        <Player show={post.frontmatter} />
        <p>{post.frontmatter.description}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        audio
        slug
      }
    }
  }
`
