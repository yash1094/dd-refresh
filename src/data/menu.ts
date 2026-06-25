import type { NavigationItem } from "../types/Menu";

export const menuItems: NavigationItem[] = [
  {
    label: "Campaigns",
    children: [
      {
        label: "Start a Campaign",
        link: "/campaigns/start",
      },
      {
        label: "Template Library",
        link: "/campaigns/templates",
      },
      {
        label: "Image Library",
        link: "/campaigns/images",
      },
      {
        label: "Open Saved Drafts",
        link: "/campaigns/drafts",
      },
      {
        label: "Past Campaigns",
        link: "/campaigns/history",
      },
      {
        label: "Manage Seeds",
        link: "/campaigns/seeds",
      },
      {
        label: "Export Lists",
        link: "/campaigns/export",
      },
      {
        label: "Order Confirmations",
        link: "/campaigns/orders",
      },
      {
        label: "CSSR",
        children: [
          {
            label: "CSSR",
            link: "/campaigns/cssr",
          },
          {
            label: "CSSR 2.0",
            link: "/campaigns/cssr20",
          },
        ],
      },
      {
        label: "Trade Up Campaigns",
        link: "/campaigns/trade-up",
      },
    ],
  },

  {
    label: "Leads and Customers",
    children: [
      {
        label: "Dashboard",
        link: "/leads/dashboard",
      },
      {
        label: "Lead Lists",
        link: "/leads/lists",
      },
      {
        label: "List Generator",
        link: "/leads/generator",
      },
      {
        label: "Customer Lead Search",
        link: "/customers/search",
      },
      {
        label: "Customer Manager",
        link: "/customers",
      },
      {
        label: "MatchMaker",
        link: "/matchmaker",
      },
      {
        label: "DealDriver Pro",
        children: [
          {
            label: "DealDriver Dashboard",
            link: "/dealdriver/dashboard",
          },
          {
            label: "About",
            link: "/dealdriver/about",
          },
          {
            label: "Subscription",
            link: "/dealdriver/subscription",
          },
        ],
      },
    ],
  },

  {
    label: "Reports",
    children: [
      {
        label: "Interactive Reporting",
        children: [
          {
            label: "CSSR Region Report",
            link: "/reports/cssr-region",
          },
          {
            label: "CSSR Dealer Report",
            link: "/reports/cssr-dealer",
          },
          {
            label: "Drive Growth",
            link: "/reports/drive-growth",
          },
          {
            label: "CSSR (Legacy)",
            link: "/reports/cssr-legacy",
          },
        ],
      },
      {
        label: "Reporting",
        link: "/reports",
      },
    ],
  },

  {
    label: "Tools",
    children: [
      {
        label: "Upload Finance Contracts",
        link: "/tools/contracts",
      },
      {
        label: "Upload Data",
        link: "/tools/upload",
      },
      {
        label: "Offer Management Platform",
        link: "/tools/omp",
      },
      {
        label: "Vehicle Reservations",
        link: "/tools/reservations",
      },
      {
        label: "Dealer Toolkit",
        link: "/tools/dealer-toolkit",
      },
    ],
  },

  {
    label: "DDN",
    children: [],
  },

  {
    label: "Pinnacle",
    children: [],
  },

  {
    label: "Settings",
    children: [
      {
        label: "Dealer Settings",
        link: "/settings/dealer",
      },
      {
        label: "My Profile",
        link: "/settings/profile",
      },
      {
        label: "Change Password",
        link: "/settings/password",
      },
    ],
  },

  {
    label: "Support",
    children: [
      {
        label: "Home",
        link: "/support",
      },
      {
        label: "Assets",
        link: "/support/assets",
      },
      {
        label: "Content Publisher",
        link: "/support/content",
      },
      {
        label: "Dealer CRM",
        link: "/support/crm",
      },
    ],
  },

  {
    label: "News",
    link: "/news",
  },

  {
    label: "Resources",
    children: [
      {
        label: "Training",
        link: "/resources/training",
      },
      {
        label: "BDC Support",
        link: "/resources/bdc",
      },
      {
        label: "Concierge",
        link: "/resources/concierge",
      },
      {
        label: "Contact Us",
        link: "/resources/contact",
      },
    ],
  },
];;