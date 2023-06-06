<?php

function getMessages() {
    $messages = file_get_contents('messages.txt');
    return explode("\n", $messages);
}

function addMessage($message) {
    file_put_contents('messages.txt', $message . "\n", FILE_APPEND);
}

function processSendMessage() {
    if (isset($_POST['message'])) {
        $message = $_POST['message'];
        addMessage($message);
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['action'])) {
        $action = $_POST['action'];
        if ($action === 'send') {
            processSendMessage();
        }
    }
}

$messages = getMessages();

foreach ($messages as $message) {
    echo "<div class='message'>$message</div>";
}

?>