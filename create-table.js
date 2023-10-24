import { sql } from "./db.js";
/*
sql`DROP TABLE IF EXISTS videos;`.then(() => {
    console.log('Tabela "videos" apagada com sucesso!')
})
*/
sql`
    CREATE TABLE videos (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        title TEXT,
        description TEXT,
        duration INTEGER
    );
`.then(() => {
    console.log('Tabela "videos" criada com sucesso!')
})