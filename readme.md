# Demo credit API using Node, Express, Mysql, And Knex.js
This is a credit system wallet api built with node.js. It enables an account holder transfer cash wallet to wallet, withdraw, transfer, and fund wallet.
 

## Application setup

### Coppy .env-example and create your own .env file
```cp .env-example .env```

### Edit the .env file and add your MySQL username, MySQL password, and DB name

- Create two MySQL databases one for test and the other for development and assign the values of the connection strings to `DB_DATABASE` and `DB_TEST_DATABASE`= respectively.

### Install dependencies
npm install

### Run the server locally
npm start

### Run the server locally in dev mode
npm run dev



## Code Example Users
create an account

```js
 POST
{{url}}/auth/register
```

#### Code Example

```js
{
    "email": "sundaypaul@gmail.com",
    "password": "123456",
    "first_name": "Sunday",
    "last_name": "Paul"
}
```

#### Response (English)

```js
{
    "status": true,
    "message": "Account successfully created",
    "data": {
        "id": 4,
        "first_name": "Sunday",
        "last_name": "Paul",
        "email": "sundaypaul@gmail.com",
        "created_at": "2023-03-11T08:50:16.000Z",
        "updated_at": "2023-03-11T08:50:16.000Z",
        "wallet": 1000,
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo0LCJmaXJzdF9uYW1lIjoiU3VuZGF5IiwibGFzdF9uYW1lIjoiUGF1bCIsImVtYWlsIjoic3VuZGF5cGF1bEBnbWFpbC5jb20iLCJjcmVhdGVkX2F0IjoiMjAyMy0wMy0xMVQwODo1MDoxNi4wMDBaIiwidXBkYXRlZF9hdCI6IjIwMjMtMDMtMTFUMDg6NTA6MTYuMDAwWiIsIndhbGxldCI6MTAwMH0sImlhdCI6MTY4OTE1NTIxNSwiZXhwIjoxNjg5MTg0MDE1LCJhdWQiOiJzdW5kYXlwYXVsQGdtYWlsLmNvbSIsImlzcyI6ImNyZWRpdF9hcGkifQ.xYT1PRnoXt8Y0TW5aJ0CBWStjBdqk-LMS9p8_s0x474",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo0LCJmaXJzdF9uYW1lIjoiU3VuZGF5IiwibGFzdF9uYW1lIjoiUGF1bCIsImVtYWlsIjoic3VuZGF5cGF1bEBnbWFpbC5jb20iLCJjcmVhdGVkX2F0IjoiMjAyMy0wMy0xMVQwODo1MDoxNi4wMDBaIiwidXBkYXRlZF9hdCI6IjIwMjMtMDMtMTFUMDg6NTA6MTYuMDAwWiIsIndhbGxldCI6MTAwMH0sImlhdCI6MTY4OTE1NTIxNSwiZXhwIjoxNjg5MTg0MDE1LCJhdWQiOiJzdW5kYXlwYXVsQGdtYWlsLmNvbSIsImlzcyI6ImNyZWRpdF9hcGkifQ.xYT1PRnoXt8Y0TW5aJ0CBWStjBdqk-LMS9p8_s0x474"
    }
}
```

Loggin Account

```js
 POST
{{url}}/auth/login
```

```js
{
    "email": "sundaypaul@gmail.com",
    "password": "123456"
}
```

#### Response (English)

```js
{
    "status": true,
    "message": "Account login successful",
    "data": {
        "id": 4,
        "first_name": "Sunday",
        "last_name": "Paul",
        "email": "sundaypaul@gmail.com",
        "created_at": "2023-03-11T08:50:16.000Z",
        "updated_at": "2023-03-11T08:50:16.000Z",
        "wallet": 1000,
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo0LCJmaXJzdF9uYW1lIjoiU3VuZGF5IiwibGFzdF9uYW1lIjoiUGF1bCIsImVtYWlsIjoic3VuZGF5cGF1bEBnbWFpbC5jb20iLCJjcmVhdGVkX2F0IjoiMjAyMy0wMy0xMVQwODo1MDoxNi4wMDBaIiwidXBkYXRlZF9hdCI6IjIwMjMtMDMtMTFUMDg6NTA6MTYuMDAwWiIsIndhbGxldCI6MTAwMH0sImlhdCI6MTY3ODY2MzA3NSwiZXhwIjoxNjc4NjkxODc1LCJhdWQiOiJzdW5kYXlwYXVsQGdtYWlsLmNvbSIsImlzcyI6ImNyZWRpdF9hcGkifQ.OAVTaLp85Clj7wGj2fiLgUAaupdmH1AhZNbqvKPzzDc",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo0LCJmaXJzdF9uYW1lIjoiU3VuZGF5IiwibGFzdF9uYW1lIjoiUGF1bCIsImVtYWlsIjoic3VuZGF5cGF1bEBnbWFpbC5jb20iLCJjcmVhdGVkX2F0IjoiMjAyMy0wMy0xMVQwODo1MDoxNi4wMDBaIiwidXBkYXRlZF9hdCI6IjIwMjMtMDMtMTFUMDg6NTA6MTYuMDAwWiIsIndhbGxldCI6MTAwMH0sImlhdCI6MTY3ODY2MzA3NSwiZXhwIjoxNjc4NjkxODc1LCJhdWQiOiJzdW5kYXlwYXVsQGdtYWlsLmNvbSIsImlzcyI6ImNyZWRpdF9hcGkifQ.OAVTaLp85Clj7wGj2fiLgUAaupdmH1AhZNbqvKPzzDc"
    }
}
```


   
