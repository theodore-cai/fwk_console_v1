# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

[Extract from feature spec: primary requirement + technical approach from research]

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: [e.g., TypeScript 5.x, Python 3.11, Swift 5.9 or NEEDS CLARIFICATION]  
**Primary Dependencies**: [e.g., React 18+, Ant Design 5.x, Vite 5.x or NEEDS CLARIFICATION]  
**Storage**: [if applicable, e.g., PostgreSQL, CoreData, files or N/A]  
**Testing**: [默认: 不需要（宪法规定） | 如需测试: pytest, XCTest, cargo test or NEEDS CLARIFICATION]  
**Target Platform**: [e.g., 现代浏览器, Linux server, iOS 15+ or NEEDS CLARIFICATION]
**Project Type**: [single/web/mobile - determines source structure]  
**Performance Goals**: [domain-specific, e.g., 1000 req/s, 10k lines/sec, 60 fps or NEEDS CLARIFICATION]  
**Constraints**: [domain-specific, e.g., <200ms p95, <100MB memory, offline-capable or NEEDS CLARIFICATION]  
**Scale/Scope**: [domain-specific, e.g., 10k users, 1M LOC, 50 screens or NEEDS CLARIFICATION]

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

[Gates determined based on constitution file]

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
# [REMOVE IF UNUSED] Option 1: Frontend React Application (DEFAULT for fwk_console_v2)
src/
├── components/          # React components
│   ├── common/         # Shared components
│   └── features/       # Feature-specific components
├── pages/              # Page-level components
├── services/           # API calls and business logic
├── utils/              # Utility functions
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── assets/             # Images, fonts, etc.
└── App.tsx             # Main app component

public/                 # Static assets
tests/ (optional)       # Only if tests explicitly requested
├── unit/
└── integration/

# [REMOVE IF UNUSED] Option 2: Full-stack Web (frontend + backend)
backend/
├── src/
│   ├── models/
│   ├── services/
│   └── api/
└── tests/ (optional)

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   └── services/
└── tests/ (optional)

# [REMOVE IF UNUSED] Option 3: Library/CLI project
src/
├── models/
├── services/
├── cli/
└── lib/

tests/ (optional)
```

**Structure Decision**: [Document the selected structure and reference the real
directories captured above]

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
