import React from 'react';
import { useState, useEffect } from 'react';
import TableComponent from './TableComponent';

let ApiComponent = () => {
    const [User, setUser] = useState([]);

    useEffect(() => {
        fetchApi();
    }, [])

    let fetchApi = async () => {
        let apiResponse = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        apiResponse = await apiResponse.json();
        setUser(apiResponse);
        console.log(apiResponse);
    }

    return (
        <div className='container con-div'>
            <h1>Live Market</h1>
            <div className='tablecon'>
                <table>
                    <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Current Price</th>
                        <th>Market Capital</th>
                        <th>Market Capital Rank</th>
                        <th>Valuation</th>
                        <th>Total volume</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Price change</th>
                        <th>Price change percentage</th>
                        <th>Market capital change</th>
                        <th>Market capital change percentage</th>
                        <th>Circulating Supply</th>
                        <th>Total Supply</th>
                        <th>Max Supply</th>
                        <th>ATH</th>
                        <th>ATH change percentage</th>
                        <th>ATH Date</th>
                        <th>ATL</th>
                        <th>ATL change percentage</th>
                        <th>ATL Date</th>
                        <th>Last Updated</th>
                    </tr>
                    {User.map((user) => {
                        return (
                            <TableComponent key={user.id} symbol={user.symbol} name={user.name} image={user.image} current_price={user.current_price} market_cap={user.market_cap} market_cap_rank={user.market_cap_rank} fully_diluted_valuation={user.fully_diluted_valuation} total_volume={user.total_volume} high_24h={user.high_24h} low_24h={user.low_24h} price_change_24h={user.price_change_24h} price_change_percentage_24h={user.price_change_percentage_24h} market_cap_change_24h={user.market_cap_change_24h} market_cap_change_percentage_24h={user.market_cap_change_percentage_24h} circulating_supply={user.circulating_supply} total_supply={user.total_supply} max_supply={user.max_supply} ath={user.ath} ath_change_percentage={user.ath_change_percentage} ath_date={user.ath_date} atl={user.atl} atl_change_percentage={user.atl_change_percentage} atl_date={user.atl_date} roi={user.roi} last_updated={user.last_updated} />
                        )
                    })}
                </table>
            </div>
        </div>
    )
}

export default ApiComponent;    