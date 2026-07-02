from PIL import Image
import sys

def process_image(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        data = img.getdata()
        
        new_data = []
        for item in data:
            r, g, b, a = item
            
            # Make white pixels transparent (background + letters)
            if r > 200 and g > 200 and b > 200:
                new_data.append((0, 0, 0, 0))
            else:
                # Make red/black pixels solid black for the mask
                new_data.append((0, 0, 0, 255))
                
        img.putdata(new_data)
        img.save(output_path, "PNG")
        print(f"Successfully processed image and saved to {output_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    process_image(sys.argv[1], sys.argv[2])
