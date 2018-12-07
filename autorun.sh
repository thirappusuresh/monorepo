kill $(lsof -t -i4TCP:3000)
cd packages/shared && npm run watch & 
cd packages/web && npm run start &
cd packages/native && react-native run-android &
wait $(jobs -p)
