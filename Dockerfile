# base image
FROM python:3.9-slim-buster

# set working directory
WORKDIR /app

# copy requirements file
COPY requirements.txt .

# install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# copy the rest of the application
COPY . .

# command to run the application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]