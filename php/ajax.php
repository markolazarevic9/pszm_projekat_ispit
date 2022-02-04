<?php
    $nameInput = test_input($_GET['nameInput']);
    $emailInput = test_input($_GET['emailInput']);
    $phoneInput = test_input($_GET['phoneInput']);

    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
      }
?>