import { Client } from 'pg';

const client = new Client({
  connectionString: "postgresql://vikash:vikashsingh471@localhost:5432/week-10"
});

export default client;