
function sendShareClickData(action, label) {
    sendEventData('Share', action, label);
}

function sendCTAClickData(action, label) {
    sendEventData('CTA', action, label); 
}

function sendInteractionClickData(action, label) {
    sendEventData('Interaction', action, label);
}

function sendEventData(category, action, label) {
    gtag('event', action, {
        'event_category': category,
        'event_label': label
    });
}