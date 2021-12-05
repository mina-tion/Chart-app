import dayjs from 'dayjs';

export const setOptions = (type:string) => { 
    return {
        chart: {
            height: 350,
            type: type,
        },
        title: {
            text: '',
            align: 'left',
        },
        annotations: {
            xaxis: [
                {
                    x: 'Oct 06 14:00',
                    borderColor: '#00E396',
                    label: {
                        borderColor: '#00E396',
                        style: {
                            fontSize: '12px',
                            color: '#fff',
                            background: '#00E396',
                        },
                        orientation: 'horizontal',
                        offsetY: 7,
                        text: 'Annotation Test',
                    },
                },
            ],
        },
        tooltip: {
            enabled: true,
        },
        xaxis: {
            type: 'category',
            labels: {
                formatter: function (val: any) {
                    return dayjs(val).format('MMM DD HH:mm');
                },
            },
        },
        yaxis: {
            tooltip: {
                enabled: true,
            },
        },
    };
}
