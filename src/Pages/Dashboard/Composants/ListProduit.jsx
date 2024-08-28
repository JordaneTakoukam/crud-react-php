import React from 'react'
import Bouton from '../../../Composants/ui/bouton'
import { MdDelete, MdEdit } from 'react-icons/md'
import { RiEdit2Fill } from 'react-icons/ri'

function ListProduit({ listProduits }) {
    return (
        <div className='flex gap-y-4 flex-col w-full'>
            {
                listProduits.map((product, index) => {
                    return <div key={index} className='border rounded-md border-black py-3 px-8 w-full flex justify-between items-center' >
                        <div className='flex  w-4/5 justify-between'>
                            <div>
                                <h1 className='font-bold text-lg'>{product.nom}</h1>
                                <p>{product.description}</p>
                            </div>
                            <h1 className='font-bold'>{product.prix} FCFA</h1>
                        </div>



                        <div className='space-x-2 w-auto'>
                            <Bouton couleur={'bg-green-500'} icone={<MdEdit />} />
                            <Bouton couleur={'bg-red-500'} icone={<MdDelete />} />
                        </div>
                    </div>



                })
            }
        </div>
    )
}

export default ListProduit