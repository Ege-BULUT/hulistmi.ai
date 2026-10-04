---
"@hulistmi/hulistmi": patch
---

Let a self-hosted deployment present its own origin in the document footer,
the /bot page and the User-Agent. Set a PUBLIC_ORIGIN binding on the Worker or
HULISTMI_PUBLIC_ORIGIN for the CLI; otherwise the published Worker's origin is
used.
