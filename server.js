const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db; // ربط الداتا بالـ app

// Middlewares
app.use(cors());
app.use(jsonServer.defaults());
app.use(auth);
app.use(router);

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`✅ JSON Server with Auth running on port ${PORT}`);
});
