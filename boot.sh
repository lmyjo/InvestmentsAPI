#!/bin/bash
docker run -d --name api.gateway.investments          \
 -p 3002:3000                                         \
 --link evaluation.investments:evaluation.investments \
 --link utility.investments:utility.investments       \
 --link rates.investments:rates.investments           \
 --env-file=docker/env                                \
 lmyjo/gateway
