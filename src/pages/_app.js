import { SessionProvider } from "next-auth/react"
import '../app/globals.css'; // Ensure the path to your global styles is correct
import RootLayout from '../app/layout'; // Adjust the import path to where your RootLayout is


export default function App({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </SessionProvider>
  );
}

