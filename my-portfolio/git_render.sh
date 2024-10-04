#!/bin/bash

# author: Yushahu Yussif Azara
# this is a custom bash script that performs git operations to add, commit a message and push to a git repository

# add all changes and untracked files in the current directory
echo "Adding specified files..."
git add .

# prompt user for a commit message
read -p "Enter commit message: " commit_message

# commit changes using the message
echo "Performing commit operation..."
git commit -m "$commit_message"

# push changes to the remote repository
echo "Pushing files to remote repository..."
git push
echo "Done!"
