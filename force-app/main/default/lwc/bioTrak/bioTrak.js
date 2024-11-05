import { LightningElement, track } from 'lwc';

export default class BioTrak extends LightningElement {

    showCreateForm = false;
    disableCreateButton = false;
    showSubmitForm = false
    @track notification
    handleButton1Click() {
        // Code for Button 1 click action
        this.showCreateForm = !this.showCreateForm;
        console.log('Button 1 clicked');
    }

    handleButton2Click() {
        // Code for Button 2 click action
        console.log('Button 2 clicked');
    }
    handleSubmitForm(event){
        console.log('PARENT')
        console.log(event.detail.fields)
        this.notification = event.detail.fields
        this.showCreateForm = false;
        this.showCreateForm = true
        console.log(JSON.parse(event))
        //this.disableCreateButton = true;
    }

    handleUserRedirect(event){
        this.showCreateForm = false;
        this.disableCreateButton = true;
        this.showSubmitForm = true;
        //console.log(event.detail)
    }

}