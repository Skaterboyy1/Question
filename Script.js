// Select the buttons by their IDs
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

let noClicks = 0;
let yesScale = 1; // Starting scale factor for the YES button
const noMessages = ["Are you sure?", "Really?", "Try again!", "NO?","COME ON !","RAHELA","Ne suparam"];

// When the NO button is clicked...
noBtn.addEventListener('click', () => {
    noClicks++;
    // Cycle through the messages on the NO button
    noBtn.textContent = noMessages[noClicks % noMessages.length];

    // Increase the YES button's scale factor
    yesScale += 0.4;

    // Update the YES button's transform scale.
    // (It remains in its original container, so it grows from that spot.)
    yesBtn.style.transform = `scale(${yesScale})`;
});

// When the YES button is clicked, replace the page content
yesBtn.addEventListener('click', () => {
    document.body.innerHTML = `
    <div style="text-align: center; color: white; padding-top: 50px;">
      <h1>Yay! Now you are mineeeeee <3</h1>
      <img src="dancing-cat.gif" alt="Dancing Cat" style="max-width: 100%; height: auto; margin-top: 20px;">
    </div>
  `;
});
