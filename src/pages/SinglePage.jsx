import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
// import ReactMarkdown from "react-markdown";
// GraphQL
const REVIEW = gql`
  query GetReview($id: ID!) {
    blog(id: $id) {
      data {
        id
        attributes {
          title
          body
          date
          image {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
export default function SinglePage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(REVIEW, {
    variables: {
      id: id,
    },
  });
  if (loading) return <p>Loading . . .</p>;
  if (error) return <p>Error :(</p>;
  const { title, body, date, image } = data.blog.data.attributes;
  const url = `http://localhost:1337${image.data.attributes.url}`;
  console.log(url);
  return (
    <section className="single__blog">
      <div className="single__blog-content">
        <div className="single__blog-content-heading">
          <h2>{title}</h2>
          <h4>{date}</h4>
        </div>
        <img src={url} alt="singleBlog" className="single__blog-content-img" />
        <p className="single__blog-content-info">{body}</p>
      </div>
    </section>
  );
}
