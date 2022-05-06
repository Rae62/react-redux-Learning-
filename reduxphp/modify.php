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
  if($data['done'] === false) {
      $stateModify = $pdo->prepare('UPDATE tache SET done = 0 WHERE id=:id');
      $stateModify->bindValue(':id', $data['id']);
      $stateModify->execute();
  } else {
    $stateModify = $pdo->prepare('UPDATE tache SET done = 1 WHERE id=:id');
    $stateModify->bindValue(':id', $data['id']);
    $stateModify->execute();

  }



}