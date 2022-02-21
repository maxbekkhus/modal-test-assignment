import React from 'react';
import Document, {
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

/**
 * Override of component used in SSG or/and SSR
 */
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => (
        originalRenderPage({
          enhanceApp: (App) => (
            (props) => (
              sheet.collectStyles(<App {...props} />)
            )
          ),
        })
      );

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {/* Injecting styles into SSG/SSR HTML to sync with hydration */}
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
