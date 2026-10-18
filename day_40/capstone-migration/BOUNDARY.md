# BOUNDARY.md (capstone)

One line per component. Aim for few client components; each must hold state, run a handler, or use a browser API.

| Component | Runs on | Why |
| --- | --- | --- |
| `app/layout.js` | server | passes children into Providers |
| `components/Providers.jsx` | client | context needs state |
| | | |
