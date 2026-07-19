plugins {
    id("com.android.application")
}

android {
    namespace = "com.ontodaytv.app"
    compileSdk = 36

    defaultConfig {
        applicationId = "com.ontodaytv.app"
        minSdk = 23
        targetSdk = 36
        versionCode = 1
        versionName = "1.0.0"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
        }
    }
}

dependencies {
    implementation("com.google.androidbrowserhelper:androidbrowserhelper:2.7.2")
}
