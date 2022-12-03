import React from "react";
import { useQuery, gql } from "@apollo/client";
import BlogLarge from "../components/BlogLarge";
import BlogContent from "../components/BlogContent";

const REVIEWS = gql`
  query GetBlogs {
    blogs {
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
export default function Home() {
  const { loading, error, data } = useQuery(REVIEWS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <h3 className="hero__content-heading">THE VOICE</h3>
        </div>
      </section>
      <section className="blogs">
        <BlogLarge data={data.blogs.data[0]} />

        <BlogContent data={data.blogs} />
      </section>
    </>
  );
}
