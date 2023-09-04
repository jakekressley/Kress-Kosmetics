var d = new Date();
var year = d.getFullYear();

//input: step, startingStep
//return: current year
Flow.dom.converters.register('currentYear', function(value) {
    return year + diff;
}, true);

Flow.dom.converters.register('previousYear', function(value) {
    return year + diff - 1;
}, true);

Flow.dom.converters.register('previous2Year', function(value) {
    return year + value - 2;
}, true);

Flow.dom.converters.register('previous3Year', function(value) {
    return year + value - 3;
}, true);

Flow.dom.converters.register('previous4Year', function(value) {
    return year + value - 4;
}, true);

Flow.dom.converters.register('previous5Year', function(value) {
    return year + value - 5;
}, true);

Flow.dom.converters.register('previous6Year', function(value) {
    return year + value - 6;
}, true);

Flow.dom.converters.register('previous7Year', function(value) {
    return year + value - 7;
}, true);

Flow.dom.converters.register('nextYear', function(value) {
    return year + value + 1;
}, true);

Flow.dom.converters.register('next2Year', function(value) {
    return year + value + 2;
}, true);

Flow.dom.converters.register('next3Year', function(value) {
    return year + value + 3;
}, true);

Flow.dom.converters.register('next4Year', function(value) {
    return year + value + 4;
}, true);

Flow.dom.converters.register('next5Year', function(value) {
    return year + value + 5;
}, true);

Flow.dom.converters.register('next6Year', function(value) {
    return year + value + 6;
}, true);

Flow.dom.converters.register('next7Year', function(value) {
    return year + value + 7;
}, true);

Flow.dom.converters.register('fixedYears', function(value) {
    var startingStep = value['StartingStep'];
    for (key in value) {
        if (key != 'StartingStep') {
            var diffValue = value[key];
        }
    }

    return year - (startingStep - diffValue)
}, true);


Flow.dom.converters.register('print', function(value) {
    return value;

}, true);

Flow.dom.converters.register('currentStep', function(value) {
    $step = value['Step'];
    $count = 0;
    for (key in value) {
        if (key != 'Step') {
            if ($step) {
                value[key] = value[key][$step];
                $count++;
            } else {
                $len = value[key].length - 1;
                value[key] = value[key][$len];
                $count++;
            }
        }
    }
    if ($count > 1) {
        return value;
    } else if ($count == 1) {
        return value[key];
    }
}, true);

Flow.dom.converters.register('nextStep', function(value) {
    $step = value['Step'];
    if ($step) {
        $count = 0;
        for (key in value) {
            if (key != 'Step') {
                value[key] = value[key][$step + 1];
                $count++;
            }
        }
        if ($count > 1) {
            return value;
        } else if ($count == 1) {
            return value[key];
        } else {
            if (value[key])
                return value[key];
            else
                return ''
        }
    }

    return value;

}, true);

Flow.dom.converters.register('next2Step', function(value) {
    $step = value['Step'];
    if ($step) {
        $count = 0;
        for (key in value) {
            if (key != 'Step') {
                value[key] = value[key][$step + 2];
                $count++;
            }
        }
        if ($count > 1) {
            return value;
        } else if ($count == 1) {
            return value[key];
        }
    }

    return '';
}, true);

Flow.dom.converters.register('next3Step', function(value) {
    $step = value['Step'];
    if ($step) {
        $count = 0;
        for (key in value) {
            if (key != 'Step') {
                value[key] = value[key][$step + 3];
                $count++;
            }
        }
        if ($count > 1) {
            return value;
        } else if ($count == 1) {
            return value[key];
        }
    }

    return '';
}, true);

Flow.dom.converters.register('next4Step', function(value) {
    $step = value['Step'];
    if ($step) {
        $count = 0;
        for (key in value) {
            if (key != 'Step') {
                value[key] = value[key][$step + 4];
                $count++;
            }
        }
        if ($count > 1) {
            return value;
        } else if ($count == 1) {
            return value[key];
        }
    }

    return '';
}, true);

Flow.dom.converters.register('previousStep', function(value) {
    $step = value['Step'];
    $count = 0;
    if ($step) {
        for (key in value) {
            if (key != 'Step') {
                value[key] = value[key][$step - 1];
                $count++;
            }
        }
        if ($count > 1) {
            return value;
        } else if ($count == 1) {
            return value[key];
        } else {
            return "Not Working"
        }
    } else {
        // We cannot pass multiple variables if we are using an EQN model.

        var len = objKeyCount(value) - 1;
        return value[len - 1];
    }

}, true);

