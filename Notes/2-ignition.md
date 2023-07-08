1. What is `Bundlers`?

   Bundler is a utility library for React that helps you create efficient and reusable components.

   Ex: Webpack, Parcel, Vite, Rollup

   Webpack: webpack is a static module bundler for JavaScript applications. When webpack processes your application, it internally
   builds a dependency graph that maps every module your project needs and generates one or more bundles.

   That means webpack can grab all of your code, manage the dependencies, remove dead code that's not required, and
   spit out an optimized JavaScript file.

   Webpack allows you to import modules during runtime dynamically.
   It can preprocessed or transpile your SASS to CSS, JSX to JS, and lots of other optimizations using webpack plugins.

   => _removing unused code or dead code is know as tree shaking._

create-react-app used webpack bundler internally.

2. Difference between `^version` & `~version`.

`^version` => --- *caret* --- ==> _Compatible with version_ -> if want to auto upgrade dependency in minor version use ^

`~version` => --- *tilde* --- ==> _Approximately equivalent to version_ -> if want to auto upgrade dependency in major version use ~

`^2.3.1` => Auto upgrade minor version

`~2.3.1` => Auto upgrade major version

`2.3.1` => Do not auto upgrade, stick with same version, I don't want any updates'

Ex: `^2.3.1` => this version means -> _2 pointing to Major change_, _3 pointing to Minor change_, _1 pointing to Patch change_

- Major => breaking change

- Minor => 1. backwards compatible new functionality, 2. old functionality deprecated, but operational, 3. large internal refactor

- Path => bug fixes

3. Why we use `package-lock.json` ?

It locks the version which is used inside project.

It tells that what is exact version of dependency you used in our project in production mode.

4. What is `node-modules` ?

Node modules is a database of npm.
It keep a track of all dependencies.

5.  What is `NPM`?

    we have to manage a lot of packages a react app is huge app which does not run in a react there are lot of super power which it
    needs those super powers are come from different packages are done by npm.

6.  What is `Parcel/Webpack`? Why do we need it?

    parcel or webpack is one of the Bundlers that we use in our project to make our app more faster through caching while
    development,optimized, minified,compatible with different browser ,cleaning our code and much more.

7.  What is `.parcel-cache`?

    The .cache folder stores the information of your project when parcel builds it. So when you rebuild the project, it doesn't have
    to re-parse and re-analyze everything.
    Parcel-cache is location where parcel store all the previous build related information. This help parcel to retrieve.
    previous build information and which in turn reduce the build duration.

8.  What is `npx` ?

    **npx** - It is Node package executer tool.
    It enables npm to execute command-line Node.js tools without having them to be installed globally. Command-line tools like mocha,
    gulp, react-native etc., are commonly installed globally using the -g flag with npm.

9.  What is difference between `dependencies` vs `devDependencies` ?

    dependencies - it contains an the library, which our project requires for production or runtime.

    devDependencies- it is a package in the package.json file that we need only for project development purpose.

10. What is `Tree Shaking`?

    Tree shaking is a form of `Dead code elimination`. The term "tree shaking" comes from the mental model of your application and its
    dependencies as a tree-like structure.

    In production builds, Parcel statically analyzes the imports and exports of each module, and removes everything that isn't used
    this is called "tree shaking" or "dead code elimination". Tree shaking is supported for both static and dynamic import(),
    CommonJS and ES modules, and even across languages with CSS modules.

11. What is `Hot Module Replacement`?

    Hot Module Replacement (HMR) is a feature to update the application modules without reloading and repainting everything.
    By using the HMR technique the application development becomes faster as fewer resources are loaded after saving the changes in
    the project.

    As we make changes in our code, Parcel automatically rebuilds the changed files and updates your app in the browser. By default,
    Parcel fully reloads the page, but in some cases it may perform Hot Module Replacement (HMR).

12. List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words.

    a. Cache optimization - If we use `npx parcel build index.html` only the first we use to build it takes some time to load. for
    instance, it may take 515ms or takes some time based on your laptop config or internet, post that build it takes just 3ms , 7ms
    etc.

    b. File Watcher Algorithm - Parcel utilizes a very fast watcher written in C++ and its keep track of all files which are changing
    real time & it tells the server to reload very fastest in c++ .

    c. Minification -Parcel includes minifying the JavaScript, CSS, HTML, and SVG out of the box. Minification reduces the file size
    of your output bundles by removing whitespace, renaming variables to shorter names, and many other optimizations.

    d. Compression - Parcel supports compressing bundles using `Gzip` and `Brotli`. While many servers compress data on the fly,
    others
    require you to upload pre-compressed payloads ahead of time. This may also allow for better compression, which would be too slow
    to do on every network request.

    `Brotli`: Brotli is also a compression algorithm. It is developed by Google and serves best for text compression.

    The reason being, it uses a dictionary of common keywords and phrases on both client and server side and thus gives a better
    compression ratio.
    Brotli is primarily used by web servers and content delivery networks to compress HTTP content, making internet websites load
    faster

    e. Code Cleanup - Unnecessary console.log messages are removed through this process.

    f. Port Number - Check if the port number already used by any other apps & assign new port number.

    g. Hot module replacement: Parcel automatically updates the modules in the browser, no reloads required.

    h. Zero config code splitting: Using dynamic import() syntax, Parcel splits your output bundles, so that you load only that what
    is required on initial load.

13. What is `.gitignore`? What should we add and not add into it?

    gitignore is a file which keeps track of the files & folders that are not meant to be pushed to the code repository.
    example : .parcel-cache,node_modules,dist etc.

    Always put`parcel-cache`,`node_modules`,`dist`,`env`,`build`,`coverage`,etc files
    inside the `.gitignore` file.

Never put `package-lock.json` file inside `.gitignore` file.

14. What is the difference between `package.json` and `package-lock.json`?

    `package.json` - it is created during npm initialization because, it manage lot of packages.
    The package.json file has the metadata of the project, The project's basic information, such as package name, version,
    description, author, dependencies,

    `package-lock.json` - The package-lock.json file stores the exact version of dependencies. To know what the exact version we use
    on our production. It also tell current version of library which we are using.And it also maintain its integrity .

15. Why should I not modify `package-lock.json`?

    package-lock.json actually is large information center which keeps track of package and version and dependency information which
    is used to run app if that get modified then it will create conflict at server and gets error.

16. What is `node_modules` ? Is it a good idea to push that on `git`?

    Node module is a kind of database for npm.
    It is a folder that contains or keep track of all the packages and dependencies used the the development of the applications. \n
    It is big file that we should not push to `github`.

17. What is the `dist` folder?

    dist folder is created when parcel creates the build for the application . It contains the HTML and CSS and JS with other files
    for the build.This will created when we run `npx parcel build entry-file(index.html)`.

18. What is `browserlists` ?

    Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a
    config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.

        some query which is commonly :
           - “last 2 versions ”
           - "> 0.5%, last 2 versions, not dead"

19. What is `Transitive Dependencies` ?

    Transitive Dependencies: We've package manager which handles and take care of Transitive Dependencies.
     _For example, if A depends on B and B depends on C, then A must also depend on C._

20. super power of `parcel`

_**Parcel** do_:

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

### https://browserslist.dev

