import React from 'react'

function Card({username="dhruvsaxena673",title=">"}) { // default value pass to props
  return (
    <div>
      <div className="flex flex-col items-center p-7 rounded-2xl">
        <div>
          <img className="size-48 shadow-xl rounded-md" alt="" src="https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-800x525.jpg" />
        </div>
        <div className="flex">
          <span className="text-2xl font-medium">{username}</span>
          <span>{title}</span>
          <span className="flex">
            <span>. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card

