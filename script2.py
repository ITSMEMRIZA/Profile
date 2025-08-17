import pandas as pd
import requests
import json
import time

# Webhook URL
WEBHOOK_URL = "https://discord.com/api/webhooks/1406107665939042345/s8XXhrjJOdg5xYp4bMx3MsYaMhPpD-AXxnt3uOMUCdIErtabNOP-1BUMDX6Js5gXYK7p"

# Initialize items list
items = []

def add(cat, names):
    for n in names:
        items.append((cat, n))

# 1) "Deadly" permission-gated APIs
add("Permissions", [
    "navigator.geolocation.getCurrentPosition()",
    "navigator.geolocation.watchPosition()",
    "navigator.mediaDevices.getUserMedia({video:true})",
    "navigator.mediaDevices.getUserMedia({audio:true})",
    "navigator.mediaDevices.enumerateDevices()",
    "navigator.mediaDevices.getDisplayMedia()",
    "Notification.requestPermission()",
    "navigator.credentials.get()",
    "navigator.credentials.store()",
    "navigator.permissions.query()",
    "navigator.clipboard.readText()",
    "navigator.clipboard.read()",
    "navigator.clipboard.writeText()",
    "navigator.clipboard.write()",
    "navigator.share()",
    "navigator.canShare()",
    "new EyeDropper().open()",
    "navigator.wakeLock.request('screen')",
    "new IdleDetector().start()",
    "new PaymentRequest(methodData, details).show()",
    "navigator.contacts.select()",
    "navigator.bluetooth.requestDevice()",
    "navigator.usb.requestDevice()",
    "navigator.serial.requestPort()",
    "navigator.hid.requestDevice()",
    "navigator.requestMIDIAccess()",
    "navigator.nfc.watch()",
    "window.showOpenFilePicker()",
    "window.showSaveFilePicker()",
    "window.showDirectoryPicker()",
])

# 2) Network / IP / RTC
add("Network", [
    "fetch('https://ip-api.com/json/')",
    "fetch('https://ipinfo.io/json')",
    "fetch(url, {mode:'no-cors'})",
    "navigator.sendBeacon(url, data)",
    "XMLHttpRequest()",
    "new WebSocket(url)",
    "new EventSource(url)",
    "new RTCPeerConnection(config)",
    "RTCPeerConnection.createDataChannel()",
    "RTCPeerConnection.getStats()",
    "new WebTransport(url)",
])

# 3) Device / Browser Fingerprinting
add("Fingerprint", [
    "navigator.userAgent",
    "navigator.userAgentData",
    "navigator.userAgentData.brands",
    "navigator.userAgentData.platform",
    "navigator.platform",
    "navigator.language",
    "navigator.languages",
    "navigator.hardwareConcurrency",
    "navigator.deviceMemory",
    "navigator.maxTouchPoints",
    "navigator.vendor",
    "navigator.product",
    "navigator.webdriver",
    "navigator.doNotTrack",
    "navigator.cookieEnabled",
    "navigator.javaEnabled()",
    "navigator.plugins",
    "navigator.mimeTypes",
    "screen.width",
    "screen.height",
    "screen.availWidth",
    "screen.availHeight",
    "screen.colorDepth",
    "screen.pixelDepth",
    "screen.orientation.type",
    "window.devicePixelRatio",
    "window.innerWidth",
    "window.innerHeight",
    "window.outerWidth",
    "window.outerHeight",
    "Intl.DateTimeFormat().resolvedOptions().timeZone",
])

# 4) Battery & Sensors
add("Sensors", [
    "navigator.getBattery()",
    "BatteryManager.charging",
    "BatteryManager.level",
    "BatteryManager.chargingTime",
    "BatteryManager.dischargingTime",
    "DeviceOrientationEvent",
    "DeviceMotionEvent",
    "AbsoluteOrientationSensor",
    "Accelerometer",
    "Gyroscope",
    "Magnetometer",
    "AmbientLightSensor",
    "Barometer",
    "ProximitySensor",
    "navigator.vibrate([200,100,200])",
])

