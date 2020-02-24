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

# You can also run the bash using 'docker exec -it' from the container if you like, you can execute commands inside the container.

# First, find the container name you want to run
# For Docker the name should be 'powwow-reddit-clone_app'
# For React the name should be 'powwow-reddit-clone_react'

docker exec -it 'Type the container id here remove the apostrophe' bash

# For example
docker exec -it 685433910 bash

# You can also type only the first 3 characters of the container id
docker exec -it 685 bash

```
If somehow you cannot edit the Django files apply this command on the folder.
```bash
sudo chown -R 'Your computer name goes here remove apostrophe':staff ./backend/api
```

## How to access
If you want to access the Postgres database.
```bash
postgres://postgres@localhost:5432/db
```
To access the applications:
> To access Django: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

>To access React: [http://127.0.0.1:3000/](http://127.0.0.1:3000/)

## Questions and Answers
Here are some questions that you might ask. Work in Progress
> Q: Why are you executing command in docker-compose?

> A: Because you don't need to install the requirements on your computer. Everything is inside the container. That is why we execute commands inside the container.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
