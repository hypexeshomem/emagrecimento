import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Shield, Gift, Clock, Users, TrendingUp, CheckCircle, AlertTriangle, X, Brain, Zap, Heart, MessageCircle } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(0);
  const [showNotification, setShowNotification] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Check for cookie consent
    const checkCookieConsent = () => {
      const cookies = document.cookie.split(';');
      const consentCookie = cookies.find(cookie => cookie.trim().startsWith('cookie_consent='));
      
      if (!consentCookie || !consentCookie.includes('accepted')) {
        setShowCookieBanner(true);
      }
    };

    // Run on DOMContentLoaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', checkCookieConsent);
    } else {
      checkCookieConsent();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', checkCookieConsent);
    };
  }, []);

  const acceptCookies = () => {
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    document.cookie = `cookie_consent=accepted; expires=${expiryDate.toUTCString()}; path=/`;
    setShowCookieBanner(false);
  };

  const notifications = [
    {
      name: "Maria - SP",
      action: "acaba de iniciar o Jejum com Café Preto.",
      subtitle: "Transformação em corpo e alma começando agora."
    },
    {
      name: "Juliana - RJ",
      action: "fez sua inscrição no propósito das 7h.",
      subtitle: "1 xícara. 1 oração. Um novo começo."
    },
    {
      name: "Patrícia - MG",
      action: "garantiu acesso ao método sagrado.",
      subtitle: "Escolheu emagrecer com fé e direção divina."
    },
    {
      name: "Ana - DF",
      action: "entrou no protocolo espiritual agora mesmo.",
      subtitle: "Decidiu cuidar do corpo com a Palavra como guia."
    },
    {
      name: "Fernanda - BA",
      action: "começou o propósito de 14 dias.",
      subtitle: "Café, Bíblia e foco... O milagre começa por dentro."
    },
    {
      name: "Simone - SC",
      action: "acaba de acessar o guia completo.",
      subtitle: "+1 mulher quebrando ciclos de ansiedade com fé."
    },
    {
      name: "Luciana - AM",
      action: "iniciou seu ritual de jejum e oração.",
      subtitle: "O chamado foi ouvido. O corpo vai responder."
    },
    {
      name: "Camila - CE",
      action: "garantiu a oferta especial de R$19,70.",
      subtitle: "Fez da fé seu ponto de partida."
    },
    {
      name: "Débora - GO",
      action: "começou o plano de 30 dias.",
      subtitle: "Renovando o espírito e secando o corpo."
    },
    {
      name: "Talita - PE",
      action: "escolheu transformar a vida em oração.",
      subtitle: "Agora é ela, Deus e uma xícara de café."
    }
  ];

  // Cycle through notifications
  useEffect(() => {
    const interval = setInterval(() => {
      setShowNotification(false);
      setTimeout(() => {
        setCurrentNotification((prev) => (prev + 1) % notifications.length);
        setShowNotification(true);
      }, 500);
    }, 8000); // Change notification every 8 seconds

    return () => clearInterval(interval);
  }, [notifications.length]);

  const beforeAfterImages = [
    {
      src: 'https://i.postimg.cc/W1jHs5bR/CONVERTER-1.webp',
      alt: 'Antes e Depois 1',
      result: 'Perdeu 7kg em 2 semanas'
    },
    {
      src: 'https://i.postimg.cc/jdy1VpTQ/CONVERTER-2.webp',
      alt: 'Antes e Depois 2',
      result: 'Perdeu 5kg em 10 dias'
    },
    {
      src: 'https://i.postimg.cc/vmZ2VDV3/CONVERTER-3.webp',
      alt: 'Antes e Depois 3',
      result: 'Perdeu 6kg em 3 semanas'
    },
    {
      src: 'https://i.postimg.cc/YC3y0Qhv/CONVERTER-4.webp',
      alt: 'Antes e Depois 4',
      result: 'Perdeu 4kg em 1 semana'
    }
  ];

  const testimonials = [
    {
      image: 'https://i.postimg.cc/CKrPHYCY/DEPOIMENTO-1.webp',
      text: 'Comprei com objetivo de emagrecer, mas além disso, reestabeleci minha fé. Em 3 dias minhas enxaquecas cessaram. Perdi 6,4kg em 2 semanas e encontrei paz interior.',
      rating: 5
    },
    {
      image: 'https://i.postimg.cc/8cMZS62P/DEPOIMENTO-2.webp',
      text: 'Cada manhã com café e oração mudou minha vida. Não é só sobre o peso, é sobre propósito. Me sinto renovada.',
      rating: 5
    },
    {
      image: 'https://i.postimg.cc/j5W8M9vf/DEPOIMENTO-3.webp',
      text: 'Deus usou esse protocolo para me libertar da ansiedade alimentar. Perdi 5kg e ganhei uma nova perspectiva de vida.',
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToOffer = () => {
    const offerSection = document.querySelector('#offer-box');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* BANNER DE COOKIES */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 p-4 shadow-2xl">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1 text-center md:text-left">
              <p className="text-white text-sm md:text-base">
                Este site utiliza cookies para garantir que você tenha a melhor experiência. Ao continuar, você aceita o uso de cookies conforme nossa Política de Privacidade.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={acceptCookies}
                className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-6 py-2 rounded-full transition-colors duration-300"
              >
                Aceitar
              </button>
              <button
                onClick={() => setShowCookieBanner(false)}
                className="text-gray-400 hover:text-white transition-colors duration-300 p-1"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* NOTIFICAÇÃO DE VENDAS */}
      <div className={`fixed top-3 left-3 md:top-6 md:left-6 z-50 transition-all duration-500 ${showNotification ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="bg-gradient-to-r from-orange-900/95 to-amber-800/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-2 md:p-4 shadow-2xl border border-orange-500/20 max-w-xs md:max-w-sm">
          {/* Brilho sutil */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-yellow-400/10 rounded-2xl blur-xl -z-10"></div>
          
          <div className="flex items-start space-x-2 md:space-x-3">
            {/* Ícone cristão */}
            <div className="flex-shrink-0 w-6 h-6 md:w-10 md:h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-xs md:text-lg">✝️</span>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-1 md:space-x-2 mb-1">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs md:text-xs text-orange-200 font-medium uppercase tracking-wide">Agora</span>
              </div>
              
              <p className="text-white font-bold text-xs md:text-sm leading-tight mb-1">
                <span className="text-orange-300">{notifications[currentNotification].name}</span> {notifications[currentNotification].action}
              </p>
              
              <p className="text-orange-100/80 text-xs md:text-xs leading-relaxed italic hidden md:block">
                "{notifications[currentNotification].subtitle}"
              </p>
            </div>
            
            {/* Botão fechar */}
            <button 
              onClick={() => setShowNotification(false)}
              className="flex-shrink-0 text-orange-300 hover:text-white transition-colors p-0.5 md:p-1"
            >
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* SEÇÃO 1 - CHAMADA ESPIRITUAL EMOCIONAL */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10"></div>
        
        <div className={`container mx-auto px-4 py-20 z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="block text-white">PROPÓSITO SAGRADO</span>
              <span className="block text-orange-500">QUE TRANSFORMA</span>
              <span className="block text-white">CORPO E ESPÍRITO</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-bold text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Mulheres estão emagrecendo até <span className="text-orange-500">5kg por semana</span> com um ritual simples:<br/>
              <span className="text-yellow-500">Jejum espiritual com café preto</span> — e a <span className="text-white">Palavra de Deus</span> como guia.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-12">
            <div className="w-full max-w-3xl mx-auto">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <script src="https://fast.wistia.com/player.js" async></script>
                <script src="https://fast.wistia.com/embed/gc9ywrd50y.js" async type="module"></script>
                <style dangerouslySetInnerHTML={{
                  __html: `
                    wistia-player[media-id='gc9ywrd50y']:not(:defined) { 
                      background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/gc9ywrd50y/swatch'); 
                      display: block; 
                      filter: blur(5px); 
                      padding-top:100.0%; 
                    }
                  `
                }} />
                <wistia-player media-id="gc9ywrd50y" aspect="1.0"></wistia-player>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={scrollToOffer}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide mb-6"
            >
              ☕ QUERO EMAGRECER EM PROPÓSITO COM DEUS!
            </button>
            
            <div className="text-center text-gray-300 text-lg">
              🙏 Jejum guiado | ☕ Café preto natural | 📖 Bíblia como âncora
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 - IDENTIFICAÇÃO COM A DOR */}
      <section className="py-20 bg-gradient-to-br from-red-500/10 via-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <div className="w-24 h-24 mx-auto mb-8 bg-red-500/20 rounded-full flex items-center justify-center">
                <span className="text-4xl">😔</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">
                VOCÊ RECONHECE ESSES <span className="text-red-500">SINAIS</span>?
              </h2>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <p className="text-lg text-gray-300">Cansaço ao acordar, mesmo dormindo 8 horas</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <p className="text-lg text-gray-300">Sensação constante de inchaço</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <p className="text-lg text-gray-300">Perda de foco durante o dia</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <p className="text-lg text-gray-300">Desânimo espiritual</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <p className="text-lg text-gray-300">Ansiedade alimentar</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <p className="text-lg text-gray-300">Baixa autoestima</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Se isso é familiar, <span className="text-orange-500">você não está sozinha</span>.
                </p>
              </div>
            </div>
            
            <button 
              onClick={scrollToOffer}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide">
              ☕ QUERO SAIR DESSE CICLO
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 - CONFLITO COM O MERCADO ATUAL */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <div className="w-24 h-24 mx-auto mb-8 bg-red-500/20 rounded-full flex items-center justify-center">
                <X className="w-12 h-12 text-red-500" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">
                PARE DE CAIR NAS <span className="text-red-500">MESMAS ARMADILHAS</span>
              </h2>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 mx-auto bg-red-500/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🥗</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <X className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-red-500 mb-2">Dietas Genéricas</h3>
                  <p className="text-gray-300">Funcionam por 2 semanas, depois você volta ao peso anterior</p>
                </div>
                
                <div className="text-center">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 mx-auto bg-red-500/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🍵</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <X className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-red-500 mb-2">Chás Milagrosos</h3>
                  <p className="text-gray-300">Promessas vazias que só drenam sua carteira</p>
                </div>
                
                <div className="text-center">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 mx-auto bg-red-500/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💊</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <X className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-red-500 mb-2">Jejuns Aleatórios</h3>
                  <p className="text-gray-300">Sem propósito e ciência, tudo é temporário</p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-xl md:text-2xl text-white leading-relaxed">
                  <span className="text-red-500 font-bold">Sem propósito e ciência</span>, qualquer método é apenas mais uma tentativa frustrada.
                </p>
              </div>
            </div>
            
            <button 
              onClick={scrollToOffer}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide">
              ☕ QUERO UM MÉTODO REAL
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 - INTRODUÇÃO AO MÉTODO */}
      <section className="py-20 bg-gradient-to-br from-orange-500/10 via-black to-yellow-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">☕</span>
                </div>
                <Zap className="w-8 h-8 text-yellow-500" />
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">⚡</span>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">
                CONHEÇA O <span className="text-orange-500">JEJUM COM CAFÉ PRETO</span>
              </h2>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12">
              <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                <span className="text-orange-500 font-bold">Jejum com Café Preto</span> é um protocolo <span className="text-yellow-500 font-bold">simples</span>, <span className="text-green-500 font-bold">ancestral</span> e <span className="text-blue-500 font-bold">validado pela ciência</span>.
              </p>
              
              <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                Nada de modinha.
              </p>
              
              <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-xl p-6 mb-8">
                <p className="text-xl md:text-2xl text-white leading-relaxed">
                  Você acorda, toma um café puro e deixa o <span className="text-orange-500 font-bold">corpo</span> e a <span className="text-yellow-500 font-bold">mente</span> entrarem em modo de <span className="text-green-500 font-bold">cura</span>.
                </p>
              </div>
            </div>
            
            <button 
              onClick={scrollToOffer}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide">
              ☕ QUERO CONHECER O MÉTODO
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 - EXPLICAÇÃO CIENTÍFICA */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-white">
              <span className="text-blue-500">CIÊNCIA</span> + <span className="text-yellow-500">FÉ</span> = <span className="text-green-500">RESULTADO</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Bloco Científico */}
              <div className="bg-blue-500/10 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Brain className="w-12 h-12 text-blue-500 mr-4" />
                  <h3 className="text-2xl font-black text-blue-500">BLOCO CIENTÍFICO</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">🔥</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Lipólise</h4>
                      <p className="text-gray-300">Queima gordura sem atacar músculos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">⚡</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Aumento de Dopamina</h4>
                      <p className="text-gray-300">Mais foco e energia natural</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">🧬</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Autofagia</h4>
                      <p className="text-gray-300">Limpeza celular profunda</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">📊</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Estabilidade de Insulina</h4>
                      <p className="text-gray-300">Sem compulsão alimentar</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bloco Espiritual */}
              <div className="bg-yellow-500/10 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Heart className="w-12 h-12 text-yellow-500 mr-4" />
                  <h3 className="text-2xl font-black text-yellow-500">BLOCO ESPIRITUAL</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-black text-sm font-bold">📖</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Jejum como Prática Bíblica</h4>
                      <p className="text-gray-300">Tradição milenar de purificação</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-black text-sm font-bold">🙏</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Conexão Profunda com Deus</h4>
                      <p className="text-gray-300">Fortalecimento da fé e propósito</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-black text-sm font-bold">✨</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Renovação Interior</h4>
                      <p className="text-gray-300">Transformação que vem de dentro</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-black text-sm font-bold">💪</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Disciplina Espiritual</h4>
                      <p className="text-gray-300">Fortalecimento da vontade</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <button 
                onClick={scrollToOffer}
                className="bg-gradient-to-r from-blue-500 to-yellow-500 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-blue-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide">
                ☕ QUERO ALIAR CIÊNCIA E FÉ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 - CAFÉ GPT */}
      <section className="py-20 bg-gradient-to-br from-purple-500/10 via-black to-blue-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <div className="w-24 h-24 mx-auto mb-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-12 h-12 text-purple-500" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">
                CONHEÇA A <span className="text-purple-500">CAFÉ GPT</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                A IA que acompanha você 24h, enviando versículos, dicas alimentares, motivação e monitoramento do progresso.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-purple-500 mb-6">Benefícios da Café GPT:</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <p className="text-gray-300">Motivação diária personalizada</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <p className="text-gray-300">Versículo e reflexão matinal</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <p className="text-gray-300">Ajustes personalizados no protocolo</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <p className="text-gray-300">Check-ins emocionais</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <p className="text-gray-300">Receitas leves e saudáveis</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <p className="text-gray-300">Lembretes de quebra de jejum</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-500/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Exemplo de Conversa:</h3>
                <div className="space-y-3 text-left">
                  <div className="bg-purple-500/20 rounded-lg p-3">
                    <p className="text-sm text-purple-300 font-semibold">Café GPT</p>
                    <p className="text-white">Bom dia! Como você está se sentindo hoje? 🌅</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3 ml-4">
                    <p className="text-sm text-gray-400 font-semibold">Você</p>
                    <p className="text-white">Meio desanimada...</p>
                  </div>
                  <div className="bg-purple-500/20 rounded-lg p-3">
                    <p className="text-sm text-purple-300 font-semibold">Café GPT</p>
                    <p className="text-white">Entendo. Lembre-se: "Posso todas as coisas naquele que me fortalece" (Filipenses 4:13). Que tal começarmos com seu café e uma oração? ☕🙏</p>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              onClick={scrollToOffer}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide">
              ☕ QUERO O SUPORTE DA CAFÉ GPT
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7 - COMO FUNCIONA O PROTOCOLO */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-white">
              COMO FUNCIONA O <span className="text-orange-500">PROTOCOLO</span>
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 flex items-center space-x-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-xl">1</span>
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center space-x-3 mb-2">
                    <Clock className="w-6 h-6 text-orange-500" />
                    <h3 className="text-xl font-bold text-white">Café em Jejum</h3>
                  </div>
                  <p className="text-gray-300">Acorde e tome seu café preto, sem açúcar ou adoçante</p>
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 flex items-center space-x-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-black text-xl">2</span>
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">📖</span>
                    <h3 className="text-xl font-bold text-white">Oração Devocional</h3>
                  </div>
                  <p className="text-gray-300">Dedique 10 minutos para oração e leitura bíblica</p>
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 flex items-center space-x-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-xl">3</span>
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">⏰</span>
                    <h3 className="text-xl font-bold text-white">Jejum de 12 a 16h</h3>
                  </div>
                  <p className="text-gray-300">Mantenha o jejum pelo período determinado</p>
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 flex items-center space-x-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-xl">4</span>
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">🍽️</span>
                    <h3 className="text-xl font-bold text-white">Quebra Leve</h3>
                  </div>
                  <p className="text-gray-300">Alimente-se de forma consciente e saudável</p>
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 flex items-center space-x-6">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-xl">5</span>
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center space-x-3 mb-2">
                    <MessageCircle className="w-6 h-6 text-purple-500" />
                    <h3 className="text-xl font-bold text-white">Mensagem da Café GPT</h3>
                  </div>
                  <p className="text-gray-300">Receba orientação personalizada e motivação</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <button 
                onClick={scrollToOffer}
                className="bg-gradient-to-r from-orange-500 to-purple-500 text-white font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-orange-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide">
                ☕ QUERO SEGUIR ESSE RITUAL
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 8 - AUTORIDADE DA CRIADORA */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Imagem da Especialista */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <img 
                    src="https://i.postimg.cc/CxGdqxgB/expert-jejum-cafe.webp" 
                    alt="Dra. Especialista em Nutrição Funcional"
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm">
                    +8 anos de experiência
                  </div>
                </div>
              </div>
              
              {/* Conteúdo */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">
                  MÉTODO CRIADO POR QUEM TEM <span className="text-orange-500">CIÊNCIA NA MENTE</span> E <span className="text-yellow-500">DEUS NO CORAÇÃO</span>
                </h2>
                
                <div className="space-y-6 text-gray-300">
                  <div className="bg-gray-800/50 rounded-xl p-6 border-l-4 border-orange-500">
                    <p className="text-lg leading-relaxed text-white font-medium">
                      "Eu atendo mulheres cristãs todos os dias.<br/>
                      Percebi que não é só sobre perder peso...<br/>
                      É sobre resgatar <span className="text-orange-500">autoestima</span>, <span className="text-yellow-500">fé</span> e <span className="text-green-500">saúde</span>.<br/>
                      O 'Jejum com Café Preto\' une a ciência com o propósito espiritual."
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="bg-orange-500/20 px-4 py-2 rounded-full">
                      <span className="text-orange-500 font-semibold">✓ Nutrição Clínica Funcional</span>
                    </div>
                    <div className="bg-yellow-500/20 px-4 py-2 rounded-full">
                      <span className="text-yellow-500 font-semibold">✓ Especialista em Emagrecimento</span>
                    </div>
                    <div className="bg-green-500/20 px-4 py-2 rounded-full">
                      <span className="text-green-500 font-semibold">✓ +19.500 mulheres atendidas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 9 - FAQ */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-white">
            PERGUNTAS <span className="text-orange-500">FREQUENTES</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Jejum com café preto é seguro?",
                answer: "Sim, é um método natural usado há séculos. Sempre consulte um médico se tiver condições específicas."
              },
              {
                question: "Posso tomar mais de uma xícara?",
                answer: "O protocolo recomenda 1 xícara em jejum. Mais pode ser consumido durante o dia conforme tolerância."
              },
              {
                question: "Posso adaptar o protocolo?",
                answer: "Sim, o guia inclui adaptações para diferentes perfis e necessidades."
              },
              {
                question: "Como acesso o material?",
                answer: "Imediatamente após a compra, você recebe o acesso por email."
              },
              {
                question: "Tem grupo de suporte?",
                answer: "Sim, grupo exclusivo no WhatsApp para os primeiros 300 participantes."
              },
              {
                question: "Funciona mesmo se eu não fizer dieta?",
                answer: "O protocolo é focado no jejum com café. Não requer dieta restritiva."
              },
              {
                question: "Ajuda com dores de cabeça ou enxaqueca?",
                answer: "Muitas mulheres relataram redução ou desaparecimento das crises, principalmente ligadas ao jejum e ao café puro, que reduz inflamações. Resultados podem variar."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">{item.question}</h3>
                <p className="text-gray-300 text-lg">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 10 - RESULTADOS REAIS */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-white">
            RESULTADOS <span className="text-orange-500">REAIS</span>
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div 
              className="overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {beforeAfterImages.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2 md:px-4">
                    <div className="bg-gray-800 rounded-2xl p-4 md:p-6 text-center shadow-2xl">
                      <img 
                        src={item.src} 
                        alt={item.alt} 
                        className="w-full h-auto rounded-xl mb-4 shadow-lg max-h-96 object-cover"
                      />
                      <p className="text-yellow-500 font-bold text-lg md:text-xl">{item.result}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Botões de navegação - melhor visibilidade */}
            <button 
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-black p-2 md:p-3 rounded-full hover:bg-orange-600 transition-colors shadow-lg z-10 opacity-90 hover:opacity-100"
            >
              <ChevronLeft size={20} className="md:w-6 md:h-6" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-black p-2 md:p-3 rounded-full hover:bg-orange-600 transition-colors shadow-lg z-10 opacity-90 hover:opacity-100"
            >
              <ChevronRight size={20} className="md:w-6 md:h-6" />
            </button>
            
            {/* Indicadores de slide */}
            <div className="flex justify-center mt-6 space-x-2">
              {beforeAfterImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-orange-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            
            {/* Instrução de swipe para mobile */}
            <p className="text-center text-gray-400 text-sm mt-4 md:hidden">
              👆 Deslize para ver mais resultados
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 11 - DEPOIMENTOS */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-8 text-white">
            TESTEMUNHOS DE <span className="text-orange-500">FÉ E RESULTADO</span>
          </h2>
          
          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            Mulheres comuns, com fé firme, que transformaram o corpo com um ato de obediência diária.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src={testimonial.image} 
                  alt={`Depoimento ${index + 1}`}
                  className="w-full h-auto rounded-xl mb-4 shadow-lg"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 12 - OFERTA */}
      <section id="offer-section" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-white">
              UM GUIA PARA O <span className="text-orange-500">CORPO</span>, UM CAMINHO PARA A <span className="text-yellow-500">MENTE</span>, UMA FERRAMENTA PARA A <span className="text-green-500">FÉ</span>
            </h2>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12">
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                {[
                  "📜 Método divino de jejum com princípios naturais e espirituais",
                  "🕊️ Roteiro devocional para 7, 14 e 30 dias",
                  "🍽️ Ajustes de rotina sem dieta restritiva",
                  "📖 Versículos e orações para manter o foco",
                  "🔥 Calendário visual de progresso"
                ].map((item, index) => (
                  <p key={index} className="text-lg md:text-xl text-gray-300">{item}</p>
                ))}
              </div>
            </div>
            
            <div id="offer-box" className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl p-8 md:p-12 mb-12">
              <img 
                src="https://i.postimg.cc/sxP7D9wx/jejum-cafe-preto-semfundo.webp" 
                alt="Mockup do Protocolo"
                className="w-full max-w-2xl mx-auto mb-8 rounded-2xl shadow-2xl"
              />
              
              <h3 className="text-3xl md:text-4xl font-black mb-8 text-white">
                💣 TUDO ISSO POR APENAS:
              </h3>
              
              <div className="mb-8">
                <p className="text-2xl text-gray-400 line-through mb-2">De: R$97</p>
                <p className="text-5xl md:text-6xl font-black text-orange-500 mb-2">R$19,70</p>
                <p className="text-xl text-gray-300">à vista </p>
              </div>
              
              <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide">
                <a href="https://go.disruptybr.com.br/q1yutawwn5" target="_blank" rel="noopener noreferrer" className="block">
                  💡 SIM, QUERO O PROTOCOLO SAGRADO DE JEJUM AGORA
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 13 - GARANTIA */}
      <section className="py-20 bg-gradient-to-br from-green-500/10 via-black to-blue-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-white">
              UMA PROMESSA TRIPLA: <span className="text-green-500">RESULTADO</span>, <span className="text-blue-500">APOIO</span> E <span className="text-yellow-500">HONESTIDADE</span>
            </h2>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12">
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Se em 7 dias você não se sentir mais leve, animada e motivada...<br/>
                Seu dinheiro é devolvido. Sem julgamentos. Sem enrolação.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    level: "Nível 1",
                    text: "Se não perder 2kg em 7 dias, reembolso imediato",
                    color: "text-green-500"
                  },
                  {
                    level: "Nível 2",
                    text: "Fica com todos os bônus mesmo pedindo reembolso",
                    color: "text-blue-500"
                  },
                  {
                    level: "Nível 3",
                    text: "Suporte 1:1 com especialista por 3 dias",
                    color: "text-purple-500"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <Shield className={`w-8 h-8 ${item.color}`} />
                    <div className="text-left">
                      <h3 className={`text-xl font-bold ${item.color}`}>{item.level}</h3>
                      <p className="text-gray-300">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                  SEM RISCO. SÓ RESULTADO.
                </p>
                <p className="text-lg text-gray-300">
                  🔰 Proteção Completa | Compra Segura 🔰
                </p>
              </div>
            </div>
            
            <button 
              onClick={scrollToOffer}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide">
              💡 SIM, QUERO O PROTOCOLO SAGRADO DE JEJUM AGORA
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 14 - URGÊNCIA FINAL */}
      <section className="py-20 bg-gradient-to-br from-red-500/10 via-black to-orange-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-white">
              VOCÊ NÃO CHEGOU AQUI <span className="text-orange-500">POR ACASO</span>. É UM <span className="text-yellow-500">CHAMADO</span>.
            </h2>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12">
              <div className="space-y-6">
                {[
                  "⏰ Comece ainda hoje o propósito das 7 manhãs",
                  "📉 Resultados físicos e espirituais em 48h",
                  "🎁 Bônus e grupo exclusivo para quem decidir agora"
                ].map((item, index) => (
                  <p key={index} className="text-xl md:text-2xl font-bold text-white">{item}</p>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <button 
                onClick={scrollToOffer}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide w-full md:w-auto">
                SIM, EU QUERO INICIAR MEU JEJUM COM CAFÉ E COM DEUS!
              </button>
              
              <p className="text-sm text-gray-400">
                <Clock className="w-4 h-4 inline mr-1" />
                Oferta por tempo limitado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO - NÚMEROS IMPACTANTES */}
      <section className="py-20 bg-gradient-to-br from-orange-500/10 via-black to-yellow-500/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-white">
            NÚMEROS QUE <span className="text-orange-500">IMPRESSIONAM</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center">
              <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-3xl font-black text-white mb-2">+19.500</h3>
              <p className="text-gray-300">pessoas testaram o protocolo em 2025</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center">
              <TrendingUp className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-3xl font-black text-white mb-2">92%</h3>
              <p className="text-gray-300">relataram perda de peso nos primeiros 7 dias</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-3xl font-black text-white mb-2">87%</h3>
              <p className="text-gray-300">afirmaram melhora na disposição, no humor e redução de dores como enxaqueca</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center">
              <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-3xl font-black text-white mb-2">9.4</h3>
              <p className="text-gray-300">de satisfação média nas avaliações</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center md:col-span-2 lg:col-span-2">
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl mr-4">☕</span>
                <span className="text-4xl">→</span>
                <span className="text-4xl ml-4">💪</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">1 copo de café</h3>
              <p className="text-gray-300">1 corpo em transformação</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO - BÔNUS EXCLUSIVOS */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-8 text-white">
            PRESENTES PARA <span className="text-orange-500">FORTALECER SUA JORNADA</span>
          </h2>
          
          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            Receba ferramentas extras para fortalecer corpo, alma e propósito
          </p>
          
          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            {[
              {
                icon: <Gift className="w-8 h-8 text-yellow-500" />,
                title: "📓 Receitas com Café para quebrar a gordura e fortalecer a mente"
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-green-500" />,
                title: "✅ Checklist espiritual e físico diário"
              },
              {
                icon: <Users className="w-8 h-8 text-blue-500" />,
                title: "👭 Grupo de apoio com outras mulheres de fé"
              }
            ].map((bonus, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 flex items-center space-x-4">
                {bonus.icon}
                <h3 className="text-xl font-bold text-white">{bonus.title}</h3>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide">
              <span onClick={scrollToOffer} className="cursor-pointer">
                💡 SIM, QUERO O PROTOCOLO SAGRADO DE JEJUM AGORA
              </span>
            </button>
        
          </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500">
            © 2025 Protocolo Jejum com Café Preto. Todos os direitos reservados.
          </p>
        </div>
      </footer>

   {/* BOTÃO FLUTUANTE FIXO MELHORADO */}
<div className="fixed bottom-20 right-4 left-4 md:bottom-6 md:right-6 md:left-auto z-[999] flex justify-center md:justify-end">
  <button
    onClick={scrollToOffer}
    className="w-full md:w-auto bg-[#4D3319] text-[#FFF7E6] font-medium py-3.5 px-6 rounded-full shadow-lg hover:bg-[#6E4B2A] hover:font-bold transition-all duration-300 transform hover:scale-105"
    style={{
      fontFamily: "'Poppins', sans-serif",
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
    }}
  >
    <div className="text-center">
      <div className="text-sm font-semibold">Entrar no Propósito Agora</div>
      <div className="text-xs opacity-90 mt-1">Clique aqui e inicie o Jejum com Café Preto</div>
    </div>
  </button>
</div>

export default App;