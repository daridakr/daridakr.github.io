---
title: Full Technical CV
permalink: /cv/
---

[← Home]({{ '/' | relative_url }}) · [Project pages]({{ '/projects/' | relative_url }})
{: .page-links }

# Daria Krivushkina

---

# **Unity Developer**

**Spec:** AI-Driven Gameplay, AI Pipeline Integrations.

**Location/TimeZone**: Portugal 🇵🇹, GMT+1.

**Type of Work:**

- **EU/EEA**: Remote only.
- **PT**: Remote / Hybrid.
- **Viseu**: Remote / Hybrid / Local.

#### Navigation

[🛠 Stack](#stack),
[📈 Professional Experience](#professional-experience),
[🎓 Education](#education),
[💼 Portfolio](#key-projects),
[🚀 Current Direction](#current-direction).

---

## Summary
{: #summary }

With 4+ years of experience in software and game development, I specialize in building clean, high-performance, engine-independent systems for AI integration, simulation, interactive applications, gameplay and user-facing experiences. Experienced in architecture reviews, technical leadership, cross-team collaboration, QA, and full-cycle product delivery.

---

## Сore Сompetencies
{: #core-competencies }

- **AI Systems Architecture:** Designed and implemented LLM-driven gameplay systems using **Google Gemini Function Calling**, a Narrative Interpreter, deterministic action routing, and custom context-management pipelines.
- **Deterministic Architecture:** Prevented direct AI-driven state mutation by isolating transport, domain, and presentation layers and routing gameplay actions through validated handlers.
- **Systems Architecture:** Engine-independent gameplay and application systems using Dependency Injection, Event-Driven Architecture, MVP/MVVM, state machines, factories, and explicit domain boundaries.
- **Performance Engineering:** Optimized runtime memory and execution costs through zero-allocation gameplay paths, object pooling, async workflows, memory reuse, and profiling-driven performance analysis.

---

## 🛠  Stack
{: #stack }

- **Engineering & Architecture:** C#, SOLID, Clean Architecture, OOP, OOA&D, Dependency Injection, Event-Driven Architecture, Engine-Independent Architecture, MVP/MVVM, FSM, Strategy Pattern, Command/Interpreter.
- **AI Systems & LLM Integration:** Google Gemini API, LLM Function Calling, Narrative Interpreter, PromptContextProvider, JSON Payload Parsing, Newtonsoft.Json, Context / State / Memory Management, Deterministic Routing.
- **Unity & Gameplay:** Unity 2021/2022, URP, UI Toolkit, uGUI, ScriptableObjects, Addressables, AssetBundles, AI Navigation, NavMesh, Cinemachine, Dotween, New Input System.
- **Performance & Async:** UniTask, async/await, CancellationToken, Zero-allocation memory management, Physics.OverlapSphereNonAlloc, Object Pooling, Zenject MemoryPool, O(1) Hashed Timing Wheel, CPU / Memory Profiling.
- **Tools & Delivery:** Custom Editor Tooling, Android/iOS Build Profiles, CI/CD, Firebase CLI, Git, Git LFS.
- **Mobile SDKs:** Ad Mediation, Rewarded / Interstitial Ads, IAP, Attribution, Analytics.

---

## 📈 Professional Experience
{: #professional-experience }

### 1. Unity Developer — DeQuest & Rivalz

**During:** November 2023 – December 2025.

**Type of Work:** Remote, full-time.

{% include cv-image.html file="dequest.png" alt="dequest.png" original="Daria%20Krivushkina/dequest.png" %}

{% include cv-image.html file="image.png" alt="image.png" original="Daria%20Krivushkina/image.png" %}

**Projects:** [Live Farm](https://github.com/daridakr/gemini-ai-farm) / [Riftvale](https://github.com/daridakr/Riftvale), [Forever Village](https://github.com/daridakr/Forever-Village).

### 🤖 AI Systems
{: #ai-systems }

- **AI Gameplay Architecture:** Built an engine-independent AI gameplay layer that kept LLM transport separate from gameplay state and Unity presentation.
- **AI-Driven Production:** Reduced narrative scripting time by **80%**, from days to hours, by moving dialogue logic into reusable AI-driven gameplay systems.
- **Core Loop Protection:** Ensured **100% core-loop stability against AI hallucinations** by isolating AI output from direct game-state access and routing actions through explicit gameplay handlers.
- **Narrative Interpreter:** Implemented **3 Gemini Function Calling handlers** for world flags, dialogue objective completion, and quest-item removal. Routed JSON payloads into strongly typed C# delegates through a command registry, validated registered actions, handled malformed responses, and routed state changes through explicit gameplay services.
- **Context & Memory:** Designed context-selection logic that supplied only gameplay-relevant state (scene, quests, inventory, and world flags) to Gemini requests, reducing prompt bloat while maintaining dialogue continuity through persona memory and bounded conversation history.
- **Async AI Transport:** Architected an asynchronous Gemini API integration using UniTask, `async/await`, and cancellation tokens, keeping gameplay interactions responsive during AI requests (**0.5-7 s latency**) while maintaining only **2-7 ms application overhead**.
- **Resilience & Error Handling:** Implemented cancellation, fallback, and exception-handling flows for dialogue termination, scene transitions, and failed API requests. Added latency instrumentation and a Decorator-based profiler to measure HTTP and application overhead in test builds.

---

### ⚡ Performance & Architecture
{: #performance-architecture }

- **Frame Stability:** Maintained a **60 FPS** main-thread target while AI requests ran asynchronously and game-state processing remained inside deterministic Unity systems.
- **Zero-Allocation Gameplay:** Implemented `Physics.OverlapSphereNonAlloc` with cached collider buffers and achieved **0 bytes allocated per interaction-scan frame** in the profiled gameplay path. Used Zenject MemoryPool for repeated runtime objects.
- **Timing System:** Replaced repeated native `Update()` scheduling with a custom **O(1) Hashed Timing Wheel** for delayed gameplay execution.
- **Addressables & Android:** Restored Android startup stability by resolving IL2CPP code-stripping issues through `link.xml` preservation rules for Zenject and Addressables.
- **Scene Loading Pipeline:** Designed an Addressables-based loading architecture for Bootstrap, Loading, and Main scenes, preventing duplicate dependency initialization and ownership conflicts.
- **UI Architecture:** Built UI Toolkit UXML/USS flows with MVP/MVVM boundaries, keeping Views passive and moving state changes into Presenters and ViewModels.
- **State Machines:** Built a state-machine-driven building lifecycle with dedicated Model, Controller, View, Context, and State layers, supporting Active, Restoring, and Destroyed building states.

---

### 🛠 Tools & Production
{: #tools-production }

- **Tools & Automation:** Saved **10+ hours of manual configuration per sprint** by building custom Editor tools, Android/iOS build profiles, and CI/CD automation.
- **QA Delivery:** Automated Android APK distribution for QA through Firebase CLI and build-pipeline tooling.
- **Designer-Facing Validation:** Built custom Editor validation for UI Toolkit bindings and gameplay configuration workflows, moving structural errors from runtime testing into the Unity Editor.
- **Technical Review:** Reviewed C# candidate assignments and collaborated with 3D artists on Android polygon budgets and URP performance constraints.

---

### 🎮 Gameplay Systems
{: #gameplay-systems }

- **Gameplay Framework Architecture:** Designed reusable gameplay frameworks around shared item contracts, runtime abstractions, ScriptableObject configuration, factories, state machines, and typed event contracts, enabling gameplay modules to evolve independently while sharing common infrastructure.
- **Data-Driven Gameplay Frameworks:** Built reusable systems for inventory, progression, resource production, and villager modifiers using shared C# abstractions and ScriptableObject configuration, enabling content expansion and balance changes without rewriting core gameplay logic.
- **Config/Runtime Separation:** Separated gameplay configuration from runtime state through ScriptableObject assets, interfaces, and runtime domain models, reducing coupling between content and gameplay execution.
- **Generic Runtime Architecture:** Designed generic gameplay frameworks using `ItemStorage<I,R>`, `ItemContainer<I,R>`, and station abstractions, enabling inventory and production systems to share common runtime logic across multiple gameplay entities.
- **Event-Driven Gameplay:** Integrated gameplay modules through typed event contracts instead of direct system references, reducing coupling between inventory, production, building, quest, and UI systems.
- **Resource Pipeline:** Designed a shared resource pipeline from harvesting to inventory and workshop production, using typed resource definitions, EventBus contracts, Addressable visuals, and Zenject MemoryPool to keep collection, production, presentation, and spawning as separate systems.

---

### 2. Unity Developer — HC Rotem Kuza (HyperCasual)

**During:** August 2023 – November 2023.

**Type of Work:** Remote, contract.

{% include cv-image.html file="rivalz_(1).png" alt="rivalz (1).png" original="Daria%20Krivushkina/rivalz_(1).png" %}

- **Android Delivery:** Delivered **49 Android APK variants** for QA across game re-skins by managing build configuration and packaging.
- **Build Stability:** Maintained **99.9% build stability** during rapid Android build and QA cycles.
- **Monetization:** Added ad mediation, rewarded ads, interstitial ads, IAP, attribution, and analytics SDKs to mobile projects.
- **Codebase Adaptation:** Implemented gameplay changes inside an existing LeoECS codebase while working within its entity-component-system architecture.

---

### 3. Unity Developer — Freelance

**During:** September 2021 – August 2023.

**Type of Work:** Remote, independent contractor.

- **Reusable Gameplay:** Built several simple and small prototypes with reusable C# gameplay components, FSMs, Observer and Factory patterns, and uGUI views.
- **Platform Delivery:** Delivered PC, mobile, and WebGL builds for QA through Unity build configuration and Git workflows.
- **Rapid Iteration:** Reused core gameplay systems across different client prototypes to reduce repeated implementation work.

---

## 🎓 Education
{: #education }

**Diploma in Software Engineering Technician**

College of Business & Law

September 2018 – March 2022

---

## 💼 Key Projects
{: #key-projects }

### 1. Riftvale — Mobile AI RPG
{: #riftvale }

2024

<div class="media-placeholder">
  Original media:
  <a href="https://media.giphy.com/media/FHWRYD5iLI68FzmuZd/giphy.gif">Riftvale GIF</a>.
  Image location reserved for a static project image.
</div>

**Role:** Team Unity Developer, Head Of Development

**Source Code:** [github.com/daridakr/Riftvale](https://github.com/daridakr/Riftvale)

First MVP of an AI-driven mobile RPG that validated the gameplay concept and established the architectural foundations later expanded in Live Farm.

- **Gameplay Frameworks:** Designed reusable gameplay systems around item contracts, generic storage containers, factories, production stations, and runtime abstractions.
- **Event-Driven Architecture:** Connected inventory, production, building, and quest systems through shared event contracts rather than direct module dependencies.
- **State-Driven Buildings:** Implemented a building lifecycle architecture using Model, Controller, View, Context, Factory, and FSM-based state transitions.
- **Configuration & Runtime Separation:** Separated gameplay configuration from runtime state through ScriptableObject assets, interfaces, and runtime domain models.
- **AI Character Gameplay:** Built AI-assisted NPC conversations, dialogue topics, quest interactions, and action-driven gameplay responses.
- **Quest Systems:** Implemented composite quests, quest factories, player context tracking, and quest-driven NPC interactions.
- **Mobile Production:** Delivered the first playable Android MVP used for concept validation and later architectural evolution into Live Farm.

> **Stack:** Unity 2021.3.29f1, Local LLM API (интеграция собственной локальной модели, которую делал AI Engineer), URP 12.1.12, Zenject, AI Navigation 1.1.3, Cinemachine 2.9.7, Input System 1.7.0, DOTween, Particle System, Newtonsoft.Json 3.2.1, uGUI, TextMeshPro, Easy Save 3.

### 2. LiveFarm — AI-Driven Gameplay Systems
{: #live-farm }

2025

[https://youtu.be/BGwqTxJXdK0?si=FH7QEW5joYAqR47e](https://youtu.be/BGwqTxJXdK0?si=FH7QEW5joYAqR47e)

**Role:** Solo Unity Developer

**Project:** [github.com/daridakr/gemini-ai-farm](https://github.com/daridakr/gemini-ai-farm)

Reworked version of the Riftvale concept with a stronger architecture and a revised gameplay layer.

- **AI Gameplay Architecture:** Built a Narrative Interpreter around Gemini Function Calling with registered handlers for world flags, dialogue objectives, and inventory changes.
- **Deterministic AI Routing:** Routed AI actions through validated command handlers and gameplay services, preventing direct model access to game state.
- **Context & Memory:** Designed context selection, persona memory, and bounded conversation history to provide gameplay-relevant state while minimizing prompt size.
- **Async AI Integration:** Integrated Gemini through UniTask, async/await, and cancellation tokens, maintaining responsive gameplay during 0.5-7 s AI requests.

> **Stack:** Unity 2022.3.23f1 LTS, URP, UI Toolkit, UXML/USS, New Input System, Zenject, EventBus, MVP/MVVM, Strategy Pattern, Command/Interpreter, UniTask, Newtonsoft.Json, Google Gemini API, LLM Function Calling, Firebase Auth/Analytics/Crashlytics, Addressables, AssetBundles, Zenject MemoryPool, NonAlloc Physics.

### 3. Forever Village — RPG / WebGL Case
{: #forever-village }

2023

[https://youtu.be/XkX8LXaweK8?si=mXB3aKjlttfn4kRO](https://youtu.be/XkX8LXaweK8?si=mXB3aKjlttfn4kRO)

**Role:** Solo Unity Developer

**Project:** [github.com/daridakr/Forever-Village](https://github.com/daridakr/Forever-Village)

Large-scale RPG and village simulation project used as the basis for a full technical architecture review and later AI-oriented redesign.

- **Architecture Review:** Audited gameplay, combat, progression, AI, persistence, UI, DI, and scene-flow systems to identify scaling and maintenance risks.
- **Foundation Redesign:** Defined a modular architecture split across Domain, Application, Infrastructure, Unity, Composition, and AI layers for future development.
- **Performance Engineering:** Applied object pooling, spatial partitioning, FastList swap-remove patterns, and non-alloc-oriented runtime structures.
- **Gameplay Systems:** Built progression, village management, construction, upgrades, residential production, economy, and region-unlock mechanics.
- **Combat & RPG Systems:** Implemented character progression, equipment, XP, spell catalogs, auto-combat, FSM-driven AI, and companion behaviors.
- **Encounter Design:** Implemented threat-budget spawning and weighted enemy selection systems.
- **WebGL Readiness:** Evaluated memory constraints, persistence strategies, rendering limitations, scene flow, and asynchronous execution requirements.

> **Stack:** Unity 2021.3.29f1, URP/Core 12.1.12, Shader Graph 12.1.12, AI Navigation 1.1.3, Cinemachine 2.8.9, Input System 1.6.3, TextMeshPro 3.0.6, uGUI, Zenject, UniTask, DOTween, Odin, Easy Save 3, TypedScenes, FSM, NavMesh, ScriptableObjects, Object Pooling, Threat Budget, Spatial Hash Grid.

---

## 🚀 Current Direction
{: #current-direction }

### Current Work

- **Nutrition App (Kotlin):** Building a mobile AI-nutrition-tracking application to deepen expertise beyond Unity and strengthen Android, mobile architecture, persistence, and product-oriented development skills.
- **Next AI-Driven Game:** Prototyping a new AI-native game concept focused on stronger gameplay architecture, deterministic AI integration, and scalable runtime systems.

---

### Technology Direction

- **Engine & Infrastructure:** Transitioning future projects to **Unity 6.3 LTS** and **VContainer**, replacing Zenject-based composition roots with LifetimeScope-driven dependency management.
- **Architecture:** Expanding Engine-Independent Architecture with asmdef module boundaries, explicit domain/application/infrastructure separation, typed factories, save adapters, and AI transport isolation.
- **AI Systems:** Continuing exploration of LLM Function Calling, deterministic validation layers, context-management strategies, AI memory models, and local inference workflows with **Unity Sentis**.
- **Gameplay Systems:** Building reusable gameplay frameworks through runtime abstractions, event contracts, state machines, and configuration-driven design rather than feature-specific implementations.
- **Networking & Persistence:** Evaluating authoritative multiplayer architectures, identity systems, save synchronization, offline-first workflows, and long-term persistence strategies.
- **Performance Engineering:** Focusing on zero-allocation gameplay paths, object pooling, explicit lifetime ownership, async orchestration, and evidence-based CPU/GC optimization on target mobile devices.
- **Animation & Character Systems:** Expanding into Playables, procedural animation, IK, animation graphs, and character interaction systems.
- **Future Platforms:** Exploring ECS readiness, XR/VR interaction models, and scalable runtime architectures suitable for long-lived products.

---

### Engineering Principles
{: #engineering-principles }

- Prefer measured performance over assumptions.
- Prefer explicit dependencies over service locators.
- Prefer deterministic gameplay execution over AI-driven state mutation.
- Prefer simple abstractions that solve real scaling problems over speculative architecture.
- Design systems for migration, testing, and long-term maintenance from the start.

Contact:
{: #contact }

{% include cv-image.html file="github.svg" alt="github.svg" original="Daria%20Krivushkina/github.svg" %}

{% include cv-image.html file="linkedin.svg" alt="linkedin.svg" original="Daria%20Krivushkina/linkedin.svg" %}

{% include cv-image.html file="email.svg" alt="email.svg" original="Daria%20Krivushkina/email.svg" %}

{% include cv-image.html file="whatsapp.svg" alt="whatsapp.svg" original="Daria%20Krivushkina/whatsapp.svg" %}

[GitHub](https://github.com/daridakr) ·
[LinkedIn](https://www.linkedin.com/in/daria-krivushkina/) ·
[Email](mailto:d.krivushkina@gmail.com)

---

[← Back to Home]({{ '/' | relative_url }})
