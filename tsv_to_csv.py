import pandas as pd
import numpy as np

tsv_file='labels-chapter1.tsv'
csv_table=pd.read_table(tsv_file,sep='\t')
csv_table.to_csv('labels-chapter1.csv',index=False)