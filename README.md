# RNAnimation

how to use animation on react native app.

ANIMATED API
runs animation on JS thread.
limited to predefined interpolate and sequences

REANIMATED API
runs animation on UI thread.
here we get gesture handler animations, complex physics-based animations

Worklets & Direct Manipulation
which allows you to write animations and transformations in a way that bypass JS thread.

means faster responses to gestures, better frame rates and more fluid UI.

Better Gesture Handling
when combined with react-native-gesture-handler, enables super-responsive touch gestures (swipe, drag, pinch-to-zoom)

Native driver 2.0 & shared elements transitions:
supports advanced transitions

More Control and flexibility.

#####

If you're using Reanimated with react-native-gesture-handler, or navigation animations, install the dev client:

npx expo install expo-dev-client
npx expo run:ios

Double-check babel.config.js has 'react-native-reanimated/plugin' at the end
Try cleaning cache: npx expo start -c
