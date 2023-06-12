// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Data Engineering Intern Onboarding Guide",
  tagline: "",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://dathere.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/de-intern-guide/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "dathere", // Usually your GitHub org/user name.
  projectName: "de-intern-guide", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/dathere/de-intern-guide/tree/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/datHere-logo.png",
      navbar: {
        title: "Data Engineering Intern Onboarding Guide",
        logo: {
          alt: "datHere Logo",
          src: "img/datHere-logo.png",
          srcDark: "img/datHere-logo-dark.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "guideSidebar",
            position: "left",
            label: "📖 Guide",
          },
          {
            to: "about",
            position: "left",
            label: "💡 About",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "datHere Socials",
            items: [
              {
                label: "Website",
                href: "https://dathere.com",
              },
              {
                label: "GitHub",
                href: "https://github.com/dathere",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/dathere/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                href: "https://dathere.com/blog/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} datHere, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
