import React from 'react';
import { Link } from 'react-router';

export default function PostBar(props) {
  return (
    <div id="postBar">
      <Link className="link" to={`/posts/${props.id}`}>Post: {props.title}</Link>
      Tags: {props.tags}
    </div>
  );
}
