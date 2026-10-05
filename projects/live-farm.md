---
title: LiveFarm — AI-Driven Gameplay Systems
permalink: /projects/live-farm/
---

[← Projects]({{ '/projects/' | relative_url }}) · [Full CV project section]({{ '/cv/' | relative_url }}#live-farm)
{: .page-links }

# LiveFarm — AI-Driven Gameplay Systems

2025

[https://youtu.be/BGwqTxJXdK0?si=FH7QEW5joYAqR47e](https://youtu.be/BGwqTxJXdK0?si=FH7QEW5joYAqR47e)

**Role:** Solo Unity Developer

**Project:** [github.com/daridakr/gemini-ai-farm](https://github.com/daridakr/gemini-ai-farm)

Reworked version of the Riftvale concept with a stronger architecture and a revised gameplay layer.

## AI Gameplay Systems

- **AI Gameplay Architecture:** Built a Narrative Interpreter around Gemini Function Calling with registered handlers for world flags, dialogue objectives, and inventory changes.
- **Deterministic AI Routing:** Routed AI actions through validated command handlers and gameplay services, preventing direct model access to game state.
- **Context & Memory:** Designed context selection, persona memory, and bounded conversation history to provide gameplay-relevant state while minimizing prompt size.
- **Async AI Integration:** Integrated Gemini through UniTask, async/await, and cancellation tokens, maintaining responsive gameplay during 0.5-7 s AI requests.

## Stack

> **Stack:** Unity 2022.3.23f1 LTS, URP, UI Toolkit, UXML/USS, New Input System, Zenject, EventBus, MVP/MVVM, Strategy Pattern, Command/Interpreter, UniTask, Newtonsoft.Json, Google Gemini API, LLM Function Calling, Firebase Auth/Analytics/Crashlytics, Addressables, AssetBundles, Zenject MemoryPool, NonAlloc Physics.

## Related Master CV Sections

The employment section describes shared engineering experience across DeQuest & Rivalz projects.

- [Narrative Interpreter, Context & Memory, and Core Loop Protection]({{ '/cv/' | relative_url }}#ai-systems)
- [Async AI Transport: 2-7 ms application overhead]({{ '/cv/' | relative_url }}#ai-systems)
- [Zero-Allocation Gameplay: 0 bytes allocated per interaction-scan frame]({{ '/cv/' | relative_url }}#performance-architecture)
- [Timing System: O(1) Hashed Timing Wheel]({{ '/cv/' | relative_url }}#performance-architecture)
- [Addressables & Android and Scene Loading Pipeline]({{ '/cv/' | relative_url }}#performance-architecture)
- [QA Delivery: Android APK distribution through Firebase CLI]({{ '/cv/' | relative_url }}#tools-production)

---

[Riftvale]({{ '/projects/riftvale/' | relative_url }}) · [Forever Village →]({{ '/projects/forever-village/' | relative_url }})
