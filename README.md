Template for making new [bl.ocks](bl.ocks.org). `d3+_.js` contains a custom of build of d3 with [jetpack](https://github.com/gka/d3-jetpack) and lodash.

Make a new directory and copy this code with [degit](https://github.com/Rich-Harris/degit): 

```
mkdir my-example-name && cd $_
degit 1wheel/d3-init
```

# overall workflow
[Let's Make a Block](https://bost.ocks.org/mike/block/) is a great introduction. I use a couple of additional tools: 

```
# update node if you don't have >= 8
npm install -g n && n latest

# install cli helpers
npm install -g degit hot-server gistclone gistsnap gistup git-go

# pick a project name and make a directory
mkdir my-example-name && cd $_

# grab starter files
degit 1wheel/d3-init

# start a local server
hot-server

# write some code...

# take a screen shot
gistsnap

# publish
gistup -m basename "$PWD"

# update
git-go this is a commit message

# download
gistclone https://bl.ocks.org/1wheel/4b9d34d74bd64a63d34028f160a71d7b
```