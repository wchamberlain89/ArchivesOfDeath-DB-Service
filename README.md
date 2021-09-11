# ArchivesOfDeath-DB-Service
Backend service for Archives of Death APP. Created using Node / Express / PostgreSql / Sequelize

## Install 
```bash
npm install
```

## Setup
Setup a Local PostgreSQL database for detailed instructions checkout this project's [wiki](https://www.postgresql.org/download/). </br>
</br>
Update src/db/config.json with your username, password, database_name, and host from your local database. </br>
</br>

### Migrating Database Tables
Navigate to database directory </br>
```bash
cd src/db
```
Run migrations using [sequelize-cli](https://sequelize.org/master/manual/migrations.html).
```bash
npx sequelize-cli db:migrate
```
### Seeding Data
Inside the database directory use [sequelize-cli to run seed files](https://sequelize.org/master/manual/migrations.html#running-seeds)
```bash
npx sequelize db:seed:all
```

### Start Local Server
```bash
npm run test
```
