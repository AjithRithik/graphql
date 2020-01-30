import gql from 'graphql-tag';

const GET_INFLUENCESERS = gql`
    query posts($first:Int, $query:String!){
        posts(first: $first, query: $query){
            nodes{
                commentCount
                description
                id
                kind
                likeCount
                location
                postId
                postUrl
                userId
                viewCount
            }
        }
    }
`;

export { GET_INFLUENCESERS };