import chai from 'chai'
import SQLServer from '../lib/configuration/dbs/SQLServer'
import Connection from '../lib/connection/dbs/SQLServer'
import { formatObject, formatInsertValues } from '../lib/helpers/connection'

const expect = chai.expect

describe('SQL Server instantiation with arguments', () => {
  it('should accept four parameters (database, user, password, options)', () => {
    const SQL = new SQLServer('teste', 'sa','12345678', {
      port: '9990',
      server: '177.143.213.117'
    })
    const SQL_CONNECTION = SQL.getConfiguration()

    expect(SQL_CONNECTION._mode).to.be.equal('single')
    expect(SQL_CONNECTION._option.userName).to.be.equal('sa')
    expect(SQL_CONNECTION._option.password).to.be.equal('12345678')
    expect(SQL_CONNECTION._option.server).to.be.equal('177.143.213.117')
  })
})

describe('SQL Server connection', () => {
  it('should use insert method with two parameters (table, object)', async () => {
    const SQL = new SQLServer('teste', 'sa','12345678', {
      port: '9990',
      server: '177.143.213.117'
    })
    const SqlServerConnection = new Connection(SQL)

    const workshift = {
      name: 'Workshift Test',
      description: 'Workshift Framework Test'
    }

    try {
      var result = await SqlServerConnection.insert('[SEQUENCIALIZADOR].[dbo].[WorkShift]', workshift)
      expect(result).to.be.empty
    } catch (error) {
      console.log(error)
    }
  })
})