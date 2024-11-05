import { LightningElement, api, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import LightningModal from 'lightning/modal';
export default class BioTrakSubmitForm extends LightningElement {
    @api formdetail;
    MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB
    isMedicalEligible = false
    fileName
    @track errorMessage;
    showModal = false
    handleFileChange(event){
        const file = event.target.files[0];
        
        // Reset error message
        this.errorMessage = '';

        if (file) {
            // Check file size
            if (file.size > this.MAX_FILE_SIZE) {
                this.fileName = null
                this.errorMessage = 'File size exceeds the 2 MB limit. Please upload a smaller file.';
                return;
            }

            // Check file type
            const allowedFormats = ['application/pdf', 'image/jpeg', 'image/png'];
            if (!allowedFormats.includes(file.type)) {
                this.fileName = null
                this.errorMessage = 'Invalid file format. Please upload a PDF, JPG, or PNG file.';
                return;
            }

            // Process the valid file (e.g., upload or save it)
            this.uploadFile(file);
        }
    }

    uploadFile(file) {
        this.fileName = file.name
        console.log('File is valid and ready for upload:', file.name);
    }

    handleCheckboxChange(event){
        this.isMedicalEligible = event.target.checked;
    }

    handleSubmit(event){
        this.showToast('Patient details submitted !!!', 'Details Submitted successfully', 'success')
        this.showModal = true;
        
        
    }

    handleOkay(){
        window.location.reload();
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