from PIL import Image
import sys

def process_image(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        data = img.getdata()
        
        new_data = []
        for item in data:
            # item is (R, G, B, A)
            r, g, b, a = item
            
            # The ServiceNow logo is green. We check if G is the dominant color.
            # We can also check if G > 100, and R < G - 20, B < G - 20
            if g > r + 30 and g > b + 30 and g > 100:
                # This is the logo. Make it solid black with full opacity.
                new_data.append((0, 0, 0, 255))
            else:
                # Background. Make it transparent.
                new_data.append((0, 0, 0, 0))
                
        img.putdata(new_data)
        img.save(output_path, "PNG")
        print(f"Successfully processed image and saved to {output_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    process_image(sys.argv[1], sys.argv[2])
