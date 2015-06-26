$(document).foundation();
$('.form-vote').submit(function (e) {
    e.preventDefault();
    var branch=document.getElementById('branch').value;
    console.log(branch);
    $.ajax({
        url: 'vote_server.php',
        headers: { 'acceptance': 'asdf' },
        method: 'POST',
        data: {branch:branch},
        success: function (resp) {
            console.log(resp);
            $('.vote-btn').attr('disabled','disabled');
            $('.vote-btn').html('+1 to ' + branch);
        },error: function (a,b,c) {
            console.log(a,b,c);
        }
    });
})

var _this = this;
var total = 0;

function loadlink() {
    $.ajax({
        url: 'query_server.php',
        headers: { 'acceptance': 'asdf' },
        type: 'GET',
        cache: false,
        dataType: 'json',
        success: function (data) {
            total = 0;
            console.log("json get");
            var i = 0;
            var max = 0;
            var lead_branch = null;
            var lead_points = 0;
            var processed_json = new Array();
            for (i = 0; i < data.student_data.length; i++) {
                console.log(data.student_data[i]);
                processed_json.push([data.student_data[i].branch, parseInt(data.student_data[i].value)]);
                total = total + parseInt(data.student_data[i].value);
                if(data.student_data[i].value > max){
                    max = data.student_data[i].value;
                    lead_branch = data.student_data[i].branch;
                    lead_points = max;
                }
                console.log(JSON.stringify(processed_json));
                $(function () {
                    $('#container').highcharts({

                        chart: {
                            height: 200,
                            backgroundColor: 'rgba(255,255,255,0.55)',
                            renderTo: "container"
                        },
                        title: {
                            text: "Total Votes : " + total
                        },
                        xAxis: {
                            allowDecimals: false,
                            categories: [processed_json[0].branch]
                        },
                        yAxis: {
                            title: {
                                text: "Number of votes"
                            },
                            stackLabels: {
                                enabled: true,
                                style: {
                                    fontWeight: 'bold',
                                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'white'
                                }
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        plotOptions: {
                            series: {
                                borderWidth: 0,
                                dataLabels: {
                                    enabled: true
                                }
                            }
                        },
                        series: [{
                            type: 'column',
                            data: processed_json

                        },
                            {
                                type: 'spline',
                                name: 'Votes',
                                data: processed_json,
                                marker: {
                                    lineWidth: 2,
                                    lineColor: Highcharts.getOptions().colors[3],
                                    fillColor: 'white'
                                }
                            }
                        ]
                    });
                })
            }
        }
    });
}
loadlink(); // This will run on page load
setInterval(function(){
    loadlink() // this will run after every 5 seconds
}, 5000);