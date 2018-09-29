# postgres
---

## Notes:
* This uses postgres 9.5.2, because we know AWS supports 9.5.2.


## Setup
`docker-compose up -d`

* [postgres docker librrary](https://hub.docker.com/_/postgres/)
* [node-postgres example stuff](https://node-postgres.com/)

## Install schemas:
* Note schemas are meant to run in chronological order:
```
cd ./schemas

psql -h 127.0.0.1 -d myledger -U myledger -a -f create-2018-09-28-20\:37.sql

```
