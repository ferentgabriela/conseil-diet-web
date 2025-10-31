import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { forwardMessageSchema } from '@/lib/validation';

interface ForwardMessageDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  conversationId: string;
}

export const ForwardMessageDialog: React.FC<ForwardMessageDialogProps> = ({
  open,
  onOpenChange,
  conversationId,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    acceptTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all form data with Zod
    const validationResult = forwardMessageSchema.safeParse({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      acceptTerms: formData.acceptTerms,
      sessionId: conversationId
    });

    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0];
      toast({
        title: "Erreur de validation",
        description: firstError.message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Use secure edge function instead of direct database access
      const { error: createError } = await supabase.functions.invoke('forward-message-create', {
        body: {
          sessionId: conversationId,
          userName: formData.name.trim(),
          userEmail: formData.email.trim() || null,
          userPhone: formData.phone.trim() || null,
          message: formData.message.trim()
        }
      });

      if (createError) throw createError;

      // Then call the edge function to send the email
      const { error: forwardError } = await supabase.functions.invoke('forward-message', {
        body: {
          conversationId: conversationId
        }
      });

      if (forwardError) {
        console.error('Error forwarding message:', forwardError);
        // Don't throw here - the message was saved, just the email failed
        toast({
          title: "Message sauvegardé",
          description: "Votre message a été sauvegardé mais l'envoi par email a échoué. Gabriela le recevra quand même.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Message envoyé",
          description: "Votre message a été transmis à Gabriela par email. Elle vous contactera dans les plus brefs délais.",
        });
      }

      setFormData({ name: '', email: '', phone: '', message: '', acceptTerms: false });
      onOpenChange(false);
    } catch (error) {
      console.error('Error saving message:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contacter Gabriela Ferent</DialogTitle>
          <DialogDescription>
            Envoyez un message direct à Gabriela. Elle vous contactera personnellement dans les plus brefs délais.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nom complet *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Votre nom et prénom"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="votre.email@exemple.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="+352 XX XX XX XX"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Décrivez votre situation, vos besoins ou posez votre question..."
              className="min-h-[100px]"
              required
            />
          </div>

          <div className="flex items-start gap-2 text-sm mt-4">
            <input
              type="checkbox"
              id="acceptTerms"
              checked={formData.acceptTerms}
              onChange={(e) => handleInputChange('acceptTerms', e.target.checked)}
              required
              className="mt-1 accent-green-700"
            />
            <label htmlFor="acceptTerms" className="text-gray-700">
              J'affirme disposer d'une ordonnance conforme <strong>ou</strong> j'accepte que la séance soit au tarif privé non remboursable.
            </label>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Annuler
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Envoi...' : 'Envoyer le message'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};