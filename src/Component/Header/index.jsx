import React, { Component, Fragment } from "react";

class Header extends Component {
    render(){
        return(
            <Fragment>
                {/* Header Start */}
			 	<header className="header_design1 fixed-top bg-white" id="header">
			 		<div className="container">
				 		<div className="row">
					 		<nav className="navbar navbar-expand-lg navbar-light w-100  text-uppercase">
								<a className="navbar-brand font-weight-bold d-inline-block" href="/test">
									{/*<!-- Company Logo -->*/}
									<h3>Site-Logo</h3>
									{/* <img className="logo-image img-fluid" src="assets/images/companysite_logo.png" alt="companysite" /> */}
								</a>
								<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
								</button>

								<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
									<ul className="navbar-nav ml-auto mt-2 mt-lg-0 font-weight-bold">
										<li className="nav-item active">
											<a className="nav-link px-4 py-4"  href="#home">Home</a>
										</li>
										<li className="nav-item">
											<a className="nav-link px-4 py-4" href="#about">About</a>
										</li>
										<li className="nav-item">
											<a className="nav-link px-4 py-4" href="#about">Services</a>
										</li>
										<li className="nav-item">
											<a className="nav-link px-4 py-4" href="#about">Blog</a>
										</li>
										<li className="nav-item">
											<a className="nav-link px-4 py-4" href="#about">Contact</a>
										</li>
									</ul>
									 
								</div>
							</nav>
						</div>
					</div>
			 	</header>
			 	{/* Header End */}
            </Fragment>
        );
    }
}

export default Header;