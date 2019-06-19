## On the complex number multiplication using one less submultiplication


Given two complex numbers <i>a + b<strong>i</strong></i> and <i>c + d<strong>i</strong></i>, the product of the two is <i>(ac - bd) + (ad + bc)<strong>i</strong></i>.
Even when this approach is straightforward, it requires four submultiplications (<i>ac</i>, <i>ad</i>, <i>bc</i>, <i>bd</i>) to achieve the result. It is known that multiplications are, to some extent, more expensive than sums. So, in order to reduce algorithm's time complexity, we could increase the amount of sums we make with the terms (<i>a</i>, <i>b</i>, <i>c</i>, <i>d</i>) if that does represent a decrease in the amount of submultiplications.

Let's define the sums: 
<div><i>S<sub>1</sub> = d - c</i></div>
<div><i>S<sub>2</sub> = a + b</i></div>
<div><i>S<sub>3</sub> = d + c</i></div>
And the submultiplications:
<div><i>P<sub>1</sub> = aS<sub>1</sub></i></div>
<div><i>P<sub>2</sub> = cS<sub>2</sub></i></div>
<div><i>P<sub>3</sub> = bS<sub>3</sub></i></div>

We then calculate <i>P<sub>1</sub> + P<sub>2</sub> = ad - ac + ac + bc = ad + bc = Im{R}</i> and <i>P<sub>2</sub> - P<sub>3</sub> = ac + bc - bd - bc = ac - bd = Re{R}</i>.
So <i>R = (P<sub>2</sub> - P<sub>3</sub>) + (P<sub>1</sub> + P<sub>2</sub>)<strong>i</strong></i>, and we taxed our CPU with only three submultiplications.