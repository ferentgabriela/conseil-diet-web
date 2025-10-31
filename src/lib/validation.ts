import { z } from 'zod';

// Forward message form validation schema
export const forwardMessageSchema = z.object({
  name: z.string()
    .trim()
    .min(1, { message: "Le nom est requis" })
    .max(100, { message: "Le nom ne peut pas dépasser 100 caractères" }),
  
  email: z.string()
    .trim()
    .email({ message: "Format d'email invalide" })
    .max(255, { message: "L'email ne peut pas dépasser 255 caractères" })
    .optional()
    .or(z.literal('')),
  
  phone: z.string()
    .trim()
    .max(20, { message: "Le numéro de téléphone ne peut pas dépasser 20 caractères" })
    .optional()
    .or(z.literal('')),
  
  message: z.string()
    .trim()
    .min(1, { message: "Le message est requis" })
    .max(2000, { message: "Le message ne peut pas dépasser 2000 caractères" }),
  
  acceptTerms: z.boolean()
    .refine(val => val === true, { message: "Vous devez accepter les conditions" }),
  
  sessionId: z.string()
    .min(10, { message: "Session ID invalide" })
});

export type ForwardMessageInput = z.infer<typeof forwardMessageSchema>;
