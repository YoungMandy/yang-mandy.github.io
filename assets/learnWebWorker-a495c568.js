(function(){"use strict";self.onmessage=function(e){console.log("self.onmessage:",e);const t=e.data;let o=0;for(let s=0;s<t;s++)o+=s;self.postMessage(o)}})();
