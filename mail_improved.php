<?php
/**
 * Yugoslavia 286 - Improved Contact Form Handler
 * Optimized for HostGator hosting with better error handling
 */

require_once 'config.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load PHPMailer files
require_once 'phpmailer/src/Exception.php';
require_once 'phpmailer/src/PHPMailer.php';
require_once 'phpmailer/src/SMTP.php';

class ContactFormHandler {
    private $errors = [];
    private $success = false;
    
    public function __construct() {
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $this->processForm();
        } else {
            $this->redirectToContact();
        }
    }
    
    private function sanitizeInput($data) {
        return htmlspecialchars(trim(stripslashes($data)), ENT_QUOTES, 'UTF-8');
    }
    
    private function validateForm($data) {
        // Required fields
        if (empty($data['name'])) {
            $this->errors[] = "Name is required";
        } elseif (strlen($data['name']) < 2) {
            $this->errors[] = "Name must be at least 2 characters";
        }
        
        if (empty($data['email'])) {
            $this->errors[] = "Email is required";
        } elseif (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            $this->errors[] = "Please enter a valid email address";
        }
        
        if (empty($data['message'])) {
            $this->errors[] = "Message is required";
        } elseif (strlen($data['message']) < 10) {
            $this->errors[] = "Message must be at least 10 characters";
        }
        
        // Phone validation (optional)
        if (!empty($data['phone']) && !preg_match('/^[\d\s\-\+\(\)]+$/', $data['phone'])) {
            $this->errors[] = "Please enter a valid phone number";
        }
        
        return empty($this->errors);
    }
    
    private function processForm() {
        // Collect and sanitize form data
        $formData = [
            'name' => $this->sanitizeInput($_POST['name'] ?? ''),
            'email' => $this->sanitizeInput($_POST['email'] ?? ''),
            'phone' => $this->sanitizeInput($_POST['phone'] ?? ''),
            'interest' => $this->sanitizeInput($_POST['interest'] ?? ''),
            'budget' => $this->sanitizeInput($_POST['budget'] ?? ''),
            'message' => $this->sanitizeInput($_POST['message'] ?? '')
        ];
        
        // Validate form
        if (!$this->validateForm($formData)) {
            $this->redirectToContact('validation_error');
            return;
        }
        
        // Send email
        if ($this->sendEmail($formData)) {
            $this->redirectToContact('success');
        } else {
            $this->redirectToContact('email_error');
        }
    }
    
    private function sendEmail($data) {
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
            $mail->CharSet = 'UTF-8';
            
            // SSL options for Yugoslavia 286 mail server
            $mail->SMTPOptions = array(
                'ssl' => array(
                    'verify_peer' => true,
                    'verify_peer_name' => true,
                    'allow_self_signed' => false
                )
            );
            
            // Recipients
            $mail->setFrom(FROM_EMAIL, FROM_NAME);
            $mail->addAddress(TO_EMAIL, TO_NAME);
            $mail->addReplyTo($data['email'], $data['name']);
            
            // Subject
            $mail->Subject = 'New Lead - Yugoslavia 286 Contact Form';
            
            // Email content
            $mail->isHTML(true);
            $mail->Body = $this->generateHTMLEmail($data);
            $mail->AltBody = $this->generatePlainEmail($data);
            
            // Send
            return $mail->send();
            
        } catch (Exception $e) {
            // Log error
            $this->logError("PHPMailer Error: " . $mail->ErrorInfo);
            return false;
        }
    }
    
    private function generateHTMLEmail($data) {
        $interest_labels = [
            'just-looking' => 'Just Looking',
            'serious-buyer' => 'Serious Buyer',
            'ready-to-purchase' => 'Ready to Purchase',
            'investment' => 'Investment Opportunity'
        ];
        
        $budget_labels = [
            'under-500k' => 'Under $500,000 USD',
            '500k-750k' => '$500,000 - $750,000 USD',
            '750k-1m' => '$750,000 - $1,000,000 USD',
            'over-1m' => 'Over $1,000,000 USD'
        ];
        
        $interest_text = !empty($data['interest']) ? ($interest_labels[$data['interest']] ?? $data['interest']) : 'Not specified';
        $budget_text = !empty($data['budget']) ? ($budget_labels[$data['budget']] ?? $data['budget']) : 'Not specified';
        
        $html = "
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset='UTF-8'>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; }
                .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
                .header { background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%); color: white; padding: 30px 20px; text-align: center; }
                .header h1 { margin: 0; font-size: 24px; }
                .header p { margin: 10px 0 0 0; opacity: 0.9; }
                .content { padding: 30px; }
                .field { margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #4299e1; }
                .field-label { font-weight: bold; color: #2c5282; margin-bottom: 5px; }
                .field-value { color: #4a5568; }
                .message-field { background: #edf2f7; }
                .message-field .field-value { white-space: pre-wrap; }
                .footer { text-align: center; padding: 20px; background: #edf2f7; color: #718096; font-size: 12px; }
                .priority { background: #fed7d7; border-left-color: #e53e3e; }
                .priority .field-label { color: #e53e3e; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h1>🏢 New Lead - Yugoslavia 286</h1>
                    <p>Luxury Condominiums Contact Form</p>
                </div>
                <div class='content'>
                    <div class='field " . ($interest_text == 'Ready to Purchase' ? 'priority' : '') . "'>
                        <div class='field-label'>👤 Contact Name</div>
                        <div class='field-value'>{$data['name']}</div>
                    </div>
                    <div class='field'>
                        <div class='field-label'>📧 Email Address</div>
                        <div class='field-value'><a href='mailto:{$data['email']}'>{$data['email']}</a></div>
                    </div>";
                    
        if (!empty($data['phone'])) {
            $html .= "
                    <div class='field'>
                        <div class='field-label'>📱 Phone Number</div>
                        <div class='field-value'><a href='tel:{$data['phone']}'>{$data['phone']}</a></div>
                    </div>";
        }
        
        $html .= "
                    <div class='field'>
                        <div class='field-label'>🎯 Interest Level</div>
                        <div class='field-value'>{$interest_text}</div>
                    </div>
                    <div class='field'>
                        <div class='field-label'>💰 Budget Range</div>
                        <div class='field-value'>{$budget_text}</div>
                    </div>
                    <div class='field message-field'>
                        <div class='field-label'>💬 Message</div>
                        <div class='field-value'>" . nl2br(htmlspecialchars($data['message'])) . "</div>
                    </div>
                </div>
                <div class='footer'>
                    <p>📅 Received: " . date('F j, Y \a\t g:i A T') . "</p>
                    <p>🌐 Source: Yugoslavia 286 Contact Form</p>
                    <p>📧 Auto-forwarded to: " . TO_EMAIL . "</p>
                </div>
            </div>
        </body>
        </html>";
        
        return $html;
    }
    
    private function generatePlainEmail($data) {
        $text = "NEW LEAD - Yugoslavia 286 Contact Form\n";
        $text .= "=====================================\n\n";
        $text .= "Contact Name: {$data['name']}\n";
        $text .= "Email: {$data['email']}\n";
        if (!empty($data['phone'])) $text .= "Phone: {$data['phone']}\n";
        $text .= "Interest Level: " . (!empty($data['interest']) ? $data['interest'] : 'Not specified') . "\n";
        $text .= "Budget Range: " . (!empty($data['budget']) ? $data['budget'] : 'Not specified') . "\n";
        $text .= "\nMessage:\n" . $data['message'] . "\n\n";
        $text .= "=====================================\n";
        $text .= "Received: " . date('F j, Y at g:i A T') . "\n";
        $text .= "Source: Yugoslavia 286 Contact Form\n";
        
        return $text;
    }
    
    private function logError($message) {
        $logMessage = "[" . date('Y-m-d H:i:s') . "] " . $message . "\n";
        error_log($logMessage, 3, 'contact_form_errors.log');
    }
    
    private function redirectToContact($status = '') {
        $url = 'contact.html';
        if ($status) {
            $url .= '?' . $status . '=1';
        }
        header("Location: $url");
        exit();
    }
}

// Initialize the contact form handler
new ContactFormHandler();
?>