import InterConfiguration from '../configuration/InterConfiguration'
import InterConnection from '../connection/InterConnection'


class InterDatabase {
  constructor (database, user, password, options) {
    this.interConfiguration = InterConfiguration.getInstance(database, user, password, options)
    this.interConnection = InterConnection.getInstance(this.interConfiguration)
  }
}

export default InterDatabase