module.exports = {
  local: {
    db_user: process.env['DB_USER'],
    db_pass: process.env['DB_PASS']
  },
  prod: {
    db_user: process.env['DB_USER'],
    db_pass: process.env['DB_PASS'],
    db_host: process.env['DB_HOST'],
  },
  dev: {
    db_host: process.env['DB_HOST'],
    db_email: process.env['DB_EMAIL'],
  }
}