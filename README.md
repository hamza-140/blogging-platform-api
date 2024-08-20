<div align="center">
    
  # Blogging Platform API
  
  <img src="https://www.pngitem.com/pimgs/m/297-2978988_blogging-and-content-the-transparent-blog-png-png.png" height="100" alt="avatar" />
  
  [Overview](#🎯-overview) •
  [Features](#✨-features) •
  [Getting Started](#🚀-getting-started) •
  [Usage](#📘-usage) •
  [API](#📚-api)
  
</div>
  
---

## 🎯 Overview

This project is a RESTful API for a personal blogging platform. It allows users to create, read, update, and delete blog posts. The API also supports filtering blog posts by a search term. The main objective is to provide a simple, yet powerful backend for a blogging platform that developers can integrate with any frontend.

## ✨ Features

- **Create Blog Posts**: Add new blog posts with title, content, category, and tags.
- **Update Blog Posts**: Modify existing blog posts with new information.
- **Delete Blog Posts**: Remove blog posts from the platform.
- **View Blog Posts**: Retrieve single or multiple blog posts.
- **Search Blog Posts**: Filter posts by a search term in the title, content, or category.
- **JSON API**: Easily integrates with any frontend.

## 🚀 Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hamza-140/blogging-platform-api.git
   cd blogging-platform-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file in the root directory with the following content:
   ```bash
   PORT=3000
   ```
4. Start the development server:
   ```bash
   node index.js
   ```

## 📘 Usage

Here are some examples of how to use the API:

### Create Blog

```javascript
const axios = require("axios");

const newPost = {
  title: "My First Blog Post",
  content: "This is the content of my first blog post.",
  category: "Technology",
  tags: ["Tech", "Programming"],
};

axios
  .post("http://localhost:3000/posts", newPost)
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

### Updating a Blog Post

```javascript
const updatedPost = {
  title: "My Updated Blog Post",
  content: "This is the updated content of my first blog post.",
  category: "Technology",
  tags: ["Tech", "Programming"],
};

axios
  .put("http://localhost:3000/posts/1", updatedPost)
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

### Deleting a Blog Post

```javascript
axios
  .delete("http://localhost:3000/posts/1")
  .then((response) => console.log("Blog deleted successfully"))
  .catch((error) => console.error(error));
```

### Fetching All Blog Posts

```javascript
axios
  .get("http://localhost:3000/posts")
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

### Searching Blog Posts

```javascript
axios
  .get("http://localhost:3000/posts?term=tech")
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

## 📚 API

### `POST /posts`

**Create a new blog post.**

- **URL**: `/posts`
- **Method**: `POST`
- **Body Parameters**:
  - `title` (String): Title of the post.
  - `content` (String): Content of the post.
  - `category` (String): Category of the post.
  - `tags` (Array of Strings): Tags for the post.

**Responses**:

- **201 Created**: The created blog post object.
  ```json
  {
    "id": 1,
    "title": "My First Blog Post",
    "content": "This is the content of my first blog post.",
    "category": "Technology",
    "tags": ["Tech", "Programming"],
    "createdAt": "2021-09-01T12:00:00Z",
    "updatedAt": "2021-09-01T12:00:00Z"
  }
  ```
- **400 Bad Request**: Validation error messages.

---

### `PUT /posts/:id`

**Update an existing blog post.**

- **URL**: `/posts/:id`
- **Method**: `PUT`
- **URL Parameters**:
  - `id` (String): ID of the post to update.
- **Body Parameters**:
  - `title` (String): Updated title.
  - `content` (String): Updated content.
  - `category` (String): Updated category.
  - `tags` (Array of Strings): Updated tags.

**Responses**:

- **200 OK**: The updated blog post object.
  ```json
  {
    "id": 1,
    "title": "My Updated Blog Post",
    "content": "This is the updated content of my first blog post.",
    "category": "Technology",
    "tags": ["Tech", "Programming"],
    "createdAt": "2021-09-01T12:00:00Z",
    "updatedAt": "2021-09-01T12:30:00Z"
  }
  ```
- **400 Bad Request**: Validation error messages.
- **404 Not Found**: Blog post not found.

---

### `DELETE /posts/:id`

**Delete an existing blog post.**

- **URL**: `/posts/:id`
- **Method**: `DELETE`
- **URL Parameters**:
  - `id` (String): ID of the post to delete.

**Responses**:

- **204 No Content**: Blog deleted successfully.
- **404 Not Found**: Blog post not found.

---

### `GET /posts/:id`

**Retrieve a specific blog post.**

- **URL**: `/posts/:id`
- **Method**: `GET`
- **URL Parameters**:
  - `id` (String): ID of the post to retrieve.

**Responses**:

- **200 OK**: The blog post object.
  ```json
  {
    "id": 1,
    "title": "My First Blog Post",
    "content": "This is the content of my first blog post.",
    "category": "Technology",
    "tags": ["Tech", "Programming"],
    "createdAt": "2021-09-01T12:00:00Z",
    "updatedAt": "2021-09-01T12:00:00Z"
  }
  ```
- **404 Not Found**: Blog post not found.

---

### `GET /posts`

**Retrieve all blog posts or filter by a search term.**

- **URL**: `/posts`
- **Method**: `GET`
- **Query Parameters**:
  - `term` (String, optional): Search term for filtering.

**Responses**:

- **200 OK**: An array of blog posts.
  ```json
  [
    {
      "id": 1,
      "title": "My First Blog Post",
      "content": "This is the content of my first blog post.",
      "category": "Technology",
      "tags": ["Tech", "Programming"],
      "createdAt": "2021-09-01T12:00:00Z",
      "updatedAt": "2021-09-01T12:00:00Z"
    },
    {
      "id": 2,
      "title": "My Second Blog Post",
      "content": "This is the content of my second blog post.",
      "category": "Technology",
      "tags": ["Tech", "Programming"],
      "createdAt": "2021-09-01T12:30:00Z",
      "updatedAt": "2021-09-01T12:30:00Z"
    }
  ]
  ```

## CC

https://roadmap.sh/projects/blogging-platform-api