Flow.dom.converters.register('previous2Step', function(value) {
    $step = value['Step'];
    $count = 0;
    if ($step) {
        for (key in value) {
            if (key != 'Step') {
                value[key] = value[key][$step - 2];
                $count++;
            }
        }
        if ($count > 1) {
            return value;
        } else if ($count == 1) {
            return value[key];
        } else {
            return "Not Working"
        }
    } else {
        // We cannot pass multiple variables if we are using an EQN model.

        var len = objKeyCount(value) - 1;
        return value[len - 2];
    }

}, true);

Flow.dom.converters.register('previous3Step', function(value) {
    $step = value['Step'];
    $count = 0;
    if ($step) {
        for (key in value) {
            if (key != 'Step') {
                value[key] = value[key][$step - 3];
                $count++;
            }
        }
        if ($count > 1) {
            return value;
        } else if ($count == 1) {
            return value[key];
        } else {
            return "Not Working"
        }
    } else {
        // We cannot pass multiple variables if we are using an EQN model.

        var len = objKeyCount(value) - 1;
        return value[len - 3];
    }
}, true);

Flow.dom.converters.register('previous4Step', function(value) {
    $step = value['Step'];
    $count = 0;
    if ($step) {
        for (key in value) {
            if (key != 'Step') {
                value[key] = value[key][$step - 4];
                $count++;
            }
        }
        if ($count > 1) {
            return value;
        } else if ($count == 1) {
            return value[key];
        } else {
            return "Not Working"
        }
    } else {
        // We cannot pass multiple variables if we are using an EQN model.

        var len = objKeyCount(value) - 1;
        return value[len - 4];
    }
}, true);

Flow.dom.converters.register('previous5Step', function(value) {
    $step = value['Step'];
    $count = 0;
    if ($step) {
        for (key in value) {
            if (key != 'Step') {
                value[key] = value[key][$step - 5];
                $count++;
            }
        }
        if ($count > 1) {
            return value;
        } else if ($count == 1) {
            return value[key];
        } else {
            return "Not Working"
        }
    } else {
        // We cannot pass multiple variables if we are using an EQN model.

        var len = objKeyCount(value) - 1;
        return value[len - 5];
    }
}, true);

Flow.dom.converters.register('arrow-color', function(value) {
    $step = value['Step'];
    for (key in value) {
        if (key != 'Step')
            $metric = value[key];
    }

    if ($step) {
        if ($metric[$step - 1] > $metric[$step - 2]) {
            $curr = '<i class="fas fa-arrow-up awe-green"></i>';
        } else {
            $curr = '<i class="fas fa-arrow-down awe-red"></i>';
        }
        return $curr;
    } else {
        var len = $metric.length - 1;
        var curr = '';
        if ($metric[len - 1] > $metric[len - 2]) {
            curr = '<i class="fas fa-arrow-up awe-green"></i>';
        } else {
            curr = '<i class="fas fa-arrow-down awe-red"></i>';
        }
        return curr;
    }


}, true);

Flow.dom.converters.register('perc_change', function(value) {
    $count = 0;
    $first = 0
    $metric = '';
    $metric1 = '';
    for (key in value) {
        if (key == 'Step')
            $step = value[key];
        else {
            if ($first == 0) {
                $metric = value[key];
                $first = 1;
            } else {
                $metric1 = value[key];
            }
        }
        $count++;
    }
    if ($count == 2) {
        if ($metric[$step - 1] == 0)
            $change = 0;
        else
            $change = ($metric[$step] - $metric[$step - 1]) / Math.abs($metric[$step - 1]);
    } else {
        if ($metric1[$step - 1] == 0)
            $change = 0;
        else
            $change = ($metric[$step] - $metric1[$step - 1]) / Math.abs($metric1[$step - 1]);
    }

    return $change;

}, true);

Flow.dom.converters.register('previous_perc_change', function(value) {
    $count = 0;
    $first = 0
    $metric = '';
    $metric1 = '';
    for (key in value) {
        if (key == 'Step')
            $step = value[key];
        else {
            if ($first == 0) {
                $metric = value[key];
                $first = 1;
            } else {
                $metric1 = value[key];
            }
        }

        $count++;
    }

    if ($count == 2) {
        if ($metric[$step - 2] == 0)
            $change = 0;
        else
            $change = ($metric[$step - 1] - $metric[$step - 2]) / Math.abs($metric[$step - 2]);
    } else {
        if ($metric1[$step - 2] == 0)
            $change = 0;
        else
            $change = ($metric[$step - 1] - $metric1[$step - 2]) / Math.abs($metric1[$step - 2]);
    }

    return $change;

}, true);

