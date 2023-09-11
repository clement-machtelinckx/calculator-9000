<?php
// Connexion à la base de données (vous devrez remplacer les valeurs par les vôtres)
$servername = "localhost";
$username = "root";
$password = "Clement2203$";
$dbname = "calculator";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Récupérer les données depuis la requête POST
    $expression = $_POST['expression'];
    $result = $_POST['result'];
    
    // Préparer et exécuter la requête SQL pour insérer les données
    $stmt = $conn->prepare("INSERT INTO calcule (expression, result) VALUES (:expression, :result)");
    $stmt->bindParam(':expression', $expression);
    $stmt->bindParam(':result', $result);
    $stmt->execute();
    
    // Répondre avec un message de succès
    echo "Calcul enregistré avec succès dans la base de données !";
} catch(PDOException $e) {
    // En cas d'erreur, renvoyer un message d'erreur
    echo "Une erreur s'est produite lors de l'enregistrement du calcul dans la base de données : " . $e->getMessage();
}

// Fermer la connexion à la base de données
$conn = null;
?>
