const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const requiredVars = ["URL", "PORT"];

requiredVars.forEach((key) => {
    if (!process.env[key]) {
        console.error(`La variabile ${key} non è stata trovata. Assicurati di avere un file .env con tutte le variabili necessarie.`);
        process.exit(1);
    }
});

module.exports = {
    URL: process.env.URL.trim(),
    PORT: parseInt(process.env.PORT, 10)
};