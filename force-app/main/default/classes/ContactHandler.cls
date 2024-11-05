public with sharing class ContactHandler {
    public static void handleContactCount(List<Contact> newContactList, List<Contact> oldContactList, Map<Id,Contact> contactOldMap, Boolean isDelete, Boolean isUpdate){
        Set<Id> accountIds = new Set<Id>();
        for(Contact con : (isDelete ?oldContactList :newContactList)){
            if(con.accountId != null){
                if(isUpdate && con.accountId != contactOldMap.get(con.id).accountId){
                    accountIds.add(con.accountId);
                }
                else{
                    accountIds.add(con.accountId);
                }
            }
        }
        List<Account> accList = new List<Account>();
        if(!accountIds.isEmpty()){
            for(AggregateResult res : [SELECT accountId, COUNT(Id) contactCount FROM Contact WHERE accountId IN :accountIds GROUP BY accountId limit 10000]){
                Account acc = new Account();
                acc.Id = (Id)res.get('accountId');
                acc.Contacts_Count__c = (Integer)res.get('contactCount');
                accList.add(acc);
            }
            Database.update(accList,false);
        }
    }
}