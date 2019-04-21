import pandas as pd
import numpy as np

tsv_file='vectors-book3-cleaned.tsv'
csv_table=pd.read_table(tsv_file,sep='\t')
csv_table.to_csv('vectors-book3-cleaned.csv',index=False)