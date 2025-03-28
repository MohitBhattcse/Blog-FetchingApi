import React, { useEffect, useState } from 'react';
import { fetchBlogs } from '../api/blogApi';
import { Link } from 'react-router-dom';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const getBlogs = async () => {
            const data = await fetchBlogs();
            setBlogs(data);
        };
        getBlogs();
    }, []);

    const filteredBlogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Blogs</h1>
            <input
                type="text"
                placeholder="Search Blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control mb-4"
            />
            <div className="row">
                {filteredBlogs.map((blog) => (
                    <div className="col-md-4 mb-4" key={blog.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to={`/blogs/${blog.id}`} className="text-decoration-none">
                                        {blog.title}
                                    </Link>
                                </h5>
                                <p className="card-text">{blog.body.slice(0, 100)}...</p>
                                <Link to={`/blogs/${blog.id}`} className="btn btn-primary">Read More</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;