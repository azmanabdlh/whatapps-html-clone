dep:
	- cd packages/browser && yarn install
	- cd packages/server && yarn install
	
compile:
	cd packages && yarn compile

serve-compile:
	cd packages && yarn serve:compile

serve-websocket:
	cd packages && yarn serve:websocket

