# Date Request Interactive Webpage ❤️

This is a fun, interactive webpage designed to ask someone on a date in a playful manner. The user is presented with buttons to answer "Yes" or "No," and the page reacts differently based on the user's choice. If the "No" button is clicked multiple times, the button eventually starts avoiding clicks by moving away from the cursor.

## Features

- **Dynamic Responses**: The page updates its content based on whether the user clicks "Yes" or "No."
- **Playful Behavior**: After clicking "No" multiple times, the "No" button becomes unclickable by moving away from the user's pointer.
- **Responsive Design**: The page works well on different screen sizes.
- **Lighthearted Fun**: Includes playful messages and cute images to enhance the experience.

## Preview

### Initial Screen
The user is asked, "Do you want to go with me for a date? 😌"

### Progression
- **First "No" Click**: Displays a message asking the user to "Think More! 🤔."
- **Second "No" Click**: Shows a message saying, "Please go with me! 😭," and enables the moving "No" button.
- **"Yes" Click**: Displays a final happy message: "Hehehehe, I know You Love me a lot 😍."

## How It Works

- The webpage dynamically updates using JavaScript, with different states depending on the user's input.
- When the user hovers over the "No" button (after the second "No" click), the button moves to a random position, preventing it from being clicked.
