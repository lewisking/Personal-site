# My Personal Portfolio
> This is my personal portfolio. Not much else to say on that!

## Installation
1. Run "npm install"
2. Run "brew install imagemagick" & "brew install graphicsmagick"
3. Run "gulp" to kick off BrowserSync, creation of a dist folder and more.
4. Run "gulp --production" before deploying to make sure all images are compressed, JS & CSS are minified, Autoprefixer and UnCSS are run.
5. Run "gulp remove_partials" before deploying to remove redundant partials files that get compiled. @TODO fix this properly, make it part of build process
6. Run "gulp deploy" to push the dist folder to gh-pages branch.
