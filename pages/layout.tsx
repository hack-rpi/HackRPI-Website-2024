import './globals.css' // import your global css here

type Lang = 'en' | 'fr' | 'nl' // all the possible languages, better to define it in a separate file and import it here
const defaultLang: Lang = 'en' // the default language, better to define it in a separate file and import it here

export default function RootLayout({
	params: {lang = defaultLang},
	children
}: {
	params: {lang?: Lang} // all the possible languages
	children: React.ReactNode
}) {
	return (
		<html lang={lang}>
			<body>
				{children}
			</body>
		</html>
	)
}