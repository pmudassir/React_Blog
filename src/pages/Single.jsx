import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'
import Dlt from "../img/Dlt.png"
import Edit from "../img/Edit.png"

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src='https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='pic' />
        <div className='user'>
          <img src='https://images.pexels.com/photos/3781545/pexels-photo-3781545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='dp' />
          <div className='info'>
            <span>Johanna</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt='edit' />
            </Link>
            <img src={Dlt} alt='edit' />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit
          ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit  <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit
          ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit  <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit
          ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit  <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit
          ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit  <br />
        </p>
      </div>
      <Menu />
    </div>
  )
}

export default Single