import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'
import Dlt from "../img/Dlt.png"
import Edit from "../img/Edit.png"
import moment from "moment"
import { AuthContext } from "../context/authContext"

const Single = () => {

  const [post, setPost] = useState({})

  const location = useLocation()
  const postId = location.pathname.split("/")[2]

  const navigate = useNavigate()

  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`)
        setPost(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [postId])

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`)
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='single'>
      <div className='content'>
        <img src={post && post.img} alt='pic' />
        <div className='user'>
          {post.userImg && <img src={post.userImg} alt='dp' />}
          <div className='info'>
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && <div className='edit'>
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt='edit' />
            </Link>
            <img onClick={handleDelete} src={Dlt} alt='edit' />
          </div>}
        </div>
        <h1>{post.title}</h1>
        {post.desc}
      </div>
      <Menu cat = {post.cat}/>
    </div>
  )
}

export default Single