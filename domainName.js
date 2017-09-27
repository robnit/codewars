function domainName(url){
    url = url.replace(/(https:\/\/)/,'').replace(/(http:\/\/)/,'').replace(/www\./,'');
    console.log(url.split('.')[0]);
    return url;
  }

  Test.assertEquals(domainName("http://google.com"), "google");
  Test.assertEquals(domainName("http://google.co.jp"), "google");
  Test.assertEquals(domainName("www.xakep.ru"), "xakep");
  Test.assertEquals(domainName("https://youtube.com"), "youtube");