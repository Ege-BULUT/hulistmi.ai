---
"@hulistmi/hulistmi": patch
---

Answer 404 instead of 502 for a document Huawei does not have. Upstream reports
an unknown slug with a non-zero code other than 404, which surfaced as a 502
and made clients retry dead slugs forever.
