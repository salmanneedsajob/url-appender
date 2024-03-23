// replace '/wp-admin' with the term you would like to append.
// created using gemini

chrome.action.onClicked.addListener((tab) => { 
    if (tab.url && !tab.url.startsWith('chrome://') && !tab.url.endsWith('/wp-admin')) {
        let newURL = tab.url;

        // Ensure a single trailing slash before appending '/wp-admin'
        if (!newURL.endsWith('/')) {
            newURL += '/'; 
        }

        newURL += 'wp-admin'; // Updated to append '/wp-admin'
        chrome.tabs.update({ url: newURL });
    }
});
