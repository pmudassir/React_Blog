import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Menu = ({ cat }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts/?cat=${cat}`)
                if(res && Array.isArray(res.data) && res.data.length !=0 )setPosts(res.data);
                else setPosts([]);
               
            } catch (error) {
                setPosts([]);
                console.log(error);
            }
        }
        fetchData()
    }, [cat])

    return (
        <div className='menu'>
            <h1>Other posts you may like:</h1>
            {posts && posts.length !== 0 && posts.map((post) => (
                <div className='post' key={post.id}>
                    <img src={`../upload/${post?.img}`} alt="pic" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    )
}

export default Menu