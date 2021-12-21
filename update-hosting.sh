#!/bin/bash
git add .
git commit -m "Latest update"
git push
ssh codenify << EOF
  cd alchemy-layouts;
  git pull;
EOF