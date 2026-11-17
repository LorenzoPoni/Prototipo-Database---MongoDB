//mi permette di eliminare tutti i percorsi relativi -> gestisce

const path = require("path");

// Directory ROOT del servizio
const ROOT = path.join(__dirname, "..");
const FRONTEND_PUBLIC = path.join(ROOT, "..", "frontend", "public");
// Percorsi principali
module.exports = {
    ROOT,
    SRC: path.join(ROOT, "src"),
    PUBLIC: FRONTEND_PUBLIC,
};