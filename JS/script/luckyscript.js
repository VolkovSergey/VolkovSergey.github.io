'use strict'
	var x = +prompt('введите номер билетика'),
			a = x%10,
			b = ((x%100) - (x%10))/10,
			c = ((x%1000) - (x%100))/100,
			d = ((x%10000) - (x%1000))/1000,
			e = ((x%100000) - (x%10000))/10000,
			f = ((x%1000000) - (x%100000))/100000,

			sum1 = a + b + c,
			sum2 = d + e + f,

			res = sum1 - sum2 == 0 ? "счастливый" : "не счастливый";
			alert ( res );

