// sw.js
self.addEventListener("install", function(e) {
  self.skipWaiting();
});

self.addEventListener("activate", function(e) {
  e.waitUntil(clients.claim());
});

// जब भी ब्राउज़र कोई फाइल मांगेगा, यह बीच में पकड़ेगा
self.addEventListener("fetch", function(event) {
  var url = event.request.url;

  // अगर रिक्वेस्ट .js फाइल के लिए है (sw.js को छोड़कर)
  if (url.endsWith(".js") && !url.includes("sw.js")) {
    event.respondWith(
      fetch(event.request)
        .then(function(response) {
          return response.text();
        })
        .then(function(code) {
          // fncton को बदलकर असली function बना दिया
          var cleanCode = code.replace(/\bfncton\b/g, "function");

          // ब्राउज़र को बदला हुआ कोड जावास्क्रिप्ट बनाकर रिटर्न कर दिया
          return new Response(cleanCode, {
            headers: { "Content-Type": "application/javascript" }
          });
        })
    );
  }
});
