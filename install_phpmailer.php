<?php
/**
 * PHPMailer Installation Script for HostGator
 * Run this script once to download and install PHPMailer
 */

echo "<h2>PHPMailer Installation for Yugoslavia 286</h2>";

// Create phpmailer directory
$phpmailerDir = 'phpmailer';
if (!is_dir($phpmailerDir)) {
    mkdir($phpmailerDir, 0755, true);
    echo "<p>✓ Created phpmailer directory</p>";
}

// Create src subdirectory
$srcDir = $phpmailerDir . '/src';
if (!is_dir($srcDir)) {
    mkdir($srcDir, 0755, true);
    echo "<p>✓ Created src directory</p>";
}

// PHPMailer files to download
$files = [
    'Exception.php' => 'https://raw.githubusercontent.com/PHPMailer/PHPMailer/master/src/Exception.php',
    'PHPMailer.php' => 'https://raw.githubusercontent.com/PHPMailer/PHPMailer/master/src/PHPMailer.php',
    'SMTP.php' => 'https://raw.githubusercontent.com/PHPMailer/PHPMailer/master/src/SMTP.php',
    'POP3.php' => 'https://raw.githubusercontent.com/PHPMailer/PHPMailer/master/src/POP3.php',
    'OAuth.php' => 'https://raw.githubusercontent.com/PHPMailer/PHPMailer/master/src/OAuth.php'
];

echo "<h3>Downloading PHPMailer files...</h3>";

foreach ($files as $filename => $url) {
    $localPath = $srcDir . '/' . $filename;
    
    // Download file
    $fileContent = file_get_contents($url);
    
    if ($fileContent !== false) {
        file_put_contents($localPath, $fileContent);
        echo "<p>✓ Downloaded: $filename</p>";
    } else {
        echo "<p>✗ Failed to download: $filename</p>";
    }
}

// Create a simple autoloader file
$autoloader = '<?php
/**
 * Simple PHPMailer Autoloader
 * Generated for Yugoslavia 286 project
 */

spl_autoload_register(function ($class) {
    $prefix = "PHPMailer\\PHPMailer\\";
    $base_dir = __DIR__ . "/src/";
    
    $len = strlen($prefix);
    if (strncmp($prefix, $class, $len) !== 0) {
        return;
    }
    
    $relative_class = substr($class, $len);
    $file = $base_dir . str_replace("\\", "/", $relative_class) . ".php";
    
    if (file_exists($file)) {
        require $file;
    }
});
?>';

file_put_contents($phpmailerDir . '/autoload.php', $autoloader);
echo "<p>✓ Created autoloader</p>";

echo "<h3>Installation Complete!</h3>";
echo "<p>You can now use PHPMailer in your contact form.</p>";
echo "<p><strong>Next steps:</strong></p>";
echo "<ol>";
echo "<li>Update the email password in config.php</li>";
echo "<li>Test the contact form</li>";
echo "<li>Update contact.html form action to use mail_improved.php if needed</li>";
echo "</ol>";

echo "<p><strong>Files created:</strong></p>";
echo "<ul>";
echo "<li>phpmailer/src/Exception.php</li>";
echo "<li>phpmailer/src/PHPMailer.php</li>";
echo "<li>phpmailer/src/SMTP.php</li>";
echo "<li>phpmailer/src/POP3.php</li>";
echo "<li>phpmailer/src/OAuth.php</li>";
echo "<li>phpmailer/autoload.php</li>";
echo "</ul>";

echo "<p style='background: #dff0d8; padding: 10px; border-radius: 5px;'>";
echo "<strong>Security Note:</strong> Remember to delete this installation script (install_phpmailer.php) after running it for security purposes.";
echo "</p>";
?>