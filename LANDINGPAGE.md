# 🚀 Nivix Lead Elite - Landing Page Documentation

## 📌 Visão Geral
A Landing Page **Nivix Lead Elite** é uma máquina de conversão de alta performance focada no nicho gastronômico. O projeto foi reconstruído para transmitir **autoridade, exclusividade e urgência**, utilizando uma estética "Elite & High-Ticket".

---

## 🎨 Sistema de Design (Padrão Elite)
O site segue um guia visual rigoroso para garantir unidade e valor percebido:

*   **Paleta de Cores:** 
    *   Fundo: `#101010` (Dark Premium)
    *   Destaque: `#FFB400` (Dourado Nivix)
    *   Ação (CTA): Gradiente Verde (`#00ff2a` a `#003f17`)
*   **Tipografia:** Poppins (Sans-serif) com pesos variados (Medium para leitura, Bold/Semibold para Headlines).
*   **Componentes Core:**
    *   **Glassmorphism:** Uso de `backdrop-blur-xl` e `bg-neutral-900/40` em todos os containers principais.
    *   **Bordas:** `rounded-[40px]` para grandes seções e `rounded-2xl` para elementos internos.
    *   **Glows:** Brilhos radiais sutis (`bg-[#FFB400]/5`) para destacar seções de autoridade.

---

## 🛠 Implementações Técnicas Realizadas

### 1. Headline & Hero
*   Foco em autoridade: "A melhor equipe de Marketing para Restaurantes do Brasil".
*   Badge de confiança: "Contrato livre de amarras".

### 2. Fluxo de Leads (WhatsApp Direct)
*   **Substituição do HubSpot:** A API do HubSpot foi removida para simplificar o processo e aumentar a velocidade de resposta.
*   **Lógica de Envio:** O formulário valida os dados via Zod e redireciona o usuário para o WhatsApp oficial (**5554999656522**) com uma mensagem pré-formatada e personalizada.
*   **Página de Sucesso:** Redirecionamento automático para `/CadastroConcluido` após a abertura do WhatsApp.

### 3. Carrossel de Clientes (Custom Logic)
*   **Tecnologia:** Removido `embla-carousel` em favor de uma lógica customizada com `framer-motion`.
*   **Features:** Suporte a drag/touch, loop infinito simétrico (Esquerda-Centro-Direita), efeito de blur e escala no card central.

### 4. Componente de Planos (Ancoragem)
*   **Estratégia:** Comparação visual direta entre o valor de mercado (R$ 2.600 - em vermelho mudo) e a oferta Elite (R$ 800 - em destaque dourado).
*   **Garantias:** Inclusão de selos de "Risco Zero" e "Sem Fidelidade".

### 5. Seção de Time (Squad de Elite)
*   **Storytelling:** Narrativa de "QG de Inteligência" e "Squad de Performance" em vez de uma lista de funcionários.
*   **Visual:** Container Ultra-Wide para fotos do escritório e badges de valores.

### 6. Footer Minimalista
*   **Identidade:** Uso do ícone "N" em vez da logo completa.
*   **Dados:** Atualizado com CNPJ `62.759.291/0001-53` e Copyright da Nivix Company.

### 7. Ecossistema 360º (Diferencial Tecnológico)
*   **Conceito:** Posicionamento como assessoria completa e ecossistema gastronômico.
*   **Visual:** Nuvem de alta densidade com 18 cards pequenos de capacidades técnicas (SEO, Tráfego, CRM, etc).
*   **Hub de Inteligência:** Destaque para a "Lead Elite Platform", criando desejo por uma solução SaaS centralizada.

### 8. Refino de Divisores Arquitetônicos
*   **Padrão:** "Clean & Soft" (Linha vertical amarela + Horizonte horizontal sutil `via-neutral-700/20` posicionado no meio da linha vertical).
*   **Locais:** Aplicado nas quebras de grandes seções (Pós-Form e Pré-Planos).

---

## 📈 Relatório de Auditoria & Próximos Passos (Roadmap)

### 1. Refino de CTAs (Conversão) - CONCLUÍDO ✅
*   Todos os botões agora usam o gradiente verde de alta performance e copy de benefício ("Ativar Minha Escala Agora").

### 2. Melhorias Visuais (Polimento)
*   [ ] **Glow no Hero:** Aplicar brilho radial atrás da Headline para unificar com o resto da página.
*   [ ] **FAQ Elite:** Refatorar o `OurWork.tsx` para usar o design de Glassmorphism nos cards de perguntas.

### 3. Conteúdo & Fotos
*   [ ] Substituir placeholders de fotos da seção de Time por fotos reais editadas do QG/Equipe.

---

## 🧠 CONTEXTO PARA O PRÓXIMO AGENTE (HANDOVER)
**Status do Projeto:** Landing Page em nível "Elite" com altíssima unidade visual.
**Padrão de Design:** Dark Premium (#101010), Glassmorphism (blur-xl), Dourado (#FFB400) para autoridade e Verde para ação. Bordas arredondadas em 40px são a lei.
**Tom de Voz:** Agressivo, técnico e focado em lucro real. Inversão de risco total ("Fechamos as portas e devolvemos seu dinheiro").
**Ponto de Atenção:** Respeite a sutileza dos divisores de seção. A linha horizontal deve ser quase invisível, "colada ao fundo".
**Próximo Foco sugerido:** Refatorar o FAQ (`OurWork.tsx`) para o padrão Glassmorphism ou aplicar o Glow no Hero para fechar a unidade visual 100%.

---
*Documento atualizado pelo Agent Senior - 07 de Maio de 2026*

