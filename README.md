#marginalis


Written text has all sorts of non-linear tools, like writing or drawing in the mmargins. Marginalis implements a basic set of skeuomorphic jQuery tools to do some of these things.

1. Enforce 50-ish character lines, distraction free margins and a reasonable text size.
2. For a certain class of anchors links (<a name="whatever">), draw an arrow from the anchor to the referred-to element (#whatever).
3. Write tiny text in the margins where it refers to. For too-large text, show a clickable continuation, where the margin note expands and moves to the center. On click on the main text, center that again and shrink the margin note.


###TODO:
1. Fancy-pants drop caps
2. Visibly link marginalia with their referents.
  - Footnote-like superscripts to allow a marginalis to pertain to a sub-paragraph level element, or, 
3. Cope with multiple marginalia pertaining to one element. (Don't have them cover each other up.)
4. Nested marginalia. (Yo dawg, I herd you liekd margin notes, so I put margin notes in your margin notes.)
5. When a margin note is clicked, center it. (Perhaps only for long margin notes)
6. Build a totally kick-ass kidpix-like palette of awesome animals, saints, angels, dragons and other margin-dwelling creatures to be pasted all willy-nilly throughout the user's page's margins. (Unfortunately, not really)
7. Respect (and respond to) the pre-existing font size, font-family, article width, etc.
8. Add to WP plugin code to disable <p> tag stripping (which breaks marginalis) http://wordpress.stackexchange.com/questions/10656/editor-removes-p-tags