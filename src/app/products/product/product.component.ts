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


  constructor(private route:ActivatedRoute, private router:Router){

  }




  ngOnInit(): void {
    //let id=Number(this.route.snapshot.paramMap.get('id'));
    //this.selectedProduct=products.find(ii=>ii.id===id);

    this.route.paramMap
    .subscribe(dnm=>
      {
      console.log("adres değişti");
      let id = Number(dnm.get('id'));
      this.selectedProduct=products.find(ii=>ii.id===id);
      }
    );

  }
  goNextProduct(nextt?:boolean){
    let id=Number(this.route.snapshot.paramMap.get('id'));
    if(nextt==false){
      this.router.navigate(['/products/'+String(id-1)]);
      return
    }
    this.router.navigate(['/products/'+String(id+1)]);
  }


}
