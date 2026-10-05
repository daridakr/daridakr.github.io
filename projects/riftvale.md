---
title: Riftvale — Mobile AI RPG
permalink: /projects/riftvale/
---

[← Projects]({{ '/projects/' | relative_url }}) · [Full CV project section]({{ '/cv/' | relative_url }}#riftvale)
{: .page-links }

# Riftvale — Mobile AI RPG

2024

<div class="media-placeholder">
  Original media:
  <a href="https://media.giphy.com/media/FHWRYD5iLI68FzmuZd/giphy.gif">Riftvale GIF</a>.
  Image location reserved for a static project image.
</div>

**Role:** Team Unity Developer, Head Of Development

**Source Code:** [github.com/daridakr/Riftvale](https://github.com/daridakr/Riftvale)

First MVP of an AI-driven mobile RPG that validated the gameplay concept and established the architectural foundations later expanded in Live Farm.

## Architecture & Gameplay

- **Gameplay Frameworks:** Designed reusable gameplay systems around item contracts, generic storage containers, factories, production stations, and runtime abstractions.
- **Event-Driven Architecture:** Connected inventory, production, building, and quest systems through shared event contracts rather than direct module dependencies.
- **State-Driven Buildings:** Implemented a building lifecycle architecture using Model, Controller, View, Context, Factory, and FSM-based state transitions.
- **Configuration & Runtime Separation:** Separated gameplay configuration from runtime state through ScriptableObject assets, interfaces, and runtime domain models.
- **AI Character Gameplay:** Built AI-assisted NPC conversations, dialogue topics, quest interactions, and action-driven gameplay responses.
- **Quest Systems:** Implemented composite quests, quest factories, player context tracking, and quest-driven NPC interactions.
- **Mobile Production:** Delivered the first playable Android MVP used for concept validation and later architectural evolution into Live Farm.

## Stack

> **Stack:** Unity 2021.3.29f1, Local LLM API (интеграция собственной локальной модели, которую делал AI Engineer), URP 12.1.12, Zenject, AI Navigation 1.1.3, Cinemachine 2.9.7, Input System 1.7.0, DOTween, Particle System, Newtonsoft.Json 3.2.1, uGUI, TextMeshPro, Easy Save 3.

## Related Master CV Sections

The employment section describes shared engineering experience across DeQuest & Rivalz projects.

- [Generic Runtime Architecture: `ItemStorage<I,R>`, `ItemContainer<I,R>`, and station abstractions]({{ '/cv/' | relative_url }}#gameplay-systems)
- [State Machines: Model, Controller, View, Context, and State layers]({{ '/cv/' | relative_url }}#performance-architecture)
- [Gameplay Framework Architecture and Event-Driven Gameplay]({{ '/cv/' | relative_url }}#gameplay-systems)

---

[LiveFarm →]({{ '/projects/live-farm/' | relative_url }}) · [All projects]({{ '/projects/' | relative_url }})
