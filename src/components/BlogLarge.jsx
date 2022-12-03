import React from "react";
import { Link } from "react-router-dom";

export default function BlogLarge({ data }) {
  const { body, title, image, date } = data.attributes;
  const url = `http://localhost:1337${image.data.attributes.url}`;
  return (
    <div className="blogs__large">
      <div className="blogs__large-img">
        <img src={url} alt="blogImg" />
      </div>
      <Link to={`/blogs/${data.id}`} className="blogs__large-info">
        <h4>{date}</h4>
        <h2>{title}</h2>
        <p>{body.substring(0, 300)} . . .</p>
      </Link>
    </div>
  );
}
