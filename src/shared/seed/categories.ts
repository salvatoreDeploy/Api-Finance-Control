import { createConnection } from "typeorm";
import { v4 as uuid } from "uuid";

async function create() {
  const connection = await createConnection();

  await connection.query(
    `INSERT INTO CATEGORIES(ID, NAME, TYPE, CREATED_AT, UPDATED_AT) VALUES('1', 'deposito', 'RECEITA', 'NOW()', 'NOW()');
     INSERT INTO CATEGORIES(ID, NAME, TYPE, CREATED_AT, UPDATED_AT) VALUES('2', 'saude', 'expense', 'NOW()', 'NOW()');
     INSERT INTO CATEGORIES(ID, NAME, TYPE, CREATED_AT, UPDATED_AT) VALUES('3', 'educacao', 'expense', 'NOW()', 'NOW()');
     INSERT INTO CATEGORIES(ID, NAME, TYPE, CREATED_AT, UPDATED_AT) VALUES('4', 'transporte', 'expense', 'NOW()', 'NOW()');
     INSERT INTO CATEGORIES(ID, NAME, TYPE, CREATED_AT, UPDATED_AT) VALUES('5', 'alimentacao', 'expense', 'NOW()', 'NOW()');
     INSERT INTO CATEGORIES(ID, NAME, TYPE, CREATED_AT, UPDATED_AT) VALUES('6', 'entreterimento', 'expense', 'NOW()', 'NOW()');`
  );
}

create().then(() => console.log("Categoria criada com sucesso"));
