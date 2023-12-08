import React from "react"
import App from "./App";

const Layout = (props)=>{
    return (
        <html lang="en">
        <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
        <title>demo1</title>
        </head>
        <body>
            <div id="app">
                <App {...props}/>
            </div>
            <script src="bundle.js"></script>
        </body>
        </html>
    )
}
export default Layout;