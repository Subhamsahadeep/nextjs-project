import { count } from 'console';
import React from 'react'

type Props = {
    params: { name: string }
}

type Country = {
    flag: string,
    name: {
        common: string,
    },
    capital: string[]
}


async function getData(name: string) {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    const options = {
        method: 'GET'
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        throw new Error("Failed");
        return {}
    }
}


export default async function CountryName({ params }: Props) {

    const response = await getData(params.name);

    return (
        <div>
            {
                response.map((country: Country) => (
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