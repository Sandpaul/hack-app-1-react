const config = {
  imageServiceBaseUrl:
    "https://bjssacademyhackday-a8fqfwapbxfpa4b5.uksouth-01.azurewebsites.net",
  teamName: "sinclair",

  imageServiceUrl: function () {
    return `${config.imageServiceBaseUrl}/IL/teams/${config.teamName}/files`;
  },
};

export default config;
