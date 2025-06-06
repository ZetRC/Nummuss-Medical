var dashboard = (function () {
  var initProperties = function () {
    functions.handleFrequencyChart();
    functions.handleDonnutChart();
    functions.handleMultipleFrecuencyChart();
  };

  var functions = {
    handleFrequencyChart: function () {
      am5.ready(function () {
        var root = am5.Root.new("chartdiv");
        root.setThemes([am5themes_Animated.new(root)]);

        root.dateFormatter.setAll({
          dateFormat: "yyyy",
          dateFields: ["valueX"],
        });

        var data = [
          { date: "2012-07-27", value: 13 },
          { date: "2012-07-28", value: 11 },
          { date: "2012-07-29", value: 15 },
          { date: "2012-07-30", value: 16 },
          { date: "2012-07-31", value: 18 },
          { date: "2012-08-01", value: 13 },
          { date: "2012-08-02", value: 22 },
          { date: "2012-08-03", value: 23 },
          { date: "2012-08-04", value: 20 },
          { date: "2012-08-05", value: 17 },
          { date: "2012-08-06", value: 16 },
          { date: "2012-08-07", value: 18 },
          { date: "2012-08-08", value: 21 },
          { date: "2012-08-09", value: 26 },
          { date: "2012-08-10", value: 24 },
          { date: "2012-08-11", value: 29 },
          { date: "2012-08-12", value: 32 },
          { date: "2012-08-13", value: 18 },
          { date: "2012-08-14", value: 24 },
          { date: "2012-08-15", value: 22 },
          { date: "2012-08-16", value: 18 },
          { date: "2012-08-17", value: 19 },
          { date: "2012-08-18", value: 14 },
          { date: "2012-08-19", value: 15 },
          { date: "2012-08-20", value: 12 },
          { date: "2012-08-21", value: 8 },
          { date: "2012-08-22", value: 9 },
          { date: "2012-08-23", value: 8 },
          { date: "2012-08-24", value: 7 },
          { date: "2012-08-25", value: 5 },
          { date: "2012-08-26", value: 11 },
          { date: "2012-08-27", value: 13 },
          { date: "2012-08-28", value: 18 },
          { date: "2012-08-29", value: 20 },
          { date: "2012-08-30", value: 29 },
          { date: "2012-08-31", value: 33 },
          { date: "2012-09-01", value: 42 },
          { date: "2012-09-02", value: 35 },
          { date: "2012-09-03", value: 31 },
          { date: "2012-09-04", value: 47 },
          { date: "2012-09-05", value: 52 },
          { date: "2012-09-06", value: 46 },
          { date: "2012-09-07", value: 41 },
          { date: "2012-09-08", value: 43 },
          { date: "2012-09-09", value: 40 },
          { date: "2012-09-10", value: 39 },
          { date: "2012-09-11", value: 34 },
          { date: "2012-09-12", value: 29 },
          { date: "2012-09-13", value: 34 },
          { date: "2012-09-14", value: 37 },
          { date: "2012-09-15", value: 42 },
          { date: "2012-09-16", value: 49 },
          { date: "2012-09-17", value: 46 },
          { date: "2012-09-18", value: 47 },
          { date: "2012-09-19", value: 55 },
          { date: "2012-09-20", value: 59 },
          { date: "2012-09-21", value: 58 },
          { date: "2012-09-22", value: 57 },
          { date: "2012-09-23", value: 61 },
          { date: "2012-09-24", value: 59 },
          { date: "2012-09-25", value: 67 },
          { date: "2012-09-26", value: 65 },
          { date: "2012-09-27", value: 61 },
          { date: "2012-09-28", value: 66 },
          { date: "2012-09-29", value: 69 },
          { date: "2012-09-30", value: 71 },
          { date: "2012-10-01", value: 67 },
          { date: "2012-10-02", value: 63 },
          { date: "2012-10-03", value: 46 },
          { date: "2012-10-04", value: 32 },
          { date: "2012-10-05", value: 21 },
          { date: "2012-10-06", value: 18 },
          { date: "2012-10-07", value: 21 },
          { date: "2012-10-08", value: 28 },
          { date: "2012-10-09", value: 27 },
          { date: "2012-10-10", value: 36 },
          { date: "2012-10-11", value: 33 },
          { date: "2012-10-12", value: 31 },
          { date: "2012-10-13", value: 30 },
          { date: "2012-10-14", value: 34 },
          { date: "2012-10-15", value: 38 },
          { date: "2012-10-16", value: 37 },
          { date: "2012-10-17", value: 44 },
          { date: "2012-10-18", value: 49 },
          { date: "2012-10-19", value: 53 },
          { date: "2012-10-20", value: 57 },
          { date: "2012-10-21", value: 60 },
          { date: "2012-10-22", value: 61 },
          { date: "2012-10-23", value: 69 },
          { date: "2012-10-24", value: 67 },
          { date: "2012-10-25", value: 72 },
          { date: "2012-10-26", value: 77 },
          { date: "2012-10-27", value: 75 },
          { date: "2012-10-28", value: 70 },
          { date: "2012-10-29", value: 72 },
          { date: "2012-10-30", value: 70 },
          { date: "2012-10-31", value: 72 },
          { date: "2012-11-01", value: 73 },
          { date: "2012-11-02", value: 67 },
          { date: "2012-11-03", value: 68 },
          { date: "2012-11-04", value: 65 },
          { date: "2012-11-05", value: 71 },
          { date: "2012-11-06", value: 75 },
          { date: "2012-11-07", value: 74 },
          { date: "2012-11-08", value: 71 },
          { date: "2012-11-09", value: 76 },
          { date: "2012-11-10", value: 77 },
          { date: "2012-11-11", value: 81 },
          { date: "2012-11-12", value: 83 },
          { date: "2012-11-13", value: 80 },
          { date: "2012-11-14", value: 81 },
          { date: "2012-11-15", value: 87 },
          { date: "2012-11-16", value: 82 },
          { date: "2012-11-17", value: 86 },
          { date: "2012-11-18", value: 80 },
          { date: "2012-11-19", value: 87 },
          { date: "2012-11-20", value: 83 },
          { date: "2012-11-21", value: 85 },
          { date: "2012-11-22", value: 84 },
          { date: "2012-11-23", value: 82 },
          { date: "2012-11-24", value: 73 },
          { date: "2012-11-25", value: 71 },
          { date: "2012-11-26", value: 75 },
          { date: "2012-11-27", value: 79 },
          { date: "2012-11-28", value: 70 },
          { date: "2012-11-29", value: 73 },
          { date: "2012-11-30", value: 61 },
          { date: "2012-12-01", value: 62 },
          { date: "2012-12-02", value: 66 },
          { date: "2012-12-03", value: 65 },
          { date: "2012-12-04", value: 73 },
          { date: "2012-12-05", value: 79 },
          { date: "2012-12-06", value: 78 },
          { date: "2012-12-07", value: 78 },
          { date: "2012-12-08", value: 78 },
          { date: "2012-12-09", value: 74 },
          { date: "2012-12-10", value: 73 },
          { date: "2012-12-11", value: 75 },
          { date: "2012-12-12", value: 70 },
          { date: "2012-12-13", value: 77 },
          { date: "2012-12-14", value: 67 },
          { date: "2012-12-15", value: 62 },
          { date: "2012-12-16", value: 64 },
          { date: "2012-12-17", value: 61 },
          { date: "2012-12-18", value: 59 },
          { date: "2012-12-19", value: 53 },
          { date: "2012-12-20", value: 54 },
          { date: "2012-12-21", value: 56 },
          { date: "2012-12-22", value: 59 },
          { date: "2012-12-23", value: 58 },
          { date: "2012-12-24", value: 55 },
          { date: "2012-12-25", value: 52 },
          { date: "2012-12-26", value: 54 },
          { date: "2012-12-27", value: 50 },
          { date: "2012-12-28", value: 50 },
          { date: "2012-12-29", value: 51 },
          { date: "2012-12-30", value: 52 },
          { date: "2012-12-31", value: 58 },
          { date: "2013-01-01", value: 60 },
          { date: "2013-01-02", value: 67 },
          { date: "2013-01-03", value: 64 },
          { date: "2013-01-04", value: 66 },
          { date: "2013-01-05", value: 60 },
          { date: "2013-01-06", value: 63 },
          { date: "2013-01-07", value: 61 },
          { date: "2013-01-08", value: 60 },
          { date: "2013-01-09", value: 65 },
          { date: "2013-01-10", value: 75 },
          { date: "2013-01-11", value: 77 },
          { date: "2013-01-12", value: 78 },
          { date: "2013-01-13", value: 70 },
          { date: "2013-01-14", value: 70 },
          { date: "2013-01-15", value: 73 },
          { date: "2013-01-16", value: 71 },
          { date: "2013-01-17", value: 74 },
          { date: "2013-01-18", value: 78 },
          { date: "2013-01-19", value: 85 },
          { date: "2013-01-20", value: 82 },
          { date: "2013-01-21", value: 83 },
          { date: "2013-01-22", value: 88 },
          { date: "2013-01-23", value: 85 },
          { date: "2013-01-24", value: 85 },
          { date: "2013-01-25", value: 80 },
          { date: "2013-01-26", value: 87 },
          { date: "2013-01-27", value: 84 },
          { date: "2013-01-28", value: 83 },
          { date: "2013-01-29", value: 84 },
          { date: "2013-01-30", value: 81 },
        ];

        // Create chart
        // https://www.amcharts.com/docs/v5/charts/xy-chart/
        var chart = root.container.children.push(
          am5xy.XYChart.new(root, {
            focusable: true,
            panX: true,
            panY: true,
            wheelX: "panX",
            wheelY: "zoomX",
            pinchZoomX: true,
          })
        );

        var easing = am5.ease.linear;

        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        var xAxis = chart.xAxes.push(
          am5xy.DateAxis.new(root, {
            maxDeviation: 0.1,
            groupData: false,
            baseInterval: {
              timeUnit: "day",
              count: 1,
            },
            renderer: am5xy.AxisRendererX.new(root, {}),
            tooltip: am5.Tooltip.new(root, {}),
          })
        );

        var yAxis = chart.yAxes.push(
          am5xy.ValueAxis.new(root, {
            maxDeviation: 0.2,
            renderer: am5xy.AxisRendererY.new(root, {}),
          })
        );

        // Add series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        var series = chart.series.push(
          am5xy.LineSeries.new(root, {
            minBulletDistance: 10,
            connect: false,
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            valueXField: "date",
            tooltip: am5.Tooltip.new(root, {
              pointerOrientation: "horizontal",
              labelText: "{valueY}",
            }),
          })
        );

        series.fills.template.setAll({
          fillOpacity: 0.2,
          visible: true,
        });

        series.strokes.template.setAll({
          strokeWidth: 2,
        });

        // Set up data processor to parse string dates
        // https://www.amcharts.com/docs/v5/concepts/data/#Pre_processing_data
        series.data.processor = am5.DataProcessor.new(root, {
          dateFormat: "yyyy-MM-dd",
          dateFields: ["date"],
        });

        series.data.setAll(data);

        series.bullets.push(function () {
          var circle = am5.Circle.new(root, {
            radius: 4,
            fill: root.interfaceColors.get("background"),
            stroke: series.get("fill"),
            strokeWidth: 2,
          });

          return am5.Bullet.new(root, {
            sprite: circle,
          });
        });

        // Add cursor
        // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
        var cursor = chart.set(
          "cursor",
          am5xy.XYCursor.new(root, {
            xAxis: xAxis,
            behavior: "none",
          })
        );
        cursor.lineY.set("visible", false);

        // add scrollbar
        chart.set(
          "scrollbarX",
          am5.Scrollbar.new(root, {
            orientation: "horizontal",
          })
        );

        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        chart.appear(1000, 100);
      }); // end am5.ready()
    },
    handleDonnutChart: function () {
      am5.ready(function () {
        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new("donnutChart");

        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([am5themes_Animated.new(root)]);

        // Create chart
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
        var chart = root.container.children.push(
          am5percent.PieChart.new(root, {
            layout: root.verticalLayout,
            innerRadius: am5.percent(50),
          })
        );

        // Create series
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
        var series = chart.series.push(
          am5percent.PieSeries.new(root, {
            valueField: "value",
            categoryField: "category",
            alignLabels: false,
          })
        );

        series.labels.template.setAll({
          textType: "circular",
          centerX: 0,
          centerY: 0,
        });

        // Set data
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
        series.data.setAll([
          { value: 10, category: "One" },
          { value: 9, category: "Two" },
          { value: 6, category: "Three" },
        ]);

        // Create legend
        // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
        var legend = chart.children.push(
          am5.Legend.new(root, {
            centerX: am5.percent(50),
            x: am5.percent(50),
            marginTop: 15,
            marginBottom: 15,
          })
        );

        legend.data.setAll(series.dataItems);

        // Play initial series animation
        // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
        series.appear(1000, 100);
      }); // end am5.ready()
      am5.ready(function () {
        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new("SmallDonut");

        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([am5themes_Animated.new(root)]);

        // Create chart
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
        var chart = root.container.children.push(
          am5percent.PieChart.new(root, {
            layout: root.verticalLayout,
          })
        );

        // Create series
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
        var series = chart.series.push(
          am5percent.PieSeries.new(root, {
            alignLabels: true,
            calculateAggregates: true,
            valueField: "value",
            categoryField: "category",
          })
        );

        series.slices.template.setAll({
          strokeWidth: 3,
          stroke: am5.color(0xffffff),
        });

        series.labelsContainer.set("paddingTop", 30);

        // Set up adapters for variable slice radius
        // https://www.amcharts.com/docs/v5/concepts/settings/adapters/
        series.slices.template.adapters.add(
          "radius",
          function (radius, target) {
            var dataItem = target.dataItem;
            var high = series.getPrivate("valueHigh");

            if (dataItem) {
              var value = target.dataItem.get("valueWorking", 0);
              return (radius * value) / high;
            }
            return radius;
          }
        );

        // Set data
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
        series.data.setAll([
          { value: 45, category: "Oxígeno" },
          { value: 20, category: "Carbón" },
          { value: 16, category: "Hidrógeno" },
          { value: 10, category: "Nitrógeno" },
          { value: 7, category: "Calcio" },
          { value: 6, category: "Otros" },
        ]);
        
        series.labels.template.setAll({
          text: "{value}%", // shows 45 as "45%", etc.
        });

        // Create legend
        // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
        var legend = chart.children.push(
          am5.Legend.new(root, {
            centerX: am5.p50,
            x: am5.p50,
            marginTop: 15,
            marginBottom: 15,
          })
        );

        legend.data.setAll(series.dataItems);

        // Play initial series animation
        // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
        series.appear(1000, 100);
      }); // end am5.ready()
    },
    handleMultipleFrecuencyChart: function () {
      am5.ready(function () {
        const root = am5.Root.new("dangerousValuesChart");
  
        root.setThemes([am5themes_Animated.new(root)]);
  
        const chart = root.container.children.push(
          am5xy.XYChart.new(root, {
            panX: true,
            panY: false,
            wheelX: "panX",
            wheelY: "zoomX",
            layout: root.verticalLayout
          })
        );
  
        // Date axis (X)
        const xAxis = chart.xAxes.push(
          am5xy.DateAxis.new(root, {
            maxDeviation: 0.2,
            baseInterval: { timeUnit: "day", count: 1 },
            renderer: am5xy.AxisRendererX.new(root, {}),
            tooltip: am5.Tooltip.new(root, {})
          })
        );
  
        // Value axis (Y)
        const yAxis = chart.yAxes.push(
          am5xy.ValueAxis.new(root, {
            renderer: am5xy.AxisRendererY.new(root, {}),
            min: 60,
            max: 180,
            strictMinMax: true
          })
        );
  
        // Safe zone
        yAxis.createAxisRange(yAxis.makeDataItem({
          value: 70,
          endValue: 99
        })).get("axisFill").setAll({
          fill: am5.color("#A8E6CF"),
          fillOpacity: 0.3,
          visible: true
        });
  
        // Prediabetic
        yAxis.createAxisRange(yAxis.makeDataItem({
          value: 100,
          endValue: 125
        })).get("axisFill").setAll({
          fill: am5.color("#FFD3B6"),
          fillOpacity: 0.3,
          visible: true
        });
  
        // Diabetic
        yAxis.createAxisRange(yAxis.makeDataItem({
          value: 126,
          endValue: 180
        })).get("axisFill").setAll({
          fill: am5.color("#FF8B94"),
          fillOpacity: 0.3,
          visible: true
        });
  
        // Series
        const series = chart.series.push(
          am5xy.LineSeries.new(root, {
            name: "Blood Sugar",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            valueXField: "date",
            tooltip: am5.Tooltip.new(root, {
              labelText: "{valueY} mg/dL"
            })
          })
        );
  
        // Add circles on data points
        series.bullets.push(function () {
          return am5.Bullet.new(root, {
            sprite: am5.Circle.new(root, {
              radius: 5,
              fill: series.get("fill")
            })
          });
        });
  
        // Example data (replace with real patient data)
        const data = [
          { date: new Date(2025, 3, 10).getTime(), value: 95 },
          { date: new Date(2025, 3, 11).getTime(), value: 100 },
          { date: new Date(2025, 3, 12).getTime(), value: 130 },
          { date: new Date(2025, 3, 13).getTime(), value: 110 },
          { date: new Date(2025, 3, 14).getTime(), value: 90 },
          { date: new Date(2025, 3, 15).getTime(), value: 140 }
        ];
  
        series.data.setAll(data);
  
        chart.set("cursor", am5xy.XYCursor.new(root, {}));
  
        series.appear(1000);
        chart.appear(1000, 100);
      });

      const $slides = $('.carousel-slide');
      let currentIndex = 0;
  
      function updateCarousel(index) {
        $slides.removeClass('is-visible').eq(index).addClass('is-visible');
      }
  
      $('#carouselButtonNext').on('click', function() {
        currentIndex = (currentIndex + 1) % $slides.length;
        updateCarousel(currentIndex);
      });
  
      $('#carouselButtonPrev').on('click', function() {
        currentIndex = (currentIndex - 1 + $slides.length) % $slides.length;
        updateCarousel(currentIndex);
      });
      $('.carousel-wrapper').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('#carouselButtonPrev'),
        nextArrow: $('#carouselButtonNext')
      });
    },
  };

  var initialize = function () {
    initProperties();
  };

  return {
    init: initialize,
  };
})();

$(document).ready(function () {
  dashboard.init();
});
