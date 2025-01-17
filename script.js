let noClickCount = 0;
let enableMoveNo = false;

function showResponse(isYes) {
  const container = document.getElementById('main');
  if (isYes) {
    container.innerHTML = `
      <img src="pandaImage/panda4.jpeg" alt="Holding Hands">
      <h1>Hehehehe, I know You Love me a lot 😍</h1>
    `;
  } else {
    noClickCount++;
    if (noClickCount === 1) {
      container.innerHTML = `
        <img src="pandaImage/panda2.jpeg" alt="Think More">
        <h1>Think More! 🤔</h1>
        <p>Put your answer below.</p>
        <div class="buttons">
          <button class="yes" onclick="showResponse(true)">Yes</button>
          <button class="no" onclick="showResponse(false)" id="noButton">No</button>
        </div>
      `;
    } else if (noClickCount === 2) {
      container.innerHTML = `
        <img src="pandaImage/panda3.jpeg" alt="Sad Cat">
        <h1>Please go with me! 😭</h1>
        <p>Put your answer below.</p>
        <div class="buttons">
          <button class="yes" onclick="showResponse(true)">Yes</button>
          <button class="no" id="noButton" onmouseover="moveNoButton()">No</button>
        </div>
      `;
      enableMoveNo = true;
    }
  }
}

function moveNoButton() {
  if (!enableMoveNo) return; // Only activate after the third state

  const noButton = document.getElementById('noButton');
  const container = document.querySelector('.buttons');
  const containerRect = container.getBoundingClientRect();
  const buttonRect = noButton.getBoundingClientRect();

  let newLeft = Math.random() * (containerRect.width - buttonRect.width);
  let newTop = Math.random() * (containerRect.height - buttonRect.height);

  noButton.style.position = 'absolute';
  noButton.style.left = `${newLeft}px`;
  noButton.style.top = `${newTop}px`;
}