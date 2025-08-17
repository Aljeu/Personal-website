import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      // Simply return success without storing in database
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully" 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to submit contact form" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
