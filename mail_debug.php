<?php
/**
 * Yugoslavia 286 - Debug Email Handler
 * Use this to troubleshoot email issues
 */

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<h2>Yugoslavia 286 Email Debug</h2>";
echo "<p>Testing email configuration...</p>";

// Check if config file exists
if (file_exists('config.php')) {
    echo "<p>✓ Config file found</p>";
    require_once 'config.php';
    
    echo "<p>✓ Email settings loaded:</p>";
    echo "<ul>";
    echo "<li>SMTP Host: " . SMTP_HOST . "</li>";
    echo "<li>SMTP Port: " . SMTP_PORT . "</li>";
    echo "<li>SMTP Security: " . SMTP_SECURE . "</li>";
    echo "<li>Username: " . SMTP_USERNAME . "</li>";
    echo "<li>Password: " . (SMTP_PASSWORD === 'your_actual_email_password_here' ? '<span style="color:red;">NOT SET</span>' : '<span style="color:green;">SET</span>') . "</li>";
    echo "</ul>";
    
    if (SMTP_PASSWORD === 'your_actual_email_password_here') {
        echo "<p style='background:#fed7d7; padding:10px; border-radius:5px;'>";
        echo "<strong>ERROR:</strong> Email password not configured in config.php";
        echo "</p>";
        exit();
    }
    
} else {
    echo "<p style='color:red;'>✗ Config file not found</p>";
    exit();
}

// Check PHPMailer installation
$phpmailerPath = 'phpmailer/src/PHPMailer.php';
if (file_exists($phpmailerPath)) {
    echo "<p>✓ PHPMailer installed</p>";
} else {
    echo "<p style='color:red;'>✗ PHPMailer not found. Run install_phpmailer.php first</p>";
    exit();
}

// Test email sending if form submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require_once 'phpmailer/src/Exception.php';
    require_once 'phpmailer/src/PHPMailer.php';
    require_once 'phpmailer/src/SMTP.php';
    
    $mail = new PHPMailer(true);
    
    try {
        echo "<h3>Testing Email Send...</h3>";
        
        // Server settings
        $mail->isSMTP();
        $mail->Host = SMTP_HOST;
        $mail->SMTPAuth = true;
        $mail->Username = SMTP_USERNAME;
        $mail->Password = SMTP_PASSWORD;
        $mail->SMTPSecure = SMTP_SECURE;
        $mail->Port = SMTP_PORT;
        $mail->SMTPDebug = 2; // Enable debug output
        $mail->CharSet = 'UTF-8';
        
        // Recipients
        $mail->setFrom(SMTP_USERNAME, 'Yugoslavia 286 Debug Test');
        $mail->addAddress(SMTP_USERNAME, 'Test Recipient');
        
        // Content
        $mail->isHTML(true);
        $mail->Subject = 'Yugoslavia 286 Email Test - ' . date('Y-m-d H:i:s');
        $mail->Body = '<h1>Email Test Successful!</h1><p>This confirms your email system is working properly.</p>';
        $mail->AltBody = 'Email Test Successful! This confirms your email system is working properly.';
        
        $mail->send();
        echo "<p style='background:#dff0d8; padding:10px; border-radius:5px;'>";
        echo "<strong>SUCCESS:</strong> Test email sent successfully!";
        echo "</p>";
        
    } catch (Exception $e) {
        echo "<p style='background:#fed7d7; padding:10px; border-radius:5px;'>";
        echo "<strong>ERROR:</strong> " . $mail->ErrorInfo;
        echo "</p>";
        echo "<h4>Debug Information:</h4>";
        echo "<pre>" . $e->getMessage() . "</pre>";
    }
    
} else {
    // Show test form
    echo "<h3>Send Test Email</h3>";
    echo "<form method='POST'>";
    echo "<button type='submit' style='background:#4299e1; color:white; padding:10px 20px; border:none; border-radius:5px; cursor:pointer;'>Send Test Email</button>";
    echo "</form>";
}

echo "<hr>";
echo "<p><a href='contact.html'>← Back to Contact Form</a></p>";
echo "<p><strong>Remember to delete this debug file after testing!</strong></p>";
?>