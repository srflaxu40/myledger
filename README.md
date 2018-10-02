# myledger

## Developer Setup:

This is an ERN stack application (yes, no 'M' no mongo) that uses npm `pg` and postgres.

* First setup the database:
`cd databases`
  * There is a README in here with instructions on standing up docker with postgres.

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

