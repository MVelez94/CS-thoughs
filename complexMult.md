## On the complex number multiplication using one less submultiplication


Given two complex numbers <img src="http://www.sciweavers.org/upload/Tex2Img_1560864949/render.png"> and <img src="http://www.sciweavers.org/upload/Tex2Img_1560864999/render.png">, the product of the two is <img src="http://www.sciweavers.org/upload/Tex2Img_1560865024/render.png">.
Even when this approach is straightforward, it requires four submultiplications (<img src="http://www.sciweavers.org/upload/Tex2Img_1560865051/render.png">, <img src="http://www.sciweavers.org/upload/Tex2Img_1560865071/render.png">, <img src="http://www.sciweavers.org/upload/Tex2Img_1560865146/render.png">, <img src="http://www.sciweavers.org/upload/Tex2Img_1560865323/render.png">) to achieve the result. It is known that multiplications are, to some extent, more expensive than sums. So, in order to reduce algorithm's time complexity, we could increase the amount of sums we make with the terms (<img src="http://www.sciweavers.org/upload/Tex2Img_1560865343/render.png">, <img src="http://www.sciweavers.org/upload/Tex2Img_1560865355/render.png">, <img src="http://www.sciweavers.org/upload/Tex2Img_1560865365/render.png">, <img src="http://www.sciweavers.org/upload/Tex2Img_1560865376/render.png">) if that does represent a decrease in the amount of submultiplications.

Let's define the sums: 
<div><img src="http://www.sciweavers.org/upload/Tex2Img_1560865392/render.png"></div>
<div><img src="http://www.sciweavers.org/upload/Tex2Img_1560865410/render.png"></div>
<div><img src="http://www.sciweavers.org/upload/Tex2Img_1560865418/render.png"></div>
And the submultiplications:
<div><img src="http://www.sciweavers.org/upload/Tex2Img_1560865429/render.png"></div>
<div><img src="http://www.sciweavers.org/upload/Tex2Img_1560865442/render.png"></div>
<div><img src="http://www.sciweavers.org/upload/Tex2Img_1560865452/render.png"></div>

We then calculate <img src="http://www.sciweavers.org/upload/Tex2Img_1560865464/render.png"> and <img src="http://www.sciweavers.org/upload/Tex2Img_1560865477/render.png">.
So <img src="http://www.sciweavers.org/upload/Tex2Img_1560865487/render.png">, and we taxed our CPU with only three submultiplications.