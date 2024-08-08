import { Inter } from "next/font/google";
import "../styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BLACKPRINT",
  description: "Your design agency for branding, marketing, and more.",
  icons: { icon: "/assets/bp_logo2.png", sizes: "any", type: "image/png" },
  openGraph: {
    type: 'website',
    url: 'https://blackprintv2.vercel.app',
    title: 'BLACKPRINT',
    description: 'Your design agency for branding, marketing, and more.',
    images: [
      {
        url: 'https://blackprintbucket.s3.us-west-1.amazonaws.com/thumbnail2.png',
        width: 1200,
        height: 630,
        alt: 'BLACKPRINT'
      }
    ]
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <link rel="icon" href={metadata.icons.icon} sizes={metadata.icons.sizes} type={metadata.icons.type} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
