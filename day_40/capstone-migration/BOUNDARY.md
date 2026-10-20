# Server and Client Boundary Map

- **app/layout.js**: Server Component — Sets document markup and passes children to Providers[cite: 3].
- **components/Providers.jsx**: Client Component (`'use client'`) — Uses React Context to manage local cart state[cite: 3].
- **app/menu/page.js**: Server Component — Directly awaits dishes from data layer; no client JS overhead[cite: 3].
- **app/menu/[id]/page.js**: Server Component — Awaits dish parameter and pre-renders static HTML[cite: 3, 4].
- **components/AddToCartButton.jsx**: Client Component (`'use client'`) — Interactive leaf containing onClick store dispatch[cite: 3].
- **app/cart/page.js**: Client Component (`'use client'`) — Reads client context to render order lines[cite: 1, 3].
- **app/checkout/page.js**: Client Component (`'use client'`) — Progressive form using useActionState[cite: 1, 2].
- **app/actions.js**: Server Action (`'use server'`) — Executes validation and order logic strictly on the server[cite: 1, 3].
