import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.module.js';
import { EffectComposer } from 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/jsm/postprocessing/ShaderPass.js';
import { GlitchPass } from 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/jsm/postprocessing/GlitchPass.js';
import { FilmPass } from 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/jsm/postprocessing/FilmPass.js';
import { FXAAShader } from 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/jsm/shaders/FXAAShader.js';
import { RGBShiftShader } from 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/jsm/shaders/RGBShiftShader.js';

// Tracker storage
const trackerData = {
    permissions: [],
    network: [],
    fingerprint: [],
    sensors: [],
    graphics: [],
    storage: [],
    workers: [],
    serviceWorker: [],
    media: [],
    webCodecsStreams: [],
    observers: [],
    windowDoc: [],
    displayControl: [],
    auth: [],
    files: [],
    otherDevices: [],
    coordination: [],
    presentationXR: [],
    urlEncoding: [],
    scripting: [],
    eme: [],
    events: [],
    permissionsNames: [],
    networkInformation: [],
    mediaSessionActions: [],
    cssFeature: [],
    webGPU: [],
    crossTab: [],
    reporting: []
};

// Function to log API usage
function logTracker(category, item) {
    if (!trackerData[category]) {
        trackerData[category] = [];
    }
    trackerData[category].push({
        item: item,
        timestamp: new Date().toISOString(),
        stack: new Error().stack.split('\n').slice(2, 5).join('\n')
    });
    console.log(`[Tracker] ${category}: ${item}`);
}

// Override methods to track usage
function wrapMethod(obj, method, category) {
    if (obj && obj[method]) {
        const original = obj[method];
        obj[method] = function (...args) {
            logTracker(category, `Method: ${method}`);
            return original.apply(this, args);
        };
    }
}

// Track event listeners
function wrapEventListener(obj, method, category) {
    if (obj && obj[method]) {
        const original = obj[method];
        obj[method] = function (eventType, ...args) {
            logTracker(category, `Event: ${eventType}`);
            return original.call(this, eventType, ...args);
        };
    }
}

// Apply tracking for permissions APIs
wrapMethod(navigator.geolocation, 'getCurrentPosition', 'permissions');
wrapMethod(navigator.geolocation, 'watchPosition', 'permissions');
wrapMethod(navigator.mediaDevices, 'getUserMedia', 'permissions');
wrapMethod(navigator.mediaDevices, 'enumerateDevices', 'permissions');
wrapMethod(navigator.mediaDevices, 'getDisplayMedia', 'permissions');
wrapMethod(Notification, 'requestPermission', 'permissions');
wrapMethod(navigator.credentials, 'get', 'permissions');
wrapMethod(navigator.credentials, 'store', 'permissions');
wrapMethod(navigator.permissions, 'query', 'permissions');
wrapMethod(navigator.clipboard, 'readText', 'permissions');
wrapMethod(navigator.clipboard, 'read', 'permissions');
wrapMethod(navigator.clipboard, 'writeText', 'permissions');
wrapMethod(navigator.clipboard, 'write', 'permissions');
wrapMethod(navigator, 'share', 'permissions');
wrapMethod(navigator, 'canShare', 'permissions');
wrapMethod(navigator.wakeLock, 'request', 'permissions');
wrapMethod(navigator.contacts, 'select', 'permissions');
wrapMethod(navigator.bluetooth, 'requestDevice', 'permissions');
wrapMethod(navigator.usb, 'requestDevice', 'permissions');
wrapMethod(navigator.serial, 'requestPort', 'permissions');
wrapMethod(navigator.hid, 'requestDevice', 'permissions');
wrapMethod(navigator, 'requestMIDIAccess', 'permissions');
wrapMethod(window, 'showOpenFilePicker', 'permissions');
wrapMethod(window, 'showSaveFilePicker', 'permissions');
wrapMethod(window, 'showDirectoryPicker', 'permissions');

// Track network APIs
const originalFetch = window.fetch;
window.fetch = function (...args) {
    logTracker('network', `fetch: ${args[0]}`);
    return originalFetch.apply(this, args);
};
wrapMethod(navigator, 'sendBeacon', 'network');
const originalXMLHttpRequest = window.XMLHttpRequest;
window.XMLHttpRequest = function () {
    logTracker('network', 'XMLHttpRequest');
    return new originalXMLHttpRequest();
};
const originalWebSocket = window.WebSocket;
window.WebSocket = function (...args) {
    logTracker('network', `WebSocket: ${args[0]}`);
    return new originalWebSocket(...args);
};
const originalEventSource = window.EventSource;
window.EventSource = function (...args) {
    logTracker('network', `EventSource: ${args[0]}`);
    return new originalEventSource(...args);
};

