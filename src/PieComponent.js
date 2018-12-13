import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import axios from 'axios';

export default class PieChartComponent extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            Data: {}
        }
    }

    componentDidMount() {
        axios.get(`http://api.football-api.com/2.0/matches?Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76
`)
            .then(res => {
                const football = res.data;
                let localteam_name = [];
                let localteam_score = [];
                football.forEach(element => {
                    localteam_name.push(element.name);
                    localteam_score.push(element.score);
                });
                this.setState({
                    Data: {
                        labels: localteam_name,
                        datasets:[
                            {
                                label:'Champions League 2017/2018 Top Scorer',
                                data: localteam_score ,
                                backgroundColor:[
                                    'rgba(255,105,145,0.6)',
                                    'rgba(155,100,210,0.6)',
                                    'rgba(90,178,255,0.6)',
                                    'rgba(240,134,67,0.6)',
                                    'rgba(120,120,120,0.6)',
                                    'rgba(250,55,197,0.6)'
                                ]
                            }
                        ]
                    }
                });
            })
    }
    render()
    {
        return(
            <div>
                <Pie
                    data={this.state.Data}
                    options={{maintainAspectRatio: false}}/>
            </div>
        )
    }
}