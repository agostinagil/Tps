function fibonacci (){
    let p1=0, p2=1, p3, p4=1;
    document.write(`Sucesión: 0, 1, `);
    for(i=0; i<=15-2; i++){
        p3= p1+p2  //1a) ? =0 +1 == 1 |  2a) 1 = 1+1==2 | 3a) 2= 1+2==3 | 4a)
        document.write(` ${p3} ,`); //1a) 1 | 2a) 2 | 3a) 3 |
        p4= p4+p3; // 1 = 1+1 == 2 | 2a) 1+2==3 | 
        p1=p2; // 1| 1 | 2
        p2=p3 // 1 | 2 | 3
    }
}
