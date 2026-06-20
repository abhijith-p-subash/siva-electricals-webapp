// ============================================================================
// Client / "trusted by" list.
//
// To show an official logo: place the file in  public/clients/  using the
// `logo` filename below (PNG with a transparent or white background works best),
// e.g. public/clients/kseb.png. It then appears automatically.
//
// Until a file exists, the section shows a clean text wordmark instead of a
// broken image — so it always looks complete. Only display logos you have the
// client's permission / rights to use.
//
// Order = how they appear in the grid: government & PSUs, then banking &
// finance, then food & manufacturing.
// ============================================================================

export type Client = {
  /** Full name — used for the image alt text and tooltip */
  name: string;
  /** Short wordmark shown until an official logo file is added */
  short: string;
  /** Path under public/, e.g. "/clients/kseb.png". Drop the file there. */
  logo?: string;
  /** Optional client website */
  url?: string;
};

export const CLIENTS: Client[] = [
  // Government & public sector
  {
    name: "Kerala State Electricity Board (KSEB)",
    short: "KSEB",
    logo: "/clients/kseb.jpg",
  },
  {
    name: "Government of Kerala — Public Works Department (PWD)",
    short: "Kerala PWD",
    logo: "/clients/kerala-pwd.jpg",
  },
  {
    name: "Bharat Sanchar Nigam Limited (BSNL)",
    short: "BSNL",
    logo: "/clients/bsnl.png",
  },
  // Banking & finance
  {
    name: "IDBI Bank",
    short: "IDBI Bank",
    logo: "/clients/idbi-bank.png",
  },
  {
    name: "IDCB Bank",
    short: "IDCB Bank",
    logo: "/clients/idcb-bank.png",
  },
  {
    name: "KLM Axiva Finvest",
    short: "KLM Axiva",
    logo: "/clients/klm-axiva.png",
  },
  // Food & manufacturing
  {
    name: "Eastern Food Products",
    short: "Eastern",
    logo: "/clients/eastern.png",
  },
  {
    name: "Palco Food Products",
    short: "Palco",
    logo: "/clients/palco.png",
  },
  {
    name: "Kerala Farm — Organic Spices Village",
    short: "Kerala Farm",
    logo: "/clients/kerala-farm.png",
  },
  {
    name: "Viyatt Power House",
    short: "Viyatt",
    logo: "/clients/viyatt.png",
  },
];
