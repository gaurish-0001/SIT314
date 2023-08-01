# Name : Gaurish Bhatia
# Student ID : 222187151
# Remarks: This is the code file for plotting the temperature data.


# Importing the pandas and plotly libraries to fetch the data and plot it onto a graph.
import pandas as pd
import plotly.graph_objects as go

# Using a variable to store the value of the path where the csv file is stored.
temp_data_file = '/content/drive/MyDrive/graph.csv/hello.csv'

# fetching the data from the csv file by using the pandas library.
data_read = pd.read_csv(temp_data_file)

# Create a Plotly figure with a line plot for Celsius and Fahrenheit temperatures
graph = go.Figure()

# Adding a trace for the temperature values in degrees celcius.
graph.add_trace(go.Scatter(x=data_read['Timestamp'], y=data_read['Temperature (Celsius)'],
                         mode='lines+markers', name='Temperature (Celsius)'))

# Adding a trace for temperature values in degrees Farhenheit.
graph.add_trace(go.Scatter(x=data_read['Timestamp'], y=data_read['Temperature (Fahrenheit)'],
                         mode='lines+markers', name='Temperature (Fahrenheit)'))

# Defining the layout of the plot.
graph.update_layout(title='Temperature Sensor Data Values',
                  xaxis_title='Timestamp',
                  yaxis_title='Temperature (°C / °F)')

# plotting the graph.
graph.show()