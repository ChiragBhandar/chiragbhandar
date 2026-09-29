<div align="center">

<img src="https://capsule-render.vercel.app/api?type=venom&color=0:020617,50:0f172a,100:0e7490&height=230&section=header&text=Chirag%20Bhandar&fontSize=62&fontColor=e2e8f0&fontAlignY=42&desc=Full-Stack%20Developer%20%C2%B7%20Next.js%20%C2%B7%20TypeScript%20%C2%B7%20PostgreSQL&descSize=17&descColor=67e8f9&descAlignY=64" width="100%" alt="Chirag Bhandar" />

<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=500&size=19&pause=1400&color=22D3EE&center=true&vCenter=true&width=700&lines=Building+multi-tenant+platforms+with+real-time+data;Secure+by+design%3A+RBAC%2C+RLS%2C+audit+logging;IT+%40+Delhi+Technological+University+%C2%B7+Batch+of+2028" alt="typing" />
</a>

<br/><br/>

[![Portfolio](https://img.shields.io/badge/Portfolio-020617?style=for-the-badge&logo=vercel&logoColor=white)](https://chiragbhandar.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/chirag-bhandar/)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:YOUR_EMAIL)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/919625520257)

</div>

<br/>

## 👋 About

I'm a **B.Tech IT student at Delhi Technological University** (2024 – 2028) who builds full-stack products end to end: clean interfaces on the front, secure and well-structured systems behind them.

My recent work covers **multi-tenant SaaS architecture, real-time GPS tracking, role-based access control, row-level security and AI-powered tooling**, backed by automated tests and shipped through short, feedback-driven sprints.

<div align="center">

| 🎓 Education | 💼 Experience | 🧪 Test Coverage | 🏗️ Focus |
|:---:|:---:|:---:|:---:|
| DTU, B.Tech IT | 2 internships in 2026 | 259 automated tests across 15 suites (FieldFlow) | Full-stack, security, real-time systems |

</div>

<br/>

## 💼 Experience

<table>
<tr>
<td width="24%" valign="top"><b>Jul – Aug 2026</b><br/><sub>Remote, India</sub></td>
<td>
<b>Software Engineer Intern</b> · Dawn Digitech LLP<br/>
Worked on AI-led software projects, turning requirements into working features and cloud application workflows. Delivered technical milestones in one-week MVP sprints with weekly evaluations, including low-code cloud development for client-specific needs.
</td>
</tr>
<tr>
<td valign="top"><b>Jun – Jul 2026</b><br/><sub>New Delhi</sub></td>
<td>
<b>Full Stack Developer Intern</b> · Centre of Excellence for Happiness, DTU<br/>
Built a survey platform on <code>Next.js</code> + <code>Supabase</code> + <code>PostgreSQL</code> covering survey creation, response collection and analytics-ready data. Designed normalized schemas and REST APIs, and secured submissions with Supabase Auth and Row-Level Security.
</td>
</tr>
</table>

<br/>

## 🚀 Featured Projects

<sub>Ordered by depth and technical complexity.</sub>

### 🛰️ FieldFlow: Multi-Tenant Field Operations Platform
> A full-stack platform for managing field teams, dispatching, route planning, real-time GPS tracking and operational audits.

- **Route planning:** multi-stop routes with technician assignment, Haversine distance calculation and scheduled dispatch
- **Live radar:** real-time GPS telemetry on a Leaflet/OpenStreetMap map for live technician tracking
- **Geofencing:** geofence-based visit verification with server-side visit duration tracking
- **Security:** multi-tenant RBAC, audit logging, secure authentication and strict tenant isolation
- **Quality:** CSV audit reporting, verified with **259 automated tests across 15 suites**

`Next.js` `React` `TypeScript` `Tailwind CSS` `Prisma` `PostgreSQL` `Better Auth` `Leaflet` `Zod`

[![Source](https://img.shields.io/badge/Source-Code-0f172a?style=flat-square&logo=github)](https://github.com/ChiragBhandar/FieldFlow)

```mermaid
flowchart LR
    A[Next.js + React UI<br/>Leaflet Radar] --> B[Route Handlers<br/>Zod Validation]
    B --> C{Better Auth<br/>RBAC + Tenant Guard}
    C --> D[Prisma ORM]
    D --> E[(PostgreSQL)]
    C --> F[Audit Log]
```

<br/>

### 🍯 Honey Chain: Digital Honey Traceability Platform
![SIH](https://img.shields.io/badge/Smart%20India%20Hackathon-2026-f59e0b?style=flat-square)
> An end-to-end traceability platform connecting beekeepers, laboratories, manufacturers and consumers through unit-level QR verification.

- **5-stage workflow:** harvest → custody → laboratory testing → certification → bottling
- **QR verification:** real scannable QR codes with unique bottle-level serialization and public verification
- **Role-based workflows:** beekeepers, manufacturers, laboratories, logistics and administrators
- **Bilingual:** English and Hindi support for consumer and operational flows
- **Trust and integrity:** verification pages with origin, lab data and supply-chain history, backed by audit logging, mass-balance validation and data sanitization

`Next.js` `React` `TypeScript` `Tailwind CSS` `QRCode` `Radix UI` `Vercel`

[![Source](https://img.shields.io/badge/Source-Code-0f172a?style=flat-square&logo=github)](https://github.com/ChiragBhandar/HoneyChain)

```mermaid
flowchart LR
    A[🐝 Harvest] --> B[📦 Custody] --> C[🧪 Lab Testing] --> D[✅ Certification] --> E[🍯 Bottling]
    E --> F[QR Code per Bottle]
    F --> G[Public Verification Page]
```

<br/>

### 📈 LifeStack: AI-Powered Personal Analytics Dashboard
> A solo-built productivity platform combining habit tracking, journaling, daily planning and performance visualization in one dashboard.

- **AI insights:** Grok API generates weekly and monthly reports with structured data validation
- **Dashboards:** interactive charts (Recharts), streak tracking and goal analytics
- **Auth:** secure authentication and session management with NextAuth.js
- **Reports:** automated PDF report generation, deployed serverlessly on Vercel

`Next.js 14` `TypeScript` `Prisma` `PostgreSQL` `NextAuth.js` `Grok API` `Recharts` `Tailwind CSS`

[![Source](https://img.shields.io/badge/Source-Code-0f172a?style=flat-square&logo=github)](https://github.com/ChiragBhandar/LifeStack)

<br/>

### 🌿 CESH: Digital Well-Being & Survey Platform
> A full-stack survey platform for collecting, processing and analyzing holistic well-being data.

- **Surveys:** interactive survey platform on Next.js and Supabase across physical, psychological, social, environmental and spiritual dimensions
- **ML pipeline:** Python serverless pipeline using Random Forest to classify well-being categories, with automated analysis and results visualization
- **Security:** Supabase Authentication and secure PostgreSQL access

`Next.js` `React` `Tailwind CSS` `Python` `Supabase` `PostgreSQL` `scikit-learn` `Pandas` `NumPy`

[![Source](https://img.shields.io/badge/Source-Code-0f172a?style=flat-square&logo=github)](https://github.com/ChiragBhandar/CESH)

<br/>

### 📄 AI Resume Analyzer & Maker
> Upload a resume, get an ATS score and role-specific feedback, then build a better one.

- **Six-dimension AI evaluation:** ATS compatibility, content quality, skills, structure, professional impact and role alignment, powered by the Grok API
- **Parsing:** PDF and DOCX resume ingestion with keyword matching
- **Builder:** ATS-friendly templates, real-time preview and PDF export using reusable React components

`Next.js` `JavaScript` `Tailwind CSS` `Grok API`

[![Source](https://img.shields.io/badge/Source-Code-0f172a?style=flat-square&logo=github)](https://github.com/ChiragBhandar/YOUR_REPO)

<br/>

### 🌐 Developer Portfolio: High-Performance Personal Website
> A fully responsive personal site showcasing projects, skills and technical writing.

- **Performance:** strong Lighthouse scores through image optimization, lazy loading and minimal render-blocking resources
- **Motion:** fluid animations and page transitions with Framer Motion
- **Accessibility:** semantic HTML, proper contrast ratios and keyboard navigation
- **Delivery:** SEO-optimized, deployed on Vercel with automatic CI/CD from GitHub

`Next.js` `React` `JavaScript` `Tailwind CSS` `Framer Motion` `Vercel`

[![Source](https://img.shields.io/badge/Source-Code-0f172a?style=flat-square&logo=github)](https://github.com/ChiragBhandar/chiragbhandar) [![Live](https://img.shields.io/badge/Live-Demo-0e7490?style=flat-square&logo=vercel)](https://chiragbhandar.vercel.app)

<br/>

### 🎨 Agency Landing Page: Modern Digital Agency Website
> A conversion-focused agency landing page with smooth animations and clean layouts.

- **Sections:** hero, service showcase, testimonials and CTA-driven layouts for better engagement
- **Motion:** smooth transitions and interactions with Framer Motion
- **Responsive and accessible:** optimized for desktop, tablet and mobile, with strong typography hierarchy and spacing
- **Performance:** efficient asset loading and responsive image handling, deployed on Vercel with continuous deployment

`Next.js` `React` `JavaScript` `Tailwind CSS` `Framer Motion` `Vercel`

[![Source](https://img.shields.io/badge/Source-Code-0f172a?style=flat-square&logo=github)](https://github.com/ChiragBhandar/agency-landing-page) [![Live](https://img.shields.io/badge/Live-Demo-0e7490?style=flat-square&logo=vercel)](https://agency-landing-page-chirag.vercel.app)

<br/>

## 🧰 Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=cpp,js,ts,py,html,css,react,nextjs,tailwind,nodejs,prisma,postgres,mongodb,supabase,framer,git,github,vercel,postman,vscode&perline=10&theme=dark" alt="stack" />

</div>

| Area | Tools |
|---|---|
| **Languages** | C++, JavaScript, TypeScript, Python, SQL |
| **Frontend** | React.js, Next.js, Tailwind CSS, HTML5, CSS3 |
| **Backend** | Node.js, REST APIs, Next.js Route Handlers, Prisma ORM |
| **Databases** | PostgreSQL, MongoDB |
| **Auth & Security** | Better Auth, Supabase Auth, RBAC, Row-Level Security |
| **Tools** | Git, GitHub, Vercel, Postman, VS Code |
| **CS Fundamentals** | DSA, OOP, DBMS, Operating Systems, Computer Networks |

<br/>

## 🎯 Currently

- 🔨 Building and hardening **FieldFlow** with tighter tenant isolation and more real-time features
- 📚 Sharpening DSA in C++ alongside core CS subjects
- 🌍 Open to **internships, full-time roles and freelance work** in full-stack development

<br/>

<div align="center">

### Let's build something great together

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/chirag-bhandar/)
[![Portfolio](https://img.shields.io/badge/-Portfolio-020617?style=flat-square&logo=vercel&logoColor=white)](https://chiragbhandar.vercel.app)
[![WhatsApp](https://img.shields.io/badge/-WhatsApp-25D366?style=flat-square&logo=whatsapp&logoColor=white)](https://wa.me/919625520257)


</div>

<img src="https://capsule-render.vercel.app/api?type=venom&color=0:020617,50:0f172a,100:0e7490&height=100&section=footer" width="100%" alt="footer" />
