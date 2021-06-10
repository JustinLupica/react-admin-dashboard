import "./featuredInfo.css"
import {ArrowDownward, ArrowUpward} from "@material-ui/icons"

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featured-item">
                <span className="featured-title">Revenue</span>
                <div className="featured-money-container">
                    <span className="featured-money">$2,145</span>
                    <span className="featured-money-rate">-11.4 <ArrowDownward /></span>
                </div>
                <span className="featured-sub">Compared to last month</span>
            </div>
            <div className="featured-item">
                <span className="featured-title">Sales</span>
                <div className="featured-money-container">
                    <span className="featured-money">$4,145</span>
                    <span className="featured-money-rate">-1.4 <ArrowDownward /></span>
                </div>
                <span className="featured-sub">Compared to last month</span>
            </div>
            <div className="featured-item">
                <span className="featured-title">Cost</span>
                <div className="featured-money-container">
                    <span className="featured-money">$2,225</span>
                    <span className="featured-money-rate">+2.4 <ArrowUpward /></span>
                </div>
                <span className="featured-sub">Compared to last month</span>
            </div>
        </div>
    )
}
