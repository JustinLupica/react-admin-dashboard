import "./widgetSm.css"
import {Visibility} from '@material-ui/icons'

export default function WidgetSm() {
    return (
        <div className="widget-sm">
            <span className="widgetSmTitle">New Customers</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Justin Lupica</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc0NTk4NTk5NTQyMzE5MDk0/joe-burrow-training-camp-2020.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Joe Burrow</span>
                        <span className="widgetSmUserTitle">Bengals Quarterback</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://cdn.vox-cdn.com/thumbor/idzSxcIk2FDolElMeQQGSckqjTs=/0x0:3600x5400/1200x800/filters:focal(1653x490:2229x1066)/cdn.vox-cdn.com/uploads/chorus_image/image/69412748/1200188258.0.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Ja'Marr Chase</span>
                        <span className="widgetSmUserTitle">Bengals WR</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://mymodernmet.com/wp/wp-content/uploads/2019/02/magdalena-bagrianow-india-portrait-photo-17.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Justin Lupica</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://static.boredpanda.com/blog/wp-content/uploads/2014/11/oltre-lo-sguardo-portrait-photography-steve-mccurry-fb.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Justin Lupica</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
