
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X, MessageCircle, Send, User, Bot, ExternalLink } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { useChatMessages } from '@/hooks/useChatMessages';
import { ForwardMessageDialog } from './ForwardMessageDialog';

interface Message {
  id: string;
  message: string;
  sender: 'user' | 'ai';
  message_type: 'text' | 'system' | 'forwarded';
  created_at: string;
}

export const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [sessionId] = useState(() => crypto.randomUUID());
  const [showForwardDialog, setShowForwardDialog] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, isLoading } = useChatMessages(sessionId);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!currentMessage.trim() || isLoading) return;

    const userMessage = currentMessage.trim();
    setCurrentMessage('');

    await sendMessage(userMessage);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    {
      text: "Informations sur les consultations CNS",
      action: () => sendMessage("Pouvez-vous me donner des informations sur les consultations diététiques remboursées par la CNS ?")
    },
    {
      text: "Prendre rendez-vous sur Doctena",
      action: () => window.open('https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874', '_blank')
    },
    {
      text: "Contacter Gabriela",
      action: () => setShowForwardDialog(true)
    },
    {
      text: "Types de pathologies traitées",
      action: () => sendMessage("Quels types de pathologies et troubles alimentaires traitez-vous ?")
    }
  ];

  // Enhanced function to detect and convert URLs to clickable links
  const formatMessageWithLinks = (text: string) => {
    // Enhanced regex to match the specific format used by the AI
    const doctenaLinkRegex = /(Luxembourg|Ettelbruck|Insenborn)\s*-\s*(RDV Doctena|Programare Doctena|Book on Doctena|Termin auf Doctena)\s*:\s*(https:\/\/www\.doctena\.lu\/practitioner\/\d+)/g;
    
    // First handle the specific Doctena format
    let formattedText = text.replace(doctenaLinkRegex, (match, city, linkText, url) => {
      return `${city} - <a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 underline">${linkText} <span class="inline-flex items-center"><svg class="h-3 w-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></span></a>`;
    });
    
    // Then handle any remaining standalone URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    formattedText = formattedText.replace(urlRegex, (url) => {
      // Skip if this URL is already part of a formatted link
      if (formattedText.includes(`href="${url}"`)) {
        return url;
      }
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 underline break-all inline-flex items-center gap-1"><span class="break-all">Link</span><svg class="h-3 w-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a>`;
    });
    
    return <div dangerouslySetInnerHTML={{ __html: formattedText }} className="break-words" />;
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg z-50"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <>
      <Card className="fixed bottom-6 right-6 w-96 h-[600px] shadow-2xl z-50 flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 flex-shrink-0">
          <CardTitle className="text-lg">Assistant Diététique</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="h-6 w-6"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-4 space-y-4 min-h-0">
          {messages.length === 0 && (
            <div className="space-y-3 flex-shrink-0">
              <p className="text-sm text-muted-foreground">
                Bonjour ! Je suis l'assistant de Gabriela Ferent, diététicienne au Luxembourg. 
                Comment puis-je vous aider aujourd'hui ?
              </p>
              
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground">Actions rapides :</p>
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((action, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="cursor-pointer hover:bg-secondary/80 text-xs"
                      onClick={action.action}
                    >
                      {action.text}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="flex-1 min-h-0">
            <ScrollArea className="h-full pr-2">
              <div className="space-y-4 pr-2">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`flex items-start space-x-2 max-w-[85%] ${
                        message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}
                    >
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                      }`}>
                        {message.sender === 'user' ? (
                          <User className="h-4 w-4" />
                        ) : (
                          <Bot className="h-4 w-4" />
                        )}
                      </div>
                      <div
                        className={`rounded-lg px-3 py-2 text-sm break-words overflow-hidden ${
                          message.sender === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        <div className="whitespace-pre-wrap break-words text-wrap leading-relaxed">
                          {message.sender === 'ai' ? formatMessageWithLinks(message.message) : message.message}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                        <Bot className="h-4 w-4" />
                      </div>
                      <div className="bg-muted rounded-lg px-3 py-2 text-sm">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div ref={messagesEndRef} />
            </ScrollArea>
          </div>

          <div className="flex space-x-2 flex-shrink-0">
            <Textarea
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Tapez votre message..."
              className="flex-1 min-h-[40px] max-h-[100px] resize-none"
              rows={1}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!currentMessage.trim() || isLoading}
              size="icon"
              className="flex-shrink-0"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <ForwardMessageDialog
        open={showForwardDialog}
        onOpenChange={setShowForwardDialog}
        conversationId={sessionId}
      />
    </>
  );
};
