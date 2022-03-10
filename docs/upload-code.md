# Uploading Code

## How it works

![Talking to Electron](images/Talking%20to%20Electron.png)

## Attaching the api object

To do this we use the preload script. This will attach the node and electron functions that we select to an api object that will be attached to the browser's window in electron.

## Uploading Code

We use the invoke function because it returns a promise.  We want something returned to simply code and not rely on events which means we can have on listener.

