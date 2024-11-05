import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class PatientForm extends LightningElement {
    @track patientId = this.generateRandomId();
    
    // Generate a random 5-digit patient ID
    generateRandomId() {
        return Math.floor(10000 + Math.random() * 90000).toString();
    }

    //submit form handler
    handleSubmit(event) {
        event.preventDefault(); // Prevent default submission
        const selectEvent = new CustomEvent('submitevent', {
            detail: event.detail
        });
        this.showToast('Patient Details saved', 'Check notification for updating !!!', 'success')
        this.dispatchEvent(selectEvent); 
    }

    showToast(title, message, variant ){
        this.dispatchEvent(
            new ShowToastEvent({
                title,
                message,
                variant,
            })
        );
    }

    

}
