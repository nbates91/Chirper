import React, { Component } from 'react';
import Timeline from './Components/Timeline';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<div class="jumbotron jumbotron-fluid bg-success text-white">
					<div class="container">
						<div class="text-center">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITtY5wpcGLQbU8a2g0o3MYpBlkV5zntJl7GW7LlpyvhIgqpCibQ"
								alt="Cartoon Bird"
								class="rounded"
							/>
						</div>
						<br />
						<br />

						<h1 class="display-5">Welcome to Chirper!</h1>
						<br />
						<p class="lead text-center">
							Share your views with the world.. <br />
						</p>
						<p class="lead text-right">...even if the world could care less.</p>
					</div>
				</div>
				<Timeline />
			</React.Fragment>
		);
	}
}

export default App;
