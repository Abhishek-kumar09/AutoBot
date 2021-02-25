# AutoBot

<p align="center"> 
    <img src="https://github.com/Abhishek-kumar09/AutoBot/blob/development/Documentation/assets/img/favicon.png" alt="" widht=250 height=250>
 </p>

 <p align="center"> 
<img src="https://img.shields.io/badge/Framework-React-Cyan?style=for-the-badge&logo=react" alt=""> <img src="https://img.shields.io/badge/Built_With-Firebase-red?style=for-the-badge&logo=firebase" alt="">
 </p>
 
 # Project Description

**Title** | **Description**
-----|------------
**Why AutoBot** | For all the ML developers out there, getting the dataset that matches the criteria for your Machine Learning Model is hard. We get it. That is why we created Auto Bot to help you buy/auction/sell the dataset of your choices.|
**What it does** | AutoBot is the ultimate marketplace for all the ML developers looking for the right kind of resources for your apps. Find & Search for datasets that can train your model, test your model, and develop your model.| 
**How it works** | Buying & Selling datasets have never been easier, until now! Built with powerful search tools like Algolia, AutoBot helps you find the resources you need without wading through reams of information on the internet- saving your valuable time as a developer and making you more productive than ever.| 

## Getting Started

### Adding Variables Local To Your Environment

#### Windows

To setup api key, App Id, and your search index on windows as environment variables,

Hit **Win+R** > type **cmd.exe**, followed by the commands
```
set "ALG_ADM_API_KEY=replace_with_algolia_admin_key" && npm start

set "ALG_APP_ID=replace_with_algolia_app_id" && npm start

set "ALG_IDX=replace_with_your_index" && npm start
```

or, **Win+R** > type **powershell**, followed by the command
```
($env:ALG_ADM_API_KEY = "replace_with_algolia_admin_key") -and (npm start)

($env:ALG_APP_ID = "replace_with_algolia_app_id") -and (npm start)

($env:ALG_IDX = "replace_with_your_index") -and (npm start)
```

#### Linux & macOS

To setup api key, App Id, and your search index on Linux & macOS as environment variables,

**Bash**:
```
ALG_ADM_API_KEY=replace_with_algolia_admin_key npm start

ALG_APP_ID=replace_with_algolia_app_id npm start

ALG_IDX=replace_with_your_index npm start
```