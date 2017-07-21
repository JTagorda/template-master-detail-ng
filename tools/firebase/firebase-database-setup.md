
NOTE: This guide assumes that you have a working version of the master / detail NativeScript app set up locally.

 - Go to https://firebase.google.com/ and sign in / sign up for a Firebase account
 - Navigate to Firebase console via the **Go to console** button (upper right)
 - Create new project via the **Add project** button (Firebase project is simply a container for your Android/iOS apps)
	 - [Optional] Create iOS app via the **Add Firebase to your iOS app** / **Add another app** button
		 - Make sure the **iOS bundle ID** input field matches the appid generated for your NativeScript app (*open the root package.json for your app in your favorite editor and find the "nativescript" node there -- the "id" child node is your appid*)
		 - Download the provided **GoogleService-Info.plist** file and replace the [app-root-folder]/app/App_Resources/iOS/GoogleService-Info.plist with it
		 - You are done with the iOS app wizard and you can close it now
	 - [Optional] Create Android app via the **Add Firebase to your Android app** / **Add another app** button
		 - Make sure the **Android package name** input field matches the appid generated for your NativeScript app (*open the root package.json for your app in your favorite editor and find the "nativescript" node there -- the "id" child node is your appid*)
		 - Download the provided **google-services.json** file and replace the [app-root-folder]/app/App_Resources/Android/google-services.json with it
		 - You are done with the Android app wizard and you can close it now
 - Now let's set up the actual data for the NativeScript app
	 - Navigate to **Database** from the main side menu
	 - Import the [provided JSON data](https://github.com/NativeScript/template-master-detail-ng/blob/master/tools/firebase/car-rental-export-public.json) (the **Import JSON** button is to the right of the **+** / **-** buttons)
	 - Default security rules in Firebase require users to be authenticated but [for simplicity] the current version of the NativeScript master / detail app does not provide built-in support for authentication / authorization so database security rules must be updated:
		 - Open the **Rules** tab
		 - Replace the editor contents with the following and then publish the changes (DO NOT release production app with this ruleset):
```
{
  "rules": {
    "cars": {
      ".read": true,
      ".write": true
    }
  }
}
```
 - The master / detail "edit" functionality supports uploading new images to Firebase but default security rules require users to be authenticated for this to work. As [for simplicity] the master / detail app does not implement authentication / authorization in the current version, storage security rules must be updated as well:
	 - Navigate to **Storage** from the main side menu
	 - Open the **Rules** tab
	 - Replace the editor contents with the following and then publish the changes (DO NOT release production app with this ruleset):
```
service firebase.storage {
  match /b/{bucket}/o {
    match /cars/{allPaths=**} {
      allow read,write;
    }
  }
}
```
 - Update the Firebase Project ID in the master / detail app you have set up locally 
	 - In Firebase go to project settings (the settings button is to the right of the **Overview** side menu item)
	 - Copy the **Project ID** and replace the one in [app-root-folder]/app/shared/config.ts with it. For example if your Project ID is **my-awesome-project-80fbb**, the updated config.ts will look like:
```
export class Config {
    static firebaseBucket = "gs://my-awesome-project-80fbb.appspot.com/";
}
```
 - You are done!
 