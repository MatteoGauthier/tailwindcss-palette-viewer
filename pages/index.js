import Head from "next/head";
import colors from "../libs/colors";
import clsx from "clsx";
import copy from "copy-text-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import { m } from "framer-motion";

const notify = (text) =>
	toast(
		<p>
			Copied <i>{text}</i>
		</p>,
		{
			icon: <div className={clsx("h-4 w-4 rounded-sm", text)}></div>,

			position: "bottom-right",
		}
	);

export default function Home() {
	console.log(colors);
	function copyToClipboard(text) {
		// copy(text);
		notify(text);
	}
	return (
		<>
			<Toaster />
			<div className="p-6">
				<header className="flex justify-between mb-7 cetner items-center">
					<div className="flex items-end  space-x-2">
						<h1 className="text-3xl font-bold tracking-tight text-cool-gray-900 ">TailwindCSS full palette </h1>
						<p className="text-gray-400">Click to copy the css class ✨</p>
					</div>
					<a href="https://github.com/MatteoGauthier/full-palette">
						<code className="text-sm bg-gray-100 px-2 py-1 rounded-md text-gray-800">full-palette@1.2.0</code>
					</a>
				</header>
				<main className="grid grid-cols-22 gap-x-2">
					{colors.map((group, idx) => {
						return (
							<div key={idx} className="flex w-full space-y-2 flex-col">
								{colors[idx].map((color, i) => {
									return (
										<m.div
											key={color}
											onClick={() => copyToClipboard(color)}
											initial={{ scale: 0 }}
											animate={{ scale: 1 }}
											transition={{
												type: "spring",
												stiffness: 400,
												damping: 30,
												mass: 1.5,
												delay: Math.random(),
											}}
											aria-label={color}
											tabIndex={0}
											className={clsx(
												"aspect-w-1 focus:ring-2 focus:ring-rose-400 focus:outline-none  rounded aspect-h-1 transform-gpu hover:scale-125 transition-transform ease-in-out cursor-pointer  w-full",
												color
											)}
										></m.div>
									);
								})}
							</div>
						);
					})}
				</main>
				<footer className="text-left my-8 text-cool-gray-500">
					Made with love by <a className="text-cyan-500 font-medium "  href="https://matteogauthier.fr">Mattèo Gauthier</a> from{" "}
					<a  className="text-cyan-500  font-medium " href="https://squale.agency">squale.agency</a>
				</footer>
			</div>
		</>
	);
}
