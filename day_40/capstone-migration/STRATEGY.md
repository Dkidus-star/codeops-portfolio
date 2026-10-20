# Rendering Strategy Justifications

- **/**: Static (`○`) — Landing page with today's specials; public content identical for all visitors[cite: 1, 3, 4].
- **/menu**: ISR (`revalidate = 3600`) — Menu catalog and prices change a few times a day; cached at edge and regenerated hourly[cite: 1, 3].
- **/menu/[id]**: Static via params (`●`) — Dish IDs are known in advance and pre-rendered with generateStaticParams; missing IDs trigger notFound()[cite: 1, 3, 4].
- **/cart**: Client — Cart lines and running ETB calculations are private to one browser tab[cite: 1, 3].
- **/checkout**: Dynamic (`λ`) — Executes request-time validation and server action mutations[cite: 1, 3, 4].
