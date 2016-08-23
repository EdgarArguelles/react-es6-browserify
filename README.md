# Example that builds a React project with ES6 and Browserify/Babel

# Stack:
- React with ECMAScript 6
- Browserify
- Babel
- Eslint
- Karma / Jasmine
- Sass
- Gulp
- Npm

## Gulp Build tasks:
- compiles JSX with Babel
- lints JSX and JS via ESLint
- test JSX and JS code via Karma / Jasmine
- compile Sass into css code
- bundles JS and CSS files
- uglify JS (only in production ready)
- migrates the built app to the dist folder
- runs a dev webserver
- opens your browser at the dev URL
- reloads the browser upon save

# Install
    npm i

# Build
### To uglify JS (production ready) use --production flag
    gulp build --production
    
# Run
    gulp
