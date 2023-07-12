# Demo credit API using Node, Express, Mysql, And Knex.js



### Clone this repo to your local machine using
https://github.com/fridayonojah/demo_credit_api.git
 

# Make it your own
rm -rf .git && git init

### Coppy .env-example and create your own .env file
cp .env-example .env

### Edit the .env file and add your MySQL username, MySQL password, and DB name
vi .env


- Create two MySQL databases one for test and the other for development and assign the values of the connection strings to `DB_DATABASE` and `DB_TEST_DATABASE`= respectively.

# Install dependencies
npm install

# Run the server locally
npm start

# Run the server locally in dev mode
npm run dev


### getStates() - create an account

#### Code Example

```js
malaysiaList.getStates();
```

#### Response (English / Malay)

```js
{
  "states": [
    "Johor Darul Ta'zim",
    "Kedah Darul Aman",
    "Kelantan Darul Naim",
    "Malacca",
    "Negeri Sembilan Darul Khusus",
    "Pahang Darul Makmur",
    "Penang",
    "Perak Darul Ridzuan",
    "Perlis Indera Kayangan",
    "Sabah",
    "Sarawak",
    "Selangor Darul Ehsan",
    "Terengganu Darul Iman"
  ]
}
```

#### Response (Chinese)

```js
{
  "states": [
    "柔佛",
    "吉打",
    "吉兰丹",
    "马六甲",
    "森美兰",
    "彭亨",
    "槟城",
    "霹雳",
    "玻璃市",
    "沙巴",
    "砂拉越",
    "雪兰莪",
    "登嘉楼"
  ]
}
```

   
