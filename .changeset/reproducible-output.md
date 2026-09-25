---
"@hulistmi/hulistmi": patch
---

Render the same document to the same bytes. The retrieval time moved from the
frontmatter to an X-Retrieved-At response header, so the ETag stays stable for
an unchanged page and conditional requests can hit.
