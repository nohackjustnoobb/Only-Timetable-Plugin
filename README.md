# Only Timetable Plugin Template

This repository provides a template and utilities for building plugins for the [Only Timetable](https://github.com/nohackjustnoobb/Only-Timetable) using Deno. Each plugin is organized as a folder under `src` (except `utils`), and utilities are provided for communication with the main app. The template includes example plugins and a clear structure to help you get started quickly.

## Setup Instructions

### Prerequisites

- [Deno](https://deno.land/) must be installed on your system.

### Running the App

To start the app in development mode:

```sh
deno run dev
```

### Building the App

To build the app into JSON output:

```sh
deno run build
```

## Developing a Plugin

Each folder (except `utils`) under `src` is considered a plugin and will be built automatically.

To create a new plugin:

1. Copy the `src/example` folder and rename it to the ID of your plugin.
2. Edit the `meta.json` file and the two `.ts` files inside your new plugin folder to implement your plugin logic.

### Testing Plugins

The `deno run dev` command runs `src/main.ts`, where you can include testing logic for your plugins during development.

### More Examples

For more plugin examples, visit: [Only-Timetable-Plugin](https://github.com/nohackjustnoobb/Only-Timetable-Plugin)

## Utils

The `src/utils` folder contains utility modules that facilitate communication between plugins and the main app.

### Communication with the Main App

The main utility is `isar.ts`, which provides functions to persist and retrieve data by sending messages to the main app:

- `saveRoutes(routes: Route[])`: Serializes and saves an array of `Route` objects.
- `saveStops(stops: Stop[])`: Serializes and saves an array of `Stop` objects.
- `getValue(key: string)`: Retrieves a value associated with a key from storage.
- `setValue(key: string, value: string)`: Stores a value for a given key.

These functions use a global `sendMessage` interface to communicate with the main app, enabling plugins to store and retrieve data in a consistent way.

During development, you can uncomment the log lines for `sendMessage` in `src/utils/isar.ts` to help with debugging and inspecting the messages being sent.

**Note:** Although the `Stop` and `Route` types have most fields as nullable, you should fill in as many fields as possible when creating or updating these objects. Incomplete data may result in plugins not displaying information correctly.

## Advanced Development

A plugin for Only Timetable is simply a JSON object that contains your plugin's metadata and the main logic as JavaScript code strings. You do not need to use the provided template or any specific folder structure—just produce a JSON file in the following format:

```json
{
  "id": "example",
  "name": "Example Plugin",
  "version": "1.0.0",
  "author": "ME",
  "description": "An example plugin.",
  "repositoryUrl": "https://example.com",
  "getEtaScript": "async function t(o,e){console.log(\"getEta function called\")}var a=t;export{a as default};\n",
  "updateRoutesScript": "async function e(){console.log(\"updateRoutes function called\")}var o=e;export{o as default};\n"
}
```

### How the Scripts Work

- **getEtaScript**: This field should be a JavaScript module as a string. The system will load and execute this code, calling its default export to handle ETA (Estimated Time of Arrival) requests. The function typically receives parameters such as stop and route information, and should return the ETA data. You can use the injected `sendMessage` interface inside this function to communicate with the main app if needed.

- **updateRoutesScript**: This field should also be a JavaScript module as a string. The system will call its default export to update or fetch the latest route and stop data. This function can also use the injected `sendMessage` interface to persist or retrieve data from the main app.

This approach gives you full flexibility: you can use the template for convenience, or simply provide a JSON file with your code and metadata for a minimal setup.
