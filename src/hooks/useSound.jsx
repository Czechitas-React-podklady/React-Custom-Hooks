import React from 'react';
import { useState, useEffect } from 'react';

export const useSound = (url) => {
	const [audio] = useState( new Audio(url) );
	const [isPlaying, setIsPlaying] = useState(false);

	const play = () => setIsPlaying(true);
	const pause = () => setIsPlaying(false);
	const toggle = () => setIsPlaying(!isPlaying);

	useEffect(
		() => {
			isPlaying ? audio.play() : audio.pause();

			return () => {
				audio.pause();
			}
		},
		[isPlaying]
	);

	useEffect(
		() => {
			audio.addEventListener('ended', pause );

			return () => {
				audio.removeEventListener('ended', pause)
			}
		},
		[]
	);

	return [isPlaying, play, pause, toggle];
}

export default useSound;