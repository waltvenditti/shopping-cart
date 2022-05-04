Shopping Cart App
=================

see live: https://waltvenditti.github.io/shopping-cart/

This was created for The Odin Project, during the course on React in the JavaScript part of the cirriculum. It pays homage to both my history as a chemist and my love of TES III - hence "The Skooma Den". 

The design of the app is not particularly complex. I used functions instead of classes, primarily because functions seemed more complex to me and I wanted to get some experience working with them. A sort of master array of each product, plus its price and "count" (set to 0 by default) is stored in state in the RouteSwitch file, which serves as a sort of top-level for the entire app. I defined some functions here which are then passed to the components, eventually ending up as callbacks for certain events like changing an item count in a form. 

Sometimes React would not refresh the page when something like an item count was changed, so I had to create dummy variables which would be switched from true to false in the component's callback. The various functions I wrote to update item counts in the master array got somewhat complicated, and I wonder if they would be considered sufficiently decoupled by the standards of an experienced React programmer. Once I'm finished going through The Odin Project's course on NodeJS, I plan to revisit React and properly reconcile everything I'm expected to know from these lessons. In that case refactoring the code here is on a long-term to-do list. 

For those who are curious what the various nootropics are:
theobromine: a compound in the same family as caffeine (with milder effects), found in dark chocolate
adrafinil: wakefulness-promoting agent
piracetam & phenylpiracetam: both are racetam-class drugs, alleged to do all sorts of good stuff like reduce anxiety, improve memory and cognition, improve mood, and improve sleep quality, with minimal side-effects. Phenylpiracetam was invented by the Soviets and was used by their cosmonauts to remain sharp during space flights. 
bacopa monnieri: an herb alleged to improve cognition (memory, concentration, motivation, and creativity). 
panax ginseng: an herb said to improve cognition and energy levels. Maybe recognized due to certain energy drinks advertising it as an ingredient. 
salvia officinalis: AKA "common sage". A plant with a long history of medicinal and culinary use. 
