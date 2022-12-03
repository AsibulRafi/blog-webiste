import React from "react";
import { Link } from "react-router-dom";

export default function BlogContent({ data }) {
  const blog = data.data.slice(1);
  console.log(blog);
  return (
    <div className="blogs__content">
      {blog.map((item) => {
        const { title, body, image, date } = item.attributes;
        const url = `http://localhost:1337${image.data.attributes.url}`;

        return (
          <div className="blogs__content-single" key={item.id}>
            <div className="blogs__content-single-img">
              <img src={url} alt="blogImg" />
            </div>
            <Link
              to={`/blogs/${item.id}`}
              className="blogs__content-single-info"
            >
              <h4>{date}</h4>
              <h2>{title}</h2>
              <p>{body.substring(0, 200)} . . .</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
