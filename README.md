# My personal site
> This is the code for my personal site, using a customised gulp workflow and my a very early version of a custom boilerplate I'm building.

## Installation
1. Run "npm install" to bring down all dependencies.
2. Run "brew install imagemagick" & "brew install graphicsmagick" to install image compressors. (I might fix this but right now the reason for this step is to make sure images are no larger than 1400px wide, I'm lazy and dislike photoshop).
3. Run "gulp" to kick off development on your local machine and run a local server with BrowserSync.
4. Run "gulp --production" to remove redundant partial files, minify all code and push 'dist' to gh-pages branch.

If you would like to start from scratch, run "gulp restart" and the dist folder will be wiped.

> You can see the end result on the branch "gh-pages" and see this site running at http://lewisking.co
