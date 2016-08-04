import React from 'react';
import { Link } from 'react-router';

export default function PostBar(props) {
  return (
    <div id="postBar">
      <Link to={`/posts/${props.id}`}>{props.title}</Link>
      {props.tags}
    </div>
  );
}
