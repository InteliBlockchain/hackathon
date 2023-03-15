import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<script
				dangerouslySetInnerHTML={{
					__html: `
						document.addEventListener('contextmenu', event => event.preventDefault());
						document.onkeydown = function (e) {
							// disable F12 key
							if (e.keyCode == 123) {
								return false;
							}

							// disable I key
							if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
								return false;
							}

							// disable J key
							if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
								return false;
							}

							// disable U key
							if (e.ctrlKey && e.keyCode == 85) {
								return false;
							}

							// disable S key + macOS
							if (e.keyCode == 83 && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)) {
								return false;
							}

							// disable I key + macOS
							if (e.keyCode == 73 && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)) {
								return false;
							}
						};
					`,
				}}
			/>
			<Head>
				<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