Flow.dom.converters.register('next_perc_change', function(value) {
    $count = 0;
    $first = 0
    $metric = '';
    $metric1 = '';
    for (key in value) {
        if (key == 'Step')
            $step = value[key];
        else {
            if ($first == 0) {
                $metric = value[key];
                $first = 1;
            } else {
                $metric1 = value[key];
            }
        }

        $count++;
    }

    if ($count == 2) {
        if ($metric[$step - 2] == 0)
            $change = 0;
        else
            $change = ($metric[$step + 1] - $metric[$step]) / Math.abs($metric[$step]);
    } else {
        if ($metric1[$step - 2] == 0)
            $change = 0;
        else
            $change = ($metric[$step + 1] - $metric1[$step]) / Math.abs($metric1[$step]);
    }

    return $change;

}, true);

Flow.dom.converters.register('func_difference', function(value) {
    $step = value['Step']
    $first = 0;
    for (key in value) {
        if ($first == 0) {
            var metric1 = value[key];
            $first = 1;
        } else
            var metric2 = value[key];
    }

    diff = metric1 - metric2;

    return diff;
}, true);

Flow.dom.converters.register('func_percentOf', function(value) {
    $first = 0;
    $step = value['Step'];
    for (key in value) {
        if (key != 'Step') {
            if ($first == 0) {
                var metric1 = value[key];
                $first = 1;
            } else
                var metric2 = value[key];
        }
    }
    mult = metric2 * metric1;

    return mult;
}, true);

Flow.dom.converters.register('func_percentCal', function(value) {
    $first = 0;
    $step = value['Step'];
    for (key in value) {
        if (key != 'Step') {
            if ($first == 0) {
                var metric1 = value[key];
                $first = 1;
            } else
                var metric2 = value[key];
        }
    }
    var perc = metric1 / metric2;

    return perc;
}, true);

Flow.dom.converters.register('func_common_size', function(value) {

    // syntax: data-f-bind="Step, variable1, variable2 | <currentStep/previousStep/nextStep> | func_common_size"
    // return type: number


    $first = 0;
    var metric1;
    var metric2;
    for (key in value) {
        if (key != 'Step') {
            if ($first == 0) {
                var metric1 = value[key];
                $first = 1;
            } else
                var metric2 = value[key];
        }
    }
    if (metric2 == null) {
        return 1;
    } else {
        var perc = metric1 / metric2;
        return perc;
    }


}, true);

Flow.dom.converters.register('func_percentOf1', function(value) {

    // this function is to calculate percentOf

    // syntax: data-f-bind="Step, variable1, variable2 | <currentStep/previousStep/nextStep> | func_percentOf1"
    // variable1 would need to be multiplied by 100 to give you a percent value.
    // return type: number

    $first = 0;
    var metric1;
    var metric2;
    for (key in value) {
        if (key != 'Step') {
            if ($first == 0) {
                var metric1 = value[key];
                $first = 1;
            } else
                var metric2 = value[key];
        }
    }
    if (metric2 == null) {
        return 1;
    } else {
        var final = metric1 * metric2;
        return final;
    }


}, true);

Flow.dom.converters.register('func_percentOf2', function(value) {

    // this function is to calculate percentOf

    // syntax: data-f-bind="Step, variable1, variable2 | <currentStep/previousStep/nextStep> | func_percentOf2"
    // variable1 is already a percent value
    // return type: number

    $first = 0;
    var metric1;
    var metric2;
    for (key in value) {
        if (key != 'Step') {
            if ($first == 0) {
                var metric1 = value[key];
                $first = 1;
            } else
                var metric2 = value[key];
        }
    }
    if (metric2 == null) {
        return 1;
    } else {
        var final = (metric1 / 100) * metric2;
        return final;
    }


}, true);


Flow.dom.converters.register('func_sum', function(value) {

    // syntax: data-f-bind="Step, variable-1, variable-2, .....variable-n | <currentStep/previousStep/nextStep> | func_sum"
    // return type: number

    var total = 0;
    for (key in value) {
        if (key != 'Step') {
            total = total + value[key];
        }
    }

    return total;

}, true);

