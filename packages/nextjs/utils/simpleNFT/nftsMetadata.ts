const nftsMetadata = [
  {
    description: "not looking",
    external_url: "https://images.unsplash.com/photo-1453974336165-b5c58464f1ed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww", // <-- this can link to a page for the specific file too
    image: "https://images.unsplash.com/photo-1453974336165-b5c58464f1ed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww",
    name: "not looking",
    attributes: [
      {
        trait_type: "",
        value: "",
      },
      {
        trait_type: "",
        value: "",
      },
      {
        trait_type: "",
        value:"",
      },
    ],
  },
  {
    description: "holding camera",
    external_url: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww", // <-- this can link to a page for the specific file too
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww",
    name: "CamCam",
    attributes: [
      {
        trait_type: "",
        value: "",
      },
      {
        trait_type: "",
        value: "",
      },
      {
        trait_type: "",
        value: "",
      },
    ],
  },
  {
    description: "golden sunset",
    external_url: "https://images.unsplash.com/photo-1598245615049-c86df18526ab?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // <-- this can link to a page for the specific file too
    image: "https://images.unsplash.com/photo-1598245615049-c86df18526ab?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "sunset",
    attributes: [
      {
        trait_type: "",
        value: "",
      },
      {
        trait_type: "",
        value: "",
      },
      {
        trait_type: "",
        value:"",
      },
    ],
  }
];

export type NFTMetaData = (typeof nftsMetadata)[number];

export default nftsMetadata;
