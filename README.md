SlavsServer
===========

Socket and database server for RPG game slavsgame.com.

## Full stack init

If you want run complete game (client prod version, AI server, socket server and frontend) just use docker compose. 

But before we need to install dependencies for PHP project using composer:

``composer install``

Example parameters.php configuration:

```
parameters:
    database_host: slavsServer_db
    database_port: null
    database_name: slavs
    database_user: slavs
    database_password: slavs
    mailer_transport: smtp
    mailer_host: 127.0.0.1
    mailer_user: null
    mailer_password: null
    secret: ThisTokenIsNotSoSecretChangeIt
    mailer_email_from: abc@slavsgame.com
```

and then:

``cd docker``

``docker-compose up -d``

``docker exec -it slavsServer_php_socket ash``

``php bin/console doctrine:schema:update --force``

Exit from container and:

``docker-compose restart``

Now you can run game on localhost in Your browser.

## Server development

If you want to develop backend run mysql and redis and then you can run server locally using command:

``php bin/console app:server-start``

Next steps:

1. Run AI server from SlavsGame repository
2. Run game client to connect to server using webpack.
More info in repository: https://github.com/furcatomasz/SlavsGame


## Problems

If you have problems with files permissions just set chmods 777 for every folder and file in var path using command:

``chmod 777 var -R``
