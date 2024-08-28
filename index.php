<?php
// Autoriser les requêtes depuis n'importe quel domaine (CORS)
header("Access-Control-Allow-Origin: *"); // site autoriser a interagir avec le serveur
header("Access-Control-Allow-Methods: *"); // methode autoriser (GET, POST,PUT, DELETE,OPTIONS)
header("Access-Control-Allow-Headers: *");  // 


$host = "127.0.0.1";
$dbname = "shopping";
$username = "root";
$password = "";

$databaseConnectionString = "mysql:host=$host;dbname=$dbname";
$connect = new PDO($databaseConnectionString, $username, $password);


// Définir la méthode HTTP utilisée
$method = $_SERVER['REQUEST_METHOD'];

// recuperer les infos de la bd
if ($method === 'GET') {
    // Préparer la requête SQL pour récupérer les données de la table "produit"
    $query = "SELECT * FROM articles order by id DESC";

    // Exécuter la requête
    $statement = $connect->prepare($query);
    $statement->execute();

    // Récupérer les résultats sous forme de tableau associatif
    $result = $statement->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($result);
    // Retourner les résultats au format JSON
    // return json_encode($result);
}
// ajouter des infos
else if ($method === 'POST') {
}

// modifier
else if ($method === 'PUT') {
}

// supprimer
else if ($method === 'DELETE') {
}

?>