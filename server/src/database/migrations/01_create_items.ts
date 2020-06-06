import knex from 'knex';

export async function up(knex: knex) {
    //create table
    return knex.schema.createTable('items', table => { 
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}
export async function down(knex: knex){
    //rollback
    return knex.schema.dropTable('items');
}
