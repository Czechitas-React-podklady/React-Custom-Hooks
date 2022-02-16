import React, { useState, useEffect } from 'react';

const People = () => {

	const [people, setPeople] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(
		() => {
			setTimeout(() => {
				fetch("https://swapi.dev/api/people")
					.then(response => {
						if (!response.ok) {
							throw Error('Could not fetch the data');
						}
						return response.json();
					})
					.then(data => {
						setPeople(data);
						setIsLoading(false);
						setError(null);
					})
					.catch(err => {
						setIsLoading(false);
						setError(err.message);
					})
			}, 1000)
		},
		[]
	);

	return (
		<>
			<h2>People</h2>
			{isLoading && <p className="loading">Fetching data...</p>}
			{error &&	<p className="error">{error}</p>}
			<ul>
				{ people &&
					people.results.map(person => <li key={person.name}>{person.name} ({person.eye_color} eyes)</li>)
				}
			</ul>
		</>
	);
}

export default People;