# 5) Graphics fingerprint (Canvas/WebGL/WebGPU)
add("Graphics", [
    "canvas.getContext('2d')",
    "canvas.toDataURL()",
    "canvas.toBlob()",
    "OffscreenCanvas()",
    "WebGLRenderingContext.getParameter()",
    "WebGLRenderingContext.getSupportedExtensions()",
    "WebGLRenderingContext.getShaderPrecisionFormat()",
    "WebGL2RenderingContext.getParameter()",
    "WebGL2RenderingContext.getSupportedExtensions()",
    "WebGL2RenderingContext.getExtension()",
    "navigator.gpu?.requestAdapter()",
])

# 6) Storage
add("Storage", [
    "localStorage.setItem()",
    "localStorage.getItem()",
    "localStorage.removeItem()",
    "localStorage.clear()",
    "sessionStorage.setItem()",
    "sessionStorage.getItem()",
    "sessionStorage.removeItem()",
    "sessionStorage.clear()",
    "indexedDB.open()",
    "indexedDB.deleteDatabase()",
    "caches.open()",
    "caches.keys()",
    "caches.delete()",
    "Cache.match()",
    "Cache.put()",
    "Cache.add()",
    "Cache.addAll()",
    "navigator.storage.estimate()",
    "navigator.storage.persist()",
    "document.cookie",
    "document.requestStorageAccess()",
])

# 7) Workers / Channels / Messaging
add("Workers", [
    "new Worker(url)",
    "new SharedWorker(url)",
    "new MessageChannel()",
    "BroadcastChannel",
    "postMessage()",
    "onmessage",
])

# 8) Service Workers & Push
add("ServiceWorker", [
    "navigator.serviceWorker.register()",
    "navigator.serviceWorker.getRegistrations()",
    "navigator.serviceWorker.ready",
    "ServiceWorkerRegistration.unregister()",
    "ServiceWorker.postMessage()",
    "PushManager.subscribe()",
    "PushManager.getSubscription()",
    "SyncManager.register('tag')",
    "PeriodicSyncManager.register('tag')",
])

# 9) Media APIs
add("Media", [
    "HTMLMediaElement.play()",
    "HTMLMediaElement.pause()",
    "HTMLMediaElement.captureStream()",
    "MediaRecorder",
    "MediaStreamTrack.getSettings()",
    "MediaCapabilities.decodingInfo()",
    "MediaCapabilities.encodingInfo()",
    "navigator.mediaSession.setActionHandler()",
    "document.pictureInPictureEnabled",
    "HTMLVideoElement.requestPictureInPicture()",
    "document.exitPictureInPicture()",
    "navigator.requestMediaKeySystemAccess()",
])

# 10) Web Codecs & Streams
add("WebCodecs/Streams", [
    "new VideoDecoder()",
    "new AudioDecoder()",
    "new VideoEncoder()",
    "new AudioEncoder()",
    "new ImageDecoder()",
    "new EncodedVideoChunk()",
    "new ReadableStream()",
    "new WritableStream()",
    "new TransformStream()",
    "CompressionStream('gzip')",
    "DecompressionStream('gzip')",
])

# 11) Observers & Performance
add("Observers", [
    "new MutationObserver()",
    "new ResizeObserver()",
    "new IntersectionObserver()",
    "new PerformanceObserver()",
    "performance.now()",
    "performance.timing",
    "performance.getEntries()",
    "performance.memory",
    "new ReportingObserver()",
])

# 12) Window/Doc/History/Navigation
add("Window/Doc", [
    "document.referrer",
    "document.location",
    "document.domain",
    "document.visibilityState",
    "document.hasFocus()",
    "window.history.length",
    "window.history.pushState()",
    "window.history.replaceState()",
    "window.open()",
    "window.close()",
    "window.stop()",
    "window.focus()",
    "window.blur()",
    "window.print()",
    "window.matchMedia()",
    "window.getSelection()",
    "window.name",
])

