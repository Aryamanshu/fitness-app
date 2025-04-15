# Power Fitness - Modern Exercise Library App

![Power Fitness Banner](https://github.com/Aryamanshu/fitness-app/raw/main/public/logo192.png)

## 🏋️‍♂️ Overview

Power Fitness is a modern, responsive web application that provides users with access to a comprehensive library of over 1,300 exercises. The app features detailed instructions, animations, and YouTube video tutorials for each exercise, helping users achieve their fitness goals more efficiently.

## ✨ Features

- **Extensive Exercise Library**: Access to over 1,300 exercises with detailed information
- **Body Part Filtering**: Browse exercises by specific body parts (chest, back, shoulders, etc.)
- **Exercise Details**: View comprehensive information about each exercise including target muscles, equipment needed, and proper form
- **Video Tutorials**: Watch YouTube video demonstrations for each exercise
- **Embedded Video Player**: Watch exercise tutorials directly within the app
- **Similar Exercises**: Discover related exercises that target the same muscle groups
- **Responsive Design**: Optimized for all devices - desktop, tablet, and mobile
- **Modern UI**: Clean, intuitive interface with smooth animations and transitions
- **Contact Form**: Easy way for users to get in touch with questions or feedback

## 🛠️ Technologies Used

- **React**: Frontend library for building the user interface
- **Material-UI**: Component library for consistent and responsive design
- **Framer Motion**: Animation library for smooth transitions and effects
- **RapidAPI**: Integration with ExerciseDB API for exercise data
- **YouTube API**: For fetching relevant exercise videos
- **CSS**: Custom styling with modern design principles
- **Responsive Design**: Mobile-first approach for all screen sizes

## 📱 Screenshots

### Home Page
![Home Page](https://via.placeholder.com/800x400?text=Power+Fitness+Home+Page)

### Exercise Browser
![Exercise Browser](https://via.placeholder.com/800x400?text=Exercise+Browser)

### Exercise Detail Page
![Exercise Detail](https://via.placeholder.com/800x400?text=Exercise+Detail+Page)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aryamanshu/fitness-app.git
   cd fitness-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add your API keys:
   ```
   REACT_APP_RAPID_API_KEY=your_rapidapi_key
   SKIP_PREFLIGHT_CHECK=true
   ```

4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## 🌐 API Integration

This project uses the following APIs:

- **ExerciseDB API**: Provides comprehensive exercise data including instructions, target muscles, and equipment
- **YouTube Search API**: Fetches relevant exercise tutorial videos

Both APIs are accessed through RapidAPI. You'll need to sign up for a RapidAPI account and subscribe to these APIs to get your API key.

## 📋 Project Structure

```
/src
  /assets            # Images, icons, and other static assets
  /components        # Reusable UI components
  /pages             # Main application pages
  /utils             # Utility functions and API calls
  /hooks             # Custom React hooks
  App.js             # Main application component
  index.js           # Entry point
```

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

Aryamanshu - [GitHub](https://github.com/Aryamanshu)

Project Link: [https://github.com/Aryamanshu/fitness-app](https://github.com/Aryamanshu/fitness-app)

## 🙏 Acknowledgements

- [ExerciseDB API](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb/)
- [Material-UI](https://mui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React](https://reactjs.org/)
