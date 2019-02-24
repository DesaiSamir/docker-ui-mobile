#!/bin/bash

docker build -t localhost:5555/docker-ui-mobile .

docker push localhost:5555/docker-ui-mobile

echo "Ignore cache with --no-cache"