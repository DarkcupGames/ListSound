<?php
$directory = '../Sound';  
$files = array_diff(scandir($directory), array('..', '.'));

$audioFiles = array_filter($files, function($file) {
    return pathinfo($file, PATHINFO_EXTENSION) === 'mp3';
});

echo json_encode(array_values($audioFiles));
?>
