from sklearn.ensemble import RandomForestRegressor
from sklearn.ensemble import GradientBoostingRegressor

import pandas as pd

new_size = 100000

with open('new-york-city-taxi-fare-prediction/train.csv') as f:
    new_file = f.readlines()[:new_size]
    print('finished')

with open('resized_data/train.csv', 'w') as f:
    f.writelines(new_file)