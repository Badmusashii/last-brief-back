import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  // Définir la relation One-to-Many avec la table Product
  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
