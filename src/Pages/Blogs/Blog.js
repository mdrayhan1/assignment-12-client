import React, { useEffect, useState } from 'react';
import Blogs from './Blogs';



const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("https://discover-watches-server.vercel.app/blogs")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    return (
        <div>
            {blogs.map((blog) => (
                <Blogs
                    key={blog._id}
                    blog={blog}
                ></Blogs>
            ))}
        </div>
    );
};

export default Blog;