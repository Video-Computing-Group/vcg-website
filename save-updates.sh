#!/bin/bash

# This script is used to save the updates for the website

npm run generate;
echo "Staging changes";
git add .;
echo "Commiting the changes with the current date and time";
message=$(date);
git commit -m "$message";
echo "Pushing the changes to GitHub";
git push;
echo "Your changes are saved and the new files are generated in /dist. To deploy live, move the contents of that folder into the vcg server";
