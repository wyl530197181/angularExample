import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  constructor() { }

  ngOnInit() {
    // 组件的生命周期初始化数据
    this.products = [
      new Product(1, ' 第一个商品', 1.99, 3.5, '这是第一个商品,我是在慕课网学习的', ['电子产品', '硬件设备']),
      new Product(2, ' 第二个商品', 0.99, 5.5, '这是第二个商品,我是在慕课网学习的', ['电子产品', '硬件设备']),
      new Product(3, ' 第三个商品', 1.99, 3.6, '这是第三个商品,我是在慕课网学习的', ['电子产品', '硬件设备']),
      new Product(4, ' 第四个商品', 2.00, 3.0, '这是第四个商品,我是在慕课网学习的', ['电子产品', '硬件设备']),
      new Product(5, ' 第五个商品', 3.99, 8.5, '这是第五个商品,我是在慕课网学习的', ['电子产品', '硬件设备']),
      new Product(5, ' 第六个商品', 10, 8.5, '这是第五个商品,我是在慕课网学习的', ['电子产品', '硬件设备']),      
    ]
  }

}
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public des: string,
    public categories: Array<string>
  ) {

  }
}
