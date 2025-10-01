Padding:10px 300px;
//means vertical horizontal padding

We use margin for elements inside the grid display flex and grid to create space around items

Use relative on a parent to create a positioning context.
Use absolute on a child to place it exactly inside that parent, even if the parent scales or moves.

If you use position: absolute; without a parent set to position: relative;, the element will be positioned relative to the nearest ancestor that has a positioning context (relative, absolute, or fixed).
If there is no such ancestor, it will be positioned relative to the entire page (<body>), which can cause unpredictable placement.

position: relative; on the parent creates a reference point for absolutely positioned children.
position: absolute; on the child means the child’s position (top, left, etc.) is calculated relative to the nearest parent with position: relative;.
Best practice:

Add position: relative; to the parent container.
Use position: absolute; on the child element you want to position inside that parent.