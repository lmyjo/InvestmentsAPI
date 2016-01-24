all: build-release

build-release:
	docker build -t lmyjo/gateway -f docker/Dockerfile .

clean:
	docker rmi -f lmyjo/gateway
