<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<h2>Yugoslavia 286 - Email Debug Test</h2>";

// Test if we can submit form data directly
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "<h3>Form Data Received:</h3>";
    echo "<pre>";
    print_r($_POST);
    echo "</pre>";
    
    // Test basic email settings
    echo "<h3>Testing Email Configuration:</h3>";
    
    if (file_exists('config.php')) {
        require_once 'config.php';
        echo "<p>✓ Config loaded</p>";
    } else {
        echo "<p>✗ Config file missing</p>";
        exit;
    }
    
    // Check PHPMailer
    if (file_exists('phpmailer/src/PHPMailer.php')) {
        echo "<p>✓ PHPMailer found</p>";
        
        use PHPMailer\PHPMailer\PHPMailer;
        use PHPMailer\PHPMailer\SMTP;
        use PHPMailer\PHPMailer\Exception;

        require_once 'phpmailer/src/Exception.php';
        require_once 'phpmailer/src/PHPMailer.php';
        require_once 'phpmailer/src/SMTP.php';
        
        $mail = new PHPMailer(true);
        
        try {
            // Server settings
            $mail->isSMTP();
            $mail->Host = SMTP_HOST;
            $mail->SMTPAuth = true;
            $mail->Username = SMTP_USERNAME;
            $mail->Password = SMTP_PASSWORD;
            $mail->SMTPSecure = SMTP_SECURE;
            $mail->Port = SMTP_PORT;
            $mail->SMTPDebug = 2; // Enable verbose debug output
            $mail->CharSet = 'UTF-8';
            
            echo "<h4>SMTP Debug Output:</h4>";
            echo "<div style='background:#f0f0f0; padding:10px; border-radius:5px;'>";
            
            // Recipients
            $mail->setFrom(SMTP_USERNAME, 'Yugoslavia 286 Test');
            $mail->addAddress(SMTP_USERNAME, 'Test Recipient');
            
            // Content
            $mail->isHTML(true);
            $mail->Subject = 'Test Email - ' . date('Y-m-d H:i:s');
            $mail->Body = '<h1>Test Email</h1><p>This is a test email from Yugoslavia 286 contact form.</p>';
            
            ob_start();
            $result = $mail->send();
            $debug_output = ob_get_clean();
            
            echo "</div>";
            
            if ($result) {
                echo "<p style='background:#dff0d8; padding:10px; color:#3c763d;'>✓ Email sent successfully!</p>";
            } else {
                echo "<p style='background:#f2dede; padding:10px; color:#a94442;'>✗ Email failed to send</p>";
                echo "<p><strong>Error:</strong> " . $mail->ErrorInfo . "</p>";
            }
            
        } catch (Exception $e) {
            echo "<p style='background:#f2dede; padding:10px; color:#a94442;'>";
            echo "<strong>Exception:</strong> " . $e->getMessage();
            echo "</p>";
        }
        
    } else {
        echo "<p>✗ PHPMailer not found</p>";
    }
    
} else {
    // Show test form
    echo "<form method='POST'>";
    echo "<h3>Test Contact Form Submit</h3>";
    echo "<p><label>Name: <input type='text' name='name' value='Test User' required></label></p>";
    echo "<p><label>Email: <input type='email' name='email' value='test@example.com' required></label></p>";
    echo "<p><label>Phone: <input type='tel' name='phone' value='555-123-4567'></label></p>";
    echo "<p><label>Interest: <select name='interest'>";
    echo "<option value='just-looking'>Just Looking</option>";
    echo "<option value='serious-buyer'>Serious Buyer</option>";
    echo "<option value='ready-to-purchase'>Ready to Purchase</option>";
    echo "<option value='investment'>Investment Opportunity</option>";
    echo "</select></label></p>";
    echo "<p><label>Budget: <select name='budget'>";
    echo "<option value='under-500k'>Under $500,000 USD</option>";
    echo "<option value='500k-750k'>$500,000 - $750,000 USD</option>";
    echo "<option value='750k-1m'>$750,000 - $1,000,000 USD</option>";
    echo "<option value='over-1m'>Over $1,000,000 USD</option>";
    echo "</select></label></p>";
    echo "<p><label>Message: <textarea name='message'>This is a test message from the debug form.</textarea></label></p>";
    echo "<p><button type='submit'>Test Email Send</button></p>";
    echo "</form>";
}

echo "<hr>";
echo "<p><a href='contact.html'>← Back to Contact Form</a></p>";
echo "<p><strong>Delete this debug file after testing!</strong></p>";
?>