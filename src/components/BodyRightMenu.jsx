import React, { useState } from 'react'

const BodyRightMenu = () => {

	const [readOnly, setReadOnly] = useState(true)

	const handleClearClick = () => {
		document.body.querySelector('.location-input').value = null
		document.body.querySelector('.location-input').focus()
	}

	const toggleReadOnly = () => {
		if (readOnly) {
			setReadOnly(false)
			document.body.querySelector('.location-input').focus()
		} else {
			setReadOnly(true)
		}
	}
	document.querySelector('html').addEventListener('click', (event) => {
		if (event.target.className === 'fa-solid fa-pen cursor-pointer' || event.target.className === 'fa-solid fa-xmark cursor-pointer') {
			return
		}
		if (event.target.className !== 'fa-solid fa-pen cursor-pointer' || event.target.className !== 'fa-solid fa-xmark cursor-pointer') {
			setReadOnly(true)
		}
	})

	return (
		<>
			<div className="location d-flex align-items-center mx-auto">
				<div className='mx-auto location-section'>
					<i className="fa-solid fa-location-dot mx-1"></i>
					<input
						type="text"
						className="border-0 location-input mx-1"
						placeholder="Enter your location"

						readOnly={readOnly}
					/>
					{readOnly && <i className="fa-solid fa-pen cursor-pointer" onClick={toggleReadOnly}></i>}
					{!readOnly && <i className="fa-solid fa-xmark cursor-pointer" onClick={handleClearClick}></i>}
					<div className="location-notice mt-4 row">
						<i className="col-1 fa-solid fa-circle-exclamation mt-1"></i>
						<p className='col-11'>Your location will help us serve better and extend a personalised experience.</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default BodyRightMenu