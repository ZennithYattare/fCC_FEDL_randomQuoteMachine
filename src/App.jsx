/** @format */

import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [quotes, setQuotes] = useState([]);
	const [randomQuote, setRandomQuote] = useState([]);
	const textColors = [
		"text-red-500",
		"text-orange-500",
		"text-amber-500",
		"text-yellow-500",
		"text-lime-500",
		"text-green-500",
		"text-emerald-500",
		"text-teal-500",
		"text-cyan-500",
		"text-sky-500",
		"text-blue-500",
		"text-indigo-500",
		"text-rose-500",
		"text-pink-500",
		"text-fuchsia-500",
		"text-purple-500",
		"text-violet-500",
	];
	const backgroundColors = [
		"bg-red-500/50",
		"bg-orange-500/50",
		"bg-amber-500/50",
		"bg-yellow-500/50",
		"bg-lime-500/50",
		"bg-green-500/50",
		"bg-emerald-500/50",
		"bg-teal-500/50",
		"bg-cyan-500/50",
		"bg-sky-500/50",
		"bg-blue-500/50",
		"bg-indigo-500/50",
		"bg-rose-500/50",
		"bg-pink-500/50",
		"bg-fuchsia-500/50",
		"bg-purple-500/50",
		"bg-violet-500/50",
	];
	const [backgroundColor, setBackgroundColor] = useState();
	const [color, setColor] = useState();
	const apiURL =
		"https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

	useEffect(() => {
		const fetchQuote = async () => {
			try {
				const response = await fetch(apiURL);
				const data = await response.json();

				setQuotes(data.quotes);
				const randomInteger = Math.floor(
					Math.random() * data.quotes.length
				);
				const randomColor = Math.floor(
					Math.random() * textColors.length
				);
				setBackgroundColor(backgroundColors[randomColor]);
				setColor(textColors[randomColor]);
				setRandomQuote(data.quotes[randomInteger]);
			} catch (error) {
				console.error(`ERROR: ${error}`);
			}
		};
		fetchQuote();
	}, []);

	const getNewQuote = () => {
		const randomInteger = Math.floor(Math.random() * quotes.length);
		const randomColor = Math.floor(Math.random() * textColors.length);
		setBackgroundColor(backgroundColors[randomColor]);
		setColor(textColors[randomColor]);
		setRandomQuote(quotes[randomInteger]);
	};

	return (
		<div
			className={`App ${backgroundColor} flex h-screen w-screen transition duration-700 ease-in-out`}
		>
			<div
				className={`${color} my-auto mx-8 max-w-lg rounded border-4 border-indigo-500/50 bg-slate-100 p-8 text-center shadow-2xl transition duration-700 ease-in-out sm:mx-auto`}
				id="quote-box"
			>
				<i class="fa-2xl fa-solid fa-quote-left mr-2"></i>
				<span className="inline font-serif text-2xl" id="text">
					{randomQuote.quote}
				</span>
				<span className="mt-4 block text-right" id="author">
					- {randomQuote.author}
				</span>
				<a
					className={`${backgroundColor} float-left mt-6 rounded py-2 px-3 text-slate-50 transition duration-700 ease-in-out hover:contrast-150`}
					id="tweet-quote"
					target="_blank"
					href={
						"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
						encodeURI(
							'"' +
								randomQuote.quote +
								'"\n' +
								"- " +
								randomQuote.author +
								"\n"
						)
					}
				>
					<i class="fa-lg fa-brands fa-twitter"></i>
				</a>
				<button
					className={`${backgroundColor} float-right mt-6 rounded py-2 px-3 text-slate-50 transition duration-700 ease-in-out hover:contrast-150`}
					id="new-quote"
					onClick={getNewQuote}
				>
					New Quote
				</button>
			</div>
		</div>
	);
}

export default App;
