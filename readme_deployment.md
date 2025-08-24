# Yugoslavia 286 - HostGator Deployment Guide

## Overview
Complete setup guide for deploying the Yugoslavia 286 luxury condominium website on HostGator reseller hosting with email functionality.

## Files Included

### Core Website Files
- `index.html` - Main website (build from React app)
- `contact.html` - Standalone contact form
- `assets/` - All images, videos, CSS, and JS files
- `.htaccess` - Performance and security configuration

### Email System Files
- `config.php` - Configuration settings
- `mail.php` - Basic contact form handler
- `mail_improved.php` - Advanced contact form handler (recommended)
- `install_phpmailer.php` - PHPMailer installation script

## Deployment Steps

### 1. Upload Files to HostGator
1. Upload all files to your domain's public_html directory
2. Ensure file permissions are set correctly:
   - HTML files: 644
   - PHP files: 644
   - Directories: 755
   - .htaccess: 644

### 2. Setup Email System

#### A. Create Email Account
1. In HostGator cPanel, go to "Email Accounts"
2. Create email: `ventas@yugoslavia286.com.mx`
3. Set a strong password
4. Note the email settings for later

#### B. Install PHPMailer
1. Run the installation script by visiting: `https://yourdomain.com/install_phpmailer.php`
2. This will download and setup PHPMailer automatically
3. **IMPORTANT**: Delete `install_phpmailer.php` after installation for security

#### C. Configure Email Settings
1. Open `config.php`
2. Update these settings with your actual values:
   ```php
   define('SMTP_USERNAME', 'ventas@yugoslavia286.com.mx');
   define('SMTP_PASSWORD', 'your_actual_email_password_here');
   define('SITE_URL', 'https://yugoslavia286.com.mx'); // Your actual domain
   ```

### 3. Test Email Functionality
1. Visit `https://yourdomain.com/contact.html`
2. Fill out and submit the form
3. Check if email arrives at `ventas@yugoslavia286.com.mx`
4. If issues occur, check the error log file created in your directory

### 4. Build and Deploy React App
From your development environment:

```bash
# Build the React application
npm run build

# Upload the built files to replace index.html and assets
# The build creates optimized HTML, CSS, and JS files
```

## Email Configuration Details

### SMTP Settings for HostGator
- **SMTP Server**: localhost (for HostGator hosting)
- **SMTP Port**: 587
- **SMTP Security**: TLS
- **Authentication**: Yes (required)

### Roundcube Webmail Setup
1. Access Roundcube at: `https://yourdomain.com/webmail`
2. Login with: `ventas@yugoslavia286.com.mx`
3. Configure forwarding rules if needed
4. Set up auto-responders for immediate acknowledgment

## Security Features

### .htaccess Protection
- Compresses files for faster loading
- Sets proper cache headers
- Blocks sensitive file access
- Prevents common exploit attempts
- Optional HTTPS enforcement (uncomment when SSL active)

### PHP Security
- Input sanitization and validation
- SQL injection prevention
- XSS protection
- Error logging instead of displaying

## Troubleshooting

### Email Not Sending
1. Check email password in `config.php`
2. Verify email account exists in cPanel
3. Check `contact_form_errors.log` for specific errors
4. Ensure PHPMailer files are properly uploaded

### Performance Issues
1. Verify .htaccess is working (check response headers)
2. Optimize images and videos further if needed
3. Enable HostGator's CDN if available
4. Consider upgrading hosting plan for higher traffic

### SSL Certificate
1. Install SSL certificate through HostGator cPanel
2. Uncomment HTTPS redirect lines in .htaccess
3. Update all internal links to use HTTPS

## File Structure
```
public_html/
├── index.html (main website)
├── contact.html (contact form)
├── mail_improved.php (email handler)
├── config.php (configuration)
├── .htaccess (server config)
├── assets/ (images, videos, CSS, JS)
├── phpmailer/ (email library)
└── contact_form_errors.log (error log)
```

## Maintenance

### Regular Tasks
- Monitor error logs weekly
- Update PHPMailer annually
- Check email functionality monthly
- Review security headers quarterly

### Backup Strategy
- HostGator provides automatic backups
- Additional manual backups recommended monthly
- Test backup restoration process

## Support Contacts
- **Email System**: ventas@yugoslavia286.com.mx
- **HostGator Support**: Available 24/7 via cPanel
- **Domain Management**: Through HostGator reseller panel

---

**Last Updated**: August 2025  
**Version**: 1.0  
**Status**: Production Ready