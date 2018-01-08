import React from 'react';
import { Link } from 'react-router-dom';

export default class Extnavbar extends React.Component {
  render() {
    return (
      <div className="ext-nav background-95-h page-transition">
				{/*<div className="row col-md-offset-6 full-height ">*/}
        {/*/!*<div className="view half-height">*!/*/}
          {/*/!*<div className="content no-top-padding no-bottom-padding full-height">*!/*/}
            {/*/!*<div className="container-fluid  full-height">*!/*/}
              {/*/!*<div className="row full-height col-md-offset-2">*!/*/}
                {/*/!*<a href="#home" className="col-md-3 colors-a background-95-a full-height">*!/*/}
                  {/*/!*<div>*!/*/}
                    {/*/!*<span className="side-label">Home</span>*!/*/}
                    {/*/!*<span className="side-title">Home</span>*!/*/}
                  {/*/!*</div>*!/*/}
                {/*/!*</a>*!/*/}
                {/*<a href="#benefits" className="col-md-12 colors-f background-solid quarter-height">*/}
                  {/*<div>*/}
                    {/*<span className="side-label">Check our benefits</span>*/}
                    {/*<span className="side-title">Benefits</span>*/}
                  {/*</div>*/}
                {/*</a>*/}
                {/*/!*<a href="#team" className="col-md-3 colors-a background-95-a full-height">*!/*/}
                  {/*/!*<div>*!/*/}
                    {/*/!*<span className="side-label">See our team</span>*!/*/}
                    {/*/!*<span className="side-title">Team</span>*!/*/}
                  {/*/!*</div>*!/*/}
                {/*/!*</a>*!/*/}
								{/*<a href="#features" className="col-md-12 colors-a background-solid quarter-height">*/}
									{/*<div>*/}
										{/*<span className="side-label">Features</span>*/}
										{/*<span className="side-title">Features</span>*/}
									{/*</div>*/}
								{/*</a>*/}
              {/*/!*</div>*!/*/}
            {/*/!*</div>*!/*/}
          {/*/!*</div>*!/*/}
        {/*/!*</div>*!/*/}
        {/*/!*<div className="container-fluid  half-height">*!/*/}
          {/*/!*<div className="row full-height col-md-offset-2">*!/*/}
            {/*/!*<a href="#how-we-work" className="col-md-3 colors-f background-solid full-height border-bottom border-lite">*!/*/}
              {/*/!*<div>*!/*/}
                {/*/!*<span className="side-label">Awesome</span>*!/*/}
                {/*/!*<span className="side-title">How We Work</span>*!/*/}
              {/*/!*</div>*!/*/}
            {/*/!*</a>*!/*/}
						{/*<a href="coming.html" className="col-md-12 colors-f background-solid quarter-height">*/}
							{/*<div>*/}
								{/*<span className="side-label">Government</span>*/}
								{/*<span className="side-title">SecureVote for Government</span>*/}
							{/*</div>*/}
						{/*</a>*/}
            {/*/!*<a href="#numbers" className="col-md-3 colors-f background-solid full-height border-bottom border-left border-lite">*!/*/}
              {/*/!*<div>*!/*/}
                {/*/!*<span className="side-label">Some Facts</span>*!/*/}
                {/*/!*<span className="side-title">Our Numbers</span>*!/*/}
              {/*/!*</div>*!/*/}
            {/*/!*</a>*!/*/}
            {/*<a href="#contact" className="col-md-12 colors-a background-solid quarter-height">*/}
              {/*<div>*/}
                {/*<span className="side-label">Contact us</span>*/}
                {/*<span className="side-title">Contact</span>*/}
              {/*</div>*/}
            {/*</a>*/}
          {/*</div>*/}
        {/*</div>*/}
				{/*</div>*/}
				<a href="#benefits" className="">
					<div>
						<span className="side-title">Benefits</span>
					</div>
				</a>
				<a href="#features" className="">
					<div>
						<span className="side-title">Features</span>
					</div>
				</a>
				<a href="#mission" className="">
					<div>
						<span className="side-title">Our Mission</span>
					</div>
				</a>
				<a href="#recognise" className="">
					<div>
						<span className="side-title">Recognition</span>
					</div>
				</a>
				{/*<a href="government.html" className="">*/}
					{/*<div>*/}
						{/*<span className="side-title">SecureVote for Government</span>*/}
					{/*</div>*/}
				{/*</a>*/}
				<a href="#contact" className="">
					<div>
						<span className="side-title">Contact Us</span>
					</div>
				</a>

				<div className="social-links">
					<a rel="noopener noreferrer" target="_blank" href="https://blog.xo1.io/"><i className="fa fa-medium"></i></a>
					<a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/SecureVote/"><i className="fa fa-facebook"></i></a>
					<a rel="noopener noreferrer" target="_blank" href="https://twitter.com/Secure_Vote"><i className="fa fa-twitter"></i></a>
					<a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/company/18001068/"><i className="fa fa-linkedin"></i></a>
				</div>
      </div>
    )
  }
}
