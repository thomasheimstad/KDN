import React from "react";
import { Link } from "gatsby";
import Masonry from '../../components/masonry/Masonry';
import Calendar from './Calendar';
class PostListing extends React.Component {
  state = {
    view: 'default'
  }
  componentDidMount = () => {
    let postList = this.getPostList();
    this.setState({
      view: postList[0].category
    })
  }
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        img: postEdge.node.frontmatter.img,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        category: postEdge.node.frontmatter.category,
        quote: postEdge.node.frontmatter.quote,
        author: postEdge.node.frontmatter.author,
        time: postEdge.node.frontmatter.time,
        composer: postEdge.node.frontmatter.composer,
        opera: postEdge.node.frontmatter.opera,
        orchestra: postEdge.node.frontmatter.orchestra,
        conductor: postEdge.node.frontmatter.conductor,
      });
    });
    return postList;
  }
  render = () => {
    const postList = this.getPostList();
    if(this.state.view == "gallery") {
      return ( <Masonry postList={postList} /> )
    } else if(this.state.view == "calendar") {
      return ( <Calendar postList={postList} />)
    } else {
      return (
        <div>
          {/* Your post list here. */
          postList.map(post => (
            <Link to={post.path} key={post.title}>
              <h1>{post.title}</h1>
            </Link>
          ))}
        </div>
      );
    }
  }
}

export default PostListing;
