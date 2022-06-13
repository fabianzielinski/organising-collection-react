const mongoose = require("mongoose");
module.exports = {
  connect: (DB_HOST) => {
    // Użycie uaktualnionego analizatora składni ciągu tekstowego URL.
    // mongoose.set("useNewUrlParser", true);
    // Użycie metody findOneAndUpdate() zamiast findAndModify().
    // mongoose.set("useFindAndModify", false);
    // Użycie metody createIndex() zamiast ensureIndex().
    // mongoose.set("useCreateIndex", true);
    // Użycie nowego silnika wykrywania i monitorowania serwera.
    // mongoose.set("useUnifiedTopology", true);
    // Nawiązanie połączenia z bazą danych.
    mongoose.connect(DB_HOST);
    // Zarejestrowanie błędu, jeśli nie udało się nawiązać połączenia.
    mongoose.connection.on("error", (err) => {
      console.error(err);
      console.log(
        "Błąd połączenia z MongoDB. Upewnij się, że serwer MongoDB został uruchomiony."
      );
      process.exit();
    });
  },
  close: () => {
    mongoose.connection.close();
  },
};
