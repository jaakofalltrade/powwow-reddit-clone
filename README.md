# Powwow: A basic reddit clone
A basic reddit clone utilizing Django restframework, Docker and React.

## Installation

Make sure that you have already installed [Docker](https://docs.docker.com/install/) and [Docker Compose](https://docs.docker.com/compose/install/) before proceeding.


If you have already completed the instructions above simply follow the steps below. Docker compose will automatically create/build an image containing everything necessary to start the app.

```bash
cd backend

docker-compose build app

docker run app sh -c "python manage.py migrate"

# Frontend instructions will come soon WIP

```

## Usage

To start the backend simply go the backend working directory if you are going to execute some commands.

```bash
docker-compose up # Starts the Postgres database and the Django restframework.

# If you want to do some django commands simply replace the [Insert Commands]
docker-compose run app sh -c "[Insert Commands]" 

# Examples
# To create a new app
docker-compose run app sh -c "python manage.py startapp newapps"
# or Make some migrations
docker-compose run app sh -c "python manage.py makemigrations"
docker-compose run app sh -c "python manage.py migrate"

```
If somehow you cannot edit the Django files apply this command on the folder.
```bash
sudo chown -R webdev:staff ./api
```

If you want to access the Postgres database in the docker
```bash
postgres://postgres@localhost:5432/db
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
