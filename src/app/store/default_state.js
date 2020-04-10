// initial state of the media organiser, with example inputs

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
        id:"P1"
    },
    {
        name:"1960s",
        id: "P2"
    }],
    mediaFiles:[{
        id:"M1",
        name:"Ave Maria.wav",
        playlist:"P1",
        filePath:"C:/src/server/public/upload/Ave Maria.wav",
        comment:"This is an audio file",
        imageURL:"https://i.pinimg.com/originals/d1/43/6c/d1436c2a87bce3ff3c7db472aad7d413.jpg"
    }]
}