import os
from PIL import Image

def is_checkerboard(r, g, b):
    # Check if the pixel is mostly grayscale and bright (white or light grey)
    # Checkerboard grey is usually around (200,200,200) to (230,230,230)
    # White is (255,255,255)
    # We will make transparent any pixel where r, g, b are close to each other and > 180
    if abs(r - g) < 20 and abs(r - b) < 20 and abs(g - b) < 20:
        if r > 180 and g > 180 and b > 180:
            return True
    return False

def process_images(directory):
    for filename in os.listdir(directory):
        if filename.endswith(".png") or filename.endswith(".jpg"):
            input_path = os.path.join(directory, filename)
            
            print(f"Processing {filename}...")
            try:
                img = Image.open(input_path).convert("RGBA")
                datas = img.getdata()
                
                new_data = []
                for item in datas:
                    r, g, b, a = item
                    if is_checkerboard(r, g, b):
                        new_data.append((255, 255, 255, 0)) # Transparent
                    else:
                        new_data.append(item)
                
                img.putdata(new_data)
                img.save(input_path, "PNG")
                print(f"Successfully processed {filename}!")
            except Exception as e:
                print(f"Error processing {filename}: {e}")

if __name__ == "__main__":
    process_images("public/spiderman")
