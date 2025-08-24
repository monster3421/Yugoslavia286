# HostGator Deployment Guide for Yugoslavia 286 Luxury Condos

## Project Overview
This is a React-based single-page application for luxury condominium sales in Puerto Vallarta, featuring bilingual support (English/Spanish) and comprehensive floor plan galleries.

## Pre-Deployment Steps

### 1. Build the React Application
```bash
npm run build
```
This creates a `dist` folder with all static files needed for hosting.

### 2. Required Files for HostGator
- All files from the `dist` folder
- PHP email files: `mail_simple.php`, `config.php`
- `.htaccess` file for proper routing

## HostGator File Structure
```
public_html/
├── index.html (from dist folder)
├── assets/ (from dist folder)
├── mail_simple.php
├── config.php
├── .htaccess
└── attached_assets/ (all floor plan images)
```

## Email Configuration

### Update config.php
```php
<?php
// Email configuration
define('SMTP_HOST', 'mail.yourdomain.com'); // Your HostGator mail server
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'ventas@yugoslavia286.com.mx');
define('SMTP_PASSWORD', 'your_email_password');
define('FROM_EMAIL', 'ventas@yugoslavia286.com.mx');
define('FROM_NAME', 'Yugoslavia 286 Sales Team');
define('TO_EMAIL', 'ventas@yugoslavia286.com.mx');
?>
```

### PHP Mail Script (mail_simple.php)
The existing mail_simple.php file is configured for contact form submissions and includes:
- Form validation
- Spam protection
- Email formatting
- Error handling

## .htaccess Configuration
```apache
RewriteEngine On
RewriteBase /

# Handle React Router (for SPA routing)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Set cache headers
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

## Deployment Steps

### 1. Upload Files via cPanel File Manager
1. Login to HostGator cPanel
2. Open File Manager
3. Navigate to public_html folder
4. Upload all files from the `dist` folder
5. Upload PHP files: `mail_simple.php`, `config.php`
6. Upload `.htaccess` file
7. Create `attached_assets` folder and upload all floor plan images

### 2. Set File Permissions
- PHP files: 644
- .htaccess: 644
- Folders: 755

### 3. Email Setup in cPanel
1. Create email account: ventas@yugoslavia286.com.mx
2. Note the mail server settings from cPanel
3. Update config.php with correct SMTP settings

### 4. Test Deployment
1. Visit your domain
2. Test language switching (English/Spanish)
3. Test contact form submission
4. Verify all floor plan images load correctly
5. Test mobile responsiveness

## Key Features Deployed
- ✅ Bilingual interface (English/Spanish)
- ✅ 9 comprehensive floor plans with specifications
- ✅ Contact form with PHP email integration
- ✅ Responsive design for all devices
- ✅ Image gallery with zoom functionality
- ✅ Video hero section with smooth transitions

## Post-Deployment Checklist
- [ ] Domain pointing correctly
- [ ] SSL certificate active
- [ ] Email form working
- [ ] All images loading
- [ ] Language switching functional
- [ ] Mobile optimization verified
- [ ] Contact form spam protection active

## Support Files
- Contact Form: mail_simple.php handles all form submissions
- Email Configuration: config.php contains SMTP settings
- Routing: .htaccess ensures proper SPA functionality
- Assets: attached_assets folder contains all floor plan images

## Notes
- The application is built as a static site with PHP email functionality
- All floor plan data is embedded in the React build
- No database required - all content is static
- Contact form uses server-side PHP for security