import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ListProduit from './Composants/ListProduit';

function ListProductPage() {

  const [loading, setLoading] = useState(false);
  const [erreur, setErreur] = useState("");
  const [products, setProducts] = useState([])

  const getListProducts = async () => {

    await axios.get(
      "http://localhost/serveur_shopping/index.php",
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    ).then((response) => {
      setProducts(response.data)

    })
      .catch((error) => {
        setErreur(error)
      })
      .finally(() => {
        setLoading(false);

      })


  }


  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      getListProducts();
    }, 500)

  }, [])


  return (
    <div className='w-full'>

      {
        loading ? <p>Chargement ...</p> :
          erreur ? <p>{erreur}</p> :
            products.length === 0 ?
              <div>Aucun produit pour le moment</div> :
              <ListProduit listProduits={products} />
      }
    </div>
  )
}

export default ListProductPage