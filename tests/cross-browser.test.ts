import { shortest } from "@antiwork/shortest";

const browsers = ['chromium', 'firefox', 'webkit'];

browsers.forEach(browser => {
    shortest(`Verify core functionality works on ${browser} browser`, {
        browserName: browser
    });
});

