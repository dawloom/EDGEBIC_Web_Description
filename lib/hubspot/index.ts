/**
 * HubSpot Integration Module
 *
 * Export all HubSpot-related functionality
 */

export { HubSpotClient, getHubSpotClient, parseFullName } from './client';

export {
  syncContactToHubSpot,
  syncContactUpdateToHubSpot,
  syncContactStageToHubSpot,
  batchSyncContactsToHubSpot
} from './sync';
