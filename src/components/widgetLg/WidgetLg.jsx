import "./widgetLg.css"

export default function WidgetLg() {

    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="widget-lg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc0NTk4NTk5NTQyMzE5MDk0/joe-burrow-training-camp-2020.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Joe Burrow</span>
                    </td>
                    <td className="widgetLgDate">June 26 2021</td>
                    <td className="widgetLgAmount">$186.00</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://cdn.vox-cdn.com/thumbor/idzSxcIk2FDolElMeQQGSckqjTs=/0x0:3600x5400/1200x800/filters:focal(1653x490:2229x1066)/cdn.vox-cdn.com/uploads/chorus_image/image/69412748/1200188258.0.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Ja'Marr Chase</span>
                    </td>
                    <td className="widgetLgDate">June 26 2021</td>
                    <td className="widgetLgAmount">$252.00</td>
                    <td className="widgetLgStatus"><Button type="Declined"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Justin Lupica</span>
                    </td>
                    <td className="widgetLgDate">June 26 2021</td>
                    <td className="widgetLgAmount">$143.00</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr>
            </table>
        </div>
    )
}
