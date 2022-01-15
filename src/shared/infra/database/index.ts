import Knex from 'knex';
import knexConfig from '../../../config/knexfile';

console.log(`Database connected with client ${knexConfig['development'].client}.`);

const knex = Knex(knexConfig['development']);

export default knex;