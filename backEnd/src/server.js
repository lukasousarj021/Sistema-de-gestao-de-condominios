const pool = require("./config/database");

async function testar() {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("Conectado!");
    console.log(res.rows[0]);
  } catch (erro) {
    console.error(erro);
  } finally {
    pool.end();
  }
}

testar();