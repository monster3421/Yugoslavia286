import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

// Email configuration - Updated for Yugoslavia 286
const transporter = nodemailer.createTransport({
  host: 'mail.yugoslavia286.com.mx',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'ventas@yugoslavia286.com.mx',
    pass: 'condolife3421'
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Send email notification
      const emailSubject = `Nueva consulta - Yugoslavia 286: ${contact.fullName}`;
      const emailBody = `
        <h2>🏢 Nueva consulta - Yugoslavia 286</h2>
        
        <p><strong>👤 Nombre:</strong> ${contact.fullName}</p>
        <p><strong>📧 Email:</strong> ${contact.email}</p>
        <p><strong>📱 Teléfono:</strong> ${contact.phone}</p>
        <p><strong>🎯 Interés:</strong> ${contact.interest}</p>
        <p><strong>🌐 Idioma:</strong> ${contact.language}</p>
        
        <h3>💬 Mensaje:</h3>
        <p>${contact.message}</p>
        
        <p><strong>📅 Fecha:</strong> ${contact.createdAt ? new Date(contact.createdAt).toLocaleString('es-MX') : new Date().toLocaleString('es-MX')}</p>
      `;

      const mailOptions = {
        from: 'ventas@yugoslavia286.com.mx',
        to: 'ventas@yugoslavia286.com.mx',
        subject: emailSubject,
        html: emailBody,
        replyTo: contact.email
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully for contact:", contact.id);
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // Continue even if email fails, don't block the response
      }
      
      console.log("New contact submission:", contact);
      
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully"
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contacts" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