Flow.dom.converters.register('func_multiply', function(value) {

    // syntax: data-f-bind="Step, variable-1, variable-2, .....variable-n | <currentStep/previousStep/nextStep> | func_multiply"
    // return type: number

    var total = 1;
    for (key in value) {
        if (key != 'Step') {
            total = total * value[key];
        }
    }

    return total;

}, true);

Flow.dom.converters.register('func_ProductionTooling_LimitingFactor', function(value) {

    var step = value['Step'];

    if (value['ProductionP01Limit'][step] < value['calcUnitsScheduledRequiredP01'][step] && value['CapacityUnits'][step] < value['calcUnitsScheduledRequiredP01'][step]) {
        return 'Tooling and Staffing'
    } else if (value['CapacityUnits'][step] < value['calcUnitsScheduledRequiredP01'][step]) {
        return 'Tooling'
    } else if (value['ProductionP01Limit'][step] < value['calcUnitsScheduledRequiredP01'][step]) {
        return 'Staffing'
    } else {
        return 'None'
    }

}, true);

//Charts//

//Dashboard//
Flow.dom.converters.register('func_Dashboard_BarChart', function(value) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');

    var step = value['Step'];
    var startingStep = value['StartingStep'];
    var diffStep = value['Step'] - value['StartingStep'];
    var xAxis = [year + diffStep - 4, year + diffStep - 3, year + diffStep - 2];
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
        },
        colors: ['#c2d4e1'],
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
            } else if (key == 'InflationExpenses') {
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
                id = "Dashboard_BarChart9";
                data.addColumn('number', 'Inflation Expenses');
                drawColumnChart(xAxis, yAxis, id, options, data, 3, 1, '$##,###');
            } else if (key == 'TotalMarketingExpenses') {
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
                id = "Dashboard_BarChart10";
                data.addColumn('number', 'Marketing Expenses');
                drawColumnChart(xAxis, yAxis, id, options, data, 3, 1, '$##,###');
            } else if (key == 'TotalRDExpenses') {
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
                id = "Dashboard_BarChart11";
                data.addColumn('number', 'R&D Expenses');
                drawColumnChart(xAxis, yAxis, id, options, data, 3, 1, '$##,###');
            } else if (key == 'TotalOperatingExpenses') {
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
                id = "Dashboard_BarChart12";
                data.addColumn('number', 'Operating Expenses');
                drawColumnChart(xAxis, yAxis, id, options, data, 3, 1, '$##,###');
            }
        }
    }
    return '';

}, true);


//Cost Summary//
Flow.dom.converters.register('func_CostSummary_LineChart', function(value) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');
    data.addColumn('number', 'Price per Aircraft ($)');
    data.addColumn('number', 'Cost per Aircraft ($)');
    data.addColumn('number', 'Contribution per Aircraft ($)');

    var step = value['Step'];
    var startingStep = value['StartingStep'];
    var diffStep = value['Step'] - value['StartingStep'];
    var xAxis = [year + diffStep - 5, year + diffStep - 4, year + diffStep - 3, year + diffStep - 2, year + diffStep - 1];

    var id = "Cost_Summary_Chart1";
    var options = {
        curveType: 'function',
        width: '100%',
        hAxis: {
            format: '$##,###'
        },
        legend: {
            position: 'bottom'
        },
        vAxis: {
            minValue: 0
        }
    };
    drawLineChart(xAxis, value, id, options, data, 5, step, '$##,###');

    return ''
}, true);



//Buisness Development//
Flow.dom.converters.register('func_BusinessDevelopment_BarChart', function(value) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');

    var step = value['Step'];
    var startingStep = value['StartingStep'];
    var diffStep = value['Step'] - value['StartingStep'];
    var xAxis = [year + diffStep - 3, year + diffStep - 2, year + diffStep - 1];
    var yAxis = [];
    var id = '';
    var chartFormat = '##,###';

    for (key in value) {
        if (key != 'Step') {
            if (key == 'Empl05SkillLevel') {
                yAxis = [(value[key][step - 3] * 100), (value[key][step - 2] * 100), (value[key][step - 1] * 100)];
                id = "business_development_Chart1";
                chartFormat = '0.00%';
                data.addColumn('number', 'Skill Level (%)');
                var options = {
                    height: 300,
                    legend: 'none',
                    animation: {
                        duration: 1000,
                        easing: 'out',
                        startup: true
                    },
                    vAxis: {
                        minValue: 0,
                        format: '0.00%'
                    }
                };

                drawColumnChart(xAxis, yAxis, id, options, data, 3, 4, chartFormat);

            } else if (key == 'DecisionMarketingExpense') {
                yAxis = [value[key][step - 3], value[key][step - 2], value[key][step - 1]];
                id = "business_development_Chart2";
                chartFormat = '$##,###';
                data.addColumn('number', 'Marketing Budget ($)');
                var options = {
                    height: 300,
                    legend: 'none',
                    animation: {
                        duration: 1000,
                        easing: 'out',
                        startup: true
                    },
                    vAxis: {
                        minValue: 0,
                        format: '$##,###'
                    }
                };


                drawColumnChart(xAxis, yAxis, id, options, data, 3, 1, chartFormat);
            }
        }
    }


    return '';

}, true);

