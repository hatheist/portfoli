import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test('about page', async ({ page }) => {

    await page.getByRole('tab', {name: 'About'}).click();
    // Expects the URL to contain /.
    await expect(page).toHaveURL('http://localhost:3000/');

    await expect(page.getByRole('link', {name: 'Hathim Ashir'})).toHaveText('Hathim Ashir')

    await expect(page.getByRole('tab', {name: 'About'})).toHaveCount(1)
    await expect(page.getByRole('tab', {name: 'Reels'})).toHaveCount(1)
    await expect(page.getByRole('tab', {name: 'Interview'})).toHaveCount(1)
    await expect(page.getByRole('tab', {name: 'Photo Essay'})).toHaveCount(1)

    await expect(page.getByText(/© \d{4} Hathim Ashir/)).toHaveCount(1)
    await expect(page.getByRole('img', {name: 'Hathim Ashir'})).toBeVisible()
})

test('portfolio sections', async ({ page }) => {
    // Test Reels page
    await page.getByRole('tab', {name: 'Reels'}).click();
    await expect(page).toHaveURL('http://localhost:3000/reels', {timeout: 30000});
    await expect(page.getByText('Behind the Reel is a five-part reel series')).toHaveCount(1)
    
    // Test Interview page
    await page.getByRole('tab', {name: 'Interview'}).click();
    await expect(page).toHaveURL('http://localhost:3000/interview', {timeout: 30000});
    await expect(page.getByText('Witnessing with the Lens: A Conversation with Chempkumar')).toHaveCount(1)
    
    // Test Photo Essay page
    await page.getByRole('tab', {name: 'Photo Essay'}).click();
    await expect(page).toHaveURL('http://localhost:3000/photo-essay', {timeout: 30000});
    await expect(page.getByText('Muslimah, Beyond the Veil: Stories of Faith and Femininity')).toHaveCount(1)
    
    // Return to About page
    await page.getByRole('tab', {name: 'About'}).click();
    await expect(page.getByRole('heading', {name: 'Hathim Ashir'})).toHaveCount(1)
});