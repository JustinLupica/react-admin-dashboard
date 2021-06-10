import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import Chart from "../../components/charts/Chart"
import {userData} from "../../dummyData"
import "./home.css"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import WidgetLg from "../../components/widgetLg/WidgetLg"

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="home-widgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
