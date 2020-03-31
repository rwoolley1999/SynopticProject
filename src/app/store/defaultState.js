export const defaultState = {
    categories:[{
        name:"Classical",
        id: "C1"
    },
    {
        name:"Pop",
        id:"C2"
    },
    {
        name:"Jazz",
        id:"C3"
    }],
    playlists:[{
        name:"Bach Playlist",
        id:"P1",
        category:"C1"
    },
    {
        name:"1960s",
        id: "P2",
        category: "C2"
    }],
    comments:[{
        id:"CO1",
        playlist:"P1",
        content:"This is a comment"
    }]
}