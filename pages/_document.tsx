import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {


	static getInitialProps({ renderPage }: any) {
		// Step 1: Create an instance of ServerStyleSheet
		const sheet = new ServerStyleSheet();
	
		// Step 2: Retrieve styles from components in the page
		const page = renderPage((App: any) => (props: any) =>
		  sheet.collectStyles(<App {...props} />),
		);
	
		// Step 3: Extract the styles as <style> tags
		const styleTags = sheet.getStyleElement();
	
		// Step 4: Pass styleTags as a prop
		return { ...page, styleTags };
	  }

	render() {
		return (
			<Html>
				<Head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" /> 
				<link href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />  
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet" />  
				<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;700&display=swap" rel="stylesheet" />  
				{
				// @ts-ignore
				this.props['styleTags']
				}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
