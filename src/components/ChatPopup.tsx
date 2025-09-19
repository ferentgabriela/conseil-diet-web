import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X, MessageCircle, Send, User, Bot, ExternalLink } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useChatHistory } from '@/hooks/useChatHistory';
import { useChatSend } from '@/hooks/useChatSend';
import { ForwardMessageDialog } from './ForwardMessageDialog';
interface Message {
  id: string;
  message: string;
  sender: 'user' | 'ai';
  message_type: 'text' | 'system' | 'forwarded';
  created_at: string;
}
interface ChatPopupProps {
  isOpen?: boolean;
  onToggle?: () => void;
}
export const ChatPopup = ({
  isOpen: externalIsOpen,
  onToggle
}: ChatPopupProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [sessionId] = useState(() => {
    if (self.crypto?.randomUUID) {
      return self.crypto.randomUUID();
    }
    // Secure fallback that generates >= 10 characters
    return 'sec-' + Date.now().toString(36) + '-' + Math.random().toString(36).substring(2);
  });
  const [showForwardDialog, setShowForwardDialog] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const toggleOpen = onToggle || (() => setInternalIsOpen(!internalIsOpen));
  const { messages, setMessages, isLoading: historyLoading } = useChatHistory(sessionId);
  const { sendMessage, isLoading: sendLoading } = useChatSend(sessionId, (newMessage) => {
    setMessages(prev => [...prev, newMessage]);
  });
  const isLoading = historyLoading || sendLoading;
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
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
  const quickActions = [{
    text: "Informations sur les consultations CNS",
    action: () => sendMessage("Pouvez-vous me donner des informations sur les consultations diététiques remboursées par la CNS ?")
  }, {
    text: "Prendre rendez-vous sur Doctena",
    action: () => {
      // For now, scroll to cabinets section so user can choose location
      const cabinetsSection = document.getElementById('cabinets');
      if (cabinetsSection) {
        cabinetsSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }, {
    text: "Contacter Gabriela",
    action: () => setShowForwardDialog(true)
  }, {
    text: "Types de pathologies traitées",
    action: () => sendMessage("Quels types de pathologies et troubles alimentaires traitez-vous ?")
  }];

  // Enhanced function to parse and render text with clickable links
  const formatMessageWithLinks = (text: string) => {
    // Updated regex to match the new URL format with anchor fragments
    const doctenaLinkRegex = /(Luxembourg|Ettelbruck|Insenborn)\s*-\s*(RDV Doctena|Programare Doctena|Book on Doctena|Termin auf Doctena)\s*:\s*(https:\/\/www\.doctena\.lu\/en\/specialty\/dietitian\/gabriela-ferent-1748874#\d+)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    // First handle the specific Doctena format
    while ((match = doctenaLinkRegex.exec(text)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }

      // Add the formatted link
      const [fullMatch, city, linkText, url] = match;
      parts.push(<span key={match.index}>
          {city} - 
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 underline inline-flex items-center gap-1 ml-1" title={`Voir l'adresse du cabinet de ${city} sur la carte`}>
            {linkText}
            <ExternalLink className="h-3 w-3" />
          </a>
        </span>);
      lastIndex = match.index + fullMatch.length;
    }

    // Add remaining text after last match
    if (lastIndex < text.length) {
      let remainingText = text.slice(lastIndex);

      // Handle any standalone URLs in the remaining text
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      const urlParts = [];
      let urlLastIndex = 0;
      let urlMatch;
      while ((urlMatch = urlRegex.exec(remainingText)) !== null) {
        // Add text before the URL
        if (urlMatch.index > urlLastIndex) {
          urlParts.push(remainingText.slice(urlLastIndex, urlMatch.index));
        }

        // Add the URL as a link
        urlParts.push(<a key={lastIndex + urlMatch.index} href={urlMatch[0]} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 underline inline-flex items-center gap-1">
            Link
            <ExternalLink className="h-3 w-3" />
          </a>);
        urlLastIndex = urlMatch.index + urlMatch[0].length;
      }

      // Add remaining text after last URL
      if (urlLastIndex < remainingText.length) {
        urlParts.push(remainingText.slice(urlLastIndex));
      }
      parts.push(...urlParts);
    }
    return <span className="break-words">{parts}</span>;
  };
  if (!isOpen) {
    return <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center">        
        {/* Human-centered Avatar Chat Button */}
        <div className="relative">
          <Button onClick={toggleOpen} className="h-20 w-20 relative bg-transparent hover:bg-transparent shadow-none hover:shadow-none z-50 overflow-visible group transition-all duration-500 hover:scale-125 border-0 p-0" style={{
          animation: 'gentleBreath 4s ease-in-out infinite'
        }} size="icon">
            {/* Leaf image with transparent background */}
            <img 
              src="/assets/chat-leaf-optimized.webp" 
              alt="Assistant IA de Gabriela Ferent pour répondre aux questions nutritionnelles"
              className="w-full h-full object-contain transition-all duration-300"
              style={{ background: 'transparent' }}
            />
          </Button>
          
          {/* Question text */}
          
        </div>
      </div>;
  }
  return <>
      <Card className="fixed bottom-8 right-8 w-[576px] h-[600px] shadow-2xl z-50 flex flex-col border-green-200 rounded-2xl overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 flex-shrink-0 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-200">
          <div className="flex items-center gap-3">
            
            <div>
              
              
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={toggleOpen} className="h-8 w-8 text-green-600 hover:text-green-700 hover:bg-green-100 rounded-xl">
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-4 space-y-4 min-h-0">
          {messages.length === 0 && <div className="space-y-3 flex-shrink-0">
              <div className="flex items-center gap-2 p-3 bg-green-50 rounded-2xl border border-green-200">
                <Avatar className="h-6 w-6">
                  <AvatarFallback className="bg-green-100 text-green-600 text-sm">
                    🤖
                  </AvatarFallback>
                </Avatar>
                <p className="text-sm text-green-800">
                  Je suis l'assistant de votre diététicienne. Posez-moi une question ou choisissez une action rapide ci-dessous.
                </p>
              </div>
              
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground">💡 Actions rapides :</p>
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((action, index) => <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-green-100 text-xs bg-green-50 text-green-700 border-green-200 rounded-xl transition-all hover:scale-105" onClick={action.action}>
                      {action.text}
                    </Badge>)}
                </div>
              </div>
            </div>}

          <div className="flex-1 min-h-0">
            <ScrollArea className="h-full pr-2">
              <div className="space-y-4 pr-2">
                {messages.map(message => <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex items-start space-x-2 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`flex-shrink-0 ${message.sender === 'user' ? '' : ''}`}>
                        {message.sender === 'user' ? <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">
                            <User className="h-4 w-4" />
                          </div> : <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-green-100 text-green-600 text-lg">
                              🤖
                            </AvatarFallback>
                          </Avatar>}
                      </div>
                      <div className={`rounded-2xl px-4 py-3 text-sm break-words overflow-hidden ${message.sender === 'user' ? 'bg-green-600 text-white' : 'bg-green-50 text-green-900 border border-green-200'}`}>
                        <div className="whitespace-pre-wrap break-words text-wrap leading-relaxed">
                          {message.sender === 'assistant' ? formatMessageWithLinks(message.message) : message.message}
                        </div>
                      </div>
                    </div>
                  </div>)}
                
                {isLoading && <div className="flex justify-start">
                    <div className="flex items-start space-x-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-green-100 text-green-600 text-lg">
                          🤖
                        </AvatarFallback>
                      </Avatar>
                      <div className="bg-green-50 border border-green-200 rounded-2xl px-4 py-3 text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{
                          animationDelay: '0.1s'
                        }}></div>
                            <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{
                          animationDelay: '0.2s'
                        }}></div>
                          </div>
                          <span className="text-green-700 text-xs">en train de penser...</span>
                        </div>
                      </div>
                    </div>
                  </div>}
              </div>
              <div ref={messagesEndRef} />
            </ScrollArea>
          </div>

          <div className="flex space-x-2 flex-shrink-0">
            <Textarea value={currentMessage} onChange={e => setCurrentMessage(e.target.value)} onKeyPress={handleKeyPress} placeholder="Tapez votre message..." className="flex-1 min-h-[40px] max-h-[100px] resize-none border-green-200 focus:border-green-400 focus:ring-green-400 rounded-2xl" rows={1} />
            <Button onClick={handleSendMessage} disabled={!currentMessage.trim() || isLoading} size="icon" className="flex-shrink-0 bg-green-600 hover:bg-green-700 rounded-2xl">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <ForwardMessageDialog open={showForwardDialog} onOpenChange={setShowForwardDialog} conversationId={sessionId} />
    </>;
};