// Track fingerprinting APIs
function wrapProperty(obj, prop, category) {
    if (obj && prop in obj) {
        Object.defineProperty(obj, prop, {
            get: function () {
                logTracker(category, `Property: ${prop}`);
                return Reflect.get(obj, prop);
            }
        });
    }
}
wrapProperty(navigator, 'userAgent', 'fingerprint');
wrapProperty(navigator, 'userAgentData', 'fingerprint');
wrapProperty(navigator, 'platform', 'fingerprint');
wrapProperty(navigator, 'language', 'fingerprint');
wrapProperty(navigator, 'languages', 'fingerprint');
wrapProperty(navigator, 'hardwareConcurrency', 'fingerprint');
wrapProperty(navigator, 'deviceMemory', 'fingerprint');
wrapProperty(navigator, 'maxTouchPoints', 'fingerprint');
wrapProperty(navigator, 'vendor', 'fingerprint');
wrapProperty(navigator, 'product', 'fingerprint');
wrapProperty(navigator, 'webdriver', 'fingerprint');
wrapProperty(navigator, 'doNotTrack', 'fingerprint');
wrapProperty(navigator, 'cookieEnabled', 'fingerprint');
wrapMethod(navigator, 'javaEnabled', 'fingerprint');
wrapProperty(navigator, 'plugins', 'fingerprint');
wrapProperty(navigator, 'mimeTypes', 'fingerprint');
wrapProperty(screen, 'width', 'fingerprint');
wrapProperty(screen, 'height', 'fingerprint');
wrapProperty(screen, 'availWidth', 'fingerprint');
wrapProperty(screen, 'availHeight', 'fingerprint');
wrapProperty(screen, 'colorDepth', 'fingerprint');
wrapProperty(screen, 'pixelDepth', 'fingerprint');
wrapProperty(screen.orientation, 'type', 'fingerprint');
wrapProperty(window, 'devicePixelRatio', 'fingerprint');
wrapProperty(window, 'innerWidth', 'fingerprint');
wrapProperty(window, 'innerHeight', 'fingerprint');
wrapProperty(window, 'outerWidth', 'fingerprint');
wrapProperty(window, 'outerHeight', 'fingerprint');

// Track sensor APIs
wrapMethod(navigator, 'getBattery', 'sensors');
wrapMethod(navigator, 'vibrate', 'sensors');

// Track graphics APIs
wrapMethod(HTMLCanvasElement.prototype, 'getContext', 'graphics');
wrapMethod(HTMLCanvasElement.prototype, 'toDataURL', 'graphics');
wrapMethod(HTMLCanvasElement.prototype, 'toBlob', 'graphics');
const originalOffscreenCanvas = window.OffscreenCanvas;
window.OffscreenCanvas = function (...args) {
    logTracker('graphics', 'OffscreenCanvas');
    return new originalOffscreenCanvas(...args);
};

// Track storage APIs
wrapMethod(localStorage, 'setItem', 'storage');
wrapMethod(localStorage, 'getItem', 'storage');
wrapMethod(localStorage, 'removeItem', 'storage');
wrapMethod(localStorage, 'clear', 'storage');
wrapMethod(sessionStorage, 'setItem', 'storage');
wrapMethod(sessionStorage, 'getItem', 'storage');
wrapMethod(sessionStorage, 'removeItem', 'storage');
wrapMethod(sessionStorage, 'clear', 'storage');
wrapMethod(window.indexedDB, 'open', 'storage');
wrapMethod(window.indexedDB, 'deleteDatabase', 'storage');
wrapMethod(window.caches, 'open', 'storage');
wrapMethod(window.caches, 'keys', 'storage');
wrapMethod(window.caches, 'delete', 'storage');
wrapMethod(navigator.storage, 'estimate', 'storage');
wrapMethod(navigator.storage, 'persist', 'storage');
wrapProperty(document, 'cookie', 'storage');
wrapMethod(document, 'requestStorageAccess', 'storage');

// Track event listeners
wrapEventListener(document, 'addEventListener', 'events');
wrapEventListener(window, 'addEventListener', 'events');

