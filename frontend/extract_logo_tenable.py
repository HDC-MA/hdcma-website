from PIL import Image
import sys

def process_image(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        data = img.getdata()
        
        new_data = []
        for item in data:
            r, g, b, a = item
            
            # The background is dark grey.
            # Make it transparent if it's dark (e.g. all R,G,B < 150)
            if r < 150 and g < 150 and b < 150:
                new_data.append((0, 0, 0, 0))
            else:
                # The logo shape (white). Make it solid black for the mask.
                new_data.append((0, 0, 0, 255))
                
        img.putdata(new_data)
        img.save(output_path, "PNG")
        print(f"Successfully processed image and saved to {output_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    process_image(sys.argv[1], sys.argv[2])
