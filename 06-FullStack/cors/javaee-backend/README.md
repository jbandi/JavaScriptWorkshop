courserater is a submodule in this repo!

Check it out with the initial checkout with:  
`git clone --recursive https://github.com/jbandi/JavaScriptWorkshop.git`

If the initial checkout was not done with `--recursive` then you can get the submodule later with:  
`git submodule init`  
`git submodule update`	

Updating to the latest version of the submodule is done via (always push the submodule first if you have changes!):  
`git submodule update --remote --merge`  
`git submodule add <submodule>`