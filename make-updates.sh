#!/bin/bash

# This script is used to update the git repository
# After updating it will start the development server

git pull;
echo "You can access the local server at localhost:3000";
echo "Press ctrl +  c when you are done making changes";
echo "run bash save-updates.sh when you are happy with your changes";
npm run dev;
