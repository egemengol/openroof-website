import Script from "next/script";
import "./globals.css";
import { Inter, Nunito, Poppins } from "next/font/google";
import Header from "./components/header/header";
import Footer from "./components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Readex+Pro:wght@200;300;400;500;600;700&family=Reem+Kufi+Fun:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/proxima-nova-2"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        
        <meta property="og:title" content="OpenRoof" />
        <meta property="og:description"
          content="Yatırımınızı Güneşin Gücüyle Büyütün!" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:language" content="Turkish" />
        <meta property="og:site_name" content="OpenRoof" />
        <meta property="og:image" content="/logo_slogan_green.png" />
        <meta property="og:keywords" content="güneş enerjisi, yatırım, katılım, sürdürülebilir, " />
        <meta property="og:url" content="https://openroof.com.tr" />
        <meta property="og:type" content="website" />
        <meta property="og:twitter:card" content="summary" />
        <meta property="og:twitter:url" content="https://www.openroof.com.tr" />
        <meta property="og:twitter:title" content="OpenRoof" />
        <meta property="og:twitter:description"
          content="Yatırımınızı Güneşin Gücüyle Büyütün!" />
        <meta property="og:twitter:image" content="https://openroof.com.tr/logo_slogan_green.png" />
        

        <script async src="https://tally.so/widgets/embed.js"></script>
        <Script id="analytics" type="text/javascript">
          {`(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "hg7zec94pt");`}
        </Script>
        <Script src="bower_components/aos/dist/aos.js"></Script>
      </head>
      <body>
        <Header></Header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
