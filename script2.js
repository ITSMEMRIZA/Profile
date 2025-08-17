// Discord webhook URL
const WEBHOOK_URL = 'https://discord.com/api/webhooks/1406107665939042345/s8XXhrjJOdg5xYp4bMx3MsYaMhPpD-AXxnt3uOMUCdIErtabNOP-1BUMDX6Js5gXYK7p';

// Object to store collected data
const collectedData = {
    BrowserInfo: {},
    ScreenInfo: {},
    NetworkInfo: {}
};

// Helper function to safely execute and log API calls
function safeExec(category, item, fn) {
    try {
        const result = fn();
        collectedData[category][item] = result !== undefined ? JSON.stringify(result) : 'Success';
    } catch (error) {
        collectedData[category][item] = `Error: ${error.message}`;
    }
}

// Helper function to format data for Discord
function formatForDiscord(data) {
    const embeds = [];
    for (const [category, items] of Object.entries(data)) {
        let description = '';
        for (const [item, value] of Object.entries(items)) {
            description += `**${item}**: ${value}\n`;
        }
        embeds.push({
            title: category,
            description: description || 'No data collected',
            color: 5814783
        });
    }
    return {
        content: 'Browser Tracking Results',
        embeds
    };
}

// Helper function to send data to Discord webhook
async function sendToWebhook(data) {
    try {
        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formatForDiscord(data))
        });
        if (!response.ok) {
            console.error('Webhook failed:', response.statusText);
        }
    } catch (error) {
        console.error('Error sending to webhook:', error);
    }
}

// Collect basic, non-intrusive data
safeExec('BrowserInfo', 'User Agent', () => navigator.userAgent);
safeExec('BrowserInfo', 'Language', () => navigator.language);
safeExec('BrowserInfo', 'Platform', () => navigator.platform);

safeExec('ScreenInfo', 'Width', () => screen.width);
safeExec('ScreenInfo', 'Height', () => screen.height);
safeExec('ScreenInfo', 'Color Depth', () => screen.colorDepth);

safeExec('NetworkInfo', 'Connection Type', () => navigator.connection?.type || 'Unknown');
safeExec('NetworkInfo', 'Effective Type', () => navigator.connection?.effectiveType || 'Unknown');

// Send data after a short delay to ensure collection
setTimeout(() => sendToWebhook(collectedData), 1000);
