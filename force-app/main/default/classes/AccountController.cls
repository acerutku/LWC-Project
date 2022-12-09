public with sharing class AccountController {
    //6-otomatik olusan method u silelim kendi methodumuzu ekleyelim
    //7- wire decorator kullanabilmek icin class icin @AuraEnabled(cacheable=true)yazmalidir
    //Bir methodu LWC'de kullanmak icin yazilmasi zorunludur.
    @AuraEnabled(cacheable=false) //G- tru yu false a cevir
    public static List<Account> getAccounts(String filter){//8- JS'de belirledigim filter variable i yazilmalidir

        String keyName = '%' + filter + '%';
        List<Account> accountList = [SELECT Id, Name, Phone FROM Account WHERE Name LIKE :keyName WITH SECURITY_ENFORCED];
        return accountList;
        
    }
}
