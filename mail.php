<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader (if using Composer)
// require 'vendor/autoload.php';

// Or include PHPMailer files manually
require_once 'phpmailer/src/Exception.php';
require_once 'phpmailer/src/PHPMailer.php';
require_once 'phpmailer/src/SMTP.php';

// Configuration - Updated for Yugoslavia 286
$smtp_host = 'mail.yugoslavia286.com.mx'; // Your domain's mail server
$smtp_port = 465; // SSL port
$smtp_username = 'ventas@yugoslavia286.com.mx'; // Your email
$smtp_password = 'your_email_password_here'; // Your email password - UPDATE THIS!
$from_email = 'ventas@yugoslavia286.com.mx';
$from_name = 'Yugoslavia 286 Contact Form';
$to_email = 'ventas@yugoslavia286.com.mx';
$to_name = 'Yugoslavia 286 Sales Team';

// Function to sanitize input
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Process form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate and sanitize inputs
    $name = sanitize_input($_POST['name'] ?? '');
    $email = sanitize_input($_POST['email'] ?? '');
    $phone = sanitize_input($_POST['phone'] ?? '');
    $interest = sanitize_input($_POST['interest'] ?? '');
    $budget = sanitize_input($_POST['budget'] ?? '');
    $message = sanitize_input($_POST['message'] ?? '');
    
    // Validation
    $errors = [];
    
    if (empty($name)) {
        $errors[] = "Name is required";
    }
    
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Valid email is required";
    }
    
    if (empty($message)) {
        $errors[] = "Message is required";
    }
    
    if (empty($errors)) {
        // Create a new PHPMailer instance
        $mail = new PHPMailer(true);
        
        try {
            // Server settings
            $mail->isSMTP();
            $mail->Host       = $smtp_host;
            $mail->SMTPAuth   = true;
            $mail->Username   = $smtp_username;
            $mail->Password   = $smtp_password;
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL encryption for port 465
            $mail->Port       = $smtp_port;
            $mail->CharSet    = 'UTF-8';
            
            // Recipients
            $mail->setFrom($from_email, $from_name);
            $mail->addAddress($to_email, $to_name);
            $mail->addReplyTo($email, $name);
            
            // Content
            $mail->isHTML(true);
            $mail->Subject = 'New Contact Form Submission - Yugoslavia 286';
            
            // Format interest level
            $interest_formatted = '';
            if (!empty($interest)) {
                $interest_labels = [
                    'just-looking' => 'Just Looking',
                    'serious-buyer' => 'Serious Buyer',
                    'ready-to-purchase' => 'Ready to Purchase',
                    'investment' => 'Investment Opportunity'
                ];
                $interest_formatted = $interest_labels[$interest] ?? $interest;
            }
            
            // Format budget
            $budget_formatted = '';
            if (!empty($budget)) {
                $budget_labels = [
                    'under-500k' => 'Under $500,000 USD',
                    '500k-750k' => '$500,000 - $750,000 USD',
                    '750k-1m' => '$750,000 - $1,000,000 USD',
                    'over-1m' => 'Over $1,000,000 USD'
                ];
                $budget_formatted = $budget_labels[$budget] ?? $budget;
            }
            
            // HTML email body
            $html_body = "
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
                    .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 10px 10px; }
                    .field { margin-bottom: 15px; }
                    .label { font-weight: bold; color: #2c5282; }
                    .value { margin-top: 5px; padding: 8px; background: white; border-radius: 5px; }
                    .message-content { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #4299e1; }
                </style>
            </head>
            <body>
                <div class='container'>
                    <div class='header'>
                        <h2>New Contact Form Submission</h2>
                        <p>Yugoslavia 286 - Luxury Condominiums</p>
                    </div>
                    <div class='content'>
                        <div class='field'>
                            <div class='label'>Name:</div>
                            <div class='value'>{$name}</div>
                        </div>
                        <div class='field'>
                            <div class='label'>Email:</div>
                            <div class='value'><a href='mailto:{$email}'>{$email}</a></div>
                        </div>";
                        
            if (!empty($phone)) {
                $html_body .= "
                        <div class='field'>
                            <div class='label'>Phone:</div>
                            <div class='value'><a href='tel:{$phone}'>{$phone}</a></div>
                        </div>";
            }
            
            if (!empty($interest_formatted)) {
                $html_body .= "
                        <div class='field'>
                            <div class='label'>Interest Level:</div>
                            <div class='value'>{$interest_formatted}</div>
                        </div>";
            }
            
            if (!empty($budget_formatted)) {
                $html_body .= "
                        <div class='field'>
                            <div class='label'>Budget Range:</div>
                            <div class='value'>{$budget_formatted}</div>
                        </div>";
            }
            
            $html_body .= "
                        <div class='field'>
                            <div class='label'>Message:</div>
                            <div class='message-content'>" . nl2br($message) . "</div>
                        </div>
                        <div style='margin-top: 20px; padding: 15px; background: #e2e8f0; border-radius: 5px; text-align: center;'>
                            <small>This message was sent from the Yugoslavia 286 contact form on " . date('Y-m-d H:i:s') . "</small>
                        </div>
                    </div>
                </div>
            </body>
            </html>";
            
            $mail->Body = $html_body;
            
            // Plain text version
            $plain_body = "New Contact Form Submission - Yugoslavia 286\n\n";
            $plain_body .= "Name: {$name}\n";
            $plain_body .= "Email: {$email}\n";
            if (!empty($phone)) $plain_body .= "Phone: {$phone}\n";
            if (!empty($interest_formatted)) $plain_body .= "Interest Level: {$interest_formatted}\n";
            if (!empty($budget_formatted)) $plain_body .= "Budget Range: {$budget_formatted}\n";
            $plain_body .= "\nMessage:\n{$message}\n\n";
            $plain_body .= "Sent on: " . date('Y-m-d H:i:s');
            
            $mail->AltBody = $plain_body;
            
            // Send email
            $mail->send();
            
            // Redirect to success page
            header("Location: contact.html?success=1");
            exit();
            
        } catch (Exception $e) {
            // Log detailed error information
            $error_message = "Contact form email error: " . $e->getMessage() . " | PHPMailer Error: " . $mail->ErrorInfo;
            error_log($error_message, 3, 'contact_form_errors.log');
            
            // For debugging, also log SMTP settings (remove in production)
            error_log("SMTP Host: " . $smtp_host . " Port: " . $smtp_port . " User: " . $smtp_username, 3, 'contact_form_errors.log');
            
            // Redirect to error page
            header("Location: contact.html?error=" . urlencode("Email failed: " . $e->getMessage()));
            exit();
        }
    } else {
        // Validation errors
        $error_msg = implode(", ", $errors);
        header("Location: contact.html?error=" . urlencode($error_msg));
        exit();
    }
} else {
    // Not a POST request
    header("Location: contact.html");
    exit();
}
?>