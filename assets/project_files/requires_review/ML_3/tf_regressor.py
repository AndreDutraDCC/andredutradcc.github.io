import tensorflow as tf
import tensorflow_addons as tfa
import pandas as pd
import numpy as np

import datetime

from sklearn.model_selection import train_test_split
from scipy.spatial.distance import euclidean


def gen_model(input_size):
    input_layer = [tf.keras.layers.InputLayer((input_size))]
    
    hidden_layers = [tf.keras.layers.Dense(256, kernel_initializer='normal', activation='relu'),
                     tf.keras.layers.Dropout(0.5),
                     tf.keras.layers.Dense(256, kernel_initializer='normal', activation='relu'),
                     tf.keras.layers.Dropout(0.5),
                     tf.keras.layers.Dense(256, kernel_initializer='normal', activation='relu'),
                     ]

    output_layer = [tf.keras.layers.Dense(1, kernel_initializer='normal', activation='linear')]

    model = tf.keras.Sequential(input_layer + hidden_layers + output_layer)

    model.compile(optimizer='adam', loss='mean_squared_error', metrics=['mean_absolute_error', tfa.metrics.RSquare()])

    model.summary()

    return model

data = pd.read_csv('resized_data/train.csv')

data = data.dropna(ignore_index=True)

data['pickup_datetime'] = data['pickup_datetime'].apply(lambda str_date: datetime.datetime.strptime(str_date, '%Y-%m-%d %H:%M:%S UTC'))
data['pickup_secs'] = data['pickup_datetime'].apply(lambda date: (date - date.replace(hour=0, minute=0, second=0)).seconds)

data['seconds_sine'] = data['pickup_secs'].apply(lambda secs: np.sin(secs*(2*np.pi/86400)))
data['seconds_cosine'] = data['pickup_secs'].apply(lambda secs: np.cos(secs*(2*np.pi/86400)))

data['weekday_sine'] = data['pickup_datetime'].apply(lambda date: np.sin(date.weekday()*(2*np.pi/7)))
data['weekday_cosine'] = data['pickup_datetime'].apply(lambda date: np.cos(date.weekday()*(2*np.pi/7)))


data['month_sine'] = data['pickup_datetime'].apply(lambda date: np.sin(date.month*(2*np.pi/12)))
data['month_cosine'] = data['pickup_datetime'].apply(lambda date: np.cos(date.month*(2*np.pi/12)))

data['linear_dist'] = [euclidean((p_lon, p_lat), (d_lon, d_lat)) for _, (p_lon, p_lat, d_lon, d_lat) in data[['pickup_longitude','pickup_latitude','dropoff_longitude','dropoff_latitude']].iterrows()]


data = data.drop(columns=['pickup_datetime', 'pickup_secs'])

y = data['fare_amount']

X = data.iloc[:,2:]

for column in X:
    X.loc[:,column] -= X[column].mean()
    X.loc[:,column] /= X[column].std()

X_train, X_test, y_train, y_test = train_test_split(X,y,test_size=0.2)
X_train, X_val, y_train, y_val = train_test_split(X_train,y_train,test_size=0.2)

model = gen_model(len(X.columns))

training_results = model.fit(X_train, y_train, epochs=20, batch_size=32, validation_data=(X_val, y_val))
training_results = training_results.history

test_results = model.evaluate(X_test, y_test, verbose=2)

results_dict = dict(zip(['Mean Squared Error', 'Mean Absolute Error', 'R²'], test_results))

print()
for value, data in results_dict.items():
    print('{}:\t{}'.format(value, data))
print()


import matplotlib.pyplot as plt

fig, axes = plt.subplots(1,3, figsize = (20,6))

loss_ax, mae_ax, r2_ax = axes

for name, ax in zip(['loss', 'mean_absolute_error', 'r_square'], [loss_ax, mae_ax, r2_ax]):
    ax.set_title('{} ao longo do treino'.format(name))
    ax.set_xlabel('Épocas')
    ax.set_ylabel(name)
    
    y = training_results[name]
    y_val = training_results['val_{}'.format(name)]
    x = list(range(len(y)))

    ax.plot(x, y, label='treino')
    ax.plot(x, y_val, label='validação')
    ax.legend()


fig.savefig('model_data.png')