# Playful, Interactive Portfolio

## Goal
Extend the existing neon-mint personality across the full portfolio without changing the content, metrics, navigation, or case-study structure. Motion will remain polished, purposeful, and accessible rather than game-like or distracting.

## Homepage
- Add a slim scroll-progress indicator and a playful cursor-following accent on pointer devices.
- Give section headings animated underline/scribble details and small rotating section markers.
- Add scroll-entry reveals with staggered timing for cards, metrics, experience roles, and capability groups.
- Make cards respond to pointer position with subtle tilt, highlight, and icon movement while keeping touch layouts stable.
- Turn experience progression into a visible connected journey with animated timeline nodes.
- Add count-up animation to measured-impact values when they enter view.
- Add clearer interactive feedback to project cards, including animated arrows and a visible “open/explore” affordance.
- Add a gently moving ticker between major content groups using existing portfolio themes only.
- Make the contact area more expressive with playful link motion and a small availability signal.

## Case Studies
- Apply one shared playful case-study shell to WhatsApp, Spotify, and BluSmart.
- Add route-specific accent personalities while preserving the global mint system and both themes.
- Add reading progress, section reveal motion, playful heading marks, and tactile card hover states.
- Animate existing diagrams, KPI blocks, timelines, chips, and mobile mockups on entry or hover.
- Keep every case-study section, metric, visual, and navigation destination unchanged.
- Preserve the dark appearance inside WhatsApp and Spotify phone mockups in both site themes.

## Interaction and Accessibility
- Use CSS and a small reusable client-side interaction layer; no new backend or content changes.
- Disable pointer tilt on touch devices and stop nonessential animation under reduced-motion preferences.
- Keep keyboard focus visible and ensure interactions do not hide information.
- Avoid layout shifts, horizontal overflow, and constant high-intensity animation.

## Verification
- Check homepage and all three case studies in light and dark themes.
- Test desktop and mobile layouts, internal navigation, external links, theme switching, scrolling, and reduced motion.
- Confirm no console errors, missing content, or overflow.

## Technical Details
- Create reusable `PlayfulPage` and `Reveal` helpers for progress, pointer effects, and viewport entry states.
- Extend semantic motion and accent tokens in the global stylesheet.
- Add shared page classes to each existing route rather than rewriting their content.
