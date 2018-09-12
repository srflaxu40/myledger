# myledger

## Developer Setup:

This is a MERN stack application that uses mongoose ORM with MongoDB.

* Install MongoDB:
```
npm install mongodb@2.2 --save
```

* Create data, and log directories:
```
mkdir -p data logs
chmod +755 ./data
chmod +755 ./logs
```
* Start mongod process in the background:
```
mongod --fork --logpath ./logs/mongod.log --dbpath=./data/
```

* Install Express and NodeJS modules:
```
cd ./myledger
npm install
```

* Install ReactJS app modules:
```
cd ./myledger-client
npm install
```

## Run Express App:
```
./myledger/run.sh
```

## Run React App:
`./myledger-client/run.sh`

