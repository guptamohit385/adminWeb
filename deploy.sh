#!bin/bash

git pull

bash -c "sudo docker ps"

sudo docker rm -vf $(sudo docker ps -aqf "name=react_frontend")

echo "-----------------------Step 1 - Container Deleted ------------------------------"

sudo docker rmi -f $(sudo docker images -q ohsc-node-web-app)

echo "-----------------------Step 2 - Image Deleted ------------------------------"

bash -c "sudo docker build -t ohsc-node-web-app:lastest ."

echo "-----------------------Step 3 - Image Build ------------------------------"

sudo docker run -p 8080:3000 -d --name "react_frontend" ohsc-node-web-app:lastest

echo "-----------------------Step 4 - Deployed ohsc-node-web-app:lastest ------------------------------"

bash -c "sudo docker images"

echo "-----------------------all PS ------------------------------"

bash -c "sudo docker ps"
