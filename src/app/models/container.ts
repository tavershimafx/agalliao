import { Album, Track } from "./media"

export interface TrackSection{
    name: string
    items: Array<Track> | Array<Album>
}