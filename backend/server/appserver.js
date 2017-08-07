const express = require('express')
const bodyParser = require('body-parser')

let drugstores = []

const allowCrossDomain = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}


const Appserver = function({ port, drugstoreService }) {
  const app = express()

  app.use(bodyParser.json())
  app.use(allowCrossDomain)

  // get initial data
  drugstoreService
  .getDrugstores()
  .then( results => {
    
    const promises = results.data.map( f => {
      return drugstoreService
      .getDrugstore(f.id)
    })

    Promise.all(promises).then( args => {
      drugstores = args.map( d => drugstoreService.normalizeDrugstore(d) )
      app.listen(port)
    })
  })

  app.route('/farmacias/calculo').post( (req, res) => {

    if(drugstores.length === 0) {
      res.json()
      return
    }

    const medicines = req.body.medicines
    
    const bill = drugstoreService
    .getLowestBill(drugstores, medicines || [])

    res.json({
      bill,
      drugstore: {
        name: drugstores[bill.id].name,
        position: drugstores[bill.id].position,
        url: drugstores[bill.id].url
      }
    })
    
  })

}

module.exports = Appserver
