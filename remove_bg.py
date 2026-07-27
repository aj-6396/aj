import os
from rembg import remove
from PIL import Image

def process_images(directory):
    for filename in os.listdir(directory):
        if filename.endswith(".png") or filename.endswith(".jpg"):
            input_path = os.path.join(directory, filename)
            output_path = os.path.join(directory, f"cleaned_{filename}")
            
            print(f"Processing {filename}...")
            
            try:
                input_image = Image.open(input_path)
                output_image = remove(input_image)
                # Overwrite original with transparent PNG
                output_image.save(input_path, "PNG")
                print(f"Successfully processed {filename}!")
            except Exception as e:
                print(f"Error processing {filename}: {e}")

if __name__ == "__main__":
    process_images("public/spiderman")
