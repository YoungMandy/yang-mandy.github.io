(function(){"use strict";self.onmessage=function(e){console.log("self.onmessage",e);const t=e.data;let s=0;for(let o=0;o<t;o++)s+=s+1;self.postMessage(s)}})();
