import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchBlogs } from '../api/blogApi';
import CommentSection from './CommentSection';

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = React.useState(null);

    React.useEffect(() => {
        const getDetails = async () => {
            const data = await fetchBlogs();
            const foundBlog = data.find((b) => b.id === Number(id));
            setBlog(foundBlog);
        };
        getDetails();
    }, [id]);

    if (!blog) return <div className="container">Loading...</div>;

    return (
        <div className="container mt-4">
            <h1 className="mb-4">{blog.title}</h1>
            <p className="lead">{blog.body}</p>
            <CommentSection blogId={id} />
        </div>
    );
};

export default BlogDetails;