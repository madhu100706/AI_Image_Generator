from flask import Flask ,render_template, request
from dotenv import load_dotenv
from huggingface_hub import InferenceClient
import os

load_dotenv()

app =  Flask(__name__)

client = InferenceClient(
api_key = os.environ.get("HF_TOKEN"),
provider ="auto"
)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/generate", methods=["POST"])
def generate():

    print("GENERATE ROUTE WAS CALLED")

    data = request.get_json()

    prompt = data.get("prompt")

    print (prompt)

    image = client.text_to_image(
        prompt=prompt,
        model="black-forest-labs/FLUX.1-schnell"
    )

    
    print("IMAGE GENERATED")

    image.save("static/generated_image.png")
    
    return "static/generated_image.png"


if __name__ == "__main__":
    app.run(debug=True)