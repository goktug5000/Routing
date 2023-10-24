import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from 'src/app/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{


  selectedProduct:any;
  id:number=0;

  constructor(private route:ActivatedRoute, private router:Router){

  }




  ngOnInit(): void {
    //let id=Number(this.route.snapshot.paramMap.get('id'));
    //this.selectedProduct=products.find(ii=>ii.id===id);

    this.route.paramMap
    .subscribe(dnm=>
      {
      console.log("adres değişti");
      this.id = Number(dnm.get('id'));
      this.selectedProduct=products.find(ii=>ii.id===this.id);
      }
    );

  }


  goNextProduct(nextt?:boolean){
    //let id:number=0;
    let idModif:number=1;

    if(nextt==false){
      idModif=-1;
    }
    

    let tryProduct=products.find(ii=>ii.id===Number(this.id+idModif));
    this.goNextProduct2(tryProduct);
/*
    this.route.paramMap
    .subscribe(dnm=>//döngüden çıkana kadar 1590157109 kez içindekiler çalışıyor
      {
      id = Number(dnm.get('id'));
      let tryProduct=products.find(ii=>ii.id===Number(id+idModif));
      console.log("dnm");
      this.goNextProduct2(tryProduct);
      });*/
  }

  goNextProduct2(tryProduct:any){
    if(tryProduct!=null){
      console.log("eleman bulundu "+tryProduct.id);
      this.route.paramMap.subscribe(dnm=>{this.router.navigate(['/products/'+String(tryProduct.id)]);});
      return;
    }
    console.log("eleman yok ");
  }


}
