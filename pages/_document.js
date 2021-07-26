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
					<meta name="msapplication-TileColor" content="#000" />
					<meta name="theme-color" content="#000" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link rel="canonical" href="https://bookmarks.squale.agency" />
					<meta property="twitter:card" content="summary" />
					<meta property="twitter:url" content="https://bookmarks.squale.agency/" />
					<meta
						property="twitter:title"
						content="Bookmarks - squale.agency - Liste d'outils et ressources de qualités en développement, design, etc..."
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
						content="bookmarks est une base de donnée des outils favoris de squale.agency, chacun des outils sont regroupés par catégories, vous pouvez filtrer les résultats ou chercher un outil avec un mot clé."
					/>
					<meta property="twitter:image" content="https://bookmarks.squale.agency/apple-touch-icon.png" />
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
							  "url": "https://bookmarks.squale.agency",
							  "potentialAction": {
								"@type": "SearchAction",
								"target": "https://bookmarks.squale.agency/?q={search_term_string}",
								"query-input": "required name=search_term_string"
							  }
							}
    `,
						}}
					></script>
					<link rel="search" href="/opensearch.xml" type="application/opensearchdescription+xml" title="Bookmarks search"/>

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