import { LightningElement, track } from 'lwc';

export default class BioTrak extends LightningElement {

    showCreateForm = false;
    disableCreateButton = false;
    showSubmitForm = false
    @track notification
    handleNewPatient() {
        this.showCreateForm = true;
    }

    handleExistPatient() {
        // Code for existing Patient click action
        console.log('existing Patient clicked');
    }

    handleSubmitForm(event){
        this.notification = event.detail.fields
    }

    handleUserRedirect(event){
        this.showCreateForm = false;
        this.disableCreateButton = true;
        this.showSubmitForm = true;
    }

}