//Engineering and R&D//
Flow.dom.converters.register('func_EngineeringRD_BarChart', function(value) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');

    var step = value['Step'];
    var startingStep = value['StartingStep'];
    var diffStep = value['Step'] - value['StartingStep'];
    var xAxis = [year + diffStep - 3, year + diffStep - 2, year + diffStep - 1];
    var yAxis = [];
    var id = '';
    var chartFormat = '##,###';

    for (key in value) {
        if (key != 'Step') {
            if (key == 'Empl01SkillLevel') {
                yAxis = [(value[key][step - 3] * 100), (value[key][step - 2] * 100), (value[key][step - 1] * 100)];
                id = "Engineering_RD_Barchart1";
                chartFormat = '0.00%';
                data.addColumn('number', 'Skill Level (%)');
                var options = {
                    height: 300,
                    legend: 'none',
                    animation: {
                        duration: 1000,
                        easing: 'out',
                        startup: true
                    },
                    vAxis: {
                        minValue: 0,
                        format: '0.00%'
                    }
                };

                drawColumnChart(xAxis, yAxis, id, options, data, 3, 4, chartFormat);

            } else if (key == 'DecisionMarketingExpense') {
                yAxis = [value[key][step - 3], value[key][step - 2], value[key][step - 1]];
                id = "Engineering_RD_Barchart2";
                chartFormat = '$##,###';
                data.addColumn('number', 'R&D Budget ($)');
                var options = {
                    height: 300,
                    legend: 'none',
                    animation: {
                        duration: 1000,
                        easing: 'out',
                        startup: true
                    },
                    vAxis: {
                        minValue: 0,
                        format: '$##,###'
                    }
                };

                drawColumnChart(xAxis, yAxis, id, options, data, 3, 1, chartFormat);
            }
        }
    }

    return '';

}, true);


//Production and Tooling//
Flow.dom.converters.register('func_ProductionTooling_BarChart1', function(value) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');
    data.addColumn('number', 'Production Hours Per Plane');

    var step = value['Step'];
    var startingStep = value['StartingStep'];
    var diffStep = value['Step'] - value['StartingStep'];
    var xAxis = [year + diffStep - 3, year + diffStep - 2, year + diffStep - 1];
    var yAxis = [];
    var id = '';
    var options = {
        height: 300,
        legend: 'none',
        animation: {
            duration: 1000,
            easing: 'out',
            startup: true
        },
        vAxis: {
            minValue: 0,
            format: '##,###'
        }
    };

    id = "Production_Tooling_Barchart1";

    for (key in value) {
        if (key != 'Step') {
            yAxis = [(value[key][step - 3] * 100), (value[key][step - 2] * 100), (value[key][step - 1] * 100)];
        }
    }

    drawColumnChart(xAxis, yAxis, id, options, data, 3, 1, '##,###');

    return '';

}, true);

Flow.dom.converters.register('func_ProductionTooling_BarChart2', function(value) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');
    data.addColumn('number', 'Tooling Capacity (Hours)');

    var step = value['Step'];
    var startingStep = value['StartingStep'];
    var diffStep = value['Step'] - value['StartingStep'];
    var xAxis = [year + diffStep - 3, year + diffStep - 2, year + diffStep - 1, year + diffStep];
    var yAxis = [];
    var id = '';
    var options = {
        height: 300,
        legend: 'none',
        animation: {
            duration: 1000,
            easing: 'out',
            startup: true
        },
        vAxis: {
            minValue: 0,
            format: '##,###'
        }
    };

    id = "Production_Tooling_Barchart2";

    for (key in value) {
        if (key != 'Step') {
            yAxis = [(value[key][step - 3] * 100), (value[key][step - 2] * 100), (value[key][step - 1] * 100), (value[key][step] * 100)];
        }
    }

    drawColumnChart(xAxis, yAxis, id, options, data, 4, 1, '##,###');

    return '';

}, true);

