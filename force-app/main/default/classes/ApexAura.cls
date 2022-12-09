public with sharing class ApexAura {

    @AuraEnabled (cacheable=true)
    public static String getApexMessage(){
        return 'Bu mesaj Apex den gelmektedir';
    }
    @AuraEnabled (cacheable=true)
    public static Account getAccount(){
        Account acc = [SELECT Id, Name, Phone FROM Account WHERE Name LIKE '%Edge%' LIMIT 1];
        return acc;
    }
    @AuraEnabled(cacheable=true)
    public static Account getAccountParams(String accName){

        String searchKey = '%' + accName + '%';
        Account acc = [SELECT Id, Name, Phone FROM Account WHERE Name LIKE :searchKey LIMIT 1];
        return acc;

    }
}