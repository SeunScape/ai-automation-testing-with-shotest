import { shortest } from "@antiwork/shortest";

shortest('Complete a full purchase flow from login to checkout')
    .after(async ({ page }) => {
        const url = page.url();
        expect(url).toContain('checkout-complete');
    })

shortest("Filter products by price from low to high and verify the sorting order");


shortest('Add multiple items to cart, update quantities, and verify total price calculation');

shortest('Verify the shopping cart displays correctly on mobile viewport', {
    viewport: { width:375, height:667 }
});