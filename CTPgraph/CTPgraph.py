from bokeh.embed import json_item
from zipfile import ZipFile,ZIP_DEFLATED
from io import BytesIO
import numpy as np
import pandas as pd
import os
import holoviews as hv
from holoviews import opts
from flask import send_file, jsonify
hv.extension('bokeh')
import gzip
import xarray as xr
import json
import re
import panel as pn

def generateCTPgraph(startDate, endDate, location):
    fileName = location + "_2015-01-01_2022-01-01"
    data = pd.read_csv("./CTPgraph/" + fileName + ".csv")
    locationName = location.replace("_"," ").title()
    time = pd.date_range(startDate, endDate)
    depth = np.arange(3000)
    ds = xr.Dataset(
        data_vars=dict(
            SoundSpeed=(["depth","time"], data)
        ),
        coords=dict(
            time=(["time"], time),
            depth=(["depth"], depth),
        ),
        attrs=dict(description="Sound Data"),
    )
    hv_ds = hv.Dataset(ds)[:,:]
    print("hv_ds", type(hv_ds))
    soundspeed = hv_ds.to(hv.Image, kdims=["time","depth"])
    soundPlot = soundspeed.opts(
        opts.Image(
            title=locationName + " Speed of Sound with Depth vs Time",
            width=800, height=450,
            tools=['hover'],

            ylabel='Depth [m]',
            invert_yaxis=True,
            ylim=(0,250),

            xlabel='Date',

            cmap='viridis',
            colorbar=True,
        )
    )
    plot = hv.render(soundPlot)
    return plot

def generateCTDLineGraph(dateTime, location, y = None):
    fileName = location + "_2015-01-01_2022-01-01"
    data = pd.read_csv("./CTPgraph/" + fileName + ".csv")
    date = pd.to_datetime(dateTime)
    strDate = str(date.date())
    scatterPlot = hv.Scatter(data[strDate], label=f'{strDate}: Speed of Sound [m/s] vs Depth[m]')
    line = scatterPlot.opts(
        opts.Scatter(
            framewise=True,
            width=400, height=450,
            tools=['hover'],
            invert_axes=True,

            ylabel='Speed of Sound [m/s]',
            yaxis='right',
            invert_yaxis=True,
            ylim=(1460, 1520),

            xlabel='Depth',
            xlim=(0,200),
        ),
    )
    plot = hv.render(line)
    return plot

# return CTD left graph
def generateCTP(location):
    graph = generateCTPgraph('2015-01-01', '2022-01-01', location)
    return json.dumps(json_item(graph))

# return CTD right graph
def generateCTDLine(location, date):
    graph = generateCTDLineGraph(date, 'axial_base')
    return json.dumps(json_item(graph))


def downloadCtdCsv(location, startDate, endDate):
    fileName = "./CTPgraph/" + location + '_2015-01-01_2022-01-01.csv'
    data = pd.read_csv(fileName)
    dates = pd.date_range(start=startDate, end=endDate)
    dateColumns = data.columns
    startIndex = dateColumns.get_loc(startDate)
    endIndex = dateColumns.get_loc(endDate) + 1
    dateData = data.iloc[:, startIndex:endIndex]
    result = dateData.fillna(0)
    result = result.to_dict('records')
    return {"data": result}