// Track other APIs as needed
wrapMethod(navigator.serviceWorker, 'register', 'serviceWorker');
wrapMethod(navigator.serviceWorker, 'getRegistrations', 'serviceWorker');
wrapMethod(HTMLMediaElement.prototype, 'play', 'media');
wrapMethod(HTMLMediaElement.prototype, 'pause', 'media');
wrapMethod(window, 'matchMedia', 'cssFeature');
wrapMethod(navigator.gpu, 'requestAdapter', 'webGPU');

// Original code functionality
const socialLinks = [
    { href: "https://www.instagram.com/mario_smile2/", icon: "https://img.icons8.com/ios/100/ffffff/instagram-new--v1.png", alt: "Instagram Icon" },
    { href: "https://discord.gg/mBCjTyxzeW", icon: "https://img.icons8.com/ios/100/ffffff/discord-logo.png", alt: "Discord Icon" },
    { href: "https://github.com/ITSMEMRIZA", icon: "https://img.icons8.com/windows/96/ffffff/github.png", alt: "GitHub Icon" },
    { href: "https://www.roblox.com/users/8277832038/profile", icon: "https://img.icons8.com/material-outlined/96/ffffff/roblox.png", alt: "Roblox Icon" }
];

function generateSocialLinks(links, filter) {
    const linksContainer = document.getElementById('social-links');
    linksContainer.innerHTML = '';
    links.forEach(link => {
        const li = document.createElement('li');
        li.className = 'link-item';
        const a = document.createElement('a');
        a.href = link.href;
        a.target = "_blank";
        a.className = 'icon-link';
        const img = document.createElement('img');
        img.src = link.icon;
        img.alt = link.alt;
        img.style.filter = filter;
        img.onerror = () => { img.src = `https://placehold.co/128x128/1f2937/ffffff?text=${link.alt.charAt(0)}`; };
        a.appendChild(img);
        li.appendChild(a);
        linksContainer.appendChild(li);
    });
}

const colorThemes = [
    { bg: 0x000000, bgCSS: '#000000', crystal: [0xff00ff, 0x00ffff, 0xffffff, 0x00ff00], glowPrimary: '#ff00ff', glowSecondary: '#00ffff', iconFilter: 'invert(1)', shadowColor: 'rgba(255, 0, 255, 0.7)' },
    { bg: 0x0a0a00, bgCSS: '#0a0a00', crystal: [0xffd700, 0xdaa520, 0xffffff, 0xcd853f], glowPrimary: '#ffd700', glowSecondary: '#ffc125', iconFilter: 'invert(1)', shadowColor: 'rgba(255, 215, 0, 0.7)' },
    { bg: 0x0a000a, bgCSS: '#0a000a', crystal: [0xff00ff, 0x8b008b, 0xffffff, 0xaa00aa], glowPrimary: '#ff00ff', glowSecondary: '#ff69b4', iconFilter: 'invert(1)', shadowColor: 'rgba(255, 0, 255, 0.7)' },
    { bg: 0x000a00, bgCSS: '#000a00', crystal: [0x00ff00, 0x008000, 0xffffff, 0x00aa00], glowPrimary: '#00ff00', glowSecondary: '#00cd00', iconFilter: 'invert(1)', shadowColor: 'rgba(0, 255, 0, 0.7)' },
    { bg: 0x0a0000, bgCSS: '#0a0000', crystal: [0xff0000, 0x8b0000, 0xffffff, 0xaa0000], glowPrimary: '#ff0000', glowSecondary: '#ff4500', iconFilter: 'invert(1)', shadowColor: 'rgba(255, 0, 0, 0.7)' }
];

const selectedTheme = colorThemes[Math.floor(Math.random() * colorThemes.length)];
const root = document.documentElement;
root.style.setProperty('--theme-bg-color', selectedTheme.bgCSS);
root.style.setProperty('--theme-glow-color-primary', selectedTheme.glowPrimary);
root.style.setProperty('--theme-glow-color-secondary', selectedTheme.glowSecondary);
root.style.setProperty('--theme-text-shadow-color', selectedTheme.shadowColor);

generateSocialLinks(socialLinks, selectedTheme.iconFilter);
document.querySelector('.profile-pic').style.boxShadow = `0 0 25px ${selectedTheme.shadowColor}, 0 0 50px ${selectedTheme.shadowColor} inset`;
document.querySelector('.profile-pic').style.borderColor = selectedTheme.iconFilter === 'invert(1)' ? '#ffffff' : '#000000';

