import React from 'react';
import {Bar, BarChart, Cell, Line, LineChart, Pie, PieChart, Tooltip} from 'recharts';
import { connect } from 'react-redux';
import {
    getAccountInfo,
} from 'actions/Auth';

import {
    announcementsNotification,
    appNotification,
    article,
    authors,
    chartData,
    lineChartData,
    marketingData,
    pieChartData
} from './data';
import PopularArticles from 'components/dashboard/news/PopularArticals';
import MarketingTable from 'components/dashboard/Common/MarketingTable';
import StoryOfTheDay from 'components/dashboard/news/StoryOfTheDay';
import Comments from 'components/dashboard/news/CommentsTable';
import LatestNotifications from 'components/dashboard/Common/LatestNotifications';
import ReportBox from 'components/ReportBox/index';
import ContainerHeader from 'components/ContainerHeader/index';
import CardHeader from 'components/dashboard/Common/CardHeader/index';
import UserDetailTable from 'components/dashboard/Common/UserDetailTable';
import IntlMessages from 'util/IntlMessages';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

class DashboardPage extends React.Component {

    componentDidMount = () => {
        this.props.getAccountInfo();
    }

    render() {
        return (
            <div className="dashboard animated slideInUpTiny animation-duration-3">
                <ContainerHeader match={this.props.match} title={<IntlMessages id="sidebar.dashboard.news"/>}/>

                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-12">
                        <ReportBox
                            styleName="bg-teal accent-4 text-white"
                            title="85K+"
                            detail={'referrals received'}
                            subHeadingColor="text-white"
                        >
                            <BarChart data={chartData} maxBarSize={7}
                                      margin={{left: 0, right: 10, top: 10, bottom: 10}}>
                                <Bar dataKey='amt' fill='white'/>
                            </BarChart>
                        </ReportBox>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-12">
                        <ReportBox
                            styleName="bg-red text-white"
                            title="526"
                            detail={'Jobs/Companies Applied'}
                            subHeadingColor="text-white"
                        >
                            <PieChart>
                                <Pie dataKey="amt" data={pieChartData} cx="50%" cy="50%" innerRadius={30}
                                     outerRadius={45}
                                     fill="#ffc658"/>
                                <Tooltip/>
                            </PieChart>
                        </ReportBox>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                        <ReportBox
                            styleName="bg-red text-white"
                            title="756 %"
                            detail={'Profile completed'}
                            subHeadingColor="text-white"
                        >
                            <PieChart onMouseEnter={this.onPieEnter}>
                                <Pie dataKey="amt"
                                     data={pieChartData} cx="50%" cy="50%"
                                     innerRadius={30}
                                     outerRadius={45}
                                     fill="#3367d6"
                                     paddingAngle={5}
                                >
                                    {
                                        pieChartData.map((entry, index) => <Cell key={index}
                                                                                 fill={COLORS[index % COLORS.length]}/>)
                                    }
                                </Pie>
                            </PieChart>
                        </ReportBox>
                    </div>
                </div>
            </div>

        );
    }
}

export default connect(null, {
    getAccountInfo
})(DashboardPage);