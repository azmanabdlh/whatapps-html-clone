dep:
	cd packages/web && yarn install
	
compile:
	cd packages && yarn install && yarn compile

watch-compile:
	cd packages && yarn watch:compile

serve:
	cd packages && yarn serve

