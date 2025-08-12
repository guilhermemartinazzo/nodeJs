import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "admin123",
  database: "sql_harve",
});

async function executeSqlConsult(sql, param) {
  try {
    const [rows] = await connection.query(sql, param);
    console.log("Success executing sql "+sql + " "+ [rows]);
    return [rows];
  } catch (err) {
    console.error("Error executing sql:", err);
  }
}

async function executeSqlWithParams(sql,params) {
  try {
    const result = await connection.query(sql, params);
    console.log("Success executing sql "+sql);
    return result;
  } catch (err) {
    console.error("Error executing sql:", err);
  }
}

export { executeSqlConsult, executeSqlWithParams };
