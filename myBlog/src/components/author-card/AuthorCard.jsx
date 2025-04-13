import React from "react";
import { Card, Image } from "react-bootstrap";
import useBlogs from "../../hooks/useBlogs";

// Default author image in case there is no image URL

const apiUrl = import.meta.env.VITE_STRAPI_API_URL;

const AuthorCard = ({ blogId }) => {
  const { blogs, isLoading, isError } = useBlogs(); // Use the hook to fetch blogs

  // Find the blog by blogId
  const blog = blogs.find((blog) => blog.id === blogId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  // Extract author and title image info from the blog

  return (
    <Card
      className="text-dark  p-1 mb-2"
      style={{ border: "none", backgroundColor: "white" }}
    >
      <div className="d-flex align-items-center gap-3">
        <Image
          src={`${apiUrl}${blog.authorimage.url}`}
          roundedCircle
          width={50}
          height={50}
          alt={"Unknown Author"}
        />
        <div>
          <h6 className="mb-0">Posted by</h6>
          <p className="mb-0 fw-bold">{blog.author || "Unknown Author"}</p>
          <h6 className="mb-0 mt-2">Posted on</h6>
          <p className="mb-0 text-muted">
            {new Date(blog.publishtime).toLocaleString("en-US", {
              dateStyle: "long",
              timeStyle: "short",
            })}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default AuthorCard;
