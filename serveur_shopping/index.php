<?php
// Autoriser les requêtes depuis n'importe quel domaine (CORS)
header("Access-Control-Allow-Origin: *"); // site autorisé à interagir avec le serveur
header("Access-Control-Allow-Methods: *"); // méthode autorisée (GET, POST, PUT, DELETE, OPTIONS)
header("Access-Control-Allow-Headers: *");  // headers autorisés

$host = "127.0.0.1";
$dbname = "shopping";
$username = "root";
$password = "";

$databaseConnectionString = "mysql:host=$host;dbname=$dbname";
$connect = new PDO($databaseConnectionString, $username, $password);

// Définir la méthode HTTP utilisée
$method = $_SERVER['REQUEST_METHOD'];

// Récupérer les informations de la base de données
if ($method === 'GET') {
    // Préparer la requête SQL pour récupérer les données de la table "articles"
    $query = "SELECT * FROM articles ORDER BY id DESC";

    // Exécuter la requête
    $statement = $connect->prepare($query);
    $statement->execute();

    // Récupérer les résultats sous forme de tableau associatif
    $result = $statement->fetchAll(PDO::FETCH_ASSOC);

    // Retourner les résultats au format JSON
    echo json_encode($result);
}
// Ajouter des informations
else if ($method === 'POST') {
    // Récupérer les données envoyées dans la requête POST
    $data = json_decode(file_get_contents("php://input"), true);

    // Préparer la requête SQL pour insérer les données dans la table "articles"
    $query = "INSERT INTO articles (nom, description, prix) VALUES (:nom, :description, :prix)";

    // Exécuter la requête avec les données fournies
    $statement = $connect->prepare($query);
    $statement->bindParam(':nom', $data['nom']);
    $statement->bindParam(':description', $data['description']);
    $statement->bindParam(':prix', $data['prix']);

    if ($statement->execute()) {
        // Si l'insertion réussit, retourner un message de succès
        echo json_encode(['message' => 'Article ajouté avec succès']);
    } else {
        // Sinon, retourner un message d'erreur
        echo json_encode(['message' => 'Erreur lors de l\'ajout de l\'article']);
    }
}
// Modifier des informations
else if ($method === 'PUT') {
    // Récupérer les données envoyées dans la requête PUT
    $data = json_decode(file_get_contents("php://input"), true);

    // Préparer la requête SQL pour mettre à jour les données dans la table "articles"
    $query = "UPDATE articles SET nom = :nom, description = :description, prix = :prix WHERE id = :id";

    // Exécuter la requête avec les données fournies
    $statement = $connect->prepare($query);
    $statement->bindParam(':nom', $data['nom']);
    $statement->bindParam(':description', $data['description']);
    $statement->bindParam(':prix', $data['prix']);
    $statement->bindParam(':id', $data['id']);

    if ($statement->execute()) {
        // Si la mise à jour réussit, retourner un message de succès
        echo json_encode(['message' => 'Article mis à jour avec succès']);
    } else {
        // Sinon, retourner un message d'erreur
        echo json_encode(['message' => 'Erreur lors de la mise à jour de l\'article']);
    }
}
// Supprimer des informations
else if ($method === 'DELETE') {
    // Récupérer l'identifiant de l'article à supprimer envoyé dans la requête DELETE
    $data = json_decode(file_get_contents("php://input"), true);

    // Préparer la requête SQL pour supprimer l'article de la table "articles"
    $query = "DELETE FROM articles WHERE id = :id";

    // Exécuter la requête avec l'identifiant fourni
    $statement = $connect->prepare($query);
    $statement->bindParam(':id', $data['id']);

    if ($statement->execute()) {
        // Si la suppression réussit, retourner un message de succès
        echo json_encode(['message' => 'Article supprimé avec succès']);
    } else {
        // Sinon, retourner un message d'erreur
        echo json_encode(['message' => 'Erreur lors de la suppression de l\'article']);
    }
}
