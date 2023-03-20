import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class myDocument extends Document {

	 // Configuração do Styled Components para funcionar com o Nextjs
	 static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        sheet.collectStyles(<App {...props} />)
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            sheet.seal()
        }
    }

	render() {
		return (
			<Html lang="en">
				<Head />
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
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
	
}
