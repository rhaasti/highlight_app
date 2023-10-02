a. Note down any tricky problems you faced during this challenge, and how you chose
to solve those issues.

-> The actual highlighting was challenging; I decided to not use any third party libraries. When the DualPane component first mounts, I'm iterating through the given string (the transcript) to build an array containing all of its characters, then passing this array as a prop to the Transcript component. As the user selects characters for the beginning and end of a range to highlight, I'm iterating through the 'ranges' array (which is a collection of ranges) to build an array containing each of the individual indices within those ranges. In the Transcript component, I'm using .map to iterate over each character, checking it's index against the indices contained in the ranges and conditionally rendering each character that way. If it's in the range, it will be yellow and have an eventlistener attached to toggle the notes Modal. This solution is likely not optimal due to amount of iterating involved, though in such a small app I don't see any performance issues. 

-> Another issue that arose was when a user edits a saved highlight, it wasn't clear in the UX that they were in an 'editing' mode, and which specific highlight was being changed. I decided to conditionally render the 'edit' buttons, as when 'edit' is being clicked I was already capturing the index of the chosen highlight, so I added some state to toggle these buttons back and forth. 

-> As always in a React app, in the managing of state and props you'll run into unexpected challenges as complexity grows. I had moments where I needed similar functionality to be present in both Transcripts as well as SavedHighlights, or there would be data I realized would be stuck in a child component. General refactoring to bring functionality into DualPane to pass as props / maintaining a DRY principal as best as possible. 

-> Managing the one-to-many relational data in the notes Modal was tricky – as each saved highlight has an ID, which I used it's index for – and can have multiple associated notes. Each note can be edited and deleted as well. Managing this through state posed a challenge as, in the notes Modal, I attempted to keep track of each of the notes per saved highlight in an object, with each property being a key from the saved highlight's index and it's value being an array of each saved note. Managing the notes as such worked pretty well, until the user deletes a saved highlight ..

b. How you tested your code.
-> I unfortunately did not implement anything like Jest or Cyprus; I manually navigated the app to test the functionality, as well as the dev tools flamegraph / logging to ensure nothing was going haywire performance-wise. 

c. Include what else you would want to implement if you had more time (additional
features, refactors, etc).

--> The aforementioned issue with deleting a saved highlight and the notes experiencing an off-by-one issue was frustrating and something I didn't notice until the last minute. I either need to manually re-index the object in the notes Modal state or change it to a nested array as I'm reliant on the index. This is important functionality I'd like to fix.

--> The user experience of clicking on a character to highlight, then selecting an 'end' character which comes before the 'start' character doesn't quite work. I'd like to fix that. 

--> Editing a note, as well as the keyboard shortcuts, I unfortunately ran out of time to implement. 

d. Provide instructions on how to run your app if there are additional steps required.
 --> npm run dev

i. Include any additional libraries you used.
--> I used Tailwind but it was already configured.
