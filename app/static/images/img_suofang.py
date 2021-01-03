import os
from PIL import Image

ext = ['jpg', 'jpeg', 'png']
files = os.listdir('./index/home-setion')


def process_image(filename, mwidth=300, mheight=400):
    image = Image.open('./index/home-setion/' + filename)
    w, h = image.size
    if w <= mwidth and h <= mheight:
        print(filename, 'is OK.')
        return
    if (1.0 * w / mwidth) > (1.0 * h / mheight):
        scale = 1.0 * w / mwidth
        new_im = image.resize((int(w / scale), int(h / scale)), Image.ANTIALIAS)

    else:
        scale = 1.0 * h / mheight
        new_im = image.resize((int(w / scale), int(h / scale)), Image.ANTIALIAS)
    new_im.save('./index/home-setion/new-' + filename)
    new_im.close()


#process_image("header-bg.png")

for file in files:
    if file.split('.')[-1] in ext:
        process_image(file)