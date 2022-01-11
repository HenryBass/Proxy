import { serve } from "https://deno.land/std@0.75.0/http/server.ts"

const server = serve(":8080")

console.log("server up on 8080")

for await (const req of server) {

  try {

  var url = req.url

  let headers = new Headers()

  if (url !== "/") {
  console.log("Directing to site...")

  console.log(req.url)
  var res = await fetch(req.url);
  

  /*
   let encoded = encodeURI(url);
   console.log(encoded)
   var res = await fetch(encoded);
   */

  console.log("https://denoproxy.henrybass.repl.co" + req.url + " Fetching...")

  console.log("Site fetched.")
  console.log(res)
  console.log(res.url)
  /*
  fetch('img.jpg')
  .then(response => response.blob())
  .then(blob => {
  const objectURL = URL.createObjectURL(blob);
  text = objectURL;
});
*/
  var text = await res.text();

  /*
  console.log("================TYPE===================")
  var datatype = JSON.stringify(res.headers.get("content-type") || '{}');
  //datatype = datatype.split(';')[0]
  //datatype = datatype.replace("\"", "")
  console.log(datatype)
  console.log("type of type")
  console.log(typeof datatype)
  console.log("================TYPE===================")

  if (typeof(datatype) == "string") {
    //headers.set("Content-Type", "text/html")
  }
  else {
    //headers.set("Content-Type", "text/html")
  }

  //text = text.replace((url), ("denoproxy.henrybass.repl.co/" + req.url))
*/

  await req.respond({ status: 200, body: text, headers: headers})

  } else {
    var text = "HenryProxyAPI, just request a url for a proxy to it. Still WIP."
    await req.respond({ status: 200, body: text, headers: headers})
  }
  
  console.log("Responded.")
  } catch (error) {
    console.log(error)
  }

}