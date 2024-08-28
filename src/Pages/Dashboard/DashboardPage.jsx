import React from 'react'
import Card from './Composants/Card'

function DashboardPage() {
  return (
    <div className='space-y-4'>
      <h1 className='mb-10 mt-5'>Tableau de bord /</h1>
    
    
      <div className='grid grid-cols-2 gap-x-6'>
        <Card titre={'Montant total'} valeur={"1400000 FCFA"} />
        <Card titre={'Nombre total de produit'} valeur={10} />
      </div>

      
    </div>
  )
}

export default DashboardPage