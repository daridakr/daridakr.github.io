---
title: Forever Village — RPG / WebGL Case
permalink: /projects/forever-village/
---

[← Projects]({{ '/projects/' | relative_url }}) · [Full CV project section]({{ '/cv/' | relative_url }}#forever-village)
{: .page-links }

# Forever Village — RPG / WebGL Case

2023

[https://youtu.be/XkX8LXaweK8?si=mXB3aKjlttfn4kRO](https://youtu.be/XkX8LXaweK8?si=mXB3aKjlttfn4kRO)

**Role:** Solo Unity Developer

**Project:** [github.com/daridakr/Forever-Village](https://github.com/daridakr/Forever-Village)

Large-scale RPG and village simulation project used as the basis for a full technical architecture review and later AI-oriented redesign.

## Architecture, Gameplay & Review

- **Architecture Review:** Audited gameplay, combat, progression, AI, persistence, UI, DI, and scene-flow systems to identify scaling and maintenance risks.
- **Foundation Redesign:** Defined a modular architecture split across Domain, Application, Infrastructure, Unity, Composition, and AI layers for future development.
- **Performance Engineering:** Applied object pooling, spatial partitioning, FastList swap-remove patterns, and non-alloc-oriented runtime structures.
- **Gameplay Systems:** Built progression, village management, construction, upgrades, residential production, economy, and region-unlock mechanics.
- **Combat & RPG Systems:** Implemented character progression, equipment, XP, spell catalogs, auto-combat, FSM-driven AI, and companion behaviors.
- **Encounter Design:** Implemented threat-budget spawning and weighted enemy selection systems.
- **WebGL Readiness:** Evaluated memory constraints, persistence strategies, rendering limitations, scene flow, and asynchronous execution requirements.

## Stack

> **Stack:** Unity 2021.3.29f1, URP/Core 12.1.12, Shader Graph 12.1.12, AI Navigation 1.1.3, Cinemachine 2.8.9, Input System 1.6.3, TextMeshPro 3.0.6, uGUI, Zenject, UniTask, DOTween, Odin, Easy Save 3, TypedScenes, FSM, NavMesh, ScriptableObjects, Object Pooling, Threat Budget, Spatial Hash Grid.

## Related Master CV Sections

The employment section describes shared engineering experience across DeQuest & Rivalz projects. Its framework and modifier details are not attributed to a specific project in the Master CV.

- [Data-Driven Gameplay Frameworks: progression, resource production, and villager modifiers]({{ '/cv/' | relative_url }}#gameplay-systems)
- [Config/Runtime Separation]({{ '/cv/' | relative_url }}#gameplay-systems)
- [Gameplay Framework Architecture and Resource Pipeline]({{ '/cv/' | relative_url }}#gameplay-systems)

---

[← LiveFarm]({{ '/projects/live-farm/' | relative_url }}) · [All projects]({{ '/projects/' | relative_url }})
