
function createApp(title , description , imageSrc , imageAlt , downloadLink) {
  const appsContainer = document.getElementById('apps-container');

  const app = document.createElement('div');
  app.className = "app";
  appsContainer.appendChild(app);
  const appImgDiv = document.createElement('div');
  appImgDiv.className = "app-img-div";

  const appInfoDiv = document.createElement('div');
  appInfoDiv.className = "app-info-div";

  app.appendChild(appImgDiv);
  app.appendChild(appInfoDiv);


  const appImg = document.createElement('img');
  appImg.className = "app-img";
  appImg.src = imageSrc;
  appImg.alt = imageAlt;

  appImgDiv.appendChild(appImg);

  const appTitle = document.createElement('h3');
  appTitle.className = "app-title";
  appTitle.textContent = title;

  appInfoDiv.appendChild(appTitle);

  const appDescription = document.createElement('p');
  appDescription.className = "app-description";
  appDescription.textContent = description;

  appInfoDiv.appendChild(appDescription);

  const appLink = document.createElement('a');
  appLink.className = "app-link";
  appLink.href = downloadLink;
  appLink.textContent = "Download";

  appInfoDiv.appendChild(appLink);

}

createApp("Minecraft Pocket Edition" , "Modded Game With Hacks" , "https://apkmodget.com/media/2021/11/_2/180x180/Minecraft-Apk.png" , "Minecraft Logo" , "https://s14.appda.net/2022-07/minecraftmainkraf.apk");
createApp("Candy Crush Saga" , "Modded All Levels / Hearts" , "https://www.apkmirror.com/wp-content/uploads/2019/07/5d246087baf9f.png" , "Candy Crush Logo" , "https://files.kingmodapk.com/games/candy-crush-saga-mod_1.231.0.3-kingmodapk.com.apk");
createApp("Geometry Dash" , "Modded Unlimited Money" , "https://play-lh.googleusercontent.com/QtW5CVMDs9zzbRW5L2QNMqcapOXCMsUiRxPe-eKwiR04L-DQf3gcW21GOglufcRj8A" , "Geometry Dash Logo" , "https://file.techbigs.download/Geometry-Dash-Lite-2.21-Mod-TechBigs.Com.apk");
createApp("Rovio Classics: Angry Birds","For Free","https://play-lh.googleusercontent.com/2iUpHqBGMGT4uWLWKDjIYLDr2mun9Ckbnqokhr_qo-fGwbzvsKS4zF5atEMBsWspatbs=w240-h480-rw","","https://spaces.apkmody.io/v2/download/mp0n");
createApp("8 Ball Pool","Modded / Free Unlimited Money","https://play-lh.googleusercontent.com/bPz1guJ6FHF3oIOEy3KqwpaDDKO-hLRaZoyzmM8bLFLN8fWm6L0_EuUnkwv9iqPo3Ag","8 Ball Pool Logo","https://files.apkmodel.com/APK/B/8-Ball-Pool-mod-5.8.1-apkmodel.com.apk");
createApp("Angry Birds 2","Unlimited Money / Score Multiplier","https://apkmodel.com/wp-content/uploads/2021/07/Angry-Birds-2.jpg","Angry Birds 2","https://files.apkmodel.com/APK/A/angrybird/angry-birds-2-v1-mod_3.1.0-apkmodel.com.apk");
createApp("GBWhatsApp Pro","Modded WhatsApp / More Features","https://www.aerifonline.com/wp-content/uploads/2021/02/GBWhatsApp-Logo.png","GBWhatsApp Logo","https://androidwaves.com/download/GBWhatsApp_Pro");
createApp("Instagram Modded","Modded / More Features","https://play-lh.googleusercontent.com/h9jWMwqb-h9hjP4THqrJ50eIwPekjv7QPmTpA85gFQ10PjV02CoGAcYLLptqd19Sa1iJ","Instagram Logo","https://spaces.apkmody.io/v2/download/3Ye0");
