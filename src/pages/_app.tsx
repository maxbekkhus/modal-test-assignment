import type { AppProps } from 'next/app'
import { FC } from 'react'
import StyleProvider from 'src/styles/StyledProvider';

/**
 * Override of page initialization component
 */
const App: FC<AppProps> = ({ Component, pageProps }) => {
  // Wrapping pages in StyleProvider to provide GlobalStyles and theme
  return (
    <StyleProvider>
      <Component {...pageProps} />
    </StyleProvider>
  );
}

export default App;
