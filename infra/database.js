import {Client} from 'pg'

async function query(queryObject){
  const client = new Client({
    port: process.env.POSTGRES_PORT,
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    ssl: process.env.NODE_ENV === 'production' ? true : false,
  })
  
  try {
    client.connect()
    const result = await client.query(queryObject)
    return result

  } catch (error) {
    console.log(error)
  } finally{
    await client.end()
  }
  
}

export default {
  query:query
}