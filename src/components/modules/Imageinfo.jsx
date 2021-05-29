import React, {Fragment, useContext, useState} from 'react';
import { GatsbyImage, getSrc } from "gatsby-plugin-image";
import {MdFileDownload} from "react-icons/md";
import {navigate} from 'gatsby';
import findIndex from "lodash/findIndex";
import {usePostListingQuery} from '../hooks/usePostListingQuery';
import {useSwipeable, config} from 'react-swipeable';
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

  const handlers = useSwipeable({
    onSwipedRight: (eventData) => prev(),
    onSwipedLeft: (eventData) => next(),
  ...config,
  });
    return (
      <>
      <div className="image flex center">
        <div className="imgWrap flex center column" {...handlers}>
          <GatsbyImage image={props.post.img.childImageSharp.gatsbyImageData} alt=""/>
          <div className="buttons flex center spaceBetween row">
            <IoCaretBack className="button" size={48} onClick={((e)=> prev(e))} />
            <div className="imgTextWrap flex column flexStart">
              {props.post.opera ? <div className="flex column">
                <h2>{props.post.opera}</h2>
                <h3>{props.post.role}</h3>
              </div> : null}
              {props.post.house ? <p style={{marginTop: '15px'}}>{props.post.house} {imageYear}</p> : null}
              <div className="flex row center">
                <p>Photo: {props.post.photo}</p>
                <a
                  id="downloadImageButton"
                  href={imageSource}
                  download={`${props.post.title}-photo-${props.post.photo}.jpg`}
                  >
                  <MdFileDownload className="button" size={38} />
                </a>
              </div>
            </div>
            <IoCaretForward size={48} className="button" onClick={((e)=> next(e))} />
          </div>
        </div>
      </div>
    </>
    )
  }
export default Imageinfo;
