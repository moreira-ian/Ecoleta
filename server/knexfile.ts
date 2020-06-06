import path from 'path';

module.exports = {
    client: 'sqlite3',
    //connection
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
    },
    //migration
    migrations: {
        directory: path.resolve(__dirname,'src', 'database', 'migrations')
    },
    //images
    seeds: {
        directory: path.resolve(__dirname,'src', 'database', 'seeds')
    },
    useNullAsDefault: true,
};