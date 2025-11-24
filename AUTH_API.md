# User Authentication API

This API provides user authentication endpoints for the Sentinel BC-ELITE application.

## Endpoints

### 1. User Registration
**POST** `/api/auth/register`

Register a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "username": "username",
  "password": "password123"
}
```

**Validation Rules:**
- Email: Must be a valid email format
- Username: 3-20 characters, alphanumeric and underscores only
- Password: Minimum 8 characters

**Success Response (201):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "username": "username"
  }
}
```

**Error Responses:**
- `400 Bad Request`: Invalid input or validation failure
- `409 Conflict`: User with email already exists
- `500 Internal Server Error`: Server error

### 2. User Login
**POST** `/api/auth/login`

Authenticate a user and receive a JWT token.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Success Response (200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "username": "username"
  }
}
```

**Error Responses:**
- `400 Bad Request`: Missing email or password
- `401 Unauthorized`: Invalid email or password
- `500 Internal Server Error`: Server error

### 3. Get Current User
**GET** `/api/auth/me`

Get the currently authenticated user's information.

**Request Headers:**
```
Authorization: Bearer <token>
```

**Success Response (200):**
```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "username": "username"
  }
}
```

**Error Responses:**
- `401 Unauthorized`: No token provided or invalid/expired token
- `404 Not Found`: User not found
- `500 Internal Server Error`: Server error

## Environment Variables

Add the following to your `.env` file:

```env
JWT_SECRET=your-strong-jwt-secret-key
```

## Security Features

1. **Password Hashing**: Passwords are hashed using bcryptjs with 10 salt rounds
2. **JWT Tokens**: JSON Web Tokens with 24-hour expiration
3. **Input Validation**: Comprehensive validation for all inputs
4. **Secure Routes**: Authentication endpoints are exempt from API key middleware

## Usage Example

```bash
# Register a new user
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "username": "testuser", "password": "password123"}'

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "password": "password123"}'

# Get current user (using token from login/register)
curl -X GET http://localhost:3000/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## Notes

- The current implementation uses in-memory storage for demonstration purposes
- For production use, replace the in-memory storage with a proper database (PostgreSQL, MongoDB, etc.)
- The JWT secret should be a strong, random string in production
- Tokens expire after 24 hours and users will need to login again
