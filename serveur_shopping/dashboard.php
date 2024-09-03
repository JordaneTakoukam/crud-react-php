<?php
// Autoriser les requêtes depuis n'importe quel domaine (CORS)
header("Access-Control-Allow-Origin: *"); // site autoriser a interagir avec le serveur
header("Access-Control-Allow-Methods: *"); // methode autoriser (GET, POST, PUT, DELETE, OPTIONS)
header("Access-Control-Allow-Headers: *");  // headers autorisés

$host = "127.0.0.1";
$dbname = "shopping";
$username = "root";
$password = "";

$databaseConnectionString = "mysql:host=$host;dbname=$dbname";
$connect = new PDO($databaseConnectionString, $username, $password);

// Définir la méthode HTTP utilisée
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    // Préparer la requête SQL pour récupérer le total des prix et le nombre d'éléments
    $query = "SELECT SUM(prix) AS total_prix, COUNT(*) AS total_elements FROM articles";

    // Exécuter la requête
    $statement = $connect->prepare($query);
    $statement->execute();

    // Récupérer le résultat sous forme de tableau associatif
    $result = $statement->fetch(PDO::FETCH_ASSOC);

    // Retourner les résultats au format JSON
    echo json_encode($result);
}
?>