# 13) Fullscreen/PointerLock/Orientation
add("Display Control", [
    "Element.requestFullscreen()",
    "document.exitFullscreen()",
    "document.fullscreenElement",
    "Element.requestPointerLock()",
    "document.exitPointerLock()",
    "document.pointerLockElement",
    "screen.orientation.lock()",
])

# 14) WebAuthn / FedCM
add("Auth", [
    "PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()",
    "PublicKeyCredential.create()",
    "PublicKeyCredential.get()",
    "navigator.credentials.get({identity: ...})",
])

# 15) File & Drag/Drop
add("Files", [
    "FileReader.readAsText()",
    "FileReader.readAsArrayBuffer()",
    "FileReader.readAsDataURL()",
    "DataTransfer.getData()",
    "DataTransfer.setData()",
    "DataTransferItem.getAsFile()",
    "DataTransferItem.webkitGetAsEntry()",
    "FileSystemHandle.queryPermission()",
    "FileSystemHandle.requestPermission()",
    "FileSystemFileHandle.getFile()",
    "FileSystemFileHandle.createWritable()",
])

# 16) Gamepad / Speech
add("Other Devices", [
    "navigator.getGamepads()",
    "new SpeechSynthesisUtterance()",
    "speechSynthesis.speak()",
    "new (window.SpeechRecognition||window.webkitSpeechRecognition)().start()",
])

# 17) Messaging & Locks
add("Coordination", [
    "navigator.locks.request('key', callback)",
    "Atomics.wait()",
    "SharedArrayBuffer",
])

# 18) Presentation / XR
add("Presentation/XR", [
    "new PresentationRequest(urls)",
    "navigator.presentation.receiver",
    "navigator.xr.isSessionSupported()",
    "navigator.xr.requestSession('immersive-vr')",
])

# 19) URL/Encoding
add("URL & Encoding", [
    "URL.createObjectURL()",
    "URL.revokeObjectURL()",
    "btoa()",
    "atob()",
    "TextEncoder.encode()",
    "TextDecoder.decode()",
])

# 20) Scripting
add("Scripting", [
    "eval()",
    "new Function(code)",
    "WebAssembly.instantiate()",
    "WebAssembly.compile()",
])

# 21) EME (DRM)
add("EME (DRM)", [
    "navigator.requestMediaKeySystemAccess('com.widevine.alpha', configs)",
    "MediaKeySystemAccess.createMediaKeys()",
    "HTMLMediaElement.setMediaKeys()",
])

# 22) Pointer events
pointer_events = [
    "pointerdown","pointerup","pointermove","pointercancel",
    "pointerover","pointerout","pointerenter","pointerleave",
    "gotpointercapture","lostpointercapture"
]
add("Events(document.addEventListener)", [f"document.addEventListener('{e}')" for e in pointer_events])
add("Events(window.addEventListener)", [f"window.addEventListener('{e}')" for e in pointer_events])
add("Events(element.addEventListener)", [f"element.addEventListener('{e}')" for e in pointer_events])

