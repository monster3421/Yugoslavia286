<?php
// Simple test file to check basic PHP functionality
echo "<h1>Yugoslavia 286 - PHP Test</h1>";
echo "<p>Current time: " . date('Y-m-d H:i:s') . "</p>";
echo "<p>PHP Version: " . phpversion() . "</p>";

// Check if files exist
$files_to_check = [
    'config.php' => 'Configuration file',
    'mail.php' => 'Email handler',
    'mail_improved.php' => 'Improved email handler',
    'contact.html' => 'Contact form',
    'phpmailer/src/PHPMailer.php' => 'PHPMailer library'
];

echo "<h2>File Check:</h2>";
echo "<ul>";
foreach ($files_to_check as $file => $description) {
    if (file_exists($file)) {
        echo "<li style='color:green;'>✓ $description ($file)</li>";
    } else {
        echo "<li style='color:red;'>✗ $description ($file) - Missing</li>";
    }
}
echo "</ul>";

// Check email configuration if config exists
if (file_exists('config.php')) {
    require_once 'config.php';
    echo "<h2>Email Configuration:</h2>";
    echo "<ul>";
    echo "<li>SMTP Host: " . (defined('SMTP_HOST') ? SMTP_HOST : 'Not defined') . "</li>";
    echo "<li>SMTP Port: " . (defined('SMTP_PORT') ? SMTP_PORT : 'Not defined') . "</li>";
    echo "<li>Username: " . (defined('SMTP_USERNAME') ? SMTP_USERNAME : 'Not defined') . "</li>";
    
    if (defined('SMTP_PASSWORD')) {
        if (SMTP_PASSWORD === 'your_actual_email_password_here') {
            echo "<li style='color:red;'>Password: Not configured (still default)</li>";
        } else {
            echo "<li style='color:green;'>Password: Configured</li>";
        }
    } else {
        echo "<li style='color:red;'>Password: Not defined</li>";
    }
    echo "</ul>";
}

echo "<hr>";
echo "<p><a href='contact.html'>Test Contact Form</a></p>";
echo "<p><strong>Delete this file after testing!</strong></p>";
?>