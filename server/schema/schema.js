
const User = require('../models/user');
const Education = require('../models/education')
const Address = require('../models/address')
const graphql = require('graphql');

const {GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
 } = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {type:GraphQLID},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        email: {type: GraphQLString},
        education:{
            type:GraphQLList(EducationType),
            resolve(parent,args){
                return Education.find({userId:parent.id})
            }
        }
    })
});


const EducationType = new GraphQLObjectType({
    name: 'Education',
    fields: () => ({
        id: {type:GraphQLID},
        schoolName: {type: GraphQLString},
        courseName: {type: GraphQLString},
        city: {type: GraphQLString},
        country: {type: GraphQLString},
        description: {type: GraphQLString},
        user: {
            type: UserType,
            resolve(parent, args){
                return User.findbyId(parent.userId);
            }
        }        
    })
})


const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        users:{
            type: new GraphQLList(UserType),
            resolve(parent, args){
                return User.find({})
            }
        },
        educations:{
            type: new GraphQLList(EducationType),
            resolve(parent, args){
                return Education.find({})
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery,
});