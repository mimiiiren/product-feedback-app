# 📘 Product Feedback API Documentation

Base URL: `https://REPLACE-THIS-WITH-YOUR-DEPLOYED-URL.onrender.com`

## Overview

| Resource         | Method | Endpoint                      | Description                              |
|------------------|--------|-------------------------------|------------------------------------------|
| `suggestions`    | GET    | /get-all-suggestions          | retrieves all suggestions from the database              |
| `suggestions`    | GET    | /get-suggestions-by-category  | retrieves suggestions by category              |
| `suggestions`    | POST   | /add-one-suggestion           | adds a new suggestion              |

---

### 🔹 GET `/get-all-suggestions`

**Description:** Retrieves all suggestions from the database

**Example Response:**

```
[
    {
        "id": 1,
        "title": 'Integrate with third-party API', 
        "category": 'feature', 
        "suggestion": 'Would allow syncing data with external services' 
    },
    {
    "id": 2,
    "title": 'Color contrast accessibility issue', 
"category": 'ui', 
"suggestion": 'Some text does not meet accessibility standards'
    },
    {
    "id": 3,
    "title": 'Add multi-language support', 
"category": 'feature', 
"suggestion": 'Support for Spanish and French requested'
    },
]
```

---

### 🔹 GET `/get-suggestions-by-category/:category`

**Description:** Retrieves suggestions by category

**Example Response:**

```
[
    {
         "id": 1,
        "title": 'Integrate with third-party API', 
        "category": 'feature', 
        "suggestion": 'Would allow syncing data with external services' 
    },
    {
    id": 3,
    "title": 'Add multi-language support', 
"category": 'feature', 
"suggestion": 'Support for Spanish and French requested'
    },
]
```

---

### 🔹 POST `/add-one-suggestion`

**Description:** Adds a new suggestion

**Example Request Body:**

```
Success! Suggestion has been added.

```

**Example Response:**

```
Write the data returned by this endpoint. 
Think about its data type (String, Object, Array of Objects, etc.)
Use spaces/indents to format the data if it is an array or object. 
```
---

