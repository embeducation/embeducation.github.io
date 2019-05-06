import pandas as pd
import numpy as np

tsv_file='vectors-full-book3.tsv'
csv_table=pd.read_table(tsv_file,sep='\t')
csv_table.to_csv('vectors-full-book3.csv',index=False)