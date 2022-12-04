const { httpError } = require('../helpers/handleError')
const userModel = require('../models/users')
const PORT = process.env.PORT || 3000
const URL_PUBLIC = process.env.URL_PUBLIC || '/'
const getItems = async(req, res) => {
    try {
        const listAll = [{
                "_id": 1,
                "name": "Like a stone",
                "album": "Audioslave",
                "cover": "https://i.ytimg.com/vi/glO58_4sXWM/maxresdefault.jpg",
                "artist": {
                    "name": "Audioslave",
                    "nickname": "Audiosalve",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/like-a-stone.mp3`
            },
            {
                "_id": 2,
                "name": "With you",
                "album": "Hybrid Theory",
                "cover": "https://i.ytimg.com/vi/cVJLl27fWLs/maxresdefault.jpg",
                "artist": {
                    "name": "Linkin Park",
                    "nickname": "LP",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/with-you.mp3`
            },
            {
                "_id": 3,
                "name": "Hero",
                "album": "Now That's What I",
                "cover": "https://i.ytimg.com/vi/kh4YJ8AJP-0/maxresdefault.jpg",
                "artist": {
                    "name": "Nickelback",
                    "nickname": "Nick",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/hero.mp3`
            },
            {
                "_id": 4,
                "name": "I need some sleep",
                "album": "Essential Eels",
                "cover": "http://images.genius.com/2e321f458466be7b872350196ace3951.1000x1000x1.jpg",
                "artist": {
                    "name": "Eels",
                    "nickname": "Eels",
                    "nationality": "UK"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/need-sleep.mp3`
            },
            {
                "_id": 5,
                "name": "Immigrant Song",
                "album": "Giolì & Assia",
                "cover": "https://s.s-bol.com/imgbase0/imagebase3/large/FC/3/6/3/5/9200000012015363.jpg",
                "artist": {
                    "name": "Giolì & Assia",
                    "nickname": "Giolì & Assia",
                    "nationality": "IT"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/immigrant-song.mp3`
            },
            {
                "_id": 6,
                "name": "T.N.T",
                "album": "AC/DC",
                "cover": "https://cdns-images.dzcdn.net/images/cover/ba5eaf2f3a49768164d0728b7ba64372/500x500.jpg",
                "artist": {
                    "name": "AC/DC",
                    "nickname": "AC/DC",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-5.mp3`
            },
            {
                "_id": 7,
                "name": "Candy Shop",
                "album": "50 Cent",
                "cover": "https://i.scdn.co/image/ab67616d0000b27391f7222996c531b981e7bb3d",
                "artist": {
                    "name": "50 Cent",
                    "nickname": "50 Cent",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-6.mp3`
            },
            {
                "_id": 8,
                "name": "Bésame💋",
                "album": "Valentino Ft MTZ Manuel Turizo (Video Oficial)",
                "cover": "https://i1.sndcdn.com/artworks-000247627460-1hqnjr-t500x500.jpg",
                "artist": {
                    "name": "Valentino",
                    "nickname": "Valentino",
                    "nationality": "CO"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-7.mp3`
            }
        ]
        res.send({ data: listAll })
    } catch (e) {
        httpError(res, e)
    }
}

const getItem = (req, res) => {

}

const createItem = async(req, res) => {
    try {
        const { name, age, email } = req.body
        const resDetail = await userModel.create({
            name,
            age,
            email
        })
        res.send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}


const updateItem = (req, res) => {

}

const deleteItem = (req, res) => {

}

module.exports = { getItem, getItems, deleteItem, createItem, updateItem }