# Product Videos Setup

## Video IDs to Replace

To complete the video setup, you need to replace the placeholder video IDs in `/components/marketing/sections/ntclipboard-video.tsx` with actual YouTube video IDs from https://www.usersolutions.com/videos/

### Current Video Categories:

1. **Welcome** - Introduction video
2. **Resource Manager DB** - Database product demo
3. **Workcenter Scheduler XL** - Excel scheduler demo
4. **Resource Manager for Excel** - Excel resource manager demo
5. **Resource Manager Training (RMX)** - Training overview
6. **Initialization** - Setup training
7. **Scheduling** - Scheduling training
8. **Reporting** - Reporting training

### How to Get Video IDs:

1. Go to each video on https://www.usersolutions.com/videos/
2. Copy the YouTube video URL (e.g., `https://www.youtube.com/watch?v=ABC123DEF`)
3. Extract the video ID (the part after `v=` or after `youtu.be/`)
4. Replace the placeholder `dQw4w9WgXcQ` with the actual video ID

### Categories:

- **Overview**: Welcome video
- **Product Demo**: Main product demonstrations
- **Training**: Tutorial and training videos

The videos are organized with category filtering, so users can easily find the content they need.
