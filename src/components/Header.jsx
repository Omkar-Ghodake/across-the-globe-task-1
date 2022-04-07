import React from 'react'

const Header = () => {
	return (
		<>
			<div className="header">
				<svg className='header-img' width="1440" height="440" viewBox="0 0 1440 440" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect  width="1440" height="440" fill="url(#paint0_linear_1_783)" />
					<defs>
						<linearGradient id="paint0_linear_1_783" x1="720" y1="0" x2="720" y2="440" gradientUnits="userSpaceOnUse">
							<stop stopOpacity="0.45" />
							<stop offset="1" stopOpacity="0.6" />
						</linearGradient>
					</defs>
				</svg>
				<div className="header-text text-light">
					<h2>Computer Engineering</h2>
					<h6>142,756 Computer Engineers to follow this</h6>
				</div>
			</div>
		</>
	)
}

export default Header