<?php

if(isset($_POST['Email'])) {
  if (!filter_var($_POST['Email'], FILTER_VALIDATE_EMAIL)) {
    echo "Please enter a valid email address.";
  } else {
    send_email();
  }
}
exit;

function send_email() {
  $message =  "\nName: " . $_POST['Name'] .
              "\nEmail: " . $_POST['Email'];

  $message .= "\n\nBrowser Info: " . $_SERVER["HTTP_USER_AGENT"] .
    "\nIP: " . $_SERVER["REMOTE_ADDR"] .
    "\n\nDate: " . date("Y-m-d h:i:s");

  $message .= "\n\nMessage: " .
    "\n" . $_POST['Message'];

  $siteEmail = 'bizdev@scalien.com';
  $emailTitle = "[scalien contact form] " . $_POST['Name'];

  if(!mail($siteEmail, $emailTitle, $message, 'From: ' . $_POST['Name'] . ' <' . $_POST['Email'] . '>')) {
    echo "Can't send the email. Please try again later or call us by phone. Thank you for your patience.";
  } else {
    echo 'Sent';
  }
}
