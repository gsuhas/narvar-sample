// This is the Link API
import Main from '../components/html-skeleton';
import Header from '../components/header';
import About from '../components/about';
import Services from '../components/buy';
import Works from '../components/rating';
import Tiles from '../components/tiles';
import React from 'react';
import fetch from 'isomorphic-unfetch';
import Estimate from '../components/Estimate';
import Buy from '../components/buy';
import Recommended from '../components/recommended';

const Index = (props) => (
    <Main title='NARVAR'>
        <Header />
        <div className="row mt-3">
            <div className="col-md-5"> 
                <About />
                <Tiles />
            </div>
            <div className="col-md-5 bg-light pl-5">
                <Works />
                <Estimate />
                <Buy />
                <Recommended/>
            </div>

        </div>
        
    </Main>
)

Index.getInitialProps = async function () {
    const url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.brianemory.com%2Ffeed"

    const res = await fetch(url)
    const data = [{count:1},{count:2},{count:3},{count:4},{count:5},{count:6}];

    console.log(`Show data fetched. Count: ${data.length}`)

    return {
        shows: data
    }
}

export default Index