# Product screenshot assets

Add or replace product screenshots using these filenames. Product detail pages
show an HDC MA branded placeholder when an image is not present.

| Product | Screenshot files |
| --- | --- |
| PCAP | `pcap-preview.png` |
| Food Haven Premium | `food-haven-preview.png` |
| Horizon Learning & Careers | `education-preview.png` |
| AgriLink | `agrilink-preview.png` |
| Business Analytics | `business-analytics-preview.png` |
| Financial Intelligence & Planning Platform | `finance.png` |
| Enterprise AI Solutions Platform | `enterprise-ai-solutions-preview.png` |

Use the 16:10 or 16:9 aspect ratio where possible. Images are displayed with
`object-fit: contain` so full application interfaces remain visible.

## Theme-specific previews

The Products page and each product detail page select their image from
`src/components/Products/productsData.js` using the existing app-wide theme
state. `lightImage` is used in Light Mode, `darkImage` in Dark Mode, and the
existing `image` is the fallback when the selected variant is not available.

| Product | Light Mode asset | Dark Mode asset |
| --- | --- | --- |
| PCAP | `pcap-light.png` | `pcap-preview.png` |
| Food Haven Premium | `food-haven-light.png` | `food-haven-preview.png` |
| Horizon Learning & Careers | `education-light.png` | `education-preview.png` |
| AgriLink | `agrilink-light.png` | `agrilink-preview.png` |
| Business Analytics | `business-analytics -light.png` | `business-analytics-preview.png` |
| Financial Intelligence & Planning Platform | `finance-light.png` | `finance.png` |
| Enterprise AI Solutions Platform | `enterprise-ai-solutions-light.png` | `enterprise-ai-solutions-preview.png` |

Place future variants in this directory and add their exact public paths to the
corresponding product's `lightImage` or `darkImage`. Financial Intelligence
uses `finance.png` as its default fallback and currently has no separate
`financial-intelligence-preview.png`. Screenshots remain uncropped with
`object-fit: contain`.
