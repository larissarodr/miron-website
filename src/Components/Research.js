import React, { Component } from 'react';

class Research extends Component {
	render() {

		if (this.props.data) {
			var research = this.props.data.researches.map(function (research) {
				var projectImage = 'images/research/' + research.image;
				return <div key={research.title}>
					<img alt={research.title} src={projectImage} />
					<h2>{research.title}</h2>
					<p>{research.description}</p>
				</div>
			})
		}

		return (
			<section id="research">

				<div className="row">

					<div>

						<h1>Research</h1>
						<div className="research-content">
							{research}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Research;
