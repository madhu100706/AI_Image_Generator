# AI Image Generator

An AI Image Generator web application built with Python, Flask, HTML, CSS, JavaScript, and Hugging Face Inference API.

The application allows users to enter a text prompt, generate an AI image, preview the generated image, and download it.

## Features

- Text-to-image generation
- Simple and attractive user interface
- AI-generated image preview
- Download generated images
- Empty prompt validation
- Loading state while generating
- Responsive design
- Secure API token handling using environment variables

## Technologies Used

- Python
- Flask
- HTML5
- CSS3
- JavaScript
- Hugging Face Inference API
- Pillow
- Gunicorn

## Project Structure

```text
AI_Image_Generator/
│
├── app.py
├── requirements.txt
├── .gitignore
│
├── templates/
│   └── index.html
│
└── static/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── generated_image.png
```

 ## Installation

### Clone the repository:

```bash
git clone https://github.com/madhu100706/AI_Image_Generator.git
```

### Go to the project folder:

```bash
cd AI_Image_Generator
```

### Create a virtual environment:

```bash
py -m venv venv
```

### Activate it on Windows:

```bash
venv\Scripts\activate
```

### Install the required packages:

```bash
pip install -r requirements.txt
```

## Environment Variables

### Create a .env file in the project root:
```bash
HF_TOKEN=your_hugging_face_token
```

## Run the Application

### Start the Flask application:

```bash
python app.py
```

### Then open:

```bash
http://127.0.0.1:5000
```

### Live Demo

https://ai-image-generator-xtv1.onrender.com/


### Project Repository

https://github.com/madhu100706/AI_Image_Generator

### Learning Experience

This project helped me learn how to build a web application using Flask, connect a backend application with an AI inference API, handle API credentials securely, communicate between JavaScript and Flask using HTTP requests, and deploy a Python web application online.

## Author

**Supriya Rai**