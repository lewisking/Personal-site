# My personal site
> This is the code for my personal site, using a customised gulp workflow and my a very early version of a custom boilerplate I'm building.

## Installation
1. Run "npm install" to bring down all dependencies.
2. Run "brew install imagemagick" & "brew install graphicsmagick" to install image compressors. (I might fix this but right now the reason for this is to make sure images are no larger than 1400px wide).
3. Run "gulp" to kick off development on your local machine and run a local server with BrowserSync.
5. Run "gulp --production" to remove redundant partial files, minify all code and push 'dist' to gh-pages branch.

If you would like to start from scratch, run "gulp restart" and the dist folder will be wiped.
