#!/bin/bash

# This script is used to save the updates for the website

#npm run generate;
git add .;
message=$(date);
git commit -m "$message";
git push;
