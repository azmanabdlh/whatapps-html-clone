dep:
	- cd packages/browser && yarn install
	- cd packages/server && yarn install
	
compile:
	cd packages && yarn compile

prod-compile:
	cd packages/browser && yarn prod:compile

serve-compile:
	cd packages && yarn serve:compile

serve-websocket:
	cd packages && yarn serve:websocket

# docker
compose:
	docker-compose up -d

decompose:
	docker-compose down