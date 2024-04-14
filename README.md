### Used technologies

- Node.js
- Express.js
- PostgreSQL
- Sequelize
- Handlebars.js

---

### Instructions

- Execute `npm install` to install all dependecies
- Create `.env` file by copying content of `.env.example` and replacing values with your personal data
- Run app by executing command `npm start` from your terminal

---

### Database

- **PostgreSQL** is used as a database for this project
- **Sequelize** is used as an ORM for this project
- **Code first** approach is used for this project. If table **todo** does not exist, it will be automatically created
- Database contains following fields:
  - **id** - Primary key and auto-generated field. It is populated by UUID value
  - **text** - Text of todo
  - **done** - Boolean field which represents whether todo is completed or not. It has falsy value by default
  - **createdAt** - Date time stamp of data creation
  - **updatedAt** - Date time stamp of the last data update

---

### Routes

- `/` - default route that renders simple HTML page for listing all data from database

You need to have installed Postman or similar tool for testing following API routes:

- `GET /api/todos` - HTTP GET request which return all available todos from database
- `GET /api/todos?sort=ASC` - HTTP GET request which return all available todos from database sorted in ascending order. _sort_ can be _ASC_ or _DESC_. If _sort_ does not have these two values or _sort_ is not added into query, values will be sorted in descending order by default
- `POST /api/todos` - HTTP POST request which adds new todo in database. This is an example of HTTP request body:

```
{
    "text": "Lorem ipsum"
}
```

- `GET /api/todos/:id` - HTTP GET request which returns a todo that matches `:id`. If it does not match any of ids in database, request will return message that todo with that id does not exist
- `PATCH /api/todos/:id` - HTTP PATCH request which updates a todo that matches `:id`. If it does not match any of ids in database, request will return message that todo with that id does not exist. You can update only _text_ or _done_ or both fields while _updatedAt_ will be automatically updated. **All other fields are not allowed to be updated!**. If _done_ filed is being updated to thruthy value if it is different from previous version, SMS will be sent to number specified in `.env` file. This is an example of HTTP request body:

```
{
    "text": "Dolor sit",
    "done": true
}
```

- `DELETE /api/todos/:id` - HTTP DELETE request which deletes a todo that matches `:id`. If it does not match any of ids in database, request will return message that todo with that id does not exist
