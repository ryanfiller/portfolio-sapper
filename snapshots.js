module.exports = {
  "<SEO /> component": {
    "social media tags": {
      "regular pages": {
        "renders the correct tags": {
          "1": "<head>\n  <script type=\"text/javascript\">\n    document.domain = 'localhost';\n    var Cypress = window.Cypress = parent.Cypress;\n    if (!Cypress) {\n      throw new Error(\n        'Something went terribly wrong and we cannot proceed. We expected to find the global Cypress in the parent window but it is missing!. This should never happen and likely is a bug. Please open an issue!'\n        );\n    };\n    Cypress.action('app:window:before:load', window);\n  </script>\n  <meta charset=\"utf-8\">\n  <meta content=\"width=device-width,initial-scale=1\"\n    name=\"viewport\">\n  <base href=\"/\">\n  <link href=\"manifest.json\"\n    rel=\"manifest\"\n    crossorigin=\"use-credentials\">\n  <link href=\"favicon.png\"\n    rel=\"icon\"\n    type=\"image/png\">\n  <link rel=\"stylesheet\"\n    href=\"client/main.1511651843.css\">\n  <script src=\"/client/client.b8c76361.js\"\n    type=\"module\"\n    crossorigin=\"use-credentials\"></script>\n  <title>About | ryanfiller.com</title>\n  <link rel=\"sitemap\"\n    type=\"application/xml\"\n    href=\"/sitemap.xml\">\n  <meta name=\"theme-color\">\n  <script async=\"\"\n    src=\"//gc.zgo.at/count.js\"\n    data-goatcounter=\"https://ryanfiller.goatcounter.com/count\"></script>\n  <link rel=\"webmention\"\n    href=\"https://webmention.io/www.ryanfiller.com/webmention\">\n  <link rel=\"pingback\"\n    href=\"https://webmention.io/www.ryanfiller.com/xmlrpc\">\n  <meta name=\"monetization\"\n    content=\"$ilp.uphold.com/grFqX3z4EBqj\">\n  <meta name=\"color-scheme\"\n    content=\"dark light\">\n  <style>\n    :root {\n      --colorBlack: #080025;\n      --colorWhite: #fefdf2;\n      --colorPurpleLight: #a176b6;\n      --colorPurpleDark: #5651a7;\n      --colorBlueLight: #4f81c0;\n      --colorBlueDark: #155f91;\n      --colorOrangeLight: #f16a1f;\n      --colorOrangeDark: #ac284f;\n      --colorGrayLight: #5e828f;\n      --colorGrayDark: #4e6773;\n      --colorText: var(--colorBlack);\n      --colorBackground: var(--colorWhite);\n      --colorPrimary: var(--colorPurpleDark);\n      --colorHighlight: var(--colorBlueDark);\n      --colorActive: var(--colorOrangeLight);\n      --colorDisabled: var(--colorGrayLight);\n    }\n\n    @media (prefers-color-scheme: dark) {\n\n      /* prevent default from overriding user selection if no js */\n      :root:not([data-user-color-scheme]) {\n        --colorText: var(--colorWhite);\n        --colorBackground: var(--colorBlack);\n        --colorPrimary: var(--colorPurpleDark);\n        --colorHighlight: var(--colorOrangeDark);\n        --colorActive: var(--colorBlueLight);\n        --colorDisabled: var(--colorGrayDark);\n      }\n    }\n\n    [data-user-color-scheme='dark'] {\n      --colorText: var(--colorWhite);\n      --colorBackground: var(--colorBlack);\n      --colorPrimary: var(--colorPurpleDark);\n      --colorHighlight: var(--colorOrangeDark);\n      --colorActive: var(--colorBlueLight);\n      --colorDisabled: var(--colorGrayDark);\n    }\n  </style>\n  <link rel=\"preload\"\n    as=\"font\"\n    href=\"/fonts/LabDJR-VF.woff\"\n    type=\"font/woff\">\n  <link rel=\"preload\"\n    as=\"font\"\n    href=\"/fonts/Barlow.woff2\"\n    type=\"font/woff2\">\n  <link rel=\"preload\"\n    as=\"font\"\n    href=\"/fonts/Recursive.woff2\"\n    type=\"font/woff2\">\n  <link rel=\"stylesheet\"\n    href=\"/slowly-delete-these-styles.css\">\n  <meta name=\"author\"\n    content=\"@ryanfiller_\">\n  <meta name=\"description\"\n    content=\"I am a designer, developer, illustrator, and maker living and working in Memphis, Tennessee. This is my blog and portfolio.\">\n  <meta name=\"keywords\"\n    content=\"ryan filler, ryanfiller, memphis, frontend, css, javascript, svelte\">\n  <meta name=\"twitter:site\"\n    content=\"https://www.ryanfiller.com\">\n  <meta name=\"twitter:creator\"\n    content=\"@ryanfiller_\">\n  <meta name=\"twitter:url\"\n    content=\"https://www.ryanfiller.com/about\">\n  <meta name=\"twitter:title\">\n  <meta name=\"twitter:description\"\n    content=\"I am a designer, developer, illustrator, and maker living and working in Memphis, Tennessee. This is my blog and portfolio.\">\n  <meta property=\"og:locale\"\n    content=\"en_US\">\n  <meta property=\"og:site_name\"\n    content=\"ryanfiller.com\">\n  <meta property=\"og:title\">\n  <meta property=\"og:description\"\n    content=\"I am a designer, developer, illustrator, and maker living and working in Memphis, Tennessee. This is my blog and portfolio.\">\n  <meta property=\"og:url\"\n    content=\"https://www.ryanfiller.com/about\">\n  <meta property=\"og:type\"\n    content=\"website\">\n  <script>\n    const existingUserPrefernece = window.localStorage.getItem(\n      'user-color-scheme')\n    const setPreference = (t, e, n, r, a, o) => {\n      if (t) {\n        const i = o || t.localStorage.getItem(n);\n        i && (document.documentElement.setAttribute(r, i), e(a, i), t\n          .localStorage.setItem(n, i))\n      }\n    }\n    const setCustomProperty = function(t, e) {\n      \"undefined\" != typeof window && document.documentElement.style\n        .setProperty(\"--\" + t, e)\n    }\n    setPreference(window, setCustomProperty, 'user-color-scheme',\n      'data-user-color-scheme', 'user-color-scheme', existingUserPrefernece)\n  </script>\n</head>"
        }
      },
      "pages with images": {
        "renders the correct tags": {
          "1": "<head>\n  <script type=\"text/javascript\">\n    document.domain = 'localhost';\n    var Cypress = window.Cypress = parent.Cypress;\n    if (!Cypress) {\n      throw new Error(\n        'Something went terribly wrong and we cannot proceed. We expected to find the global Cypress in the parent window but it is missing!. This should never happen and likely is a bug. Please open an issue!'\n        );\n    };\n    Cypress.action('app:window:before:load', window);\n  </script>\n  <meta charset=\"utf-8\">\n  <meta content=\"width=device-width,initial-scale=1\"\n    name=\"viewport\">\n  <base href=\"/\">\n  <link href=\"manifest.json\"\n    rel=\"manifest\"\n    crossorigin=\"use-credentials\">\n  <link href=\"favicon.png\"\n    rel=\"icon\"\n    type=\"image/png\">\n  <link rel=\"stylesheet\"\n    href=\"client/main.1511651843.css\">\n  <script src=\"/client/client.b8c76361.js\"\n    type=\"module\"\n    crossorigin=\"use-credentials\"></script>\n  <title>Automatic Social Share Images | ryanfiller.com</title>\n  <link rel=\"sitemap\"\n    type=\"application/xml\"\n    href=\"/sitemap.xml\">\n  <meta name=\"theme-color\">\n  <script async=\"\"\n    src=\"//gc.zgo.at/count.js\"\n    data-goatcounter=\"https://ryanfiller.goatcounter.com/count\"></script>\n  <link rel=\"webmention\"\n    href=\"https://webmention.io/www.ryanfiller.com/webmention\">\n  <link rel=\"pingback\"\n    href=\"https://webmention.io/www.ryanfiller.com/xmlrpc\">\n  <meta name=\"monetization\"\n    content=\"$ilp.uphold.com/grFqX3z4EBqj\">\n  <meta name=\"color-scheme\"\n    content=\"dark light\">\n  <style>\n    :root {\n      --colorBlack: #080025;\n      --colorWhite: #fefdf2;\n      --colorPurpleLight: #a176b6;\n      --colorPurpleDark: #5651a7;\n      --colorBlueLight: #4f81c0;\n      --colorBlueDark: #155f91;\n      --colorOrangeLight: #f16a1f;\n      --colorOrangeDark: #ac284f;\n      --colorGrayLight: #5e828f;\n      --colorGrayDark: #4e6773;\n      --colorText: var(--colorBlack);\n      --colorBackground: var(--colorWhite);\n      --colorPrimary: var(--colorPurpleDark);\n      --colorHighlight: var(--colorBlueDark);\n      --colorActive: var(--colorOrangeLight);\n      --colorDisabled: var(--colorGrayLight);\n    }\n\n    @media (prefers-color-scheme: dark) {\n\n      /* prevent default from overriding user selection if no js */\n      :root:not([data-user-color-scheme]) {\n        --colorText: var(--colorWhite);\n        --colorBackground: var(--colorBlack);\n        --colorPrimary: var(--colorPurpleDark);\n        --colorHighlight: var(--colorOrangeDark);\n        --colorActive: var(--colorBlueLight);\n        --colorDisabled: var(--colorGrayDark);\n      }\n    }\n\n    [data-user-color-scheme='dark'] {\n      --colorText: var(--colorWhite);\n      --colorBackground: var(--colorBlack);\n      --colorPrimary: var(--colorPurpleDark);\n      --colorHighlight: var(--colorOrangeDark);\n      --colorActive: var(--colorBlueLight);\n      --colorDisabled: var(--colorGrayDark);\n    }\n  </style>\n  <link rel=\"preload\"\n    as=\"font\"\n    href=\"/fonts/LabDJR-VF.woff\"\n    type=\"font/woff\">\n  <link rel=\"preload\"\n    as=\"font\"\n    href=\"/fonts/Barlow.woff2\"\n    type=\"font/woff2\">\n  <link rel=\"preload\"\n    as=\"font\"\n    href=\"/fonts/Recursive.woff2\"\n    type=\"font/woff2\">\n  <link rel=\"stylesheet\"\n    href=\"/slowly-delete-these-styles.css\">\n  <meta name=\"author\"\n    content=\"@ryanfiller_\">\n  <meta name=\"description\"\n    content=\"Generating social share images with a serverless function and headless browser\">\n  <meta name=\"keywords\"\n    content=\"code, seo, serverless, media\">\n  <meta name=\"twitter:site\"\n    content=\"https://www.ryanfiller.com\">\n  <meta name=\"twitter:creator\"\n    content=\"@ryanfiller_\">\n  <meta name=\"twitter:url\"\n    content=\"https://www.ryanfiller.com/blog/automatic-social-share-images\">\n  <meta name=\"twitter:title\"\n    content=\"Automatic Social Share Images\">\n  <meta name=\"twitter:description\"\n    content=\"Generating social share images with a serverless function and headless browser\">\n  <meta name=\"twitter:card\"\n    content=\"summary_large_image\">\n  <meta name=\"twitter:image\"\n    content=\"https://res.cloudinary.com/ryanfiller/image/upload/social-images/automatic-social-share-images.png\">\n  <meta name=\"twitter:image:alt\"\n    content=\"robotic arms on an assembly line\">\n  <meta property=\"og:locale\"\n    content=\"en_US\">\n  <meta property=\"og:site_name\"\n    content=\"ryanfiller.com\">\n  <meta property=\"og:title\"\n    content=\"Automatic Social Share Images\">\n  <meta property=\"og:description\"\n    content=\"Generating social share images with a serverless function and headless browser\">\n  <meta property=\"og:url\"\n    content=\"https://www.ryanfiller.com/blog/automatic-social-share-images\">\n  <meta property=\"og:type\"\n    content=\"article\">\n  <meta property=\"og:image\"\n    content=\"https://res.cloudinary.com/ryanfiller/image/upload/social-images/automatic-social-share-images.png\">\n  <meta property=\"og:image:alt\"\n    content=\"robotic arms on an assembly line\">\n  <meta property=\"og:image:height\"\n    content=\"630\">\n  <meta property=\"og:image:width\"\n    content=\"1200\">\n  <script>\n    const existingUserPrefernece = window.localStorage.getItem(\n      'user-color-scheme')\n    const setPreference = (t, e, n, r, a, o) => {\n      if (t) {\n        const i = o || t.localStorage.getItem(n);\n        i && (document.documentElement.setAttribute(r, i), e(a, i), t\n          .localStorage.setItem(n, i))\n      }\n    }\n    const setCustomProperty = function(t, e) {\n      \"undefined\" != typeof window && document.documentElement.style\n        .setProperty(\"--\" + t, e)\n    }\n    setPreference(window, setCustomProperty, 'user-color-scheme',\n      'data-user-color-scheme', 'user-color-scheme', existingUserPrefernece)\n  </script>\n</head>"
        }
      }
    }
  },
  "__version": "5.3.0"
}