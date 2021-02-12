# Expo Food App

## Tools

- Expo CLI
- react-navigation
- Yelp API
- axios

## fetch / axios

### fetch

- Built in function for making network requests
- Error handlind is a bit weird
- Requires us to write a lot of wrapper code to make it work 'sensibly'

### axios

- Seperate library for making requests
- Easy to use, sensible defaults
- Increases our app size (ver, very slightly)

## Flow in SearchScreen Component

1. SearchScreen function called
2. Nothing visible on screen!
3. User enters a search term, submits it, request to Yelp made
4. Get search results, call setter
5. Updated state causes component to rerender
6. No we have something to show the user.

![Expo-Food-App](https://github.com/ahmetizgi84/Expo-Food-App/tree/master/assets/anasayfa.png?raw=true)
![Expo-Food-App](https://github.com/ahmetizgi84/Expo-Food-App/tree/master/assets/detay.png?raw=true)
