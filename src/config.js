const config = {
  database: {
    readerHost     : process.env.DB_RD_HOST,
    writerHost: process.env.DB_WR_HOST,
    host: process.env.DB_HOST,
    port: 3306,
    username     : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME || 'connectFlow',
  }
};

module.exports = config;