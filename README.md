### Deploying commands:
```
sudo docker build -t sergeyguliy/wine-metro:v2 .

sudo docker kill $(sudo docker ps -q)
git pull -a && sudo docker build -t wine-metro:v12 . && sudo docker run -d -p 10.207.238.170:80:3000 wine-metro:v12
```
```
sudo docker push sergeyguliy/wine-metro:v2
```
```
```
```
sudo docker run -d -p 10.207.238.170:80:3000 sergeyguliy/wine-metro:v2

sudo docker build -t sergeyguliy/wine-metro:v3 . && sudo docker push sergeyguliy/wine-metro:v3
