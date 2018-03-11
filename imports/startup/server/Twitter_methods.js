import Appconfig from "./Appconfig";



/*function aj(name) {

    Appconfig.get('followers/list', {
        screen_name: name,
        cursor: aman,
        count: 200
    }, function (err, data, response) {
        console.log(data);

        data.users.forEach(function (user) {
                /!* writer.write([user.name, user.followers_count, user.created_at, user.friends_count]);*!/
                followers.push({name:user.name,f_count:user.followers_count,created_at: user.created_at,friends_count:user.friends_count});
            }
        )
        aman = data.next_cursor;
        console.log(response.caseless.dict['x-rate-limit-remaining']);
        if (aman == 0) {
            console.log("done",followers.length);
            return followers;
        }
        else if (response.caseless.dict['x-rate-limit-remaining'] > 0) {
          /!*  return followers;*!/
            aj();
        }
        else
        {
            console.log("done",followers,length);
            return followers;
        }
        /!* else {
             var time = new Date().getTime();
             var timestamp = response.caseless.dict['x-rate-limit-reset'] * 1000;
             var t = timestamp - time;
             console.log(timestamp);
             console.log(time);
             setTimeout(aj, t);
             writer.end();
         }*!/

    })
}*/



Meteor.methods({

    async "followers.find"(name) {

       /* var syncfun=Meteor.wrapAsync(aj);
        var result=syncfun(name);
        return result;
        /!*console.log("SyncResult",result);*!/
        // return {screen_name:"aman",created_at:"29mar",followers:13};
       // return "kat gaya"*/
         let followers=[];
         let aman=-1;
         console.log("inside followers.find");

        await Appconfig.get('followers/list', {
             screen_name: name,
             cursor: aman,
             count: 200
         }, function (err, data, response) {
             console.log(data);

             data.users.forEach(function (user) {
                     /* writer.write([user.name, user.followers_count, user.created_at, user.friends_count]);*/
                     followers.push({name:user.name,f_count:user.f_count,created_at: user.created_at,friends_count:user.friends_count});
                 }
             )
             aman = data.next_cursor;
             console.log(response.caseless.dict['x-rate-limit-remaining']);
            /* if (aman == 0) {
                 console.log("done",followers.length);
                 return followers;
             }
             else if (response.caseless.dict['x-rate-limit-remaining'] > 0) {
                 /!*  return followers;*!/
                 aj();
             }
             else
             {
                 console.log("done",followers,length);
                 return followers;
             }*/
             /* else {
                  var time = new Date().getTime();
                  var timestamp = response.caseless.dict['x-rate-limit-reset'] * 1000;
                  var t = timestamp - time;
                  console.log(timestamp);
                  console.log(time);
                  setTimeout(aj, t);
                  writer.end();
              }*/

         })
        console.log("followers",followers);
        return followers;
    }
})

