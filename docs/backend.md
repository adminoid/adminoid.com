# Backend transference

## unit tests
-   tests/Feature folder
-   tests/images folder

##   /database

All files in migrations folder

`brew services start mysql`  
`mysql -u root`  
`create database homestead`  

> `brew services stop mysql`

in .env file:
```
DB_USERNAME=root  
DB_PASSWORD=
```

`composer require kalnoy/nestedset`  
`php artisan migrate`

If error connect to mysql through phpStorm:
`brew services stop mysql`  
`mysql_upgrade -u root -p --force`  
`brew services start mysql`  

# Preparing for run unit tests
in file: `config/filesystems.php`  
add lines: 
```
'base' => [
  'driver' => 'local',
  'root' => base_path(),
],
```

Make Factories:
All in one file: `database/factories/ModelFactory.php`

folder `app/Observers`

file `app/Providers/AppServiceProvider.php`
add all to empty functions boot and register

run `phpunit`

## Models
model files in /app folder:  
-   Feedback.php
-   Image.php
-   News.php
-   Page.php
-   PortfolioWork.php
-   Review.php
-   Tag.php
-   User.php

## seeders

All files and images folder in `database/seeds`  

If not work, run:  
`composer dump-autoload`  


