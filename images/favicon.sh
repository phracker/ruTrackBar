#!/usr/bin/env bash

icon=$(echo "$1" | sed s/.*\\\///g);
site=$(echo "$1" | awk -F/ '{print $3}' | sed s/^...\\\.// | sed s/^..\\\.// | sed s/\\\....$// | sed s/\\\...$//);
iconext=$(echo "$icon" | sed s/.*\\\./\\\./g);
newicon=$(echo "$site$iconext");

echo "Icon $icon"

echo "Site $site"
echo "Icon Ext $iconext"
echo "New Icon $newicon"

wget --no-check-certificate "$1" > /dev/null 2&>1
mv "$icon" "$newicon" 
rm 1
#wget "$1" && mv "$icon" 