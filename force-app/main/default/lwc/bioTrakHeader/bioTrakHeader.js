import { LightningElement } from 'lwc';
import myImageResource from '@salesforce/resourceUrl/logo';
export default class BioTrakHeader extends LightningElement {
    imageUrl = myImageResource;
    navigateHome() {
        // Logic for navigating to Home
        console.log('Navigating to Home');
    }

    navigateFileSearch() {
        // Logic for navigating to File Search
        console.log('Navigating to File Search');
    }

    navigateNotifications() {
        // Logic for navigating to Notifications
        console.log('Navigating to Notifications');
    }

    navigateProfile() {
        // Logic for navigating to Profile
        console.log('Navigating to Profile');
    }
}