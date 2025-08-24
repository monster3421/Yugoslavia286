<?php
/**
 * Yugoslavia 286 - Simple Mail Handler (Backup)
 * Uses basic PHP mail() function as fallback
 */

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Function to sanitize input
function sanitize_input($data) {
    return htmlspecialchars(trim(stripslashes($data)), ENT_QUOTES, 'UTF-8');
}

// Process form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = sanitize_input($_POST['name'] ?? '');
    $email = sanitize_input($_POST['email'] ?? '');
    $phone = sanitize_input($_POST['phone'] ?? '');
    $interest = sanitize_input($_POST['interest'] ?? '');
    $budget = sanitize_input($_POST['budget'] ?? '');
    $message = sanitize_input($_POST['message'] ?? '');
    
    // Validation
    $errors = [];
    
    if (empty($name) || strlen($name) < 2) {
        $errors[] = "Name is required and must be at least 2 characters";
    }
    
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Valid email is required";
    }
    
    if (empty($message) || strlen($message) < 10) {
        $errors[] = "Message is required and must be at least 10 characters";
    }
    
    if (empty($errors)) {
        // Format interest level
        $interest_labels = [
            'just-looking' => 'Just Looking',
            'serious-buyer' => 'Serious Buyer',
            'ready-to-purchase' => 'Ready to Purchase',
            'investment' => 'Investment Opportunity'
        ];
        $interest_formatted = !empty($interest) ? ($interest_labels[$interest] ?? $interest) : 'Not specified';
        
        // Format budget
        $budget_labels = [
            'under-500k' => 'Under $500,000 USD',
            '500k-750k' => '$500,000 - $750,000 USD',
            '750k-1m' => '$750,000 - $1,000,000 USD',
            'over-1m' => 'Over $1,000,000 USD'
        ];
        $budget_formatted = !empty($budget) ? ($budget_labels[$budget] ?? $budget) : 'Not specified';
        
        // Email content
        $to = 'ventas@yugoslavia286.com.mx';
        $subject = 'New Lead - Yugoslavia 286: ' . $name;
        
        // HTML email body
        $html_body = "
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset='UTF-8'>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; }
                .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
                .header { background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%); color: white; padding: 30px 20px; text-align: center; }
                .header h1 { margin: 0; font-size: 24px; }
                .content { padding: 30px; }
                .field { margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #4299e1; }
                .field-label { font-weight: bold; color: #2c5282; margin-bottom: 5px; }
                .field-value { color: #4a5568; }
                .message-field { background: #edf2f7; }
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
                    <div class='field " . ($interest_formatted == 'Ready to Purchase' ? 'priority' : '') . "'>
                        <div class='field-label'>👤 Contact Name</div>
                        <div class='field-value'>{$name}</div>
                    </div>
                    <div class='field'>
                        <div class='field-label'>📧 Email Address</div>
                        <div class='field-value'><a href='mailto:{$email}'>{$email}</a></div>
                    </div>";
                    
        if (!empty($phone)) {
            $html_body .= "
                    <div class='field'>
                        <div class='field-label'>📱 Phone Number</div>
                        <div class='field-value'><a href='tel:{$phone}'>{$phone}</a></div>
                    </div>";
        }
        
        $html_body .= "
                    <div class='field'>
                        <div class='field-label'>🎯 Interest Level</div>
                        <div class='field-value'>{$interest_formatted}</div>
                    </div>
                    <div class='field'>
                        <div class='field-label'>💰 Budget Range</div>
                        <div class='field-value'>{$budget_formatted}</div>
                    </div>
                    <div class='field message-field'>
                        <div class='field-label'>💬 Message</div>
                        <div class='field-value'>" . nl2br(htmlspecialchars($message)) . "</div>
                    </div>
                </div>
                <div class='footer'>
                    <p>📅 Received: " . date('F j, Y \a\t g:i A T') . "</p>
                    <p>🌐 Source: Yugoslavia 286 Contact Form</p>
                    <p>📧 Auto-sent to: ventas@yugoslavia286.com.mx</p>
                </div>
            </div>
        </body>
        </html>";
        
        // Email headers for HTML
        $headers = array(
            'MIME-Version: 1.0',
            'Content-type: text/html; charset=UTF-8',
            'From: Yugoslavia 286 <ventas@yugoslavia286.com.mx>',
            'Reply-To: ' . $email,
            'X-Mailer: PHP/' . phpversion()
        );
        
        // Send email using basic mail() function
        $mail_sent = mail($to, $subject, $html_body, implode("\r\n", $headers));
        
        if ($mail_sent) {
            // Log success
            error_log("Contact form email sent successfully to: " . $to . " from: " . $email, 3, 'contact_form_success.log');
            
            // Redirect to success page
            header("Location: contact.html?success=1");
            exit();
        } else {
            // Log failure
            error_log("Basic mail() function failed for contact form submission from: " . $email, 3, 'contact_form_errors.log');
            
            // Redirect to error page
            header("Location: contact.html?error=" . urlencode("Email system temporarily unavailable. Please try again or contact us directly."));
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