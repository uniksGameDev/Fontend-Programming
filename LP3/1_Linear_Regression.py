import pandas as pd
import matplotlib.pyplot as plt

dataset = pd.read_csv('hours.csv')
x = dataset.iloc[:, :-1].values
y = dataset.iloc[:, -1].values

from sklearn.linear_model import LinearRegression
regressor = LinearRegression()
regressor.fit(x, y)

#score Function
Accuracy=regressor.score(x,y)*100
print('Accuracy')
print(Accuracy)

#Predict Function
user_input = int(input(7))
y_pred=regressor.predict([[user_input]])
print(y_pred)

plt.scatter(x, y, color = 'red')
plt.plot(x, regressor.predict(x), color = 'cyan')
plt.title("Linear Regressor")
plt.xlabel('Hours')
plt.ylabel('Risk Score')
plt.show()