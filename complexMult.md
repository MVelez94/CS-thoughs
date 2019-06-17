## On the complex number multiplication using one less submultiplication

<strong>htmltest</strong>
Given two complex numbers $$A=a+bi$$ and $$B=c+di$$, the product of the two is $$R=AB=(ac-bd) + (ad+bc)i$$.
Even when this approach is straightforward, it requires four submultiplications ($$ac$$, $$bd$$, $$ad$$, $$bc$$) to achieve the result. It is known that multiplications are, to some extent, more expensive than sums. So, in order to reduce algorithm's time complexity, we could increase the amount of sums we make with the terms ($$a$$, $$b$$, $$c$$, $$d$$) if that does represent a decrease in the amount of submultiplications.

Let's define the sums: 
$$S_1 = d-c$$
$$S_2 = a+b$$
$$S_3=d+c$$
And the submultiplications:
$$P_1=aS_1$$
$$P_2=cS_2$$
$$P_3=bS_3$$

We then calculate $$P_1+P_2=ad-ac+ac+bc=ad+bc=Im\{R\}$$ and $$P_2-P_3=ac+bc-bd-bc=ac-bd=Re\{R\}$$.
So $$R=(P_2-P_3)+(P_1+P_2)i$$, and we taxed our CPU with only three submultiplications.