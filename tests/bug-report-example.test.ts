import { shortest } from "@antiwork/shortest";

shortest("Reproduce bug: Cart count doesn't update after removing item")
    .after(async ({ page }) => {

    await page.screenshot({path: 'bug-screenchots/cart-count-issue.png'});

    console.log(`
        BUG REPORT
        =============
        Title: Cart count inconsistency after item removal
        Severity: Medium
        Steps to Reproduce:
        1. Add 3 items to cart
        2. Remove one item using the X button
        3. Observe cart count in header

        Expected: Cart should show "2"
        Actual: Cart still shows "3"

        Environment: ${await page.evaluate(() => navigator.userAgent)}
        Screenshot: bug-screenshots/cart-count-issue.png
        `);
    });