#!/bin/bash

cp -r /app /root

echo "alias l='ls -lart'" > ~/.bashrc

cd /root/app

echo "Start Application"
yarn start:prod
