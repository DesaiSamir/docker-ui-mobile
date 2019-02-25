FROM arm64v8/node:slim

LABEL author="Samir Desai"

##################################################
# Set environment variables                      #
##################################################


##################################################
# Install tools                                  #
##################################################

RUN apt-get update \
 && apt-get upgrade -y \
 && apt-get install -y git nano apt-transport-https ca-certificates curl gnupg gpgv

##################################################
# Install dockers                                #
##################################################

RUN curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
RUN echo "deb [arch=arm64] https://download.docker.com/linux/ubuntu bionic stable" | tee /etc/apt/sources.list.d/docker.list
RUN apt update
RUN apt install -y docker-ce

##################################################
# Set work directory                             #
##################################################

WORKDIR /app

RUN npm install yarn -g

ADD ./run.sh /root/run.sh

EXPOSE 11999

CMD ["/root/run.sh"]