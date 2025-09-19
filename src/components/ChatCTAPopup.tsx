import React, { useState, useEffect } from 'react';
import { MessageCircle, X, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatCTAPopupProps {
  onOpenChat: () => void;
}

export const ChatCTAPopup = ({ onOpenChat }: ChatCTAPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if already dismissed in this session
    const dismissed = sessionStorage.getItem('chatCTADismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show popup after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenChat = () => {
    onOpenChat();
    setIsVisible(false);
    sessionStorage.setItem('chatCTADismissed', 'true');
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('chatCTADismissed', 'true');
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-32 right-8 z-40 animate-fade-in">
      <div className="bg-white border border-green-200 rounded-2xl shadow-xl p-4 max-w-xs relative">
        {/* Small arrow pointing down to chat button */}
        <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-b border-r border-green-200 transform rotate-45"></div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={handleDismiss}
          className="absolute top-2 right-2 h-6 w-6 text-gray-400 hover:text-gray-600"
          aria-label="Fermer la notification"
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="pr-6">
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle className="h-5 w-5 text-green-600" />
            <h3 className="font-semibold text-gray-800 text-sm">
              Une question ?
            </h3>
          </div>
          
          <p className="text-xs text-gray-600 mb-3 leading-relaxed">
            Je suis là pour vous aider ! Posez-moi vos questions sur la nutrition et les consultations.
          </p>
          
          <Button
            onClick={handleOpenChat}
            className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl text-sm py-2 h-auto"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Poser une question
          </Button>
        </div>
      </div>
    </div>
  );
};