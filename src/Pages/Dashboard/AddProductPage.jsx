import React, { useState } from 'react'
import createToast from "./../../Composants/toast"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddProductPage() {

  const navigate = useNavigate();

  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [prix, setPrix] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {

    if (!nom) {
      createToast("Veuillez renseigner un nom pour ce produit", 2);
      return;
    }

    if (!description) {
      createToast("Veuillez renseigner une description pour ce produit", 2);
      return;

    }

    if (!prix) {
      createToast("Veuillez renseigner un prix pour ce produit", 2);
      return;
    }


    setLoading(true);
    await axios.post(
      'http://localhost/serveur_shopping/index.php',
      {
        nom: nom,
        description: description,
        prix: parseFloat(prix)
      },
    )
      .then((reponse) => {
        createToast(reponse.data.message, 0);
        navigate('/product-list')

      })
      .catch((erreur) => {
        createToast("Une erreur est survenue", 2);
      })
      .finally(() => {
        setLoading(true);

      })



  }

  return (
    <div>

      <h1>Ajouter un noveau produit </h1>

      <div className='flex flex-col gap-y-4 mt-5'>
        <div className='flex flex-col '>
          <label>Nom du produit</label>
          <input
            className='border border-black'
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>


        <div className='flex flex-col '>
          <label>Descripiton du produit</label>
          <input
            className='border border-black'
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>



        <div className='flex flex-col '>
          <label>Prix du produit</label>
          <input
            className='border border-black'
            type="number"
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
            required
          />
        </div>
      </div>


      <div className='w-full'>
        {loading === true ?
          <p>Chargement </p> :
          <button
            onClick={handleSubmit}
            className='bg-black w-full text-white py-1 rounded-full mt-5'>Ajouter le produit</button>


        }

      </div>
    </div>
  )
}

export default AddProductPage