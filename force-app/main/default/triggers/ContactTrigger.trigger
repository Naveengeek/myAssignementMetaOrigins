trigger ContactTrigger on Contact (after insert, after update, after delete, after undelete) {
    ContactHandler.handleContactCount(Trigger.new, Trigger.old, Trigger.oldMap, Trigger.isDelete, Trigger.isUpdate);
}