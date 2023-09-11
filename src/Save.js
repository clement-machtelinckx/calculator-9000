import React from 'react';
import axios from 'axios';

const Save = ({ expression, result }) => {
    // Fonction pour enregistrer le calcul dans la base de données
    const saveCalculationToDatabase = () => {
      // Remplacez 'URL_DE_VOTRE_API' par l'URL de votre API backend avec le fichier PHP d'enregistrement (save.php, par exemple)
      const url = 'save.php';
  
      axios.post(url, { expression, result })
        .then(response => {
          console.log("Calcul enregistré avec succès dans la base de données !");
        })
        .catch(error => {
          console.error("Une erreur s'est produite lors de l'enregistrement du calcul dans la base de données :", error);
        });
    };
  
    return (
      <button className='highlight' onClick={saveCalculationToDatabase}>Save</button>
    );
  };
  
  export default Save;
  