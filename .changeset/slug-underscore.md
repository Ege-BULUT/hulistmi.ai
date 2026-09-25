---
"@hulistmi/hulistmi": patch
---

Accept underscores anywhere in a document slug, including as the first
character. Pages such as `bpta-image_get_and_save` and `_ark_ui_compile` were
rejected as invalid slugs and could not be fetched.
