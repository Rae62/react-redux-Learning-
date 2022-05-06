<?php

header("Access-Control-Allow-Origin: *");

try{
    $pdo = new PDO('mysql:host=localhost;dbname=react-eval', 'root', '', [
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
} catch(PDOException $e) {
    echo $e->getMessage();
}

$stateRead = $pdo->prepare('SELECT * FROM tache');
$stateRead->execute();
$result = $stateRead->fetchAll();

exit(json_encode($result));