// Procurement //
Flow.dom.converters.register('func_Procurement_BarChart', function(value) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');

    var step = value['Step'];
    var startingStep = value['StartingStep'];
    var diffStep = value['Step'] - value['StartingStep'];
    var xAxis = [year + diffStep - 3, year + diffStep - 2, year + diffStep - 1];
    var yAxis = [];
    var id = '';
    var options = {
        height: 300,
        legend: 'none',
        animation: {
            duration: 1000,
            easing: 'out',
            startup: true
        },
        vAxis: {
            minValue: 0,
            format: '$##,###'
        }
    };

    for (key in value) {
        if (key != 'Step') {
            yAxis = [(value[key][step - 3] * 100), (value[key][step - 2] * 100), (value[key][step - 1] * 100)];
            if (key == 'PartsP01AveragePrice') {
                id = "Procurement_Barchart1";
                data.addColumn('number', 'Average Vendor Parts Price ($)');
            }
        }
    }

    drawColumnChart(xAxis, yAxis, id, options, data, 3, 1, '$##,###');

    return '';

}, true);


// Quality Assurance //
Flow.dom.converters.register('func_QualityAssurance_BarChart', function(value) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');

    var step = value['Step'];
    var startingStep = value['StartingStep'];
    var diffStep = value['Step'] - value['StartingStep'];
    var xAxis = [year + diffStep - 3, year + diffStep - 2, year + diffStep - 1];
    var yAxis = [];
    var id = '';

    for (key in value) {
        if (key != 'Step') {
            if (key == 'Empl02SkillLevel') {
                yAxis = [(value[key][step - 3] * 100), (value[key][step - 2] * 100), (value[key][step - 1] * 100)];
                id = "Quality_Assurance_Chart1";
                data.addColumn('number', 'Skill Level (%)');

                var options = {
                    height: 300,
                    legend: 'none',
                    animation: {
                        duration: 1000,
                        easing: 'out',
                        startup: true
                    },
                    vAxis: {
                        minValue: 0,
                        format: '##.00%'
                    }
                };

                drawColumnChart(xAxis, yAxis, id, options, data, 3, 4, '0.00%');
            } else if (key == 'P01Empl02HoursPerUnit') {
                yAxis = [value[key][step - 1], value[key][step - 2], value[key][step - 3]];
                id = "Quality_Assurance_Chart2";
                data.addColumn('number', 'QA Hours per Plane');

                var options = {
                    height: 300,
                    legend: 'none',
                    animation: {
                        duration: 1000,
                        easing: 'out',
                        startup: true
                    },
                    vAxis: {
                        minValue: 0,
                        format: '##,###'
                    }
                };

                drawColumnChart(xAxis, yAxis, id, options, data, 3, 1, '##,###');
            }
        }
    }


    return '';

}, true);



// Finance //
Flow.dom.converters.register('func_Finance_BarChart', function(value) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');

    var step = value['Step'];
    var startingStep = value['StartingStep'];
    var diffStep = value['Step'] - value['StartingStep'];
    var xAxis = [year + diffStep - 3, year + diffStep - 2, year + diffStep - 1];
    var yAxis = [];
    var id = '';
    var options = {
        height: 300,
        legend: 'none',
        animation: {
            duration: 1000,
            easing: 'out',
            startup: true
        },
        vAxis: {
            minValue: 0,
            format: '$##,###'
        }
    };

    for (key in value) {
        if (key != 'Step') {
            yAxis = [value[key][step - 3], value[key][step - 2], value[key][step - 1]];
            if (key == 'BalSheetEndLiabLongTermDebt') {
                id = "finance_Barchart1";
                data.addColumn('number', 'Long-term Debt ($)');
            } else if (key == 'BalSheetEndLiabAP') {
                id = "finance_Barchart2";
                data.addColumn('number', 'Accounts Payable ($)');
            }
        }
    }

    drawColumnChart(xAxis, yAxis, id, options, data, 3, 1, '$##,###');

    return '';

}, true);

// Charts End// 


function objKeyCount(value) {
    var count = 0;
    for (key in value) {
        count++;
    }

    return count;
}