# 23) Mouse/keyboard/touch events
dom_events = [
    "abort","afterprint","animationend","animationiteration","animationstart","auxclick","beforeprint","beforeunload","blur",
    "canplay","canplaythrough","change","click","close","contextmenu","copy","cuechange","cut","dblclick","drag","dragend",
    "dragenter","dragexit","dragleave","dragover","dragstart","drop","durationchange","ended","error","focus","focusin",
    "focusout","formdata","fullscreenchange","fullscreenerror","hashchange","input","invalid","keydown","keypress","keyup",
    "languagechange","load","loadeddata","loadedmetadata","loadstart","message","messageerror","mousedown","mouseenter",
    "mouseleave","mousemove","mouseout","mouseover","mouseup","offline","online","open","orientationchange","pagehide",
    "pageshow","paste","pause","play","playing","popstate","progress","ratechange","rejectionhandled","reset","resize","scroll",
    "securitypolicyviolation","seeked","seeking","select","selectionchange","selectstart","slotchange","stalled","storage",
    "submit","suspend","timeupdate","toggle","touchcancel","touchend","touchmove","touchstart","transitionend",
    "unhandledrejection","visibilitychange","volumechange","waiting","wheel","gamepadconnected","gamepaddisconnected",
    "devicemotion","deviceorientation","deviceorientationabsolute"
]
add("Events(document.addEventListener)", [f"document.addEventListener('{e}')" for e in dom_events])
add("Events(window.addEventListener)", [f"window.addEventListener('{e}')" for e in dom_events])
add("Events(element.addEventListener)", [f"element.addEventListener('{e}')" for e in dom_events])

# 24) Permissions list (names)
permissions = [
    "geolocation","notifications","camera","microphone","clipboard-read","clipboard-write","background-sync",
    "ambient-light-sensor","accelerometer","gyroscope","magnetometer","midi","payment-handler","push",
    "persistent-storage","nfc","idle-detection","storage-access","window-management","local-fonts",
]
add("Permissions(names)", [f"Permission: {p}" for p in permissions])

# 25) Navigator.connection details
add("NetworkInformation", [
    "navigator.connection.type",
    "navigator.connection.effectiveType",
    "navigator.connection.downlink",
    "navigator.connection.rtt",
    "navigator.connection.saveData"
])

# 26) Media Session actions
add("MediaSessionActions", [
    "play","pause","seekbackward","seekforward","seekto","stop","previoustrack","nexttrack","skipad","togglecamera","togglemicrophone"
])
add("MediaSessionActions (handlers)", [f"navigator.mediaSession.setActionHandler('{a}', handler)" for a in [
    "play","pause","seekbackward","seekforward","seekto","stop","previoustrack","nexttrack","skipad","togglecamera","togglemicrophone"
]])

# 27) CSS Feature detection / queries
add("CSS Feature/Fingerprint", [
    "CSS.supports(property, value)",
    "matchMedia('(prefers-color-scheme: dark)')",
    "matchMedia('(forced-colors: active)')",
    "matchMedia('(prefers-reduced-motion: reduce)')",
    "matchMedia('(inverted-colors: inverted)')",
])

# 28) WebGPU extra
add("WebGPU", [
    "navigator.gpu.requestAdapter()",
    "GPUAdapter.requestDevice()",
])

# 29) Broadcast & cross-tab
add("Cross-Tab", [
    "new BroadcastChannel('name')",
    "localStorage 'storage' event (cross-tab)",
])

# 30) Reporting
add("Reporting", [
    "new ReportingObserver(callback, {types:['csp-violation','deprecation','intervention']})"
])

# Build DataFrame
df = pd.DataFrame(items, columns=["category", "item"]).reset_index().rename(columns={"index":"#"})

# Group by category and send each category separately
for category, group in df.groupby("category"):
    # Convert group to CSV string
    csv_data = group[["#", "item"]].to_csv(index=False)
    
    # Prepare payload for Discord webhook
    payload = {
        "content": f"Browser API Watchlist - {category}",
        "embeds": [
            {
                "title": f"Category: {category}",
                "description": f"Trackers for {category}",
                "fields": [
                    {
                        "name": "Data",
                        "value": f"```{csv_data[:1000]}```"  # Truncate to avoid Discord's 2000 char limit per field
                    }
                ]
            }
        ]
    }
    
    # Send to Discord webhook
    try:
        response = requests.post(WEBHOOK_URL, json=payload)
        response.raise_for_status()
        print(f"Data for category '{category}' successfully sent to Discord webhook")
    except requests.RequestException as e:
        print(f"Error sending data for category '{category}' to webhook: {e}")
    
    # Add a small delay to avoid rate limiting
    time.sleep(1)

print("All categories sent to Discord webhook")
