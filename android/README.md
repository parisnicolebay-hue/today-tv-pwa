# Today TV for Google Play

This directory contains the Android Trusted Web Activity for `https://app.ontodaytv.com/`.

## Permanent identifiers

- App name: Today TV
- Application ID: `com.ontodaytv.app`
- Version: `1.0.0` (`versionCode` 1)
- Minimum Android: API 23
- Target Android: API 36

Do not change the application ID after the first Play Console release.

## Build in Android Studio

1. Install the current stable Android Studio and Android SDK 36.
2. Open this `android` directory as a project.
3. Allow Gradle sync to finish.
4. Run the `app` configuration on an Android phone for an initial Custom Tab test.
5. In Play Console, create the app and enable Play App Signing.
6. Create and securely retain an upload key. Never commit the keystore or passwords.
7. Build a signed Android App Bundle (`.aab`) and upload it to Internal testing.

## Required domain verification

After Play App Signing is enabled, copy its SHA-256 certificate fingerprint into
`play/assetlinks.template.json`. Publish the completed file at:

`https://app.ontodaytv.com/.well-known/assetlinks.json`

Until that file contains the correct Play signing fingerprint, Android intentionally
opens the site as a Custom Tab instead of a verified full-screen Trusted Web Activity.

## Store declarations

The Android wrapper requests only Internet access. The website loads the Today TV live
stream and WordPress program feed. Complete Play Console's App content, Data safety,
content rating, privacy policy, advertising, and target-audience sections truthfully
before submission.
