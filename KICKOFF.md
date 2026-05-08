# 🚀 Nivix Kickoff: Onboarding Elite

Este documento detalha o sistema de onboarding estratégico da Nivix, projetado para coletar dados operacionais de clientes recém-fechados e transformá-los em planos de escala agressivos.

## 📋 Contexto Atual
O sistema foi construído para substituir processos manuais de coleta de dados, garantindo que o time de estratégia da Nivix receba todas as informações críticas (tráfego, operacional e cardápio) antes da primeira reunião oficial.

**Localização Temporária:** `/kickoff`
**Estado do Projeto:** MVP Funcional (Front-end Completo com Validação).

---

## 🛠️ O que foi Feito
1. **Engenharia Reversa:** Mapeamento 1:1 dos campos do formulário da Assessoria Alpha (Referência de mercado).
2. **Design System Elite:** Interface moderna em Dark Mode, utilizando `glassmorphism`, gradientes dourados e animações de transição suave com `Framer Motion`.
3. **Validação Blindada:** Implementação de schemas de validação com `Zod` e gerenciamento de estado com `React Hook Form`.
4. **Foco Operacional:** Diferenciação entre campos opcionais e obrigatórios baseada na necessidade real para execução de anúncios e gestão de tráfego.

---

## 🏗️ Estrutura do Formulário (9 Etapas)

### 1. Restaurante
*   **Foco:** Dados de identificação e logística vital.
*   **Mandatórios:** Endereço exato e horários de funcionamento (crucial para pausar anúncios/geo-targeting).

### 2. Identidade & Estratégia de Guerra
*   **Foco:** Posicionamento de mercado e benchmarking.
*   **Exclusivo Nivix:** Pergunta sobre o **Gargalo Principal** (dor real) e listagem de **Concorrentes Diretos**.

### 3. Cardápio & Produto
*   **Foco:** O que será vendido.
*   **Exclusivo Nivix:** Diagnóstico de saúde do cardápio (estável vs. reestruturação) e uso de cupons agressivos.

### 4. Público-Alvo
*   **Foco:** Segmentação para Meta Ads e Google Ads (Idade, Gênero, Raio).

### 5. Presença Digital
*   **Foco:** Autoridade e SEO local.
*   **Mandatórios:** Seguidores IG e status do Google Meu Negócio. Pergunta sobre uso de **CRM/Base de Dados**.

### 6. Histórico de Tráfego
*   **Foco:** Evitar erros passados.
*   **Mandatórios:** Orçamento mensal disponível para a Nivix.

### 7. Objetivos & Metas
*   **Foco:** KPI principal para os próximos 3 a 6 meses.

### 8. Conteúdo & Criativo
*   **Foco:** Padrão visual. Definição se há material profissional ou se é necessária produção.

### 9. Alinhamento Operacional
*   **Foco:** Contato direto (WhatsApp) de quem responde a agência no dia a dia.

---

## 💻 Especificações Técnicas
* **Framework:** Next.js 15 (App Router).
* **Validação:** `react-hook-form` + `zod` (Validation-per-step).
* **Responsividade:** Mobile-first (Stepper adaptativo e botões de fácil alcance).
* **Persistência:** Dados mantidos em memória durante a navegação entre etapas via `FormProvider`.

---

## 📈 Próximos Passos
- [ ] Conectar o envio do formulário a um Webhook (n8n/Make) ou Backend Admin.
- [ ] Implementar upload de arquivos para logos e referências visuais na Etapa 8.
- [ ] Integração com área logada (Admin Dashboard).

---
**Documentação v1.0** | *Time de Engenharia Nivix*
