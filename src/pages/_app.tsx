import "../styles/globals.scss"
import Mouse from "../components/Mouse";

import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps}/>
            <Mouse n={1}/>
            <Mouse delay={25} n={2}/>
            <Mouse delay={75} n={3}/>
            <Mouse delay={125} n={4}/>
        </>
    );
}
