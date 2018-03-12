import Appconfig from "./Appconfig";


Meteor.methods({

    async "followers1.find"(name){
        let followers=[];
        let aman=-1;

        try{
          let res=await Appconfig.get('followers/list', {
                screen_name: name,
                cursor: aman,
                count: 200
            })

                res.data.users.forEach(function (user) {
                        /* writer.write([user.name, user.followers_count, user.created_at, user.friends_count]);*/
                        followers.push({
                            name: user.name,
                            f_count: user.followers_count,
                            created_at: user.created_at,
                            friends_count: user.friends_count
                        });
                    })
            console.log(followers);
            return followers;

              //  aman = data.next_cursor;
              //  console.log(response.caseless.dict['x-rate-limit-remaining']);

        }catch(err){
            console.log(err);
            throw new Meteor.Error("Error in data","API Error");
        }
    }
})