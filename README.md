
npm install --save-dev @babel/core @babel/cli
npm install @babel/preset-env --save-dev
npm install --save @babel/polyfill
## для подключения polyfill без средств webpack необходимо подключить его напрямую вытащив из node_modules и вставив в папку libs и подключив в HTML

npx babel js -d target --watch
# cinema
сайт кинотеатра landing

