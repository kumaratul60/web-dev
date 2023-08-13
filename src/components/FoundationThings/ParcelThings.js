import React from "react";
import ReactDOM from "react-dom/client";

/*
Parcel do:

* Parcel using babel behind the scenes
* Created a server (parcel-cache)
* HMR => Hot Module Replacement
* File Watcher algorithm - C++  ==> Parcel watches every file in your project root (including node_modules)
* Bundling
* MINIFY the files (Minification)
* Compressing
* Cleaning our Code
* Dev and Production Build
* Super Fast build algorithm
* Image optimization
* Caching while development (Reliable caching)
* Compatible with older versions of browser
* HTTPS on dev env -> npx parcel index.html --https
* parcel manage port number also
* Consistent Hashing Algorithm todo all bundling
* Code splitting
* Differential Bundling -> it give the support to older browsers
* Parcel is a Zero config bundler
* Tree-shaking => Removing un-wanted code
* Diagnostic -> show error in beautiful way
* Good Error Handling

* Transitive Dependencies:  We've package manager which handles and take care of Transitive Dependencies

POWER -> PM -> Home Minister -> CMs -> cabinet minister -> minister -> Parliament  ==> PUBLIC
Apps -> React -> Parcel/Webpack (Bundler) -> node manager (node_modules) -> dependencies -> devDependencies ==> Transitive- Dependencies

-> ** above all thing done in .parcel-cache

do not put package-lock.json files in gitignore
Always put parcel-cache & node_module in gitignore

How to know which file I put in gitignore?

Anything which is auto generated on server in your project put in gitignore except package-lock.json


to run parcel -> npx parcel entry-file(index.js/App.js in my case entry file is index.html)
to build => npx parcel build index.html (for this command we don't need "main": "App.js" in package.json file also no need dist folder, this command will automatically create minify build for out apps)

https://browserslist.dev
*/

const heading = React.createElement("h1", {}, "hay ignitions 🚀");
// const root = ReactDOM.createRoot(document.getElementById("root"));
const root = ReactDOM.createRoot(document.querySelector("#root")); // this will also work
console.log({ heading, root });
root.render(heading);
