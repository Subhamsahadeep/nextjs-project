import React from 'react'

type Country = {
    flag: string,
    name: {
        common : string,
    },
    capital:string[]
}

async function getData() {
    const url = 'https://restcountries.com/v3.1/all';
    const options = {
        method: 'GET'
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);
        return result;
    } catch (error) {
        throw new Error("Failed");
        return {}
    }
}


export default async function page() {

    const response = await getData();

    return (
        <div>
            {
                response.map((country : Country) => (
                    <div>
                        {country.flag} 
                        <div>
                            {country.name.common}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}