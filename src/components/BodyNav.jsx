import React from 'react'
import { Link } from 'react-router-dom'

const BodyNav = () => {
	return (
		<>
			<div className="BodyNav">
				<div className="navbar row pb-0">
					<div className="col-md-8 d-flex mb-0 pb-0">
						<Link to="/" className="nav-link mb-0 pb-0 active-nav">All Posts(32)</Link>
						<Link to="/" className="nav-link">Article</Link>
						<Link to="/" className="nav-link">Event</Link>
						<Link to="/" className="nav-link">Education</Link>
						<Link to="/" className="nav-link">Job</Link>
					</div>
					<div className="col-md-4 d-flex justify-content-end">
						<button className="btn write-post-btn btn-sm d-flex px-2 mx-2">Write a Post <i className="fa-solid fa-sort-down ms-3"></i></button>
						<button className="btn join-group-btn btn-sm mx-2"><i className="fa-solid fa-user-plus me-2"></i>Join Group</button>
					</div>
				</div>
				<hr className='m-0' />
			</div>
		</>
	)
}

export default BodyNav