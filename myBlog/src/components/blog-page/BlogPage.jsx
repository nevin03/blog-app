import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import useBlogs from "../../hooks/useBlogs";
import { Loading } from "../error-loading/Loading";
import AuthorCard from "../author-card/AuthorCard";
import { Helmet } from "react-helmet-async";
import NoBlog from "../error-loading/NoBlog";
import styles from "./BlogPage.module.css"; // CSS Module

const BlogPage = () => {
  const { id } = useParams();
  const { blogs, isLoading, isError } = useBlogs();

  if (isLoading) return <Loading />;
  if (isError) return <NoBlog />;

  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <Container className="py-5 text-white">
        <h3>Blog not found</h3>
      </Container>
    );
  }

  const blogUrl = `${import.meta.env.VITE_STRAPI_API_URL}${blog.titleimage?.url}`;
  const pageTitle = `${blog.title} | My Blog`;
  const pageDescription =
    blog.titleDescription?.substring(0, 150) || "Read this amazing blog post.";

  return (
    <Container className={`${styles.container} py-5`}>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={blogUrl} />
        <meta property="og:type" content="article" />
      </Helmet>

      <Row className="mb-4">
        {/* Left Column: Blog Content */}
        <Col md={8}>
          <div className={styles.blogWrapper}>
            <div className={styles.blogText}>
              <h1 className={styles.blogTitle}>{blog.title}</h1>
              <p className={styles.blogContent}>
                {blog.description || "No full content available"}
              </p>
            </div>
          </div>
        </Col>

        {/* Right Column: AuthorCard and Blog Image */}
        <Col md={4}>
          <div className="bg-white shadow p-3 rounded mb-4">
            <AuthorCard blogId={blog.id} />
          </div>

          {blog.titleimage && (
            <div className={styles.blogImageContainer}>
              <img
                src={blogUrl}
                alt={`Image for ${blog.title}`}
                className={styles.blogImage}
              />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPage;
