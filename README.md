# lcr-finder-app
lcr-finder app


## Start

### install

> git clone https://github.com/antirek/lcr-finder-app.git

> cd lcr-finder-app

> npm install


### run

> node app.js


### configure lcr-finder

view config.js and use web-interface for adding providers, directions and prices

more https://github.com/antirek/lcr-finder



### configure asterisk

add dialplan like

`````
exten=_X.,1,AGI(agi://localhost:3000)
exten=_X.,n,Dial(SIP/${LCR_RESULT}/${EXTEN})

`````