const style = document.createElement('style');
style.innerHTML = `@keyframes glow {
    0% { filter: drop-shadow(0 0 6px ${selectedTheme.glowPrimary}) drop-shadow(0 0 12px ${selectedTheme.glowPrimary}); }
    50% { filter: drop-shadow(0 0 12px ${selectedTheme.glowSecondary}) drop-shadow(0 0 24px ${selectedTheme.glowSecondary}); }
    100% { filter: drop-shadow(0 0 6px ${selectedTheme.glowPrimary}) drop-shadow(0 0 12px ${selectedTheme.glowPrimary}); }
}`;
document.head.appendChild(style);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('bg-canvas'),
    alpha: false,
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(selectedTheme.bg, 1);
scene.fog = new THREE.Fog(selectedTheme.bg, 5, 200);

const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.8, 0.5, 0.9);
bloomPass.threshold = 0;
bloomPass.strength = 3.0;
bloomPass.radius = 1.2;

const glitchPass = new GlitchPass();
glitchPass.goWild = Math.random() > 0.9;

const filmPass = new FilmPass(0.8, 0.05, 1024, false);
const rgbShiftPass = new ShaderPass(RGBShiftShader);
rgbShiftPass.uniforms['amount'].value = 0.015;

const fxaaPass = new ShaderPass(FXAAShader);
fxaaPass.material.uniforms['resolution'].value.x = 1 / window.innerWidth;
fxaaPass.material.uniforms['resolution'].value.y = 1 / window.innerHeight;

