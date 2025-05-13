# European Flag Quiz 🇪🇺

[![Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)](https://yourusername.github.io/european-flag-quiz)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Countries](https://img.shields.io/badge/Countries-40+-blue.svg)
![Framework](https://img.shields.io/badge/Framework-Vanilla_JS-orange.svg)
![Responsive](https://img.shields.io/badge/Responsive-Yes-success.svg)

A web-based quiz game to test your knowledge of European flags. The quiz randomly selects 15 European countries and challenges the user to identify their flags.

## Features

- Randomly selects 15 European countries for each quiz session.
- Displays country flags using high-quality SVG images.
- Provides feedback on correct and incorrect answers.
- Shows a description of the country after each question.
- Tracks the user's score throughout the quiz.
- Allows users to restart the quiz after completion.

## Technologies Used

- **HTML**: For the structure of the application.
- **CSS**: For styling, including animations and transitions.
- **JavaScript**: For quiz logic and interactivity.
- **Tailwind CSS**: For utility-first styling.
- **FlagCDN**: For fetching country flags.

## How to Run

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/euroFlags.git
   cd euroFlags
   ```

2. Open the project:
   - **Simple method**: Open `index.html` directly in your web browser
   - **Using a local server** (recommended for development):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Or using Node.js with http-server (install first with: npm install -g http-server)
     http-server -p 8000
     ```
     Then visit `http://localhost:8000` in your browser

3. Start testing your European flag knowledge!

## Browser Compatibility

This application works best in modern browsers such as:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
