import React, { useEffect, useState } from 'react'
import Card from './Composants/Card'
import axios from 'axios';

function DashboardPage() {

  const [loading, setLoading] = useState(false);
  const [erreur, setErreur] = useState("");
  const [data, setData] = useState({ total_prix: 0, total_elements: 0 })


  const getDataDashoard = async () => {
    setLoading(true);
    setErreur("");

    await axios.get("http://localhost/serveur_shopping/dashboard.php")
      .then((reponse) => {
        setData(reponse.data)

      })
      .catch((error) => {
        setErreur('Une erreur est survenue')
      })
      .finally(() => {
        setLoading(false);
      })
  }

  useEffect(() => {
    getDataDashoard();
  }, [])



  return (
    <div className='space-y-4'>
      <h1 className='mb-10 mt-5'>Tableau de bord /</h1>


      {
        loading === true ?
          <p>Chargement ...</p> :
          erreur ?
            <p className='text-red-500'>{erreur}</p> :
            data.total_elements === 0 ?
              <p>Aucun produit ajouter pour le moment</p>
              :
              <div>
                <div className='grid grid-cols-2 gap-x-6'>
                  <Card titre={'Montant total'} valeur={`${data.total_prix} FCFA`} />
                  <Card titre={'Nombre total de produit'} valeur={data.total_elements} />
                </div>
              </div>
      }


    </div>
  )
}

export default DashboardPage