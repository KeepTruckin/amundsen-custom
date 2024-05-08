// This file should be used to add new config variables or overwrite defaults from config-default.ts

import { AppConfigCustom } from './config-types';

const configCustom: AppConfigCustom = {
   browse: {
    curatedTags: [],
    hideNonClickableBadges: false,
    showAllTags: true,
    showBadgesInHome: true,
  },
  analytics: {
    plugins: [],
  },
  mailClientFeatures: {
    feedbackEnabled: false,
    notificationsEnabled: false,
  },
  indexDashboards: {
    enabled: false, // Enable this after we inject redash dashboards into neo4j
  },
  indexUsers: {
    enabled: true,    // Enables User Profile within Amundsen Frontend, we already have Users data in neo4j
  },
  userIdLabel: 'email address',
  issueTracking: {
    enabled: false,
  },
  featureLineage: {
    inAppListEnabled: true,
  },
  tableLineage: {
    inAppListEnabled: true,
    inAppPageEnabled: true,
    externalEnabled: true,
    defaultLineageDepth: 5,
    iconPath: 'PATH_TO_ICON',
    isBeta: false,
    urlGenerator: (
      database: string,
      cluster: string,
      schema: string,
      table: string
    ) =>
      `https://DEFAULT_LINEAGE_URL?schema=${schema}&cluster=${cluster}&db=${database}&table=${table}`,
  },
};

export default configCustom;
