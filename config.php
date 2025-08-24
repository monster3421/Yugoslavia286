<?php
/**
 * Yugoslavia 286 - Email Configuration
 * HostGator Hosting Configuration
 */

// Database Configuration (if needed for future features)
define('DB_HOST', 'localhost');
define('DB_NAME', 'your_database_name');
define('DB_USER', 'your_database_user');
define('DB_PASS', 'your_database_password');

// Email Configuration for HostGator - Yugoslavia 286
define('SMTP_HOST', 'mail.yugoslavia286.com.mx'); // Your domain's mail server
define('SMTP_PORT', 465); // SMTP port for SSL
define('SMTP_SECURE', 'ssl'); // Use SSL encryption

// Email Credentials - UPDATE THESE WITH YOUR ACTUAL CREDENTIALS
define('SMTP_USERNAME', 'ventas@yugoslavia286.com.mx');
define('SMTP_PASSWORD', 'your_actual_email_password_here'); // IMPORTANT: Replace with actual password

// Email Settings
define('FROM_EMAIL', 'ventas@yugoslavia286.com.mx');
define('FROM_NAME', 'Yugoslavia 286 Contact Form');
define('TO_EMAIL', 'ventas@yugoslavia286.com.mx');
define('TO_NAME', 'Yugoslavia 286 Sales Team');

// Site Settings
define('SITE_NAME', 'Yugoslavia 286');
define('SITE_URL', 'https://your-domain.com'); // Update with your actual domain

// Error Reporting (set to false in production)
define('DEBUG_MODE', false);

if (DEBUG_MODE) {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
} else {
    error_reporting(0);
    ini_set('display_errors', 0);
}

// Timezone
date_default_timezone_set('America/Mexico_City');
?>