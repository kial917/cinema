
#Учебный проект Калмыкова Ильи "Cinema"
[Макет проекта](https://www.figma.com/file/IAuzewD0Wz9Pn3SN0ePixE/%D0%9B%D0%B5%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3-stc-%D0%BA%D0%B8%D0%BD%D0%BE%D1%82%D0%B5%D0%B0%D1%82%D1%80?node-id=0%3A1)
## Инструкция по установке
Запустить команды
```shell
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```
```shell
npm install --save @babel/polyfill
```
##### для подключения polyfill без средств webpack необходимо подключить его напрямую  из node_modules  и подключив в HTML одним из первых Js файлов

## Запуск
Запустить команды
```shell
npx babel js -d target --watch --source-maps
```

