const fetch = require('node-fetch')


const normalizeDrugstore = farmacia => {
  return {
      id: farmacia.data.id,
      position: { lat: farmacia.data.attributes.lat, lng: farmacia.data.attributes.lon },
      name: farmacia.data.attributes.nome,
      url: farmacia.links.self,
      medicines: farmacia.data.attributes.medicamentos
    }
}

const findMedicineInList = (medicines, medicine) => 
  medicines.filter( m => m.nome === medicine ).reduce( (acc, v) => v)

const getDrugstores = () => {
  return fetch('https://wydfdauvw5.execute-api.sa-east-1.amazonaws.com/desafio/farmacias')
  .then( response => response.json() )
}

const getDrugstore = (id) => {
  return fetch(`https://wydfdauvw5.execute-api.sa-east-1.amazonaws.com/desafio/farmacias/${id}`)
  .then( response => response.json() )
}

const getLowestBill = (drugstores, medicinesToQuery) => {
  const pricesInDrugstores = drugstores.map( drugstore => {
   
    const medicines = medicinesToQuery.map( m => {
      const medicineResult = findMedicineInList(drugstore.medicines, m.name)
      const item = { name: medicineResult.nome, amount: m.amount, price: medicineResult.preco, total: m.amount * medicineResult.preco };
      return item;
    })
   
    return {
      id: drugstore.id,
      medicines,
      total: medicines.reduce( (acc, v) => acc + v.total, 0 )
    }
  })

  return getLowValueByKey(pricesInDrugstores, 'total')
}

const getLowValueByKey = (results, key) => {
  return results.sort( (a, b) => a[key] > b[key])[0]
}


const DrugstoreService = {
  getDrugstores,
  getDrugstore,
  normalizeDrugstore,
  getLowestBill
}

module.exports = DrugstoreService
