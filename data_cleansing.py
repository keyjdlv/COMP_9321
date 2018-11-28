import pandas as pd
import json
import pymongo

pd.set_option('display.max_columns', None)
pd.set_option('display.max_rows', None)
pd.set_option('max_colwidth',100)
pd.set_option('display.width',1000)

# read original csv file
csv_file = 'googleplaystore.csv'
df_app = pd.read_csv(csv_file)
columns_to_drop = ['App','Rating','Reviews','Last Updated','Current Ver','Android Ver']


# deal with file
df_app.drop(columns_to_drop, inplace=True, axis=1)
df_app.fillna(0,inplace=True)
df_app['Category'] = df_app['Category'].apply(lambda x: x.replace('_',' '))
df_app['Size'] = df_app['Size'].apply(lambda x:  int(float(x[:-1])*1000) if 'M' in x  else int(float(x[:-1])) if 'k' in x else -1)
df_app.drop(df_app.loc[df_app['Size']==-1].index, inplace=True)
df_app['Price'] = df_app['Price'].apply(lambda x: float(x[1:]) if '$' in x else float(x) if x=='0' else -1)
df_app.drop(df_app.loc[df_app['Price']==-1].index, inplace=True)
df_app['Content Rating'] = df_app['Content Rating'].apply(lambda x: 1.0 if x=='Everyone' else 1.5 if x=='Everyone 10+' else 2.0 if x=='Teen' else 3.0 if x=='Mature 17+' else -1)
df_app.drop(df_app.loc[df_app['Content Rating']==-1].index, inplace=True)
df_app['Genres'] = df_app['Genres'].apply(lambda x: x.replace('_',' '))
print(df_app)


# set dataframe
df_app.set_index('Installs', inplace=True)
df_app.reset_index(level=0, inplace=True)
df_app.index.name='Sequence'
df_app.index=df_app.index.map(str)
