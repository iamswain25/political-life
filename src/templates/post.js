import React from 'react'
import { graphql, navigate, Link } from 'gatsby'
import Layout from '../components/layouts'
class postTemplate extends React.Component {
  UNSAFE_componentWillMount() {
    this.globalKeyUpEventId = this.keyUpHandler.bind(this);
    this.globalDoubleEventId = this.onDoubleClickHandler.bind(this);
    typeof document !== 'undefined' && document.addEventListener("keyup", this.globalKeyUpEventId);
    typeof document !== 'undefined' && document.addEventListener("touchstart", this.globalDoubleEventId);
  }

  componentWillUnmount() {
    typeof document !== 'undefined' && document.removeEventListener("keyup", this.globalKeyUpEventId);
    typeof document !== 'undefined' && document.removeEventListener("touchstart", this.globalDoubleEventId);
  }

  keyUpHandler(ev) {
    const { nextUrl, prevUrl, urlIndex } = this.btns()
    // console.log(ev.key);
    if (ev.key === 'ArrowLeft' && urlIndex > 0) {
      navigate(prevUrl)
    } else if (ev.key === 'ArrowRight' && urlIndex < 199) {
      navigate(nextUrl)
    }
  }

  onDoubleClickHandler(e) {
    let tapped = this.tapped
    if (!tapped) { //if tap is not set, set up single tap
      this.tapped = 1
      this.tapped = setTimeout(() => {
        this.tapped = null
        //insert things you want to do when single tapped
      }, 300);   //wait 300ms then run single click code
    } else {    //tapped within 300ms of last tap. double tap
      clearTimeout(this.tapped); //stop single tap callback
      this.tapped = null
      //insert things you want to do when double tapped
      // console.log(e)
      const { nextUrl, urlIndex } = this.btns()
      if (urlIndex < 199) {
        navigate(nextUrl)
      }
    }
    // e.preventDefault()
  }

  btns() {
    const { markdownRemark: post } = this.props.data
    const lang = '/' + post.fileAbsolutePath.split('/').slice(-2)[0] + '/'
    const urlIndex = parseInt(post.fileAbsolutePath.split('/').pop()) //last part of URL
    const nextUrl = lang + (urlIndex + 1).toString().padStart(4, '0')
    const prevUrl = lang + (urlIndex - 1).toString().padStart(4, '0')
    return { urlIndex, nextUrl, prevUrl, post }
  }

  render() {
    const { urlIndex, nextUrl, prevUrl, post } = this.btns()
    return (
      <Layout pathname={typeof window !== 'undefined' && window.location.pathname} >
        <div>
          <h2>{post.frontmatter.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          {urlIndex > 0 ? <Link to={prevUrl}>←prev</Link> : ''}
          {urlIndex >= 199 ? '' : <Link to={nextUrl} style={{ float: 'right' }}>next→</Link>}
        </div>
      </Layout>
    )
  }
}
export default postTemplate;
export const postQuery = graphql`
  query BlogPostById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      id
      fileAbsolutePath
      frontmatter {
        title
      }
    }
  }
`
