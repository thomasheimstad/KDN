import React, {useState} from "react";
import { Link } from "gatsby";
import Masonry2 from '../../components/masonry/Masonry2';

const Postlisting = (props) => {
  let getPostList = () => {
    const postList = [];
    props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        img: postEdge.node.frontmatter.img,
        photo: postEdge.node.frontmatter.photo,
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
  let [stateView] = useState(getPostList);
    if(stateView[0].category === "gallery") {
      return ( <Masonry2
        itemsPerRow={[2,3]} // This will be changed to `[2, 3]` later
        images={stateView.map((x) => ({
        ...x.img.childImageSharp.gatsbyImageData,
        caption: `${x.title} – ${x.photo}`,
        path: x.path,
        date: x.date,
      }))}
        /> )
    } else {
      return (
        <div>
          {/* Your post list here. */
          stateView.map(post => (
            <Link to={post.path} key={post.title}>
              <h1>{post.title}</h1>
            </Link>
          ))}
        </div>
      );
    }
  }

export default Postlisting;
