import { LightningElement, api } from 'lwc';

export default class BioTrakNotification extends LightningElement {
    @api newnotification;
    
    handleUpdate(){
        const selectedEvent = new CustomEvent('selectpatient', {
            detail: this.newnotification
        });
        this.dispatchEvent(selectedEvent);
    }
}