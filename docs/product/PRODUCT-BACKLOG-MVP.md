# Product Backlog — MVP Inovidades

**Versão:** 1.0  
**Status:** Congelado para MVP  
**Escopo inicial:** Estado de Pernambuco  
**Modelo:** Site estático · SEO-first · Orientado a AdSense  

Este documento descreve o **escopo mínimo necessário** para publicar a primeira versão funcional
do Inovidades, servindo como **fonte única de verdade** para as sprints iniciais.

---

## 🎯 Objetivo do MVP

Publicar um portal estático indexável que organize oportunidades educacionais,
acadêmicas e profissionais por:

- Estado  
- Segmento  
- Tipo de prova / instituição  

Com foco em:
- SEO orgânico
- Simplicidade
- Escalabilidade por replicação
- Monetização futura via Google AdSense

---

## 🧱 EPIC 1 — Base Técnica e Infraestrutura

### PB-01 — Estrutura Base do Projeto
**Descrição:**  
Projeto Astro configurado, versionado e pronto para build estático.

**Critérios de aceite:**
- Projeto sobe localmente
- Build estático funcional
- Repositório público no GitHub

**Prioridade:** 🔥 MVP obrigatório

---

### PB-02 — Deploy Inicial
**Descrição:**  
Publicação do site em ambiente público.

**Critérios de aceite:**
- Site acessível via domínio
- HTTPS ativo
- Página inicial carregando corretamente

**Prioridade:** 🔥 MVP obrigatório

---

## 🧱 EPIC 2 — Estrutura de Conteúdo

### PB-03 — Página Inicial (Home)
**Descrição:**  
Landing page explicando o propósito do Inovidades.

**Critérios de aceite:**
- Texto introdutório claro
- Navegação para estados e segmentos
- Estrutura semântica (H1, H2)

**Prioridade:** 🔥 MVP obrigatório

---

### PB-04 — Página do Estado (Pernambuco)
**Descrição:**  
Página dedicada ao estado inicial do projeto.

**Critérios de aceite:**
- Introdução contextual do estado
- Lista de segmentos disponíveis
- URL amigável (`/pe`)

**Prioridade:** 🔥 MVP obrigatório

---

### PB-05 — Página Estado + Segmento
**Descrição:**  
Páginas combinando estado e segmento.

**Exemplos:**
- `/pe/enem`
- `/pe/oab`
- `/pe/residencia-medica`
- `/pe/cfc`
- `/pe/pos-graduacao`

**Critérios de aceite:**
- Texto explicativo do segmento
- Lista de oportunidades
- Conteúdo original e indexável

**Prioridade:** 🔥 MVP obrigatório

---

### PB-06 — Página de Oportunidade Individual
**Descrição:**  
Página estática descrevendo uma oportunidade específica.

**Critérios de aceite:**
- Título claro
- Descrição objetiva
- Datas e links externos (quando existirem)
- Conteúdo indexável

**Prioridade:** 🔥 MVP obrigatório

---

## 🧱 EPIC 3 — Segmentos do MVP

### PB-07 — Segmentos Prioritários
**Descrição:**  
Ativação dos segmentos iniciais do projeto.

**Segmentos incluídos no MVP:**
- ENEM
- Vestibulares próprios
- OAB
- Residência Médica
- CFC (Exame de Suficiência)
- Pós-graduação / ANPAD

**Critérios de aceite:**
- Cada segmento com página própria
- Texto introdutório original

**Prioridade:** 🔥 MVP obrigatório

---

## 🧱 EPIC 4 — SEO, Indexação e Google

### PB-08 — SEO On-page Básico
**Descrição:**  
Preparação mínima para indexação em buscadores.

**Critérios de aceite:**
- Meta title e meta description
- URLs amigáveis
- Sitemap.xml
- robots.txt

**Prioridade:** 🔥 MVP obrigatório

---

### PB-09 — Integração Google
**Descrição:**  
Preparação para monitoramento e monetização.

**Critérios de aceite:**
- Google Analytics 4 integrado
- Search Console preparado para validação
- Páginas institucionais criadas:
  - Sobre
  - Política de Privacidade
  - Termos de Uso

**Prioridade:** 🔥 MVP obrigatório

---

## 🚫 Fora do Escopo do MVP

Explicitamente fora do MVP:
- Login ou cadastro de usuários
- Backend dinâmico
- Banco de dados
- Automação de coleta de dados
- Painel administrativo
- Alertas ou notificações

Esses itens pertencem a fases futuras do roadmap.

---

## ✅ Definição de MVP Concluído

O MVP é considerado concluído quando:
- O site estiver publicado
- As páginas do estado inicial estiverem indexáveis
- O GA4 estiver coletando dados
- A estrutura permitir replicação para novos estados

---

📌 **Alterações neste backlog só podem ocorrer mediante registro em
`docs/project/DOCS-DECISOES.md`.**
