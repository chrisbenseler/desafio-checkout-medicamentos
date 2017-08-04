const express = require('express')
const bodyParser = require('body-parser')

let drugstores = []

const Appserver = function({ port, drugstoreService }) {
  const app = express()

  app.use( bodyParser.json() )

  app.listen(port)

  app.route('/farmacias').get( (req, res) => {
    drugstoreService
    .getDrugstores()
    .then( results => {
      
      const promises = results.data.map( f => {
        return drugstoreService
        .getDrugstore(f.id)
      })

      Promise.all(promises).then( args => {
        drugstores = args.map( d => drugstoreService.normalizeDrugstore(d) )
        res.json(drugstores.length)
      })
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
