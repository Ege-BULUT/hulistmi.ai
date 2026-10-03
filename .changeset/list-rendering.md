---
"@hulistmi/hulistmi": patch
---

Keep each list item on one line. Inline children of an <li> were rendered as
separate blocks, splitting one sentence into several paragraphs and dropping
the backticks around code spans. Definition lists render the term in bold
above its definition instead of running the two together.
