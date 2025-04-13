import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useBlogs from "../../hooks/useBlogs";
import { Loading } from "../error-loading/Loading";
import { Helmet } from "react-helmet-async";
import styles from "./BlogBody.module.css";

const BlogBody = () => {
  const navigate = useNavigate();
  const { blogs, isLoading, isError } = useBlogs();
  const apiUrl = import.meta.env.VITE_STRAPI_API_URL;

  const handleCardClick = (id) => {
    navigate(`/blogs/${id}`);
  };

  if (isError) return <div>Error loading blog posts.</div>;
  if (isLoading) return <Loading />;

  return (
    <Container className={styles.container}>
      <Helmet>
        <title>Blog Posts | My Blog</title>
        <meta
          name="description"
          content="Explore a variety of blog posts covering different topics and ideas."
        />
        <meta
          name="keywords"
          content="blog, blog posts, technology, lifestyle, programming, ideas, tutorials"
        />
        <meta property="og:title" content="Blog Posts | My Blog" />
        <meta
          property="og:description"
          content="Explore a variety of blog posts covering different topics and ideas."
        />
        <meta
          property="og:image"
          content={`${apiUrl}/path/to/your/default-image.jpg`}
        />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {blogs.map((blog) => (
        <Card
          key={blog.id}
          className={`${styles.card}`}
          onClick={() => handleCardClick(blog.id)}
        >
          {" "}
          {console.log({ blogs })}
          <Row className={`${styles.row} align-items-center`}>
            <Col xs={12} md={4} className={`${styles.colImage}`}>
              {blog.blogimage?.length > 0 ? (
                <img
                  src={`${apiUrl}${blog.blogimage[0].url}`}
                  alt={`Image for ${blog.title}`}
                  className={`${styles.image} img-fluid`}
                />
              ) : (
                <div className={styles.noImage}>No Image</div>
              )}
            </Col>
            <Col xs={12} md={8} className={`${styles.colContent}`}>
              <h2 className={styles.title}>{blog.title}</h2>
              <h5 className={styles.author}>
                Author: {blog.author || "No author name available"}
              </h5>
              <p className={styles.description}>
                {blog.titleDescription || "No short description available"}
              </p>
            </Col>
          </Row>
        </Card>
      ))}
    </Container>
  );
};

export default BlogBody;
