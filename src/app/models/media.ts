export interface Track{
    title: string
    artist: string
    album?: string
    label?: string
    coverUrl?: string
}

export interface Album{
    title: string
    artist: string
    label?: string
    suggestion?: string
    coverUrl?: string
    coverUrlSmall?: string
}