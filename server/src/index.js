import express from "express";
import pg from "pg";
import config from "./config.js";

const db = new pg.Pool({
  connectionString: config.databaseUrl + "&uselibpqcompat=true",
  ssl: true,
});

const app = express();
app.use(express.json());

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Helper Functions
async function getAllSuggestions() {
    const result = await db.query("SELECT * FROM suggestions");
    return result.rows;
}
async function getSuggestionsByCategory(category) {
    const result = await db.query("SELECT * FROM suggestions WHERE category = $1", [category]
    );
    return result.rows;
}
async function addOneSuggestion(title, category, suggestion) {
    const result = await db.query("INSERT INTO suggestions (title, category, suggestion) VALUES ($1, $2, $3) RETURNING *", [title, category, suggestion],
    );
    return result.rows[0];
}


// API endpoints

app.get("/api/get-all-suggestions", async (req, res) => {
    const suggestions = await getAllSuggestions();
    res.json(suggestions);
})

app.get("/api/get-suggestions-by-category/:category", async (req, res) => {
    const category = req.params.category;
    const suggestions = await getSuggestionsByCategory(category);
    res.json(suggestions);
})

app.post("/api/add-one-suggestion", async (req, res) => {
    const { title, category, suggestion } = req.body;
    await addOneSuggestion(title, category, suggestion);
    res.send(`Success! Suggestion has been added.`);
})