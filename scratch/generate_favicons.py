import base64
from PIL import Image

# 1. Open the square icon
im = Image.open('images/avera-cinema-icon.png')

# 2. Resize with high quality Lanczos resampling to 256x256
fav_256 = im.resize((256, 256), Image.Resampling.LANCZOS)
fav_256.save('images/favicon.png', format='PNG')
print('images/favicon.png generated: 256x256')

# 3. Generate multi-resolution ICO (16x16, 32x32, 48x48)
fav_256.save('favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])
fav_256.save('images/favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])
print('favicon.ico and images/favicon.ico generated')

# 4. Read the PNG and encode as Base64 for vector SVG
with open('images/favicon.png', 'rb') as f:
    b64_png = base64.b64encode(f.read()).decode('utf-8')

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <image width="256" height="256" href="data:image/png;base64,{b64_png}"/>
</svg>'''

with open('favicon.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)

with open('images/favicon.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)

print('favicon.svg and images/favicon.svg generated')
