# Powwow: A basic reddit clone
A basic reddit clone utilizing Postgres, Django restframework, Docker and React.

## Installation

Make sure that you have already installed [Docker](https://docs.docker.com/install/) and [Docker Compose](https://docs.docker.com/compose/install/) before proceeding.


If you have already completed the instructions above simply follow the steps below. Docker compose will automatically create/build an image containing everything necessary to start the app.

```bash
# Execute the following commands before proceeding to the next step.

# Backend Instructions
docker-compose run app sh -c "python manage.py migrate"
docker-compose run app sh -c "python manage.py createsuperuser"

# Frontend Instructions
docker-compose run react sh -c "npm install"

# It will start the Postgres, Django and React container.
# Everything here is dockerized, so to start simply.
docker-compose up # Basically starts everything.

```

## Usage
If you want to execute some commands.

```bash

# If you want to do some django commands simply replace the [Insert Commands]
docker-compose run app sh -c "[Insert Commands]" 

# Examples:
# To create a new app.
docker-compose run app sh -c "python manage.py startapp newapps"

# or make some migrations.
docker-compose run app sh -c "python manage.py makemigrations"
docker-compose run app sh -c "python manage.py migrate"

# It is also the same for React, simply replace 'app' with 'react'.
docker-compose run react sh -c "npm install"

```
If somehow you cannot edit the Django files apply this command on the folder.
```bash
sudo chown -R webdev:staff ./api
```

If you want to access the Postgres database.
```bash
postgres://postgres@localhost:5432/db
```
To access the applications:
```bash
http://127.0.0.1:8000/ # Django
http://127.0.0.1:3000/ # React
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
