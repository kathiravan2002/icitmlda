<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Allow CORS if needed
require 'cors.php';

// Load PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require_once realpath(__DIR__ . "/vendor/autoload.php");

// Validate required fields
$required_fields = ['firstname', 'secondname', 'email', 'number', 'message'];
$missing_fields = [];

foreach ($required_fields as $field) {
    if (!isset($_POST[$field]) || empty(trim($_POST[$field]))) {
        $missing_fields[] = $field;
    }
}

if (!empty($missing_fields)) {
    echo "Error: Missing required fields: " . implode(', ', $missing_fields);
    exit;
}

$mail = new PHPMailer(true);

try {
    // SMTP configuration
    $mail->SMTPDebug = SMTP::DEBUG_OFF; // Change to DEBUG_SERVER for logs
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'kathir.tcz@gmail.com'; // Replace with your Gmail
    $mail->Password   = 'hvza xnmt kvax hhoh'; // App password, not Gmail login
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Email setup
    $mail->setFrom('kathir.tcz@gmail.com', 'ICITMLDA Enquiry');
    $mail->addAddress('kathir.tcz@gmail.com', 'ICITMLDA Enquiry');
    $mail->addReplyTo($_POST['email'], $_POST['firstname'] . ' ' . $_POST['secondname']);

    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission';

    // HTML email content
    $mail->Body = '
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px;">
            <h2 style="color: #0B4F8E; border-bottom: 2px solid #287B86; padding-bottom: 10px;">New Enquiry</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 15px;">
                <tr>
                    <td style="padding: 12px 15px; border: 1px solid #dee2e6; font-weight: 600;">Name</td>
                    <td style="padding: 12px 15px; border: 1px solid #dee2e6;">' . 
                        htmlspecialchars($_POST['firstname']) . ' ' . htmlspecialchars($_POST['secondname']) . '</td>
                </tr>
                <tr style="background-color: #f0f4f7;">
                    <td style="padding: 12px 15px; border: 1px solid #dee2e6; font-weight: 600;">Phone Number</td>
                    <td style="padding: 12px 15px; border: 1px solid #dee2e6;">' . 
                        htmlspecialchars($_POST['number']) . '</td>
                </tr>
                <tr>
                    <td style="padding: 12px 15px; border: 1px solid #dee2e6; font-weight: 600;">Email</td>
                    <td style="padding: 12px 15px; border: 1px solid #dee2e6;">' . 
                        htmlspecialchars($_POST['email']) . '</td>
                </tr>
                <tr style="background-color: #f0f4f7;">
                    <td style="padding: 12px 15px; border: 1px solid #dee2e6; font-weight: 600;">Message</td>
                    <td style="padding: 12px 15px; border: 1px solid #dee2e6;">' . 
                        nl2br(htmlspecialchars($_POST['message'])) . '</td>
                </tr>
            </table>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
                <p>Submitted at: ' . date('Y-m-d H:i:s') . '</p>
            </div>
        </div>
    ';

    // Plain text fallback
    $mail->AltBody = "Enquiry\n\n" .
        "Name: " . $_POST['firstname'] . ' ' . $_POST['secondname'] . "\n" .
        "Email: " . $_POST['email'] . "\n" .
        "Phone: " . $_POST['number'] . "\n" .
        "Message: " . $_POST['message'];

    // Send mail
    $mail->send();
    echo 'sent successfully!';
} catch (Exception $e) {
    echo "Submission could not be sent. Error: " . $e->getMessage();
}
