// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

/* ***********************************************************
* The {N} Firebase plugin needs some initialization steps before it is ready
* for use. Check out the initialization script at /shared/firebase.common.ts
* along with more information about it.
*************************************************************/
import "./shared/firebase.common";

// Use custom ResourceLoader to be able to load ".scss" files from styleUrls of components
// TODO: Remove this when it becomes build in nativescript-angular
import { FileResourceLoaderProvider } from "./shared/file-resource-loader";

platformNativeScriptDynamic(undefined, [FileResourceLoaderProvider]).bootstrapModule(AppModule);
