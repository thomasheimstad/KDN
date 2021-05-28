import React, {Fragment, useContext, useState} from 'react';
import { GatsbyImage, getSrc } from "gatsby-plugin-image";
import {MdFileDownload} from "react-icons/md";
import {navigate} from 'gatsby';
import findIndex from "lodash/findIndex";
import {usePostListingQuery} from '../hooks/usePostListingQuery';
import {Imagelistcontext} from '../context/Imagelistprovider';
import {IoCaretForward, IoCaretBack} from "react-icons/io5";

const Imageinfo = (props) => {
  const imageSource = getSrc(props.post.img);
  const { imageCategorySelector} = useContext(Imagelistcontext);
  let imageYear = new Date(props.post.date).getFullYear();
  let data = usePostListingQuery();
  let sameTagList = [];
  let postTag = props.post.tags[0];
  let post = props.post;
  let postIndex;
  let findPosts = () => {
    data.allMarkdownRemark.edges.map((edge, index) => {
      if(edge.node.frontmatter.tags.includes(postTag)){
        sameTagList.push(edge)
      }
    })
  }
  let findCurrentIndex = () => {
    postIndex = sameTagList.findIndex(obj => obj.node.frontmatter.title === post.title)
  }
  let next = (e) => {
    if (e) {
      e.stopPropagation()
    }
    if(postIndex || postIndex === 0) {
      let nextPost
      // Start over if at the end
      if (postIndex + 1 === sameTagList.length) {
        nextPost = sameTagList[0]
      } else {
        nextPost = sameTagList[postIndex + 1]
      }
      navigate(`${nextPost.node.fields.slug}/`, { state: { modal: true }})
    }
  }
  let prev = (e) => {
    if (e) {
      e.stopPropagation()
    }
    if(postIndex || postIndex === 0) {
      let prevPost
      // Start over if at start.
      if (postIndex === 0) {
        prevPost = sameTagList.slice(-1)[0]
      } else {
        prevPost = sameTagList[postIndex - 1]
      }
      navigate(`${prevPost.node.fields.slug}/`, { state: { modal: true }})
    }
  }
  findPosts();
  findCurrentIndex();

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  function handleTouchStart(e) {
      setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
      setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
      if (touchStart - touchEnd > 50) {
          // do your stuff here for left swipe
          next(e)
      }

      if (touchStart - touchEnd < -50) {
          // do your stuff here for right swipe
          prev(e);
      }
  }
    return (
      <>
      <div className="image flex center">
        <div className="imgWrap flex center">
          <GatsbyImage image={props.post.img.childImageSharp.gatsbyImageData} alt=""/>
          <div className="buttons flex center spaceBetween row">
            <div className="button" onClick={((e)=> prev(e))}><IoCaretBack className="iconz" size={28} /></div>
            <div className="flex center row">
              <div className="flex column flexStart">
                {props.post.opera ? <div className="flex row center" style={{justifyContent: 'flex-start', alignItems: 'baseline'}}>
                  <h2>{props.post.opera}</h2>
                  <h2 style={{fontSize:"80%"}}>&nbsp;({props.post.role})</h2>
                </div> : null}
                {props.post.house ? <p>{props.post.house} {imageYear}</p> : null}
                <p>Photo: {props.post.photo}</p>
              </div>
              <a
                id="downloadImageButton"
                href={imageSource}
                download={`${props.post.title}-photo-${props.post.photo}.jpg`}
                >
                <div className="button" style={{marginLeft: '5px'}}><MdFileDownload className="iconz" size={20} /></div>
              </a>
            </div>
            <div className="button" onClick={((e)=> next(e))}><IoCaretForward className="iconz" size={28} /></div>
          </div>
        </div>
      </div>
    </>
    )
  }
export default Imageinfo;
