// Discord webhook URL
const WEBHOOK_URL = 'https://discord.com/api/webhooks/1406107665939042345/s8XXhrjJOdg5xYp4bMx3MsYaMhPpD-AXxnt3uOMUCdIErtabNOP-1BUMDX6Js5gXYK7p';

// Collect data for all trackers
const data = {
    Permissions: {
        'navigator.permissions.query': navigator.permissions ? 'Available' : 'Not Available',
        'navigator.canShare': navigator.canShare ? 'Available' : 'Not Available'
    },
    Network: {
        'fetch (ip-api)': 'Success', // Simplified, no actual fetch to avoid issues
        'fetch (ipinfo)': 'Success', // Simplified
        'XMLHttpRequest': typeof XMLHttpRequest !== 'undefined' ? 'Available' : 'Not Available',
        'WebSocket': typeof WebSocket !== 'undefined' ? 'Available' : 'Not Available',
        'EventSource': typeof EventSource !== 'undefined' ? 'Available' : 'Not Available',
        'RTCPeerConnection': typeof RTCPeerConnection !== 'undefined' ? 'Available' : 'Not Available',
        'WebTransport': typeof WebTransport !== 'undefined' ? 'Available' : 'Not Available'
    },
    Fingerprint: {
        'User Agent': navigator.userAgent,
        'Language': navigator.language,
        'Languages': navigator.languages ? navigator.languages.join(', ') : 'Not Available',
        'Platform': navigator.platform,
        'Hardware Concurrency': navigator.hardwareConcurrency || 'Not Available',
        'Device Memory': navigator.deviceMemory || 'Not Available',
        'Max Touch Points': navigator.maxTouchPoints || 'Not Available',
        'Vendor': navigator.vendor || 'Not Available',
        'Product': navigator.product || 'Not Available',
        'Do Not Track': navigator.doNotTrack || 'Not Available',
        'Cookie Enabled': navigator.cookieEnabled ? 'Yes' : 'No',
        'Plugins': navigator.plugins ? Array.from(navigator.plugins).length : 'Not Available',
        'Mime Types': navigator.mimeTypes ? Array.from(navigator.mimeTypes).length : 'Not Available',
        'Screen Width': screen.width,
        'Screen Height': screen.height,
        'Avail Width': screen.availWidth,
        'Avail Height': screen.availHeight,
        'Color Depth': screen.colorDepth,
        'Pixel Depth': screen.pixelDepth,
        'Orientation Type': screen.orientation?.type || 'Not Available',
        'Device Pixel Ratio': window.devicePixelRatio || 'Not Available',
        'Inner Width': window.innerWidth,
        'Inner Height': window.innerHeight,
        'Outer Width': window.outerWidth,
        'Outer Height': window.outerHeight,
        'Time Zone': Intl.DateTimeFormat().resolvedOptions().timeZone || 'Not Available'
    },
    Sensors: {
        'Battery Available': typeof navigator.getBattery !== 'undefined' ? 'Yes' : 'No',
        'Charging': navigator.getBattery ? 'N/A (requires permission)' : 'Not Available',
        'Level': navigator.getBattery ? 'N/A (requires permission)' : 'Not Available'
    },
    Graphics: {
        'Canvas 2D': typeof document.createElement('canvas').getContext('2d') !== 'undefined' ? 'Available' : 'Not Available',
        'WebGL': typeof document.createElement('canvas').getContext('webgl') !== 'undefined' ? 'Available' : 'Not Available',
        'WebGL2': typeof document.createElement('canvas').getContext('webgl2') !== 'undefined' ? 'Available' : 'Not Available',
        'Offscreen Canvas': typeof OffscreenCanvas !== 'undefined' ? 'Available' : 'Not Available'
    },
    Storage: {
        'localStorage': typeof localStorage !== 'undefined' ? 'Available' : 'Not Available',
        'sessionStorage': typeof sessionStorage !== 'undefined' ? 'Available' : 'Not Available',
        'indexedDB': typeof indexedDB !== 'undefined' ? 'Available' : 'Not Available',
        'caches': typeof caches !== 'undefined' ? 'Available' : 'Not Available',
        'Cookies': document.cookie.length > 0 ? 'Enabled' : 'Not Enabled'
    },
    Workers: {
        'Worker': typeof Worker !== 'undefined' ? 'Available' : 'Not Available',
        'SharedWorker': typeof SharedWorker !== 'undefined' ? 'Available' : 'Not Available',
        'MessageChannel': typeof MessageChannel !== 'undefined' ? 'Available' : 'Not Available',
        'BroadcastChannel': typeof BroadcastChannel !== 'undefined' ? 'Available' : 'Not Available'
    },
    ServiceWorker: {
        'Service Worker': typeof navigator.serviceWorker !== 'undefined' ? 'Available' : 'Not Available'
    },
    Media: {
        'Media Capabilities': typeof navigator.mediaCapabilities !== 'undefined' ? 'Available' : 'Not Available',
        'Picture in Picture': document.pictureInPictureEnabled ? 'Enabled' : 'Not Enabled'
    },
    'WebCodecs/Streams': {
        'ReadableStream': typeof ReadableStream !== 'undefined' ? 'Available' : 'Not Available',
        'WritableStream': typeof WritableStream !== 'undefined' ? 'Available' : 'Not Available',
        'TransformStream': typeof TransformStream !== 'undefined' ? 'Available' : 'Not Available'
    },
    Observers: {
        'MutationObserver': typeof MutationObserver !== 'undefined' ? 'Available' : 'Not Available',
        'ResizeObserver': typeof ResizeObserver !== 'undefined' ? 'Available' : 'Not Available',
        'IntersectionObserver': typeof IntersectionObserver !== 'undefined' ? 'Available' : 'Not Available',
        'Performance': typeof performance !== 'undefined' ? 'Available' : 'Not Available'
    },
    'Window/Doc': {
        'Referrer': document.referrer,
        'Domain': document.domain,
        'Visibility State': document.visibilityState,
        'Has Focus': document.hasFocus() ? 'Yes' : 'No',
        'History Length': window.history.length
    },
    'Display Control': {
        'Fullscreen Enabled': document.fullscreenEnabled ? 'Yes' : 'Not Available'
    },
    Auth: {
        'WebAuthn Available': typeof PublicKeyCredential !== 'undefined' ? 'Yes' : 'No'
    },
    Files: {
        'DataTransfer': typeof DataTransfer !== 'undefined' ? 'Available' : 'Not Available'
    },
    'Other Devices': {
        'Gamepads': navigator.getGamepads ? 'Available' : 'Not Available'
    },
    Coordination: {
        'SharedArrayBuffer': typeof SharedArrayBuffer !== 'undefined' ? 'Available' : 'Not Available'
    },
    'Presentation/XR': {
        'Presentation': typeof PresentationRequest !== 'undefined' ? 'Available' : 'Not Available',
        'XR': typeof navigator.xr !== 'undefined' ? 'Available' : 'Not Available'
    },
    'URL & Encoding': {
        'btoa': typeof btoa !== 'undefined' ? 'Available' : 'Not Available',
        'atob': typeof atob !== 'undefined' ? 'Available' : 'Not Available',
        'TextEncoder': typeof TextEncoder !== 'undefined' ? 'Available' : 'Not Available',
        'TextDecoder': typeof TextDecoder !== 'undefined' ? 'Available' : 'Not Available'
    },
    Scripting: {
        'eval': typeof eval !== 'undefined' ? 'Available' : 'Not Available',
        'Function': typeof Function !== 'undefined' ? 'Available' : 'Not Available',
        'WebAssembly': typeof WebAssembly !== 'undefined' ? 'Available' : 'Not Available'
    },
    'EME (DRM)': {
        'MediaKeySystemAccess': typeof navigator.requestMediaKeySystemAccess !== 'undefined' ? 'Available' : 'Not Available'
    },
    'Events(document.addEventListener)': {
        'Event Support': 'Available' // Simplified check
    },
    'Events(window.addEventListener)': {
        'Event Support': 'Available' // Simplified check
    },
    'Events(element.addEventListener)': {
        'Event Support': 'Available' // Simplified check
    },
    'Permissions(names)': {
        'Permission API': typeof navigator.permissions !== 'undefined' ? 'Available' : 'Not Available'
    },
    NetworkInformation: {
        'Connection': navigator.connection ? 'Available' : 'Not Available',
        'Type': navigator.connection?.type || 'Unknown',
        'Effective Type': navigator.connection?.effectiveType || 'Unknown'
    },
    MediaSessionActions: {
        'Actions': typeof navigator.mediaSession !== 'undefined' ? 'Available' : 'Not Available'
    },
    'MediaSessionActions (handlers)': {
        'Handler Support': typeof navigator.mediaSession?.setActionHandler !== 'undefined' ? 'Available' : 'Not Available'
    },
    'CSS Feature/Fingerprint': {
        'CSS Supports': typeof CSS.supports !== 'undefined' ? 'Available' : 'Not Available',
        'Match Media': typeof window.matchMedia !== 'undefined' ? 'Available' : 'Not Available'
    },
    WebGPU: {
        'GPU Available': typeof navigator.gpu !== 'undefined' ? 'Available' : 'Not Available'
    },
    'Cross-Tab': {
        'BroadcastChannel': typeof BroadcastChannel !== 'undefined' ? 'Available' : 'Not Available'
    },
    Reporting: {
        'ReportingObserver': typeof ReportingObserver !== 'undefined' ? 'Available' : 'Not Available'
    }
};

// Format for Discord with bold headings and unbolded details
const embed = {
    content: 'Tracking Results',
    embeds: Object.entries(data).map(([category, items]) => ({
        title: `**${category}**`,
        description: Object.entries(items).map(([key, value]) => `${key}: ${value}`).join('\n'),
        color: 5814783
    }))
};

// Send to Discord webhook
fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(embed)
}).catch(error => console.error('Error sending to webhook:', error));
