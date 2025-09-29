# Product Videos Setup

## Video IDs to Replace

To complete the video setup, you need to replace the placeholder video IDs in `/components/marketing/sections/ntclipboard-video.tsx` with actual YouTube video IDs from https://www.usersolutions.com/videos/

### Current Video Structure:

The videos have been updated to match the User Solutions website structure:

1. **Welcome** - Introduction to User Solutions manufacturing software solutions
2. **Resource Manager DB** - Complete database-driven production scheduling solution
3. **Workcenter Scheduler XL** - Excel-based scheduling solution for shop floor operations
4. **Resource Manager for Excel** - Advanced resource planning and finite capacity scheduling
5. **Resource Manager Training (RMX)** - Comprehensive training series for Resource Manager for Excel
6. **Initialization** - Step-by-step guide to initialize and set up your Resource Manager system
7. **Scheduling** - Master advanced scheduling techniques and best practices
8. **Reporting** - Generate comprehensive reports and analyze production data

### How to Get Video IDs:

1. **Visit the videos page**: Go to https://www.usersolutions.com/videos/
2. **Locate each video**: Find the videos listed above on the page
3. **Get YouTube ID**:
   - Right-click on the video and inspect the HTML source
   - Look for YouTube iframe `src` URLs or video embed codes
   - Extract the 11-character video ID (e.g., from `https://www.youtube.com/embed/ABC123DEF45`)
   - Alternative: If videos open in YouTube, copy the URL and extract ID after `v=`
4. **Replace in code**: Open `ntclipboard-video.tsx` and replace `VIDEO_ID_NEEDED` with actual IDs

### Code Update Example:

```tsx
// Before:
{
  id: 'VIDEO_ID_NEEDED', // Get actual YouTube video ID from User Solutions Welcome video
  title: 'Welcome',
  // ...
}

// After:
{
  id: 'ABC123DEF45', // Actual YouTube video ID for Welcome video
  title: 'Welcome',
  // ...
}
```

### Video Categories:

- **Overview**: Welcome video (company introduction)
- **Product Demo**: Resource Manager DB, Workcenter Scheduler XL, Resource Manager for Excel
- **Training**: RMX Training, Initialization, Scheduling, Reporting

### Testing:

After updating video IDs:

1. Run `npm run dev`
2. Go to `/videos` page
3. Test each video plays correctly
4. Verify category filtering works (All, Overview, Product Demo, Training)
5. Check responsive design on different screen sizes

### Notes:

- Videos use YouTube privacy-enhanced mode for better user privacy
- No autoplay to improve user experience
- Component removed from home page but available on dedicated `/videos` page
- Fully responsive design with dark/light theme support
