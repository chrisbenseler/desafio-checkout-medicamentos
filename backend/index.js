const DrugstoreService = require('./server/drugstore.service')
const Appserver = require('./server/appserver')

new Appserver({ port: 3001, drugstoreService: DrugstoreService })
