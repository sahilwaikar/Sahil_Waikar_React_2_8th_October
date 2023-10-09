let TableComponent = (props) => {

    return (
            <tr>
                <td>{props.symbol}</td>
                <td>{props.name}</td>
                <td><img className="tableimg" src={props.image}></img></td>
                <td>{props.current_price}</td>
                <td>{props.market_cap}</td>
                <td>{props.market_cap_rank}</td>
                <td>{props.fully_diluted_valuation}</td>
                <td>{props.total_volume}</td>
                <td>{props.high_24h}</td>
                <td>{props.low_24h}</td>
                <td>{props.price_change_24h}</td>
                <td>{props.price_change_percentage_24h}</td>
                <td>{props.market_cap_change_24h}</td>
                <td>{props.market_cap_change_percentage_24h}</td>
                <td>{props.circulating_supply}</td>
                <td>{props.total_supply}</td>
                <td>{props.max_supply}</td>
                <td>{props.ath}</td>
                <td>{props.ath_change_percentage}</td>
                <td>{props.ath_date}</td>
                <td>{props.atl}</td>
                <td>{props.atl_change_percentage}</td>
                <td>{props.atl_date}</td>
                <td>{props.last_updated}</td>
            </tr>
    )
}
export default TableComponent;