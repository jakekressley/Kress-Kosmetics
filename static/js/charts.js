google.charts.load('current', {
    'packages': ['bar']
});
google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.load('current', {
    'packages': ['line']
});
google.charts.load('current', {
    'packages': ['gauge']
});
google.charts.load('current', {
    'packages': ['corechart', 'scatter']
});


function drawColumnChart(xAxis, yAxis, id, options, data, len, type, format) {

    //type 1 = basic || type 2 = fixed xAxis || type 3 = percent chart || type 4 = percent chart with /100
    //format 1 = ##,### || format 2 = 00.00 || format 3 = $##,### || format 4 = 00.00%

    $step = yAxis['Step'];
    data.addRows(len);

    if (type == 1) {
        for (i = 0; i < len; i++) {
            data.setCell(i, 0, xAxis[i].toString());
            data.setCell(i, 1, yAxis[i]);
        }
    } else if (type == 2) {
        k = 0;
        for (var i = ($step - len); i < ($step); i++) {
            var j = 0;
            for (key in yAxis) {
                if (key != 'Step') {
                    var val = yAxis[key];
                    if (j == 0) {
                        data.setCell(k, j, xAxis[i].toString());
                        j++;
                        data.setCell(k, j, val[i]);
                    } else
                        data.setCell(k, j, val[i]);

                    j++;
                }
            }
            k++;
        }
    } else if (type == 3) {
        for (i = 0; i < len; i++) {
            data.setCell(i, 0, xAxis[i].toString());
            data.setCell(i, 1, (yAxis[i]).toFixed(2));
        }
    } else if (type == 4) {
        for (i = 0; i < len; i++) {
            data.setCell(i, 0, xAxis[i].toString());
            data.setCell(i, 1, (yAxis[i] / 100).toFixed(2));
        }
    }

    var formatter = new google.visualization.NumberFormat({
        pattern: format
    });
    formatter.format(data, 1);

    var chart = new google.visualization.ColumnChart(document.getElementById(id));
    chart.draw(data, options);
};


function drawLineChart(xAxis, value, id, options, data, len, n, format) {


    data.addRows(parseInt(len));
    var val;
    var k = 0;

    for (var i = n - len; i < n; i++) {
        var j = 0;
        for (key in value) {
            if (key != 'Step') {
                val = value[key];
                if (key == 'StartingStep') {
                    data.setCell(k, j, xAxis[k].toString());
                } else {
                    data.setCell(k, j, Math.round(val[i]));
                }
                j++;
            }
        }
        k++;
    }

    var formatter = new google.visualization.NumberFormat({
        pattern: format
    });

    for (i = 1; i < j; i++) {
        formatter.format(data, i);
    }

    var chart = new google.visualization.LineChart(document.getElementById(id));
    chart.draw(data, google.charts.Line.convertOptions(options));
}

Flow.dom.converters.register('func_Dashboard_BarChart', function(value) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');

    var step = value['Step'];
    var startingStep = value['StartingStep'];
    var diffStep = value['Step'] - value['StartingStep'];
    var xAxis = [year + diffStep - 3, year + diffStep - 2, year + diffStep - 1];
    var yAxis = [];
    var id = '';
    var options = {
        legend: 'none',
        animation: {
            duration: 1000,
            easing: 'out',
            startup: true
        },
        vAxis: {
            format: "long"
        }

    };

    for (key in value) {
        if (key != 'Step') {
            yAxis = [value[key][step - 3], value[key][step - 2], value[key][step - 1]];
            if (key == 'PNLNetRevenueTotal') {
                id = "Dashboard_BarChart1";
                data.addColumn('number', 'Revenue');

                drawColumnChart(xAxis, yAxis, id, options, data, 3, 1, '$##,###');
            } else if (key == 'MetricCPI') {
                var options = {
                    legend: 'none',
                    animation: {
                        duration: 1000,
                        easing: 'out',
                        startup: true
                    },
                    vAxis: {
                        format: '##.00%'
                    }
                };

                id = "Dashboard_BarChart2";
                data.addColumn('number', 'CPI %');

                drawColumnChart(xAxis, yAxis, id, options, data, 3, 3, '0.00%');
            } else if (key == 'MetricSPI') {
                var options = {
                    legend: 'none',
                    animation: {
                        duration: 1000,
                        easing: 'out',
                        startup: true
                    },
                    vAxis: {
                        format: '##.00%'
                    }
                };
                id = "Dashboard_BarChart3";
                data.addColumn('number', 'SPI %');
                drawColumnChart(xAxis, yAxis, id, options, data, 3, 3, '0.00%');
            } else if (key == 'PNLNetincome') {
                var options = {
                    legend: 'none',
                    animation: {
                        duration: 1000,
                        easing: 'out',
                        startup: true
                    },
                    vAxis: {
                        format: 'long'
                    }
                };
                id = "Dashboard_BarChart4";
                data.addColumn('number', 'Net Income');
                drawColumnChart(xAxis, yAxis, id, options, data, 3, 1, '$##,###');
            } else if (key == 'MetricBiddingReputation') {
                var options = {
                    legend: 'none',
                    animation: {
                        duration: 1000,
                        easing: 'out',
                        startup: true
                    },
                    vAxis: {
                        format: '##.00%'
                    }
                };
                id = "Dashboard_BarChart5";
                data.addColumn('number', 'Reputation Index %');
                drawColumnChart(xAxis, yAxis, id, options, data, 3, 3, '0.00%');
            } else if (key == 'MetricROA') {
                var options = {
                    legend: 'none',
                    animation: {
                        duration: 1000,
                        easing: 'out',
                        startup: true
                    },
                    vAxis: {
                        format: '##.00%'
                    }
                };
                id = "Dashboard_BarChart6";
                data.addColumn('number', 'ROA %');
                drawColumnChart(xAxis, yAxis, id, options, data, 3, 3, '0.00%');
            } else if (key == 'MetricROS') {
                var options = {
                    legend: 'none',
                    animation: {
                        duration: 1000,
                        easing: 'out',
                        startup: true
                    },
                    vAxis: {
                        format: '##.00%'
                    }
                };
                id = "Dashboard_BarChart7";
                data.addColumn('number', 'ROS %');
                drawColumnChart(xAxis, yAxis, id, options, data, 3, 3, '0.00%');
            } else if (key == 'MetricROE') {
                var options = {
                    legend: 'none',
                    animation: {
                        duration: 1000,
                        easing: 'out',
                        startup: true
                    },
                    vAxis: {
                        format: '##.00%'
                    }
                };
                id = "Dashboard_BarChart8";
                data.addColumn('number', 'ROE %');
                drawColumnChart(xAxis, yAxis, id, options, data, 3, 3, '0.00%');
            }
        }
    }
    return '';

}, true);