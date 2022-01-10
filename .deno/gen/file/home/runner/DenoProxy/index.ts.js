import { serve } from "https://deno.land/std@0.75.0/http/server.ts";
const server = serve(":8080");
console.log("server up on 8080");
for await (const req of server) {
    try {
        var url = req.url;
        console.log(url);
        let headers = new Headers();
        if (url !== "/") {
            console.log("Directing to site...");
            var res = await fetch("https://" + req.url);
            console.log("https://denoproxy.henrybass.repl.co" + req.url + " Fetching...");
            console.log("Site fetched.");
            console.log(res);
            var text = await res.text();
            await req.respond({ status: 200, body: text, headers: headers });
        }
        else {
            var text = "HenryProxyAPI, just request a url for a proxy to it.";
            await req.respond({ status: 200, body: text, headers: headers });
        }
        console.log("Responded.");
    }
    catch (error) {
        console.log(error);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sNkNBQTZDLENBQUE7QUFFbkUsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBRTdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtBQUVoQyxJQUFJLEtBQUssRUFBRSxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7SUFFOUIsSUFBSTtRQUVKLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUE7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUVoQixJQUFJLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFBO1FBRTNCLElBQUksR0FBRyxLQUFLLEdBQUcsRUFBRTtZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUE7WUFFbkMsSUFBSSxHQUFHLEdBQUcsTUFBTSxLQUFLLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUU1QyxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsY0FBYyxDQUFDLENBQUE7WUFFN0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQTtZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2hCLElBQUksSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBc0I1QixNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUE7U0FFOUQ7YUFBTTtZQUNMLElBQUksSUFBSSxHQUFHLHNEQUFzRCxDQUFBO1lBQ2pFLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQTtTQUNoRTtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7S0FDeEI7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7S0FDbkI7Q0FFRiJ9