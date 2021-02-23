# Auto Bot

AutoBot is a marketplace for research institutes to sell/auction dataset, and developers can search and buy the dataset based on their demand.

## Getting Started

### Adding Variables Local To Your Environment

#### Windows

To setup api key, App Id, and your search index on windows as environment variables,

Hit **Win+R** > type **cmd.exe**, followed by the commands

```set "ALG_ADM_API_KEY=replace_with_algolia_admin_key" && npm start```

```set "ALG_APP_ID=replace_with_algolia_app_id" && npm start```

```set "ALG_IDX=replace_with_your_index" && npm start```

or, **Win+R** > type **powershell**, followed by the command

```($env:ALG_ADM_API_KEY = "replace_with_algolia_admin_key") -and (npm start)```

```($env:ALG_APP_ID = "replace_with_algolia_app_id") -and (npm start)```

```($env:ALG_IDX = "replace_with_your_index") -and (npm start)```

#### Linux & macOS

To setup api key, App Id, and your search index on Linux & macOS as environment variables,

**Bash**:

```ALG_ADM_API_KEY=replace_with_algolia_admin_key npm start```

```ALG_APP_ID=replace_with_algolia_app_id npm start```

```ALG_IDX=replace_with_your_index npm start```