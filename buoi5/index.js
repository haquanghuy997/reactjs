let a = prompt('Nhập giá trị của a');
let b = prompt('Nhập giá trị của b');
let c = prompt('Nhập giá trị của c');


	 if(a == 0) {
         
        if(b == 0) {
            if (c == 0) {
            	console.log('Phuong trinh vo so nghiem')
                 
            } else {
                console.log('Phuong trinh vo nghiem')
            }
        } else {
            console.log('Phuong trinh co nghiem duy nhat: '+(-c/b))
        }
    } else {
        let delta = b*b - 4*a*c;
        if(delta > 0) {
            let x1 = (-b+Math.sqrt(delta))/(2*a);
            let x2 = (-b-Math.sqrt(delta))/(2*a);
            console.log('Nghiem thu nhat x1 = '+x1+'\n Nghiem thu hai x2 = '+x2)
        } else if ( delta == 0) {
        	var sum = -b/2*a
            console.log('Phuong trinh co nghiem kep: x1 = x2 = '+sum)
        } else {
            console.log('Phuong trinh vo nghiem')
        }
    }