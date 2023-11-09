// This is normally your persistent storage
class Database {
  rows: any[];

  constructor() {
    this.rows = []
  }

  insert(data: Record<any, any>) {
    this.rows.unshift(data)
  }

  first() {
    return this.rows[0]
  }
}

const database = new Database();

export default database;

