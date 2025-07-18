import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Shield, Gift, Clock, Users, TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      text: 'Emagreci 6,4kg em 2 semanas! Nunca imaginei que o café seria meu maior aliado.',
      rating: 5
    },
    {
      image: 'https://i.postimg.cc/8cMZS62P/DEPOIMENTO-2.webp',
      text: 'Eu acordei magra, porra. Esse protocolo virou minha rotina.',
      rating: 5
    },
    {
      image: 'https://i.postimg.cc/j5W8M9vf/DEPOIMENTO-3.webp',
      text: 'Sem fome, sem ansiedade. Resultado real e rápido.',
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
  };

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEÇÃO 1 - HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10"></div>
        
        <div className={`container mx-auto px-4 py-20 z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="block text-white">DESCOBERTA NATURAL</span>
              <span className="block text-orange-500">ENGANA O CORPO</span>
              <span className="block text-white">E DERRETE GORDURA</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-bold text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Veja Como Mulheres Estão Perdendo Até <span className="text-orange-500">5Kg por Semana</span> 
              Com Apenas <span className="text-yellow-500">1 Copo de Café Preto por Dia</span>
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-12">
            <div className="w-full max-w-3xl mx-auto">
              <img 
                src="https://i.postimg.cc/sX0kX7HY/jejum-cafe-preto.webp" 
                alt="Jejum com Café Preto" 
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={ScrollToTop}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
            >
              🔥 QUERO ACESSAR O PROTOCOLO AGORA 🔥
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 - CARROSSEL DE ANTES E DEPOIS */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-white">
            RESULTADOS <span className="text-orange-500">REAIS</span>
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {beforeAfterImages.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-800 rounded-2xl p-6 text-center">
                      <img 
                        src={item.src} 
                        alt={item.alt} 
                        className="w-full h-auto rounded-xl mb-4 shadow-lg"
                      />
                      <p className="text-yellow-500 font-bold text-lg">{item.result}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-black p-3 rounded-full hover:bg-orange-600 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-black p-3 rounded-full hover:bg-orange-600 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 - DOR DO LEAD */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src="https://i.postimg.cc/C1WcXN6Q/mockup-jejumm-cafe-preto.webp" 
              alt="Mockup do Protocolo"
              className="w-full max-w-2xl mx-auto mb-12 rounded-2xl shadow-2xl"
            />
            
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-white">
              VOCÊ JÁ TENTOU <span className="text-orange-500">DE TUDO</span>
            </h2>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12">
              <p className="text-xl md:text-2xl leading-relaxed mb-6 text-gray-300">
                Dieta low carb, treino na academia, chá milagroso, shake da moda...
              </p>
              
              <p className="text-xl md:text-2xl leading-relaxed mb-6 text-gray-300">
                Mas o que ninguém te fala é que o seu corpo <span className="text-red-500 font-bold">SABOTA</span> cada esforço seu.
              </p>
              
              <p className="text-xl md:text-2xl leading-relaxed mb-6 text-gray-300">
                É o chamado <span className="text-orange-500 font-bold">"Modo Sobrevivência"</span>: seu metabolismo desacelera, você acumula gordura, e a ansiedade toma conta.
              </p>
              
              <p className="text-2xl md:text-3xl font-bold text-white mb-8">
                O resultado? Você se olha no espelho e não se reconhece mais.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-black mb-8 text-yellow-500">A SOLUÇÃO:</h3>
              <p className="text-xl md:text-2xl leading-relaxed mb-6 text-white">
                Um simples hábito pela manhã.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed mb-6 text-white">
                Apenas 1 xícara de <span className="text-orange-500 font-bold">café preto puro em jejum</span> ativa um protocolo chamado <span className="text-yellow-500 font-bold">lipólise acelerada</span>, fazendo seu corpo buscar energia direto da gordura armazenada.
              </p>
              <p className="text-2xl md:text-3xl font-black text-white">
                É simples. É natural. E <span className="text-orange-500">FUNCIONA PRA CARALHO</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 - PROVAS SOCIAIS + AVALIAÇÕES */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-white">
            VEJA O QUE <span className="text-orange-500">ELAS DIZEM</span>
          </h2>
          
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

      {/* SEÇÃO ESPECIALISTA - INSTITUCIONAL */}
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
                  CONHEÇA A <span className="text-orange-500">ESPECIALISTA</span>
                </h2>
                
                <div className="space-y-6 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    Olá, me chamo Dra. Amanda Ribeiro. Sou <span className="text-white font-bold">nutricionista clínica funcional</span> com 
                    pós-graduação em <span className="text-orange-500 font-semibold">Modulação Intestinal e Emagrecimento Feminino</span>.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Após anos de atendimento clínico, observei a <span className="text-white font-semibold">dificuldade real</span> das 
                    minhas pacientes em manter constância nas dietas tradicionais.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Foi então que criei o método <span className="text-yellow-500 font-bold">"Jejum com Café Preto"</span> — 
                    aliando ciência, experiência prática e um protocolo acessível para 
                    <span className="text-white font-semibold"> mulheres reais</span>.
                  </p>
                  
                  <div className="bg-gray-800/50 rounded-xl p-6 border-l-4 border-orange-500">
                    <p className="text-lg leading-relaxed text-white font-medium">
                      "Mulheres que trabalham, cuidam da casa e ainda querem se sentir bem com o próprio corpo. 
                      Não vendo milagres — ofereço um método <span className="text-orange-500">embasado, prático</span> 
                      e que respeita a rotina das brasileiras."
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

      {/* SEÇÃO 5 - NÚMEROS IMPACTANTES */}
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
              <p className="text-gray-300">afirmaram melhora na disposição e no humor</p>
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

      {/* SEÇÃO 6 - TIRA-DÚVIDAS INTELIGENTE */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-white">
            DÚVIDAS <span className="text-orange-500">RÁPIDAS</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Posso tomar com adoçante?",
                answer: "Ideal é puro. Mas stevia natural é ok."
              },
              {
                question: "Preciso treinar?",
                answer: "Não. O foco é o protocolo alimentar."
              },
              {
                question: "Em quanto tempo vejo resultado?",
                answer: "Primeiros 3 dias já mostram resposta."
              },
              {
                question: "Tem contraindicação?",
                answer: "Grávidas, lactantes ou quem toma medicamentos deve consultar médico."
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

      {/* SEÇÃO 7 - O QUE VOCÊ RECEBE + OFERTA PRINCIPAL */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src="https://i.postimg.cc/C1WcXN6Q/mockup-jejumm-cafe-preto.webp" 
              alt="Mockup do Protocolo"
              className="w-full max-w-2xl mx-auto mb-12 rounded-2xl shadow-2xl"
            />
            
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-white">
              VOCÊ VAI <span className="text-orange-500">RECEBER</span>
            </h2>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-yellow-500">
                PROTOCOLO JEJUM COM CAFÉ:
              </h3>
              
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                {[
                  "✅ Guia prático passo a passo",
                  "✅ Plano de 7, 14 e 30 dias",
                  "✅ Ajustes alimentares por peso",
                  "✅ Rituais de manhã e noite",
                  "✅ Calendário visual de progresso"
                ].map((item, index) => (
                  <p key={index} className="text-lg md:text-xl text-gray-300">{item}</p>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl p-8 md:p-12 mb-12">
              <img 
                src="https://i.postimg.cc/sxP7D9wx/jejum-cafe-preto-semfundo.webp" 
                alt="Mockup do Protocolo"
                className="w-full max-w-2xl mx-auto mb-8 rounded-2xl shadow-2xl"
              />
              
              <h3 className="text-3xl md:text-4xl font-black mb-8 text-white">
                💣 TUDO ISSO POR APENAS:
              </h3>
              
              <div className="mb-8">
                <p className="text-2xl text-gray-400 line-through mb-2">De: R$197</p>
                <p className="text-5xl md:text-6xl font-black text-orange-500 mb-2">R$67</p>
                <p className="text-xl text-gray-300">à vista ou 10x de R$8,03</p>
              </div>
              
              <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide">
                🔥 QUERO EMAGRECER COM CAFÉ PRETO AGORA 🔥
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 8 - BÔNUS EXCLUSIVOS */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-white">
            BÔNUS <span className="text-orange-500">EXCLUSIVOS</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            {[
              {
                icon: <Gift className="w-8 h-8 text-yellow-500" />,
                title: "BÔNUS 1 – Guia \"Receitas com Café Que Queimam Calorias\""
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-green-500" />,
                title: "BÔNUS 2 – Checklist Diário de Progresso Digital"
              },
              {
                icon: <Users className="w-8 h-8 text-blue-500" />,
                title: "BÔNUS 3 – Desafio 7 Dias com Grupo Exclusivo no WhatsApp"
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
              🔥 QUERO TUDO COM OS BÔNUS AGORA MESMO 🔥
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 9 - GARANTIA */}
      <section className="py-20 bg-gradient-to-br from-green-500/10 via-black to-blue-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-white">
              🔒 GARANTIA TRÍPLICE DE <span className="text-green-500">SEGURANÇA</span> 🔒
            </h2>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12">
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
            
            <button className="bg-gradient-to-r from-green-500 to-blue-500 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide">
              🔒 QUERO TESTAR SEM RISCO AGORA! 🔒
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 10 - FAQ */}
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

      {/* SEÇÃO 11 - URGÊNCIA + PROMESSA FINAL */}
      <section className="py-20 bg-gradient-to-br from-red-500/10 via-black to-orange-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-red-500/20 border-2 border-red-500 rounded-2xl p-8 mb-12">
              <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-red-500">
                ⚠️ ATENÇÃO: Essa página pode sair do ar a qualquer momento.
              </h2>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12">
              <div className="space-y-6">
                {[
                  "🔥 Esse protocolo NÃO estará disponível novamente por esse valor",
                  "🔥 Resultados começam nas PRIMEIRAS 48 HORAS",
                  "🔥 Bônus e suporte 1:1 só pras primeiras 300 pessoas"
                ].map((item, index) => (
                  <p key={index} className="text-xl md:text-2xl font-bold text-white">{item}</p>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-xl md:text-2xl text-gray-300 mb-4">
                  👉 Faça parte do desafio das 7 manhãs com café preto.
                </p>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  👉 Seja a próxima transformação com menos 5kg.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide w-full md:w-auto">
                🔥 SIM, EU QUERO ENTRAR AGORA E MUDAR MEU CORPO! 🔥
              </button>
              
              <p className="text-sm text-gray-400">
                <Clock className="w-4 h-4 inline mr-1" />
                Oferta por tempo limitado
              </p>
            </div>
          </div>
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
    </div>
  );
}

export default App;