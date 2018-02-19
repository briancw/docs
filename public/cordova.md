# Building for Production

(These instructions came from this guide https://ionicframework.com/docs/guide/publishing.html)

## Android

```
# Create a ready to be signed APK
cordova build --release android
```

```
# Create a new keystore for signing if this is the first time.
# Make sure to save the keystore in a safe location as it will be needed for later builds
# ~/Dropbox/Keystores/
keytool -genkey -v -keystore [APP_NAME]-release.keystore -alias [APP_NAME] -keyalg RSA -keysize 2048 -validity 10000
```

```
# Sign the built apk for release
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore [APP_NAME]-release.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk [APP_NAME]
# Optimize the apk for publishing
# You may need to run which adb or something similar if zipalign isn't in your path
# EG: /Users/brian/Library/Android/sdk/build-tools/25.0.0/zipalign
zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk [APP_NAME]-release.apk
```
