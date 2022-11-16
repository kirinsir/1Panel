GOCMD=go
GOBUILD=$(GOCMD) build
GOCLEAN=$(GOCMD) clean
GOARCH=amd64
GOOS=linux

BASE_PAH := $(shell pwd)
BUILD_PATH = $(BASE_PAH)/build
WEB_PATH=$(BASE_PAH)/frontend
SERVER_PATH=$(BASE_PAH)/backend
MAIN= $(BASE_PAH)/cmd/server/main.go
APP_NAME=1panel

build_web:
	cd $(WEB_PATH) && npm install && npm run build:dev

build_bin:
	cd $(SERVER_PATH) \
    && CGO_ENABLED=1 GOOS=$(GOOS) GOARCH=$(GOARCH) CC=x86_64-linux-musl-gcc CXX=x86_64-linux-musl-g++ $(GOBUILD) -trimpath -ldflags '-s -w --extldflags "-static -fpic"'  -o $(BUILD_PATH)/$(APP_NAME) $(MAIN)

build_all: build_web  build_bin