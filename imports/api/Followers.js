import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";

export  const Followers=new Mongo.Collection('followers');

Meteor.methods({
    "followers.insert"(name,followers,follower_count){
        console.log("inside followers.insert");
        return Followers.insert({name:name,followers:followers,follower_count:follower_count});
    },
    "followers.check"(name){
        console.log("nahi hain");
        return Followers.findOne({name:name});
    }
});