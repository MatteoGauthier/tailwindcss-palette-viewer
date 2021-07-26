import "tailwindcss/tailwind.css";
import { LazyMotion, domAnimation } from "framer-motion";

function MyApp({ Component, pageProps }) {
	return (
		<LazyMotion features={domAnimation}>
			<Component {...pageProps} />
		</LazyMotion>
	);
}

export default MyApp;