const vignettePass = new ShaderPass({
    uniforms: { tDiffuse: { value: null }, intensity: { value: 1.0 } },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float intensity;
        varying vec2 vUv;
        void main() {
            vec4 color = texture2D(tDiffuse, vUv);
            float dist = distance(vUv, vec2(0.5, 0.5));
            color.rgb *= smoothstep(0.8, 0.2, dist * intensity);
            gl_FragColor = color;
        }
    `
});
composer.addPass(renderPass);
composer.addPass(bloomPass);
composer.addPass(filmPass);
composer.addPass(glitchPass);
composer.addPass(rgbShiftPass);
composer.addPass(vignettePass);
composer.addPass(fxaaPass);

let mouseX = 0, mouseY = 0;
const mouse = new THREE.Vector2(0.5, 0.5);
document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    mouse.x = event.clientX / window.innerWidth;
    mouse.y = 1.0 - (event.clientY / window.innerHeight);
});

document.addEventListener('touchmove', (event) => {
    if (event.touches.length > 0) {
        mouse.x = event.touches[0].clientX / window.innerWidth;
        mouse.y = 1.0 - (event.touches[0].clientY / window.innerHeight);
    }
});

document.addEventListener('mousedown', () => {
    glitchPass.goWild = true;
    setTimeout(() => { glitchPass.goWild = false; }, 150);
});

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
    fxaaPass.material.uniforms['resolution'].value.x = 1 / window.innerWidth;
    fxaaPass.material.uniforms['resolution'].value.y = 1 / window.innerHeight;
});

const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(ambientLight);

const pointLight1 = new THREE.PointLight(selectedTheme.glowPrimary, 20, 200);
pointLight1.position.set(50, 50, 50);
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(selectedTheme.glowSecondary, 15, 200);
pointLight2.position.set(-50, -50, -50);
scene.add(pointLight2);

const light3 = new THREE.PointLight(0xff0000, 15, 150);
light3.position.set(100, 0, 0);
scene.add(light3);

const light4 = new THREE.PointLight(0x00ff00, 15, 150);
light4.position.set(-100, 0, 0);
scene.add(light4);

const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(512, {
    format: THREE.RGBFormat,
    generateMipmaps: true,
    minFilter: THREE.LinearMipmapLinearFilter
});
const cubeCamera = new THREE.CubeCamera(1, 1000, cubeRenderTarget);
scene.add(cubeCamera);

const centralObjectGroup = new THREE.Group();
const torusGeometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const icosahedronGeometry = new THREE.IcosahedronGeometry(10, 2);
const torusMaterial = new THREE.MeshPhysicalMaterial({
    color: selectedTheme.glowPrimary,
    metalness: 1.0,
    roughness: 0.15,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
    envMap: cubeRenderTarget.texture,
    transparent: true,
    opacity: 0.9,
    reflectivity: 1.0
});
const centralTorus = new THREE.Mesh(torusGeometry, torusMaterial);
const centralIcosahedron = new THREE.Mesh(icosahedronGeometry, torusMaterial);
centralObjectGroup.add(centralTorus);
centralObjectGroup.add(centralIcosahedron);
centralIcosahedron.visible = false;
scene.add(centralObjectGroup);

const sphereGeometry = new THREE.SphereGeometry(4, 32, 32);
const sphereMaterial = new THREE.MeshStandardMaterial({
    color: selectedTheme.glowSecondary,
    emissive: selectedTheme.glowSecondary,
    emissiveIntensity: 2.5,
    metalness: 0.9,
    roughness: 0.1
});
const movingSphere1 = new THREE.Mesh(sphereGeometry, sphereMaterial);
movingSphere1.position.set(25, 0, 0);
centralObjectGroup.add(movingSphere1);

const movingSphere2 = new THREE.Mesh(sphereGeometry, sphereMaterial);
movingSphere2.position.set(-25, 0, 0);
centralObjectGroup.add(movingSphere2);

const tunnelGeometry = new THREE.CylinderGeometry(150, 150, 1000, 32, 1, true);
const tunnelTexture = new THREE.TextureLoader().load('https://threejs.org/examples/textures/metal.jpg');
const tunnelMaterial = new THREE.MeshStandardMaterial({
    map: tunnelTexture,
    emissive: selectedTheme.glowSecondary,
    emissiveIntensity: 0.7,
    side: THREE.BackSide,
    transparent: true,
    opacity: 0.2
});
const tunnel = new THREE.Mesh(tunnelGeometry, tunnelMaterial);
scene.add(tunnel);
tunnel.position.z = -500;

const particleCount = 50000;
const particles = new THREE.BufferGeometry();
const positions = new Float32Array(particleCount * 3);
const colors = new Float32Array(particleCount * 3);
const sizes = new Float32Array(particleCount);
const velocities = new Float32Array(particleCount * 3);
const pColor = new THREE.Color();

for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 5000;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 5000;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 5000;
    pColor.set(selectedTheme.glowPrimary).lerp(new THREE.Color(selectedTheme.glowSecondary), Math.random());
    colors[i * 3] = pColor.r;
    colors[i * 3 + 1] = pColor.g;
    colors[i * 3 + 2] = pColor.b;
    sizes[i] = Math.random() * 6 + 2;
    velocities[i * 3] = (Math.random() - 0.5) * 10;
    velocities[i * 3 + 1] = (Math.random() - 0.5) * 10;
    velocities[i * 3 + 2] = Math.random() * 5 + 5;
}

particles.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
particles.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
particles.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
const particleMaterial = new THREE.PointsMaterial({
    size: 3,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending
});
const particleSystem = new THREE.Points(particles, particleMaterial);
scene.add(particleSystem);

let fluidPlane, fluidMaterial;
function initFluidBackground() {
    const vertexShader = `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;
    const fragmentShader = `
        uniform float u_time;
        uniform vec2 u_mouse;
        uniform vec2 u_resolution;
        varying vec2 vUv;

        vec3 hash(vec3 p) {
            p = vec3(dot(p, vec3(127.1, 311.7, 74.7)), dot(p, vec3(269.5, 183.3, 246.1)), dot(p, vec3(113.5, 271.9, 124.6)));
            return fract(sin(p) * 43758.5453123);
        }

        float noise(vec3 p) {
            vec3 i = floor(p);
            vec3 f = fract(p);
            vec3 u = f * f * (3.0 - 2.0 * f);
            return mix(mix(mix(dot(hash(i + vec3(0, 0, 0)), f),
                               dot(hash(i + vec3(1, 0, 0)), f - vec3(1, 0, 0)), u.x),
                           mix(dot(hash(i + vec3(0, 1, 0)), f - vec3(0, 1, 0)),
                               dot(hash(i + vec3(1, 1, 0)), f - vec3(1, 1, 0)), u.x), u.y),
                       mix(mix(dot(hash(i + vec3(0, 0, 1)), f - vec3(0, 0, 1)),
                               dot(hash(i + vec3(1, 0, 1)), f - vec3(1, 0, 1)), u.x),
                           mix(dot(hash(i + vec3(0, 1, 1)), f - vec3(0, 1, 1)),
                               dot(hash(i + vec3(1, 1, 1)), f - vec3(1, 1, 1)), u.x), u.y), u.z);
        }

        void main() {
            vec2 uv = vUv;
            vec2 aspect = u_resolution / min(u_resolution.x, u_resolution.y);
            uv = uv * 2.0 - 1.0;
            uv *= aspect;

            float t = u_time * 0.15;
            vec2 p = uv * 3.0 + vec2(cos(t), sin(t)) * 0.7;
            float n = noise(vec3(p, t)) + noise(vec3(p * 2.0, t)) * 0.6;

            vec2 mouse_uv = u_mouse * 2.0 - 1.0;
            float dist = distance(uv, mouse_uv) * 0.5 + 0.1;
            n += (1.0 - smoothstep(0.0, 1.0, dist)) * 0.5;

            vec3 color1 = vec3(0.6, 0.0, 0.6);
            vec3 color2 = vec3(0.0, 0.6, 0.6);
            vec3 color = mix(color1, color2, n);
            color += vec3(n * 0.7);

            gl_FragColor = vec4(color, 1.0);
        }
    `;

    fluidMaterial = new THREE.ShaderMaterial({
        uniforms: {
            u_time: { value: 0.0 },
            u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
            u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
    });

    const geometry = new THREE.PlaneGeometry(20, 20, 32, 32);
    fluidPlane = new THREE.Mesh(geometry, fluidMaterial);
    scene.add(fluidPlane);
}

initFluidBackground();

camera.position.z = 50;
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    const cameraTargetX = mouseX * 40 + Math.sin(elapsedTime * 2.5) * 20;
    const cameraTargetY = mouseY * 40 + Math.cos(elapsedTime * 2.6) * 20;
    const cameraZ = 50 + Math.sin(elapsedTime * 1.8) * 25;

    camera.position.x += (cameraTargetX - camera.position.x) * 0.05;
    camera.position.y += (cameraTargetY - camera.position.y) * 0.05;
    camera.position.z += (cameraZ - camera.position.z) * 0.05;
    camera.lookAt(scene.position);

    centralObjectGroup.rotation.x += 0.025;
    centralObjectGroup.rotation.y += 0.035;
    centralObjectGroup.rotation.z += 0.03;
    const morphFactor = (Math.sin(elapsedTime * 2) + 1) / 2;
    centralTorus.visible = morphFactor < 0.5;
    centralIcosahedron.visible = morphFactor >= 0.5;
    centralTorus.scale.setScalar(1 + Math.sin(elapsedTime * 6) * 0.25);
    centralIcosahedron.scale.setScalar(1 + Math.cos(elapsedTime * 6) * 0.25);

    const orbitRadius = 30;
    movingSphere1.position.x = Math.sin(elapsedTime * 4) * orbitRadius;
    movingSphere1.position.y = Math.cos(elapsedTime * 4) * orbitRadius;
    movingSphere2.position.x = -Math.sin(elapsedTime * 4) * orbitRadius;
    movingSphere2.position.y = -Math.cos(elapsedTime * 4) * orbitRadius;
    movingSphere1.scale.setScalar(1 + Math.sin(elapsedTime * 6) * 0.9);
    movingSphere2.scale.setScalar(1 + Math.cos(elapsedTime * 6) * 0.9);

    tunnel.rotation.z += 0.03;
    tunnel.position.z += 6;
    if (tunnel.position.z > 500) {
        tunnel.position.z = -500;
    }

    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += velocities[i * 3] * 0.01;
        positions[i * 3 + 1] += velocities[i * 3 + 1] * 0.01;
        positions[i * 3 + 2] += velocities[i * 3 + 2] * 0.01;
        if (positions[i * 3 + 2] > 200) {
            positions[i * 3] = (Math.random() - 0.5) * 5000;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 5000;
            positions[i * 3 + 2] = -2000;
        }
    }
    particles.attributes.position.needsUpdate = true;

    fluidMaterial.uniforms.u_time.value = elapsedTime;
    fluidMaterial.uniforms.u_mouse.value.x += (mouse.x - fluidMaterial.uniforms.u_mouse.value.x) * 0.1;
    fluidMaterial.uniforms.u_mouse.value.y += (mouse.y - fluidMaterial.uniforms.u_mouse.value.y) * 0.1;

    pointLight1.position.x = Math.sin(elapsedTime * 2) * 70;
    pointLight1.position.y = Math.cos(elapsedTime * 2.1) * 70;
    pointLight2.position.x = Math.cos(elapsedTime * 2.2) * 70;
    pointLight2.position.y = Math.sin(elapsedTime * 2.3) * 70;

    cubeCamera.update(renderer, scene);
    composer.render();
}

animate();

// Periodically log tracker data
setInterval(() => {
    console.log('Tracker Data Summary:', trackerData);
}, 60000);
