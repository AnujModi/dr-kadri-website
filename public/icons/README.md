# PWA Icons

This folder should contain PWA icons in the following sizes:

- icon-72x72.png
- icon-96x96.png
- icon-128x128.png
- icon-144x144.png
- icon-152x152.png
- icon-192x192.png
- icon-384x384.png
- icon-512x512.png

## How to Generate Icons

You can use the logo.jpeg file from the root and generate icons using:

1. **Online Tool**: https://www.pwabuilder.com/imageGenerator
   - Upload your logo
   - Download the icon pack
   - Place all icons in this folder

2. **Or use a tool like ImageMagick**:
   ```bash
   convert logo.jpeg -resize 72x72 icon-72x72.png
   convert logo.jpeg -resize 96x96 icon-96x96.png
   # ... and so on for each size
   ```

The icons should be square and have a transparent or solid background that matches your theme color.
