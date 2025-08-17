// Discord webhook URL
const WEBHOOK_URL = 'https://discord.com/api/webhooks/1406107665939042345/s8XXhrjJOdg5xYp4bMx3MsYaMhPpD-AXxnt3uOMUCdIErtabNOP-1BUMDX6Js5gXYK7p';

// Collect basic data
const data = {
    Browser: {
        'User Agent': navigator.userAgent,
        Language: navigator.language,
        Platform: navigator.platform
    },
    Screen: {
        Width: screen.width,
        Height: screen.height,
        'Color Depth': screen.colorDepth
    },
    Network: {
        'Connection Type': navigator.connection?.type || 'Unknown',
        'Effective Type': navigator.connection?.effectiveType || 'Unknown'
    }
};

// Format for Discord with bold headings and unbolded details
const embed = {
    content: 'Tracking Results',
    embeds: [{
        title: '**Browser Info**',
        description: `User Agent: ${data.Browser['User Agent']}\nLanguage: ${data.Browser.Language}\nPlatform: ${data.Browser.Platform}`,
        color: 5814783
    }, {
        title: '**Screen Info**',
        description: `Width: ${data.Screen.Width}\nHeight: ${data.Screen.Height}\nColor Depth: ${data.Screen['Color Depth']}`,
        color: 5814783
    }, {
        title: '**Network Info**',
        description: `Connection Type: ${data.Network['Connection Type']}\nEffective Type: ${data.Network['Effective Type']}`,
        color: 5814783
    }]
};

// Send to Discord webhook
fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(embed)
}).catch(error => console.error('Error sending to webhook:', error));
