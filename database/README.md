# postgres

## Notes:
* This uses postgres 9.5.2, because we know AWS supports 9.5.2.

## Environment setup:
* [Docker for Mac](https://docs.docker.com/docker-for-mac/install/)
* [Install Homebrew so you can use psql](https://brew.sh/)
  * Then:
```
brew install postgresql
# make sure you have psql cli by checking if it works:
psql -h
```

## DB Setup
* In this database directory
```
docker-compose up -d
```

* Your container should be running now:
```
docker ps
```

* [postgres docker library](https://hub.docker.com/_/postgres/)
* [node-postgres example stuff](https://node-postgres.com/)

## Install schemas:
* Note schemas are meant to run in chronological order:
```
cd ./schemas

psql -h 127.0.0.1 -d myledger -U myledger -a -f create-2018-09-28.sql

```

* You can interact with your database by running:
```
psql -h 127.0.0.1 -U myledger -W
```
