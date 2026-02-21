#!/bin/bash

list=$(ls ./assets/icons | sed 's/.svg//g'  | sed "s/^.*/ '&',/g")

echo -e "export const IconsList = [\n $list \n] as const\n\nexport type Icons = typeof IconsList[number]" > ./src/components/icon/types.ts