import fetch from 'isomorphic-unfetch'
import React from 'react'
import Link from 'next/link'

const cardHeight = {
    height: 320
}

const cardImageContainerHeight = {
    minHeight: 200
}

const cardImageStyle = {
    minHeight: 200
}

const Tiles = (data) => (
    <div className="row justify-content-center">
        <img src="https://dummyimage.com/100x100/ccc/000" className="mr-2"/>
        <img src="https://dummyimage.com/100x100/ccc/000" className="mr-2"/>
        <img src="https://dummyimage.com/100x100/ccc/000" className="mr-2"/>
        <img src="https://dummyimage.com/100x100/ccc/000" className="mr-2"/>
    </div>
)

export default Tiles
