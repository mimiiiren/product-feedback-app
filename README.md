# Product Feedback App

## Product Feedback Management System

A full-stack application designed to help startups bridge the gap between user suggestions and product iteration. This project demonstrates a complete end-to-end development cycle, from schema design to cloud deployment, and represents another Full-Stack Capstone of my 12-month intensive training at AnnieCannons, tracking my progression from a static UI to a fully deployed PERN stack (PostgreSQL, Express, React, Node.js) architecture.


## Live Demo

[View the live project demo here](https://product-feedback-mimi.netlify.app) ✨

![image](https://github.com/user-attachments/assets/5fabe48e-fb2b-4337-94cc-515e64a0bf66)

## Technical Stack

- **Frontend** — React, Tailwind CSS
- **Backend** — Node.js and Express
- **Database** — PostgreSQL, Neon
- **Deployment** — Netlify (Frontend), Render (API)
- **Tooling** — Postman


## Key Features & Functionality
- Users can view, create, and filter product suggestions by category (UI, UX, Enhancement, Bug, Feature).
- Implemented efficient data fetching and state synchronization between the React frontend and Express API.
- Client-side validation to ensure data integrity and improve UX before hitting the server.
- Developed a mobile-first interface based on professional Figma designs, ensuring a seamless experience across all device sizes.
- Conditional rendering to guide users when no feedback is present.


## Engineering Highlights

Database Schema Design
I chose PostgreSQL for this project to leverage its relational capabilities, ensuring that feedback entries are structured and scalable. I utilized Neon for serverless Postgres, allowing for efficient connection pooling.

RESTful API Development
The backend is built with Node/Express, featuring dedicated routes for feedback retrieval and creation. I used Postman throughout the development lifecycle to perform testing of all API endpoints and ensure proper status code handling (200, 201, 400, 500).
## 🔹 API Documentation

These are the API endpoints I built: 
- `GET /get-all-suggestions` - Retrieve all suggestions
- `GET /get-suggestions-by-category/:category` - Retrieve suggestions by category
- `POST /add-one-suggestion` - Adds a new suggestion

## Database Schema

Here’s the SQL I used to create my tables:  

```sql
CREATE TABLE suggestions (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  category VARCHAR NOT NULL,
  comments VARCHAR NOT NULL
  );
  
INSERT INTO suggestions (title, category, comments)
VALUES
('Integrate with third-party API', 'Feature', 'Would allow syncing data with external services'),
('Color contrast accessibility issue', 'UI', 'Some text does not meet accessibility standards'),
('Add multi-language support', 'Feature', 'Support for Spanish and French requested');
```

## Reflections

**What I learned:** 
- Refined the ability to break down complex Figma designs into reusable, modular React components.
- Implemented try/catch blocks on the backend to provide descriptive error messages to the frontend.

**Future ideas for how I'd continue building this project:** 
- Full CRUD Lifecycle: Implementing DELETE and UPDATE functionality for feedback owners.
- Color Themes: Adding a native Dark Mode toggle for improved accessibility and user preference.

## Lessons Learned
Full-Stack Synchronization: Gained deep experience in CORS configuration and environment variable management across different hosting providers.
Component Architecture: Refined the ability to break down complex Figma designs into reusable, modular React components.
Error Handling: Implemented comprehensive try/catch blocks on the backend to provide descriptive error messages to the frontend.

## Resources

- 🎨 [Figma Designs](https://www.figma.com/design/vxjX8SdBOt21DCD14mrBM9/Product-Feedback-App-Design?node-id=0-1&t=OH1BSnaLrvNeWMlQ-1)
- 📘 [Documentation Guides](https://docs.google.com/document/d/18jxCUA0bebCyYaIHy8aaKMgOQH4w5-b-iCGDWpV4K4M/edit?tab=t.0#heading=h.ykdbmvmlp0ag)

## Credits & Shoutouts 

My amazing instructors, Phil and Ariann, for all their patience and dedication! 

---