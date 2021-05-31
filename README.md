### Deploying commands:
```
sudo docker build -t sergeyguliy/wine-metro:v2 .
```
```
sudo docker push sergeyguliy/wine-metro:v2
```
```
```
```
sudo docker run -d -p 10.207.238.170:80:3000 sergeyguliy/wine-metro:v2

sudo docker build -t sergeyguliy/wine-metro:v3 . && sudo docker push sergeyguliy/wine-metro:v3
