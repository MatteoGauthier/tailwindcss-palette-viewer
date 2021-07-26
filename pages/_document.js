import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="fr">
				<Head>
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<link rel="manifest" href="/site.webmanifest" />
					<meta name="msapplication-config" content="/browserconfig.xml" />
					<meta name="msapplication-TileColor" content="#FFFFFF" />
					<meta name="theme-color" content="#FFFFFF" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link rel="canonical" href="https://tailwind-palette.vercel.app/" />
					<meta property="twitter:card" content="summary" />
					<meta property="twitter:url" content="https://tailwind-palette.vercel.app/" />
					<meta
						property="twitter:title"
						content="TailwindCSS Palette viewer, click to copy class name ! Full Tailwind palette (with cyan, rose, emerald)"
					/>
					<meta
						property="twitter:site"
						content="@MatteoGauthier_"
					/>
					<meta
						property="twitter:creator"
						content="@MatteoGauthier_"
					/>
					<meta
						property="twitter:description"
						content="TailwindCSS Palette viewer, click to copy class name ! Full Tailwind palette (with cyan, rose, emerald)"
					/>
					<meta property="twitter:image" content="https://tailwind-palette.vercel.app/og-image.png" />
					<meta
						name="keywords"
						content="tailwind, css, tailwindcss, Mattèo Gauthier, Candice Fradet, squale.agency, dev, nodejs, postcss"
					/>
					<script async src="https://www.googletagmanager.com/gtag/js?id=G-6RSQQD3GZ5"></script>
					<script
						dangerouslySetInnerHTML={{
							__html: ` window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-6RSQQD3GZ5');`,
						}}
					/>
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: `
                        
							{
							  "@context": "https://schema.org/",
							  "@type": "WebSite",
							  "name": "Bookmarks",
							  "url": "https://tailwind-palette.vercel.app/",
				
							}
    `,
						}}
					></script>

				</Head>
				<body className="transition-colors duration-200 bg-white dark:bg-black">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;