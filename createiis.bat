

C:\Windows\System32\inetsrv\appcmd add apppool /name:starterkitapi.lcweb-dev.co.il
C:\Windows\System32\inetsrv\appcmd set apppool "starterkitapi.lcweb-dev.co.il" /managedRuntimeVersion:v4.0
C:\Windows\System32\inetsrv\appcmd set config /section:applicationPools /[name='starterkitapi.lcweb-dev.co.il'].processModel.identityType:SpecificUser /[name='starterkitapi.lcweb-dev.co.il'].processModel.userName:lcweb-dev\mossadmin /[name='starterkitapi.lcweb-dev.co.il'].processModel.password:Matrix06 
C:\Windows\System32\inetsrv\appcmd add site /name:starterkitapi.lcweb-dev.co.il /id:5242018 /bindings:http/*:80:starterkitapi.lcweb-dev.co.il /physicalPath:C:\startkit\WebApi
C:\Windows\System32\inetsrv\appcmd set app "starterkitapi.lcweb-dev.co.il/" /applicationPool:starterkitapi.lcweb-dev.co.il



C:\Windows\System32\inetsrv\appcmd add apppool /name:starterkitui.lcweb-dev.co.il
C:\Windows\System32\inetsrv\appcmd set apppool "starterkitui.lcweb-dev.co.il" /managedRuntimeVersion:v4.0
C:\Windows\System32\inetsrv\appcmd set config /section:applicationPools /[name='starterkitui.lcweb-dev.co.il'].processModel.identityType:SpecificUser /[name='starterkitui.lcweb-dev.co.il'].processModel.userName:lcweb-dev\mossadmin /[name='starterkitui.lcweb-dev.co.il'].processModel.password:Matrix06 
C:\Windows\System32\inetsrv\appcmd add site /name:starterkitui.lcweb-dev.co.il /id:5242019 /bindings:http/*:80:starterkitui.lcweb-dev.co.il /physicalPath:C:\startkit\WebUi
C:\Windows\System32\inetsrv\appcmd set app "starterkitui.lcweb-dev.co.il/" /applicationPool:starterkitui.lcweb-dev.co.il


iisreset