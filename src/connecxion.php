<?php
session_start();

$serveur = 'localhost';
$nomUtilisateur = 'root';
$motDePasse = 'Clement2203$';
$nomBaseDeDonnees = 'calculator';

$bdd = new PDO("mysql:host=$serveur;dbname=$nomBaseDeDonnees;charset=utf8", $nomUtilisateur, $motDePasse);


function ReadBDD() {
    global $bdd;
    try {
        $query = "SELECT * FROM calcule";
        $statement = $bdd->prepare($query);
        $statement->execute();
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    } catch (PDOException $e) {
        echo "Erreur lors de la lecture de la base de données : " . $e->getMessage();
        return null;
    }
}


function enterLine($expression, $result) {
    global $bdd;
    try {
        $query = "INSERT INTO calcule (expression, result) VALUES (:expression, :result)";
        $statement = $bdd->prepare($query);
        $statement->bindParam(':expression', $expression);
        $statement->bindParam(':result', $result);
        $statement->execute();
        return true;
    } catch (PDOException $e) {
        echo "Erreur lors de l'insertion dans la base de données : " . $e->getMessage();
        return false;
    }
}


function updateLine () {

}

function supLine () {

}
?>