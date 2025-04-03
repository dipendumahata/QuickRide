# API Documentation

## `/users/register ` Endpoint

### Description
This endpoint is used to register a new user.

### Method
POST

### Request Body
The request body should be a JSON object containing the following fields:
- `email` (string, required): The email of the user. Must be a valid email address.
- `fullname` (object, required): An object containing the user's full name.
  - `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the user. Must be at least 3 characters long.
- `password` (string, required): The password of the user. Must be at least 6 characters long.

### Responses

#### Success
- **Status Code**: 201 Created
- **Response Body**: A JSON object containing the generated JWT token and the user object.
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "soketId": null
    }
  }
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**: A JSON object containing an array of validation errors.
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First name must be atleast 3 character long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be atleast 6 character long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### Missing Fields
- **Status Code**: 400 Bad Request
- **Response Body**: A JSON object containing an error message.
  ```json
  {
    "message": "All fields are required"
  }
  ```
