import numpy as np
import datetime
import pandas as pd
from bokeh.plotting import figure
import json
from bokeh.embed import json_item
from flask import jsonify
import holoviews as hv
hv.extension("bokeh")


offshore_graphData = pd.read_csv("./WindAndRainGraph/offshore_coreData2.csv", parse_dates=["dateTime"])
shelf_graphData = pd.read_csv("./WindAndRainGraph/shelf_graphData2.csv", parse_dates=["dateTime"])

def intersection(lst1, lst2):
    lst3 = [value for value in lst1 if value in lst2]
    return lst3

# main function
def generatingWind(startDate, endDate, location="Oregon Offshore", windSpeedType="WindMagnitude"):
    # filter data
    start_Time = datetime.datetime(int(startDate["year"]), int(startDate["month"]), int(startDate["date"]))
    end_Time = datetime.datetime(int(endDate["year"]), int(endDate["month"]), int(endDate["date"]))

    temp = offshore_graphData[(offshore_graphData["dateTime"] >= start_Time) & (offshore_graphData["dateTime"] <= end_Time)]
    if location == "Oregon Shelf":
        temp = shelf_graphData[(shelf_graphData["dateTime"] >= start_Time) & (shelf_graphData["dateTime"] <= end_Time)]

    temp = temp.sort_values(by=['dateTime'])

    # get y value for the graph, default y = magnitude
    y_val = np.sqrt((temp.eastward_wind_velocity)**2 + (temp.northward_wind_velocity)**2)

    if windSpeedType == "WindAngle":
        y_val = np.arctan2(temp.northward_wind_velocity, temp.eastward_wind_velocity)

    graph = figure(title = f'Wind speed at {location}', x_axis_type='datetime', plot_width=1000, plot_height=600)
    graph.line(x=temp["dateTime"], y=y_val)
    graph.yaxis.axis_label = 'wind speed (m/s)'
    graph.xaxis.axis_label = 'Time'
    return graph

def generatingWindSpeedGraph(startDate, endDate, location="Oregon Offshore", windSpeedType="WindMagnitude"):
    graph = generatingWind(startDate, endDate, location, windSpeedType)
    return json.dumps(json_item(graph))

def generatePrecipitation(startDate, endDate, location="Oregon Offshore"):
# filter data
        print("startDate123", startDate)
        print("endDate123", endDate)
        start_Time = datetime.datetime(int(startDate["year"]), int(startDate["month"]), int(startDate["date"]))
        end_Time = datetime.datetime(int(endDate["year"]), int(endDate["month"]), int(endDate["date"]))

        temp = offshore_graphData[(offshore_graphData["dateTime"] >= start_Time) & (offshore_graphData["dateTime"] <= end_Time)]

        if location == "Oregon Shelf":
            temp = shelf_graphData[(shelf_graphData["dateTime"] >= start_Time) & (shelf_graphData["dateTime"] <= end_Time)]

        temp = temp.sort_values(by=['dateTime'])

        # reset index
        temp = temp.reset_index(drop=True)
        # get the rain data
        rain = temp.precipitation

        # different rain amount in one time step
        rainph = rain.diff()
        rainph_cor = rainph.copy()
        # rain rate here, millimeter per hour
        rainph_cor = rainph_cor/temp.time.diff()*3600
        # remove time frames where sampling period changes
        time_diff_s = temp.time.diff()
        del_list1 = [i for i in time_diff_s.index if time_diff_s[i] > 90 or time_diff_s[i] <= 0]

        #remove siphoning events
        del_list2 = []

        for i, value in enumerate(rainph_cor):
            if value <= -25:
                if i == len(rainph_cor)-1:
                    del_list2.extend([i-1, i])
                else:
                    del_list2.extend([i-1, i, i+1])

        del_list = list(set(del_list1+del_list2))

        for i in del_list:
            rainph_cor[i] = np.nan

        graph = figure(title = f"Precipitation rate at oregon {location}", x_axis_type='datetime', plot_width=1000, plot_height=600)
        graph.line(x=temp["dateTime"], y=rainph_cor)
        graph.yaxis.axis_label = 'Precipitation rate (millimeter per hour)'
        graph.xaxis.axis_label = 'Time'
        return graph

def generatingPrecipitationGraph(startDate, endDate, location="Oregon Offshore"):
    graph = generatePrecipitation(startDate, endDate, location)
    return json.dumps(json_item(graph))



def downloadWindRainCsv(startDate, endDate, location="oregon_offshore", graphType="WindSpeed"):
    start_Time = datetime.datetime(int(startDate["year"]), int(startDate["month"]), int(startDate["date"]))
    end_Time = datetime.datetime(int(endDate["year"]), int(endDate["month"]), int(endDate["date"]))
    temp = offshore_graphData[(offshore_graphData["dateTime"] >= start_Time) & (offshore_graphData["dateTime"] <= end_Time)]
    if location == "oregon_shelf":
        temp = shelf_graphData[(shelf_graphData["dateTime"] >= start_Time) & (shelf_graphData["dateTime"] <= end_Time)]

    if graphType == "WindSpeed":
        temp = temp[["dateTime", "eastward_wind_velocity", "northward_wind_velocity"]]
    else:
        temp = temp[["dateTime", "precipitation"]]

    temp = temp.to_dict('records')
    return jsonify({"data": temp})
