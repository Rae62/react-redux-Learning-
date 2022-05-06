<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

$data = json_decode(file_get_contents('php://input'), true);

try{
    $pdo = new PDO('mysql:host=localhost;dbname=react-eval', 'root', '', [
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
} catch(PDOException $e) {
    echo $e->getMessage();
}

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $stateInsert= $pdo->prepare('INSERT INTO tache (name, done) VALUES (:name, :done)');
    $stateInsert->bindValue(':name', $data['name']);
    $stateInsert->bindValue(':done', $data['done']);
    $stateInsert->execute();

    exit(json_encode($data));
}
