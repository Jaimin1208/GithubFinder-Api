import React from 'react'
import PropTypes from "prop-types" 
import { Link } from "react-router-dom"

function UserItem({user:{login,avatar_url}}) {
  return (
      <div className='card shadow-md compact bg-base-100 hover:bg-base-200'>
          <div className="flex-row items-center space-x-4 card-body">
              <div>
                  <div className='avatar'>
                      <div className='shadow w-14 h-14 rounded-full'>
                          <img src={avatar_url} alt="Profile" />
                      </div>
                  </div>
              </div>
              <div>
                  <h2 className="card-title">
                      {login}
                  </h2>
                  <Link className="text-base-content text-opacity-40" to={`/user/${login}`}>Visit Profile</Link>
              </div>
          </div>
    </div>
  )
}

UserItem.propTypes = {
    user:PropTypes.object.isRequired
}

export default UserItem