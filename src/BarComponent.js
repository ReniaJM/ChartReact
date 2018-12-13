import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';

export default class BarComponent extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            Data: {}
        }
    }

    componentDidMount() {
        axios.get(`http://api.football-api.com/2.0/matches?Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76`)
            .then(res => {
                const football = res.data;
                let timer = [];
                let player = [];
                football.forEach(element => {
                    timer.push(element.week);
                    element.events.forEach(el => {
                        player.push(el)
                    })
                    // name.push(element.events);
                });
                this.setState({
                    Data: {
                        labels: player,
                        datasets:[
                            {
                                label:'Champions League 2017/2018 Top Scorer',
                                data: timer ,
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

    static defaultProps ={
        displayTitle: true,
        displayLegend:true,
        legendPosition:'right',

    }
    render() {
        return(
            <div>
                <Bar
                    data = {this.state.Data}
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:'name',
                            fontSize:8
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.legendPosition,

                        }
                    }} />
            </div>
        )
    }
}